"use strict";
let React = require('react');
let AppStore = require('../stores/app-store');
let SocialIcon = require('./social-icon');

let TeamMember = React.createClass ({
  render() {
    return (
      <li className="col-lg-3 col-md-3 col-sm-6 ">
        <div className="text-center">
          <div className="member-thumb">
            <img src={this.props.member.photoUrl} className="img-responsive" alt={this.props.member.name}/>
            <div className="thumb-overlay">
            <div className="row" style={{position: 'absolute', bottom: '0'}}>
             <SocialIcon social_network="facebook" url={this.props.member.fbUrl} />
             <SocialIcon social_network="twitter" url={this.props.member.twitterUrl} />
             <SocialIcon social_network="linkedin" url={this.props.member.linkedinUrl} />
             </div>                        
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

  getInitialState() {
    return {    
       teamData: AppStore.getTeam()
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
                            <hr className="team_hr team_hr_left"/><span className="txt_darkgrey">{this.state.teamData.title.toUpperCase()}</span>
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