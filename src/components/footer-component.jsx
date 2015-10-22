"use strict";
let React = require('react');
let AppStore = require('../stores/app-store');
let SocialIcon = require('./social-icon');

let FooterComponent = React.createClass ({

  getInitialState() {
    return {    
       footerData: AppStore.getFooter()
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
      footerData: AppStore.getFooter() 
    });
  },
  render() {
    return (
      <div className="templatemo-footer" id="templatemo-footer">
        <div className="container">
          <div className="row">
            <div className="text-center">
        
              <div className="footer_container">
                <ul className="list-inline">
                  <li>
                    <SocialIcon social_network="facebook" url="https://www.facebook.com/albars.eu" />
                  </li>
                  <li>
                    <SocialIcon social_network="twitter" url="https://twitter.com/albars_eu" />
                  </li>
                  <li>
                    <SocialIcon social_network="linkedin" url="https://www.linkedin.com/company/5317006" />
                  </li>
                </ul>
                <div className="height30"></div>
                <a className="btn btn-lg btn-orange" href="#" role="button" id="btn-back-to-top">{this.state.footerData.backToTop}</a>
                <div className="height30"></div>
              </div>
              <div className="footer_bottom_content">
                <span>{this.state.footerData.copyright} © {new Date().getFullYear()} <a href="#">Albars</a></span>
              </div>        
            </div>
          </div>
        </div>
      </div> 
    );
  }
});

module.exports = FooterComponent;