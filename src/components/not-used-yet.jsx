"use strict";
let React = require('react');

let TopMenuComponent = React.createClass ({

  render() {
    return (
    
     <div id="templatemo-portfolio" >
            <div className="container">
                <div className="row">
                    <div className="templatemo-line-header" >
                        <div className="text-center">
                            <hr className="team_hr team_hr_left hr_gray"/><span className="txt_darkgrey">OUR PORTFOLIO</span>
                            <hr className="team_hr team_hr_right hr_gray" />
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="templatemo-gallery-category" style={{fontSize: '16px'; marginTop: '80px'}}>
                        <div className="text-center">
                            <a className="active" href=".gallery">All</a> / <a href=".gallery-design">Web Design </a>/ <a href=".gallery-graphic">Graphic</a> / <a href=".gallery-inspiration">Inspiration</a> / <a href=".gallery-creative">Creative</a>							
                        </div>
                    </div>
                </div> <!-- /.row -->


                <div className="clearfix"></div>
                <div className="text-center">
                    <ul className="templatemo-project-gallery" >
                        <li className="col-lg-2 col-md-2 col-sm-2  gallery gallery-graphic" >
                            <a className="colorbox" href="images/full-gallery-image-1.jpg" data-group="gallery-graphic">
                                <div className="templatemo-project-box">

                                    <img src="images/gallery-image-1.jpg" className="img-responsive" alt="gallery" />

                                    <div className="project-overlay">
                                        <h5>Graphic</h5>
                                        <hr />
                                        <h4>TEA POT</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="col-lg-2 col-md-2 col-sm-2  gallery gallery-creative" >
                            <a className="colorbox" href="images/full-gallery-image-2.jpg" data-group="gallery-creative">
                                <div className="templatemo-project-box">
                                    <img src="images/gallery-image-2.jpg" className="img-responsive" alt="gallery" />
                                    <div className="project-overlay">
                                        <h5>Creative</h5>
                                        <hr />
                                        <h4>BREAKFAST</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="col-lg-2 col-md-2 col-sm-2  gallery gallery-inspiration" >
                            <a className="colorbox" href="images/full-gallery-image-3.jpg" data-group="gallery-inspiration">
                                <div className="templatemo-project-box">
                                    <img src="images/gallery-image-3.jpg" className="img-responsive" alt="gallery" />
                                    <div className="project-overlay">
                                        <h5>Inspiration</h5>
                                        <hr />
                                        <h4>GREEN COLORS</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="col-lg-2 col-md-2 col-sm-2  gallery gallery-design" >
                            <a className="colorbox" href="images/full-gallery-image-4.jpg" data-group="gallery-design">
                                <div className="templatemo-project-box">
                                    <img src="images/gallery-image-4.jpg" className="img-responsive" alt="gallery" />
                                    <div className="project-overlay">
                                        <h5>Web Design</h5>
                                        <hr />
                                        <h4>CAMERA</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="col-lg-2 col-md-2 col-sm-2  gallery gallery-inspiration" >
                            <a className="colorbox" href="images/full-gallery-image-5.jpg" data-group="gallery-inspiration">
                                <div className="templatemo-project-box">
                                    <img src="images/gallery-image-5.jpg" className="img-responsive" alt="gallery" />
                                    <div className="project-overlay">
                                        <h5>Inspiration</h5>
                                        <hr />
                                        <h4>PLANT</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="col-lg-2 col-md-2 col-sm-2  gallery gallery-inspiration" >
                            <a className="colorbox" href="images/full-gallery-image-6.jpg" data-group="gallery-inspiration">
                                <div className="templatemo-project-box">
                                    <img src="images/gallery-image-6.jpg" className="img-responsive" alt="gallery" />
                                    <div className="project-overlay">
                                        <h5>Inspiration</h5>
                                        <hr />
                                        <h4>CABLE TRAIN</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                        
                        <li className="col-lg-2 col-md-2 col-sm-2 gallery gallery-design" >
                            <a className="colorbox" href="images/full-gallery-image-7.jpg" data-group="gallery-design">
                                <div className="templatemo-project-box">
                                    <img src="images/gallery-image-7.jpg" className="img-responsive" alt="gallery" />
                                    <div className="project-overlay">
                                        <h5>Web Design</h5>
                                        <hr />
                                        <h4>CITY</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                        
                        <li className="col-lg-2 col-md-2 col-sm-2 gallery gallery-creative" >
                            <a className="colorbox" href="images/full-gallery-image-8.jpg" data-group="gallery-creative">
                                <div className="templatemo-project-box">
                                    <img src="images/gallery-image-8.jpg" className="img-responsive" alt="gallery" />
                                    <div className="project-overlay">
                                        <h5>Creative</h5>
                                        <hr />
                                        <h4>BIRDS</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                        
                        <li className="col-lg-2 col-md-2 col-sm-2 gallery gallery-graphic" >
                            <a className="colorbox" href="images/full-gallery-image-9.jpg" data-group="gallery-graphic">
                                <div className="templatemo-project-box">
                                    <img src="images/gallery-image-9.jpg" className="img-responsive" alt="gallery" />
                                    <div className="project-overlay">
                                        <h5>Graphic</h5>
                                        <hr />
                                        <h4>NATURE</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                        
                        <li className="col-lg-2 col-md-2 col-sm-2 gallery gallery-inspiration" >
                            <a className="colorbox" href="images/full-gallery-image-10.jpg" data-group="gallery-inspiration">
                                <div className="templatemo-project-box">
                                    <img src="images/gallery-image-10.jpg" className="img-responsive" alt="gallery" />
                                    <div className="project-overlay">
                                        <h5>Inspiration</h5>
                                        <hr />
                                        <h4>DOGGY</h4>
                                    </div>
                                </div>
                            </a>
                        </li>

                    </ul><!-- /.gallery -->
                </div>
                <div className="clearfix"></div>
                <div className="row text-center">
                    <a className="btn_loadmore btn btn-lg btn-blue" href="#" role="button">LOAD MORE</a>
                </div>
            </div><!-- /.container -->
        </div> 
    );
  }
});

module.exports = TopMenuComponent;