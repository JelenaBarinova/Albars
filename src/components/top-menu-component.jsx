"use strict";
let React = require('react');
let MenuActions = require('../actions/menu-actions');
let AppStore = require('../stores/app-store');

let TopMenuComponent = React.createClass ({

  getInitialState() {
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
	  event.preventDefault();
    MenuActions.switchLanguage(key);
	},

  render() {

    return (
    <div>
      <div className="templatemo-top-menu">
        <div className="container">
          <div className="navbar navbar-default" role="navigation">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                
                <a href="#" className="navbar-brand"><img src="images/albars_logo.png" alt="Albars" title="Albars" /></a>
              </div>
              <div className="navbar-collapse collapse" id="templatemo-nav-bar">                
               
                <ul className="nav navbar-nav navbar-right" style={{marginTop: '40px'}}>
                  <li className="active"><a href="#templatemo-top">{this.state.menuData.home.toUpperCase()}</a></li>
                  <li><a href="#templatemo-service">{this.state.menuData.services.toUpperCase()}</a></li>
                  <li><a href="#templatemo-about">{this.state.menuData.team.toUpperCase()}</a></li>                  
                  <li><a href="#templatemo-blog">{this.state.menuData.blog.toUpperCase()}</a></li>
                  <li><a href="#templatemo-clients">{this.state.menuData.clients.toUpperCase()}</a></li>
                  <li><a href="#templatemo-footer">{this.state.menuData.contact.toUpperCase()}</a></li> 

                  <li><a rel="nofollow" href="/en" className="external-link" onClick={this.switchLanguage.bind(this,'en_US')}><img src="images/flags/us.png" alt="en_US" title="English" /></a></li>
                  <li><a rel="nofollow" href="/ru" className="external-link" onClick={this.switchLanguage.bind(this,'ru_RU')}><img src="images/flags/ru.png" alt="ru_RU" title="Русский" /></a></li>
                                                          
                </ul>  
                               
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