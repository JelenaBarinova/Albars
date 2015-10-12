"use strict";
let React = require('react');

let TopMenuComponent = require('./top-menu-component.jsx');
let CarouselComponent = require('./carousel-component.jsx');
let WelcomeComponent = require('./welcome-component.jsx');
let ServicesComponent = require('./services-component.jsx');
let TeamComponent = require('./team-component.jsx');
let BlogComponent = require('./blog-component.jsx');
let ContactsComponent = require('./contacts-component.jsx');
let TweetsComponent = require('./tweets-component.jsx');
let PartnersComponent = require('./partners-component.jsx');
let FooterComponent = require('./footer-component.jsx');

let App = React.createClass ({


  render() {
    return (
      <div>
	  	  <TopMenuComponent />
        <CarouselComponent />
        <WelcomeComponent />
        <ServicesComponent />
        <TeamComponent />
        <BlogComponent />
        <ContactsComponent />
        <TweetsComponent />
        <PartnersComponent />
        <FooterComponent />
	    </div>
    );
  }
});

module.exports = App;