"use strict";
let React = require('react');
let AppStore = require('../stores/app-store');

let TweetsComponent = React.createClass ({
  
  getInitialState() {
    return {    
       testimonialData: AppStore.getTestimonial()
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
      testimonialData: AppStore.getTestimonial() 
    });
  },
  render() {
    return (    
      <div className="templatemo-tweets">
        <div className="container">
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-2"></div>
            <div className="col-md-1"></div>
            <div className="col-md-7 tweet_txt" >
              <i className="fa fa-quote-left"></i>
              <span> {this.state.testimonialData.description} </span>
              <i className="fa fa-quote-right"></i>
              <br/><br/>
              <span className="twitter_user">{this.state.testimonialData.name}, {this.state.testimonialData.title}, {this.state.testimonialData.company}</span>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div> 
    );
  }
});

module.exports = TweetsComponent;