"use strict";
let React = require('react');
let AppStore = require('../stores/app-store.js');

let TeamMember = React.createClass ({
  render() {
    return (
      <li className="col-lg-3 col-md-3 col-sm-6 ">
        <div className="text-center">
          <div className="member-thumb">
            <img src={this.props.member.photoUrl} className="img-responsive" alt={this.props.member.name}/>
            <div className="thumb-overlay">
              <a href="#"><span className="social-icon-fb">{this.props.member.fbUrl}</span></a>
              <a href="#"><span className="social-icon-twitter">{this.props.member.twitterUrl}</span></a>
              <a href="#"><span className="social-icon-linkedin">{this.props.member.linkedinUrl}</span></a>
            </div>
          </div>
          <div className="team-inner">
            <p className="team-inner-header">{this.props.member.name.toUpperCase()}</p>
            <p className="team-inner-header">{this.props.member.title}</p>
            <p className="team-inner-subtext">{this.props.member.bio}</p>
          </div>
        </div>
      </li>
    )
  }

});

let TeamComponent = React.createClass ({

  getInitialState: function() {
    return {    
       teamData: AppStore.getTeam()
    };
  },
  componentWillMount: function() {
    AppStore.addChangeListener(this._onChange); 
  },
 
  
  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange); 
  },
  
  _onChange() {
    console.log('changing services componenet');
    this.setState({ 
      teamData: AppStore.getTeam() 
    });
  },
  
  render() {
  
    let teamMembers = this.state.teamData.list.map(function(member) {    
      return (
        <TeamMember member={member} key={member.id} />
      );
    });
    return (
    
    <div className="templatemo-team" id="templatemo-about">
            <div className="container">
                <div className="row">
                    <div className="templatemo-line-header">
                        <div className="text-center">
                            <hr className="team_hr team_hr_left"/><span>{this.state.teamData.title.toUpperCase()}</span>
                            <hr className="team_hr team_hr_right" />
                        </div>
                    </div>
                </div>
                <div className="clearfix"> </div>
                    <ul className="row row_team">
                      {teamMembers}
                    </ul>
            </div>
        </div>
    );
  }
});

module.exports = TeamComponent;