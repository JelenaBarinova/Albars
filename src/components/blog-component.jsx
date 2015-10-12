"use strict";
let React = require('react');

let BlogComponent = React.createClass ({

  render() {
    return (
    
<div id="templatemo-blog">
            <div className="container">
                <div className="row" style={{marginTop: '70px'}}>
                    <div className="templatemo-line-header" style={{marginTop: '0px'}} >
                        <div className="text-center">
                            <hr className="team_hr team_hr_left hr_gray"/><span className="span_blog txt_darkgrey">BLOG POSTS</span>
                            <hr className="team_hr team_hr_right hr_gray" />
                        </div>
                    </div>
                    <br className="clearfix"/>
                </div>
                
                <div className="blog_box">
                    <div className="col-sm-5 col-md-6 blog_post">
                        <ul className="list-inline">
                            <li className="col-md-4">
                                <a href="#">
                                    <img className="img-responsive" src="images/blog-image-1.jpg" alt="gallery 1" />
                                </a>
                            </li>
                            <li  className="col-md-8">
                                <div className="pull-left">
                                    <span className="blog_header">GRAPHIC DESIGN</span><br/>
                                    <span>Posted by : <a className="link_blue" href="#"><span className="txt_blue">Tracy</span></a></span>
                                </div>
                                <div className="pull-right">
                                    <a className="btn btn-blue" href="#" role="button">18 January 2084</a>
                                </div>
                                <div className="clearfix"> </div>
                                <p className="blog_text">
                                    Aliquam quis rutrum risus, ut condimentum ipsum. Nullam aliquet libero augue, eget auctor felis vulputate id. Proin a enim eu libero ornare malesuada. Sed iaculis fringilla lacinia. Sed laoreet lectus vitae [...]
                                </p>
                            </li>
                        </ul>
                    </div> 
                    
                    <div className="col-sm-5 col-md-6 blog_post">
                        <ul className="list-inline">
                            <li className="col-md-4"><a href="#">
                                <img className="img-responsive" src="images/blog-image-2.jpg" alt="gallery 2" /></a>
                            </li>
                            <li className="col-md-8">
                                <div className="pull-left">
                                    <span className="blog_header">WEBSITE TEMPLATE</span><br/>
                                    <span>Posted by : <a className="link_blue" href="#"><span className="txt_blue">Mary</span></a></span>
                                </div>
                                <div className="pull-right">
                                    <a className="btn btn-blue" href="#" role="button">16 January 2084</a>
                                </div>
                                <div className="clearfix"> </div>
                                <p className="blog_text">
                                        Morbi imperdiet ipsum sit amet dui pharetra, vulputate porta neque tristique. Quisque id turpis tristique, venenatis erat sit amet, venenatis turpis. Ut tellus ipsum, posuere bibendum [...]
                                </p>
                            </li>
                        </ul>	
                    </div>
                    
                    <div className="templatemo_clear"></div>
                    
                    <div className="col-sm-5 col-md-6 blog_post">
                        <ul className="list-inline">
                            <li className="col-md-4"><a href="#">
                                <img className="img-responsive" src="images/blog-image-2.jpg" alt="gallery 3" /></a>
                            </li>
                            <li className="col-md-8">
                                <div className="pull-left">
                                    <span className="blog_header">WEB DEVELOPMENT</span><br/>
                                    <span>Posted by : <a className="link_blue" href="#"><span className="txt_blue">Julia</span></a></span>
                                </div>
                                <div className="pull-right">
                                    <a className="btn btn-blue" href="#" role="button">12 January 2084</a>
                                </div>
                                <div className="clearfix"> </div>
                                <p className="blog_text">
                                        Fusce molestie tellus risus, id commodo turpis convallis id. Morbi mattis sapien sapien, vitae lacinia ante interdum sit amet. Praesent eget varius diam, ac tempor est. Mauris at scelerisque magna [...]
                                </p>
                            </li>
                        </ul>	
                    </div>
                    
                    <div className="col-sm-5 col-md-6 blog_post">
                        <ul className="list-inline">
                            <li className="col-md-4">
                                <a href="#">
                                    <img className="img-responsive" src="images/blog-image-1.jpg"  alt="gallery 4" />
                                </a>
                            </li>
                            <li className="col-md-8">
                                <div className="pull-left">
                                    <span className="blog_header">NEW FLUID LAYOUT</span><br/>
                                    <span>Posted by : <a className="link_blue" href="#"><span className="txt_blue">Linda</span></a></span>
                                </div>
                                <div className="pull-right">
                                    <a className="btn btn-blue" href="#" role="button">10 January 2084</a>
                                </div>
                                <div className="clearfix"> </div>
                                <p className="blog_text">
                                    In venenatis sodales purus a cursus. Ut consectetur, libero ac elementum tristique, enim ante aliquet mauris, scelerisque congue magna neque ac purus. Aliquam facilisis volutpat odio [...]
                                </p>
                            </li>
                        </ul>
                    </div> 
                    
                </div>
            </div>
        </div>
    );
  }
});

module.exports = BlogComponent;