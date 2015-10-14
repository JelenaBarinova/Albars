"use strict";
let React = require('react');

let PartnersComponent = React.createClass ({

  render: function() {
    return (
    
     <div className="templatemo-partners" >
            <div className="container">
                <div className="row">


                    <div className="templatemo-line-header" >
                        <div className="text-center">
                            <hr className="team_hr team_hr_left hr_gray"/><span className="txt_darkgrey">OUR PARTNERS</span>
                            <hr className="team_hr team_hr_right hr_gray" />
                        </div>
                    </div>
                    <div className="clearfix"></div>


                    <div className="text-center">

                        <div style={{marginTop: '60px'}}>
                            <ul className="list-inline">
                                <li className="col-sm-2 col-md-2 templatemo-partner-item">
                                    <a href="#"><img src="images/partner1.jpg" className="img-responsive" alt="partner 1" /></a>
                                </li>
                                <li className="col-sm-2 col-md-2 templatemo-partner-item">
                                    <a href="#"><img src="images/partner2.jpg" className="img-responsive" alt="partner 2" /></a>
                                </li>
                                <li className="col-sm-2 col-md-2 templatemo-partner-item">
                                    <a href="#"><img src="images/partner3.jpg" className="img-responsive" alt="partner 3" /></a>
                                </li>
                                <li className="col-sm-2 col-md-2 templatemo-partner-item">
                                    <a href="#"><img src="images/partner4.jpg" className="img-responsive" alt="partner 4" /></a>
                                </li>
                                <li className="col-sm-2 col-md-2 templatemo-partner-item">
                                    <a href="#"><img src="images/partner5.jpg" className="img-responsive" alt="partner 5" /></a>
                                </li>
                                <li className="col-sm-2 col-md-2 templatemo-partner-item">
                                    <a href="#"><img src="images/partner6.jpg" className="img-responsive" alt="partner 6" /></a>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </div> 
    );
  }
});

module.exports = PartnersComponent;