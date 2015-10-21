"use strict";
let React = require('react');

let SocialIcon = React.createClass ({
  render() {
      
    let iconClass;
    switch(this.props.social_network) {
    	case 'facebook':
					iconClass = "fa fa-facebook-f fa-stack-1x";
					break;
			case 'twitter':
					iconClass = "fa fa-twitter fa-stack-1x";
					break;
			case 'linkedin':
					iconClass = "fa fa-linkedin fa-stack-1x";
					break;
		}  
    let component;
    if (this.props.url.length) {
      return (
        <a className="fa-stack fa-lg" href={this.props.url} rel="nofollow" target="_blank" style={{fontSize: "24px"}}>
          <i className="fa fa-square fa-stack-2x"></i>
          <i className={iconClass} style={{color:"white"}}></i>
        </a>
      );      
    }
    else {
      return (<span />);
    }
  }

});

module.exports = SocialIcon;