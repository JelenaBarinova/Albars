"use strict";
let React = require('react');

let ContactsComponent = React.createClass ({

  render() {
    return (
    
<div id="templatemo-contact">
            <div className="container">
                <div className="row">
                    <div className="templatemo-line-header head_contact">
                        <div className="text-center">
                            <hr className="team_hr team_hr_left hr_gray"/><span className="txt_darkgrey">CONTACT US</span>
                            <hr className="team_hr team_hr_right hr_gray"/>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="templatemo-contact-map" id="map-canvas"> </div>  
                        <div className="clearfix"></div>
                        <i>You can find us on Ukmergės g. 120 <span className="txt_blue">Baltic Hearts</span> in Vilnius, LT-08105, Lithuania.</i>
                    </div>
                    <div className="col-md-4 contact_right">
                        <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit pendisse as a molesti.</p>
                        <p><img src="images/location.png" alt="icon 1" /> Ukmergės g. 120 Vilnius, LT-08105</p>
                        <p><img src="images/phone1.png"  alt="icon 2" /> 010-020-0340</p>
                        <p><img src="images/globe.png" alt="icon 3" /><a className="link_blue" href="#"><span className="txt_blue">www.company.com</span></a></p>
                        <form className="form-horizontal" action="#">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Name..." maxLength="40" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Email..." maxLength="40" />
                            </div>
                            <div className="form-group">
                                <textarea  className="form-control" style={{height: '130px'}} placeholder="Write down your message..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-blue pull-right">SEND</button>
                        </form>
                        	
                    </div>
                </div>
            </div>
        </div> 
    );
  }
});

module.exports = ContactsComponent;