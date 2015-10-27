"use strict";
let React = require('react');
let AppStore = require('../stores/app-store');

let TrainingsItem = React.createClass({
  render() {
  let icon = 'fa ' + this.props.training.icon + ' fa-stack-1x';
    return (
      <div className="col-md-4 col-sm-6 col-xs-12" style={{minHeight:'225px'}}>
        <div className="templatemo-service-item">
          <div className="row" >
            <div className="col-xs-2" id="service-logo">
              <span className="fa-stack fa-lg" >
                <i className="fa fa-stop fa-stack-2x" style={{color: '#0067BF'}}></i>
                <i className={icon} style={{color: 'white'}}></i>
              </span>
            </div>
            <div className="col-xs-10">
              <span className="templatemo-service-item-header">{this.props.training.title.toUpperCase()}</span>
            </div>
          </div>
          <p>{this.props.training.description}</p>
          <br className="clearfix"/>
        </div>
        <div className="clearfix"></div>
      </div>
    ); 
  }
});
let TrainingsComponent = React.createClass ({

  getInitialState() {
    return {    
       trainingsData: AppStore.getTrainings()
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
      trainingsData: AppStore.getTrainings() 
    });
  },
  
  render() {
    let schedule; 
    if (this.state.trainingsData.scheduleUrl) { 
      schedule = <a className="btn btn-blue" href={this.state.trainingsData.scheduleUrl} target="_blank" role="button" style={{margin: "0 auto"}}>{this.state.trainingsData.schedule}</a>;
    }
    let guide; 
    if (this.state.trainingsData.guideUrl) { 
      guide = <a className="btn btn-blue" href={this.state.trainingsData.guideUrl} target="_blank" role="button" style={{margin: "0 auto"}}>{this.state.trainingsData.guide}</a>;
    }
    let trainingItems = this.state.trainingsData.list.map(function(training) {
      return (
        <TrainingsItem training={training} key={training.id} />
      );
    });
    return (
        <div id="albars-trainings">
          <div className="container">
            <div className="row" style={{marginTop: '70px'}}>
              <div className="templatemo-line-header" style={{marginTop: '0px'}} >
                <div className="text-center">
                  <hr className="team_hr team_hr_left hr_gray"/><span className="span_blog txt_darkgrey">{this.state.trainingsData.title.toUpperCase()}</span>
                  <hr className="team_hr team_hr_right hr_gray" />
                </div>
              </div>
              <br className="clearfix"/>
            </div>
            <div className="trainings-item" style={{textAlign: 'center'}} >
              <p>{this.state.trainingsData.description}</p>      
              {guide}  {schedule}
              
            </div>
          </div>
        </div>
    );
  }
});

module.exports = TrainingsComponent;