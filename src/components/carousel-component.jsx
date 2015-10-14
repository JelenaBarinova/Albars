"use strict";
let React = require('react');
let AppStore = require('../stores/app-store.js');
    
let CarouselComponent = React.createClass ({
  
  getInitialState: function() {
    return {    
       carouselData: AppStore.getCarousel()
    };
  },
  componentWillMount: function() {
    AppStore.addChangeListener(this._onChange); 
  },
 
  
  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange); 
  },
  
  _onChange: function() {
    console.log('changing courasel component');
    this.setState({ 
      carouselData: AppStore.getCarousel() 
    });
  },
  render: function() {
  
    return (
      <div>
        <div id="templatemo-carousel" className="carousel slide" data-ride="carousel">          
          <ol className="carousel-indicators">
            <li data-target="#templatemo-carousel" data-slide-to="0" className="active"></li>
            <li data-target="#templatemo-carousel" data-slide-to="1"></li>
            <li data-target="#templatemo-carousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <div className="container">
                <div className="carousel-caption">
                  <h1>{this.state.carouselData.list[0].title}</h1>
                  <p>{this.state.carouselData.list[0].content}</p>
                  <p>
                   <a className="btn btn-lg btn-blue" href={this.state.carouselData.list[0].url} role="button">{this.state.carouselData.list[0].more}</a>       
                  </p> 
                </div>
              </div>
            </div>
            <div className="item">
              <div className="container">
                <div className="carousel-caption">
                  <h1>{this.state.carouselData.list[1].title}</h1>
                  <p>{this.state.carouselData.list[1].content}</p>
                  <p>
                   <a className="btn btn-lg btn-blue" href={this.state.carouselData.list[1].url} role="button">{this.state.carouselData.list[1].more}</a>
                  </p> 
                </div>
              </div>
            </div>
            <div className="item active">
              <div className="container">
                <div className="carousel-caption">
                  <h1>{this.state.carouselData.list[2].title}</h1>
                  <p>{this.state.carouselData.list[2].content}</p>
                  <p>
                    <a className="btn btn-lg btn-blue" href={this.state.carouselData.list[2].url} role="button">{this.state.carouselData.list[2].more}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#templatemo-carousel" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
          <a className="right carousel-control" href="#templatemo-carousel" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
        </div>
      </div>
    );
  }
});

module.exports = CarouselComponent;