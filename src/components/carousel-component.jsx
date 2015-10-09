"use strict";
let React = require('react');

let CarouselComponent = React.createClass ({

  render() {
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
                                <h1>WELCOME TO ALBARS</h1>
                                <p>INNOVATIVE IT SOLUTIONS</p>
                                <p><a className="btn btn-lg btn-green" href="#" role="button" style={{margin: '20px'}}>View Demo</a> 
                                	<a className="btn btn-lg btn-blue" href="#" role="button">Free Download</a></p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="item">
                        <div className="container">
                                <div className="carousel-caption">
                                    <div className="col-sm-6 col-md-6">
                                    	<h1>FLUID</h1>
                                        <p>Suspendisse pellentesque, odio vel ultricies interdum, mauris nulla ullamcorper magna, non aliquet odio velit aliquam augue.</p>
                                    </div>
                                    <div className="col-sm-6 col-md-6">
                                    	<h1>ENERGY</h1>
                                        <p>className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam mattis fringilla urna.</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                        <div className="item">
                            <div className="container">
                                <div className="carousel-caption">
                                	<h1>RESPONSIVE LAYOUT</h1>
                                    <p>This template is free to download and use for any website. This is a mobile-ready layout using Bootstrap framework.</p>
                                    <p><a className="btn btn-lg btn-blue" href="#" role="button">Read More</a></p>
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