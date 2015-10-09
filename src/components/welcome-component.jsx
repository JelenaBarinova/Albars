"use strict";
let React = require('react');

let WelcomeComponent = React.createClass ({

  render() {
    return (
    
        <div className="templatemo-welcome" id="templatemo-welcome">
            <div className="container">
                <div className="templatemo-slogan text-center">
                    <span className="txt_darkgrey">At </span><span className="txt_blue">ALBARS</span>
                    <p className="txt_slogan"><i>We ar ehappy to help you with any of these questions and many more.</i></p>
                </div>	
            </div>
        </div> 
    );
  }
});

module.exports = WelcomeComponent;