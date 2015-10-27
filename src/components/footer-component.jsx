"use strict";
let React = require('react');
let AppStore = require('../stores/app-store');

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
      <div className="templatemo-footer" id="albars-footer">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <div className="height30"></div>
              <a className="btn btn-lg btn-blue" href="#" role="button" id="btn-back-to-top">{this.state.footerData.backToTop}</a>
              <div className="height30"></div>
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