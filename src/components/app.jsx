"use strict";
let React = require('react');

let TopMenuComponent = require('./top-menu-component.jsx');
let CarouselComponent = require('./carousel-component.jsx');
let ServicesComponent = require('./services-component.jsx');
let TeamComponent = require('./team-component.jsx');
let BlogComponent = require('./blog-component.jsx');

let TweetsComponent = require('./tweets-component.jsx');
let PartnersComponent = require('./partners-component.jsx');
let FooterComponent = require('./footer-component.jsx');

let App = React.createClass ({


  render: function() {
    return (
      <div>
	  	  <TopMenuComponent />
        <CarouselComponent />
        <ServicesComponent />
        <TeamComponent />
        <BlogComponent />
        <TweetsComponent />
        <PartnersComponent />
        <FooterComponent />
	    </div>
    );
  }
});

module.exports = App;