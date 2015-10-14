"use strict";
let React = require('react');
let AppStore = require('../stores/app-store');

let PartnersComponent = React.createClass ({
   
   getInitialState() {
    return {    
       partnersData: AppStore.getPartners()
    };
  },
  componentWillMount() {
    AppStore.addChangeListener(this._onChange); 
  },
 
  
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange); 
  },
  
  _onChange() {
    console.log('changing services componenet');
    this.setState({ 
      partnersData: AppStore.getPartners() 
    });
  },
  
  render() {
    return (
    
     <div className="templatemo-partners" >
            <div className="container">
                <div className="row">


                    <div className="templatemo-line-header" >
                        <div className="text-center">
                            <hr className="team_hr team_hr_left hr_gray"/><span className="txt_darkgrey">{this.state.partnersData.title.toUpperCase()}</span>
                            <hr className="team_hr team_hr_right hr_gray" />
                        </div>
                    </div>
                    <div className="clearfix"></div>


                    <div className="text-center">

                        <div style={{marginTop: '60px'}}>
                            <ul className="list-inline">
                                <li className="col-sm-3 col-md-3 templatemo-partner-item">
                                    <a href="#"><img src="images/partners/kelprojektas.jpg" className="img-responsive" alt="partner 1" /></a>
                                </li>
                                <li className="col-sm-3 col-md-3 templatemo-partner-item">
                                    <a href="#"><img src="images/partners/kv.jpg" className="img-responsive" alt="partner 2" /></a>
                                </li>
                                <li className="col-sm-3 col-md-3 templatemo-partner-item">
                                    <a href="#"><img src="images/partners/placeilive.jpg" className="img-responsive" alt="partner 3" /></a>
                                </li>
                                <li className="col-sm-3 col-md-3 templatemo-partner-item">
                                    <a href="#"><img src="images/partners/venipak.jpg" className="img-responsive" alt="partner 4" /></a>
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