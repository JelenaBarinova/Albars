"use strict";
let React = require('react');

let FooterComponent = React.createClass ({

  render: function() {
    return (
    
 <div className="templatemo-footer" >
            <div className="container">
                <div className="row">
                    <div className="text-center">

                        <div className="footer_container">
                            <ul className="list-inline">
                                <li>
                                    <a href="#">
                                        <span className="social-icon-fb"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="social-icon-rss"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="social-icon-twitter"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="social-icon-linkedin"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="social-icon-dribbble"></span>
                                    </a>
                                </li>
                            </ul>
                            <div className="height30"></div>
                            <a className="btn btn-lg btn-orange" href="#" role="button" id="btn-back-to-top">Back To Top</a>
                            <div className="height30"></div>
                        </div>
                        <div className="footer_bottom_content">
                   			<span>Copyright © 2084 <a href="#">Your Company Name</a>
                             - Design: <a rel="nofollow" href="http://www.templatemo.com/free-website-templates/395-urbanic" target="_parent">Urbanic</a></span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div> 
    );
  }
});

module.exports = FooterComponent;