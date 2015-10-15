"use strict";
let React = require('react');
let AppStore = require('../stores/app-store');

let ClientItem = React.createClass({
  render() {
    return (
      <li className="col-sm-3 col-md-3 templatemo-client-item">
        <a href={this.props.client.website}><img src={this.props.client.logo} className="img-responsive" alt={this.props.client.name} /></a>
        <span className="templatemo-client-item-header"><a href={this.props.client.website}>{this.props.client.name}</a></span>
        <p>{this.props.client.case}</p>
      </li>
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

                        <div style={{marginTop: '60px'}}>
                            <ul className="list-inline">
                                {clientItems}                   
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </div> 
    );
  }
});

module.exports = clientsComponent;