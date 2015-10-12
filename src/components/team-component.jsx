"use strict";
let React = require('react');

let TeamComponent = React.createClass ({

  render() {
    return (
    
    <div className="templatemo-team" id="templatemo-about">
            <div className="container">
                <div className="row">
                    <div className="templatemo-line-header">
                        <div className="text-center">
                            <hr className="team_hr team_hr_left"/><span>MEET OUR TEAM</span>
                            <hr className="team_hr team_hr_right" />
                        </div>
                    </div>
                </div>
                <div className="clearfix"> </div>
                    <ul className="row row_team">
                        <li className="col-lg-3 col-md-3 col-sm-6 ">
                            <div className="text-center">
                                <div className="member-thumb">
                                    <img src="images/member1.jpg" className="img-responsive" alt="member 1" />
                                    <div className="thumb-overlay">
                                        <a href="#"><span className="social-icon-fb"></span></a>
                                        <a href="#"><span className="social-icon-twitter"></span></a>
                                        <a href="#"><span className="social-icon-linkedin"></span></a>
                                    </div>
                                </div>
                                <div className="team-inner">
                                    <p className="team-inner-header">JEVGENIJUS</p>
                                    <p className="team-inner-subtext">Founder</p>
                                    <p className="team-inner-subtext">Software architect Software architect Software architect Software architect Software architect Software architect Software architect Software architect Software architect </p>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-3 col-md-3 col-sm-6 ">
                            <div className="text-center">
                                <div className="member-thumb">
                                    <img src="images/member2.jpg" className="img-responsive" alt="member 2" />
                                    <div className="thumb-overlay">
                                        <a href="#"><span className="social-icon-fb"></span></a>
                                        <a href="#"><span className="social-icon-twitter"></span></a>
                                        <a href="#"><span className="social-icon-linkedin"></span></a>
                                    </div>
                                </div>
                                <div className="team-inner">
                                    <p className="team-inner-header">Rimante</p>
                                    <p className="team-inner-subtext">Developer</p>
                                    <p className="team-inner-subtext">Developer </p>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-3 col-md-3 col-sm-6 ">
                            <div className="text-center">
                                <div className="member-thumb">
                                    <img src="images/member3.jpg" className="img-responsive" alt="member 3" />
                                    <div className="thumb-overlay">
                                        <a href="#"><span className="social-icon-fb"></span></a>
                                        <a href="#"><span className="social-icon-twitter"></span></a>
                                        <a href="#"><span className="social-icon-linkedin"></span></a>
                                    </div>
                                </div>
                                <div className="team-inner">
                                    <p className="team-inner-header">SERGEJUS</p>
                                    <p className="team-inner-subtext">Software architect</p>
                                    <p className="team-inner-subtext">Software architect</p>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-3 col-md-3 col-sm-6 ">
                            <div className="text-center">
                                <div className="member-thumb">
                                    <img src="images/member4.jpg" className="img-responsive" alt="member 4" />
                                    <div className="thumb-overlay">
                                        <a href="#"><span className="social-icon-fb"></span></a>
                                        <a href="#"><span className="social-icon-twitter"></span></a>
                                        <a href="#"><span className="social-icon-linkedin"></span></a>
                                    </div>
                                </div>
                                <div className="team-inner">
                                    <p className="team-inner-header">JEKATERINA</p>
                                    <p className="team-inner-subtext">Manager</p>
                                    <p className="team-inner-subtext">Software architect</p>
                                </div>
                            </div>
                        </li>
                    </ul>
            </div>
        </div>
    );
  }
});

module.exports = TeamComponent;