"use strict";
let React = require('react');
let AppStore = require('../stores/app-store.js');

let ServiceListItem = React.createClass ({
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
});

let VeryFirstDiv = React.createClass ({
  getInitialState: function() {
    return {
      contentData: AppStore.getContent()
    };
  },
  componentWillMount: function() {
    AppStore.addChangeListener(this._onChange); 
  },
  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange); 
  },
  
  _onChange() {
    this.setState({ contentData: AppStore.getContent() });
  },
  render() {
    let servicesComponents = this.state.contentData.services.list.map(function(service) {
        return (
          <ServiceListItem title={service.title} description={service.description} key={service.id}/>
        );
    });
   
    return (
      <div className="veryFirstDiv">
	  	  <h2>{this.state.contentData.services.title}</h2>
        {servicesComponents}
	    </div>
    );
  }
});

module.exports = VeryFirstDiv;