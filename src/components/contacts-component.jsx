"use strict";
let React = require('react');
let AppStore = require('../stores/app-store');


let ContactsItem = React.createClass({
  
  render() {    
    return (
          
      <div className="col-lg-3 col-md-3 col-sm-6 " style={{fontSize: "16px"}}>
        <div className="row" >
          <h3 >{this.props.contact.city}{', '}{this.props.contact.country}</h3>
        
          <p>{this.props.contact.person}{', '}{this.props.contact.title}</p>
        
        </div>
        <div className="row">
          <div className="col-xs-2">
              <i className="fa fa-phone" style={{color: '#0067BF', fontSize: 'large'}}></i>
          </div>
          <div className="col-xs-10">
            <span>{this.props.contact.phone}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2">
              <i className="fa fa-envelope-o" style={{color: '#0067BF', fontSize: 'large'}}></i>
          </div>
          <div className="col-xs-10">
            <span>{this.props.contact.email}</span>
          </div>
        </div>  
      </div>
    ); 
  }
});

let ContactsComponent = React.createClass ({
  getInitialState() {
    return {    
       contactsData: AppStore.getContacts()
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
      contactsData: AppStore.getContacts() 
    });
  },
  
  render() {
    
    let contactsItems = this.state.contactsData.list.map(function(contact) {    
      return (
        <ContactsItem contact={contact} key={contact.id} />
      );
    });
    return (
      <div id="albars-contacts">
        <div className="container">
          <div className="row">
            <div className="templatemo-line-header">
              <div className="text-center">
                <hr className="team_hr team_hr_left hr_gray"/><span className="txt_darkgrey">CONTACT US</span>
                <hr className="team_hr team_hr_right hr_gray"/>
              </div>
            </div>
            <div className="clearfix"> </div>
            <div className="container">
              <div className="row">
                {contactsItems}
              </div>
            </div>            
          </div>
        </div>
      </div> 
    );
  }
});

module.exports = ContactsComponent;