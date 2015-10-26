"use strict";
let React = require('react');
let AppStore = require('../stores/app-store');
 
let CarouselComponent = React.createClass ({
  
  getInitialState() {
    return {    
       carouselData: AppStore.getCarousel()
    };
  },
  componentWillMount() {
    AppStore.addChangeListener(this._onChange); 
  },
 
  
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange); 
  },
  
  _onChange() {
    this.setState({ 
      carouselData: AppStore.getCarousel() 
    });
  },
  render() {
  
    return (
      <div style={{minHeight:'590px'}}>
        <div id="templatemo-carousel" >  
         <ol className="carousel-indicators">
        </ol>        
          <div className="carousel-inner">    
          </div>
         </div>
        <div className="templatemo-welcome" id="templatemo-welcome">
          <div className="container">
            <div className="templatemo-slogan text-center">
              <span className="txt_darkgrey"></span><span className="txt_blue">{this.state.carouselData.title}</span>
              <div className="container">
                <div className="row">
                  
                    <p className="txt_description"><i>{this.state.carouselData.description}</i></p>
                  <p className="txt_slogan">
                    <img src='images/ms-silver-partner.gif' className="img-responsive" alt='Microsoft Silver Parner'style={{margin: "0 auto"}}/>
                 </p>
                </div>
              </div>
            </div>	
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CarouselComponent;