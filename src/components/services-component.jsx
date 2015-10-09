"use strict";
let React = require('react');

let ServicesComponent = React.createClass ({

  render() {
    return (
    
<div className="templatemo-service">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="templatemo-service-item">
                            <div>
                                <img src="images/leaf.png" alt="icon" />
                                <span className="templatemo-service-item-header">AWESOME ICONS</span>
                            </div>
                            <p>Nam porta adipiscing tortor, eget rutrum turpis bibendum ut. Donec eu lacus in diam euismod imperdiet eu ut turpis. Morbi felis orci, tincidunt pretium laoreet id, euismod et lacus. Praesent aliquet magna vitae mi elementum pharetra.</p>
                            <div className="text-center">
                            	<a href="#" 
                                	className="templatemo-btn-read-more btn btn-blue">READ MORE</a>
                            </div>
                            <br className="clearfix"/>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="templatemo-service-item" >
                            <div>
                                <img src="images/mobile.png" alt="icon"/>
                                <span className="templatemo-service-item-header">FULLY RESPONSIVE</span>
                            </div>
							<p><a rel="nofollow" href="http://www.templatemo.com/free-website-templates/395-urbanic" target="_parent">Urbanic</a> is free responsive mobile website template by templatemo. Credits go to <a rel="nofollow" href="http://getbootstrap.com">Bootstrap</a> for responsive layout and <a rel="nofollow" href="http://unsplash.com">Unsplash</a> for images used in this template. Curabitur non eros ut dolor tincidunt interdum sit amet vitae quam.</p>
                            <div className="text-center">
                                <a href="#" 
                                	className="templatemo-btn-read-more btn btn-blue">READ MORE</a>
                            </div>
                            <br className="clearfix"/>
                        </div>
                        
                    </div>
                    
                    <div className="col-md-4">
                        <div className="templatemo-service-item">
                            <div>
                                <img src="images/battery.png" alt="icon"/>
                                <span className="templatemo-service-item-header">HIGH EFFICIENCY</span>
                            </div>
                            <p>Morbi imperdiet ipsum sit amet dui pharetra, vulputate porta neque tristique. Quisque id turpis tristique, venenatis erat sit amet, venenatis turpis. Ut tellus ipsum, posuere bibendum consectetur vel, egestas sit amet erat. Morbi rhoncus leo fermentum viverra.</p>
                            <div className="text-center">
                                <a href="#" 
                                	className="templatemo-btn-read-more btn btn-blue">READ MORE</a>
                            </div>
                            <br className="clearfix"/>
                        </div>
                        <br className="clearfix"/>
                    </div>
                </div>
            </div>
        </div> 
    );
  }
});

module.exports = ServicesComponent;