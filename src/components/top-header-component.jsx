"use strict";
let React = require('react');

let TopHeaderComponent = React.createClass ({

  render() {

    return (
      <div className="templatemo-top-bar" id="templatemo-top">
        <div className="container">
          <div className="subheader">
            <div id="phone" className="pull-left">
              <i className="fa fa-phone"></i>  206-111-1112
            </div>
            <div id="email" className="pull-right">
              <i className="fa fa-envelope-o"></i>  info@albars.com
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TopHeaderComponent;