"use strict";
let React = require('react');
let AppStore = require('../stores/app-store');
    
    
    
    
let CarouselItem = React.createClass ({
  
  render() {
   let className = this.props.item.id == 1 ? "item active" : "item";
      
   return (
      <div className={className}>
        <div className="container">
          <div className="carousel-caption">
            <h1>{this.props.item.title}</h1>
            <p>{this.props.item.content}</p>
            <p>
              {(() => {
                if (this.props.item.url) {
                  return <a className="btn btn-lg btn-blue" href={this.props.item.url} role="button">{this.props.item.more}</a>;
                }
              })()}       
            </p> 
          </div>
        </div>
      </div>
    );  
  }
});   

let CarouselSlide = React.createClass ({
  render() {
    let className = this.props.slide.id == 1 ? "active" : "";
    return (         
      <li data-target="#templatemo-carousel" data-slide-to={this.props.slide.id} className={className}></li>         
    )
  }
});
 
let CarouselComponent = React.createClass ({
  
  getInitialState() {
    return {    
       carouselData: AppStore.getCarousel()
    };
  },
  componentWillMount() {
    AppStore.addChangeListener(this._onChange); 
    
    console.log($("[data-slide-to='0']"));
    $("[data-slide-to='0']").addClass("active");
    console.log($("[data-slide-to='0']"));
  },
 
  
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange); 
  },
  
  _onChange() {
    console.log('changing courasel component');
    this.setState({ 
      carouselData: AppStore.getCarousel() 
    });
  },
  render() {
  
    let carouselItems = this.state.carouselData.list.map(function(item) {    
      return (
        <CarouselItem item={item} key={item.id} />
      );
    });
    
    let carouselSlides = this.state.carouselData.list.map(function(item) {
      return (
        <CarouselSlide slide={item} key={item.id} />
      );
    });
    
    return (
      <div>
        <div id="templatemo-carousel" className="carousel slide" data-ride="carousel">          
          <ol className="carousel-indicators">
            
            {carouselSlides}
          
          </ol>          

          <div className="carousel-inner">
                    
            {carouselItems}
          
          </div>
          <a className="left carousel-control" href="#templatemo-carousel" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
          <a className="right carousel-control" href="#templatemo-carousel" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
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