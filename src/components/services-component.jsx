"use strict";
let React = require('react');
let AppStore = require('../stores/app-store');

let ServiceItem = React.createClass({
  render() {
    return (
      <div className="col-md-4">
        <div className="templatemo-service-item">
          <div>
            <div className="col-xs-2">
              <img src="images/leaf.png" alt="icon" style={{float: 'left'}}/>
            </div>
            <div className="col-xs-10">
              <span className="templatemo-service-item-header">{this.props.service.title.toUpperCase()}</span>
            </div>
          </div>
          <p>{this.props.service.description}</p>
          <br className="clearfix"/>
        </div>
        <div className="clearfix"></div>
      </div>
    ); 
  }
});
let ServicesComponent = React.createClass ({

  getInitialState() {
    return {    
       servicesData: AppStore.getServices()
    };
  },
  componentWillMount() {
    AppStore.addChangeListener(this._onChange); 
  },
 
  
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange); 
  },
  
  _onChange() {
    console.log('changing services componenet');
    this.setState({ 
      servicesData: AppStore.getServices() 
    });
  },
  
  render() {
  
    let serviceItems = this.state.servicesData.list.map(function(service) {
    
      return (
        <ServiceItem service={service} key={service.id} />
      );
    });
    
    return (
      <div>
        <div className="templatemo-welcome" id="templatemo-welcome">
          <div className="container">
            <div className="templatemo-slogan text-center">
              <span className="txt_darkgrey"></span><span className="txt_blue">{this.state.servicesData.title}</span>
              <p className="txt_slogan"><i>{this.state.servicesData.description}</i></p>
            </div>	
          </div>
        </div>
        <div className="templatemo-service">
          <div className="container">
            <div className="row">
      
              {serviceItems} 
      
            </div>
          </div>
        </div>
      </div> 
    );
  }
});

module.exports = ServicesComponent;