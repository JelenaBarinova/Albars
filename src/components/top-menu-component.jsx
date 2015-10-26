"use strict";
let React = require('react');
let MenuActions = require('../actions/menu-actions');
let AppStore = require('../stores/app-store');

let TopMenuComponent = React.createClass ({

  getInitialState() {
    if (window.location.search) {
      
    }
    return {    
       language: {key: 'en_US', value: 'English'},
       menuData: AppStore.getMenu()
    };
  },
  
  componentWillMount() {
    AppStore.addChangeListener(this._onChange); 
  },
  
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange); 
  },
  
  _onChange() {    
    this.setState({ menuData: AppStore.getMenu() });
  },
  
  switchLanguage(key, event) {
	  //event.preventDefault();
    
    MenuActions.switchLanguage(key);
          if ($('.navbar-toggle').is(":visible") == true) {
        $('.navbar-collapse').collapse('toggle');
      }
	},

  render() {
   
    return (
      <div>
        <div className="templatemo-top-menu">
          <div className="container">
            <div className="navbar navbar-default" role="navigation">
              <div className="container">
                <div className="row">
                  <div className="col-md-2 col-sm-2 col-xs-12">
                    <div className="navbar-header">
        
                      <a href="#" className="navbar-brand"><img src="images/albars_logo.png" alt="Albars" title="Albars" /></a>
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
        
                    </div>
                  </div>
                  <div className="col-md-10 col-sm-10 col-xs-12">
                    <div className="navbar-collapse collapse" id="templatemo-nav-bar">  
                      
                      <div className="row">              
                        <ul className="nav navbar-nav navbar-right" style={{marginTop: '10px'}}>
                          <li style={{float: "right"}}><a rel="nofollow" href="#/?lang=ru" data-target="#" className="external-link" onClick={this.switchLanguage.bind(this,'ru')}><img src="images/flags/ru.png" alt="ru" title="По-русски" /></a></li>
                          <li style={{float: "right"}}><a rel="nofollow" href="#/?lang=en" data-target="#" className="external-link" onClick={this.switchLanguage.bind(this,'en')}><img src="images/flags/en.png" alt="en" title="English" /></a></li>
                          <li style={{float: "right"}}><a rel="nofollow" href="#/?lang=lt" data-target="#" className="external-link" onClick={this.switchLanguage.bind(this,'lt')}><img src="images/flags/lt.png" alt="lt" title="Lietuviškai" /></a></li>                          
                        </ul>              
                      </div>
                  
                      <div className="row">
                        <ul className="nav navbar-nav navbar-right" style={{marginTop: '10px'}}>
                          <li><a href="#templatemo-top" data-target="#top">{this.state.menuData.home.toUpperCase()}</a></li>
                          <li><a href="#templatemo-services" data-target="#services">{this.state.menuData.services.toUpperCase()}</a></li>
                          <li><a href="#templatemo-about">{this.state.menuData.team.toUpperCase()}</a></li>                  
                          <li><a href="#templatemo-blog">{this.state.menuData.blog.toUpperCase()}</a></li>
                          <li><a href="#templatemo-clients">{this.state.menuData.clients.toUpperCase()}</a></li>
                          <li><a href="#templatemo-footer">{this.state.menuData.contact.toUpperCase()}</a></li>          
                        </ul>  
                      </div>  
                                          
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div> 
      </div> 
    );
  }
});

module.exports = TopMenuComponent;