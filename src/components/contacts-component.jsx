"use strict";
let React = require('react');
let AppStore = require('../stores/app-store');
let SocialIcon = require('./social-icon');

let ContactsItem = React.createClass({
  
  render() {    
    return (
          
      <div className="col-lg-3 col-md-3 col-xs-5" style={{fontSize: "16px"}}>
        <div className="row" >
          <h3 >{this.props.contact.city}{', '}{this.props.contact.country}</h3>
        
          <div className="col-xs-10">
              <span>{this.props.contact.person}</span>
          </div>
          <div className="col-xs-10">
            <span>{this.props.contact.title}</span>
          </div>
        
        </div>
        <div className="row">
          <div className="col-xs-1">
              <i className="fa fa-phone" style={{color: '#0067BF', fontSize: 'large'}}></i>
          </div>
          <div className="col-xs-10">
            <span>{this.props.contact.phone}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1">
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
       contactsData: AppStore.getContacts(),
       footerData: AppStore.getFooter()
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
      contactsData: AppStore.getContacts(),
      footerData: AppStore.getFooter()
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
          <div className="row" >
            <div className="templatemo-line-header">
              <div className="text-center">
                <hr className="team_hr team_hr_left hr_gray"/><span className="txt_darkgrey">CONTACT US</span>
                <hr className="team_hr team_hr_right hr_gray"/>
              </div>
            </div>
            <div className="clearfix"> </div>
            <div className="container" style={{marginTop: '70px'}}>
              <div className="row" style={{padding: "10px"}}>
                {contactsItems}
              </div>
            </div>            
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="text-center">
        
              <div className="footer_container">
                <ul className="list-inline">
                  <li>
                    <SocialIcon social_network="facebook" url="https://www.facebook.com/albars.eu" />
                  </li>
                  <li>
                    <SocialIcon social_network="twitter" url="https://twitter.com/albars_eu" />
                  </li>
                  <li>
                    <SocialIcon social_network="linkedin" url="https://www.linkedin.com/company/5317006" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="templatemo-footer" id="albars-footer">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <div className="height30"></div>
              <a className="btn btn-lg btn-blue" href="#" role="button" id="btn-back-to-top">{this.state.footerData.backToTop}</a>
              <div className="height30"></div>
              <div className="footer_bottom_content">
                <span>{this.state.footerData.copyright} © {new Date().getFullYear()} <a href="#">Albars</a></span>
              </div>        
            </div>
          </div>
        </div>
      </div> 
      </div> 
    );
  }
});

module.exports = ContactsComponent;