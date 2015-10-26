"use strict";
let React = require('react');
let AppStore = require('../stores/app-store');

let ClientItem = React.createClass({
  render() {
    return (
      <div className="col-lg-3 col-md-3 col-sm-6 templatemo-client-item">
        <a href={this.props.client.website} target="_blank"><img src={this.props.client.logo} className="img-responsive" alt={this.props.client.name} style={{margin: "0 auto"}} /></a>
        <span className="templatemo-client-item-header"><a href={this.props.client.website} target="_blank">{this.props.client.name}</a></span>
        <p>{this.props.client.case}</p>
      </div>
    ); 
  }
});

let clientsComponent = React.createClass ({
   
   getInitialState() {
    return {    
       clientsData: AppStore.getClients()
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
      clientsData: AppStore.getClients() 
    });
  },
  
  render() {
    let clientItems = this.state.clientsData.list.map(function(client) {    
      return (
        <ClientItem client={client} key={client.id} />
      );
    });
    
    return (    
      <div className="templatemo-clients" id="templatemo-clients" >
        <div className="container">
          <div className="row">
            <div className="templatemo-line-header" >
              <div className="text-center">
                <hr className="team_hr team_hr_left hr_gray"/><span className="txt_darkgrey">{this.state.clientsData.title.toUpperCase()}</span>
                <hr className="team_hr team_hr_right hr_gray" />
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="text-center">
              <div className="container" style={{matginTop:'70px'}}>
                <div className="row">
                  {clientItems}                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
});

module.exports = clientsComponent;