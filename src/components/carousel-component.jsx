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
              <p className="txt_slogan"><i>{this.state.carouselData.description}</i></p>
              
            </div>	
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CarouselComponent;