"use strict";
let React = require('react');
let MenuActions = require('../actions/menu-actions.js');

let TopMenuComponent = React.createClass ({

  getInitialState: function() {
    return {    
      language: {key: 'en_US', value: 'English'}
    };
  },
  componentDidMount: function(){
    
    $('#navv > ul').dropotron({
        mode: 'fade',
        noOpenerFade: true,
        hoverDelay: 150,
        hideDelay: 350,
        easing: 'swing'
    });
  },
  
  switchLanguage: function(key, event) {
		event.preventDefault();
		MenuActions.switchLangauge(key);
		console.log('Language selected');
	},

  render() {
    return (
    
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
                </button>
                
                <a href="#" className="navbar-brand"><img src="images/albars_logo.png" alt="Urbanic template" title="Urbanic Template" /></a>
              </div>
              <div className="navbar-collapse collapse" id="templatemo-nav-bar">
                
                <div id="navv">
                  <ul className="nav navbar-nav navbar-right" style={{marginTop: '40px'}}>
                    <li className="active"><a href="#templatemo-top">HOME</a></li>
                    <li><a href="#templatemo-about">TEAM</a></li>
                    <li><a href="#templatemo-portfolio">SERVICES</a></li>
                    <li><a href="#templatemo-blog">BLOG</a></li>
                    <li><a href="#templatemo-blog">CLIENTS</a></li>
                    <li><a href="#templatemo-contact">CONTACT</a></li> 
                    <li><a href="#">{this.state.language.value}</a>
                    
                      <ul style={{listStyleType: 'none'}}>
                        <li><a href="http://localhost:8008/en">English</a></li>
                        <li><a href="http://localhost:8008/ru">Русский</a></li>
                        <li><a href="http://localhost:8008/lt">Lietuvių</a></li>
                      </ul>

                    </li>                           
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