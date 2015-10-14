"use strict";
let React = require('react');

let TweetsComponent = React.createClass ({

  render: function() {
    return (
    
<div className="templatemo-tweets">
            <div className="container">
                <div className="row" style={{marginTop: '20px'}}>
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-1">
                                <img src="images/quote.png" alt="icon" />
                        </div>
                        <div className="col-md-7 tweet_txt" >
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendiise as a molesti neque vestibulum,  persiutsor de andues mare fricilus ipsum dolor sit amet cons forukus.</span>
                                <br/>
                                <span className="twitter_user">Moe Moe, Yangon</span>
                        </div>
                        <div className="col-md-2">
                        </div>
                 </div>
            </div>
        </div> 
    );
  }
});

module.exports = TweetsComponent;