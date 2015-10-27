"use strict";
let React = require('react');
let AppStore = require('../stores/app-store');

let BlogComponent = React.createClass({

  render() {
    return (
      <div className="col-sm-5 col-md-6 blog_post">
        <ul className="list-inline">
          <li className="col-md-4">
            <a href="#">
              <img className="img-responsive" src="images/blog-image-1.jpg" alt="gallery 1" />
            </a>
          </li>
          <li  className="col-md-8">
            <div className="pull-left">
              <span className="blog_header">{this.props.blog.title}</span><br/>
              <span>{this.props.blogsMeta.postedBy} : {this.props.blog.postedBy} </span><br/>
              <span>{this.props.blogsMeta.postedOn} : {new Date(this.props.blog.postedOn).toLocaleDateString(this.props.locale, { month: "long", year: "numeric" })} </span>
            </div>
            <div className="pull-right">
              <a className="btn btn-blue" href="#" role="button">{this.props.blogsMeta.readMore}</a>
            </div>
            <div className="clearfix"> </div>
            <p className="blog_text">
              {this.props.blog.content}
            </p>
          </li>
        </ul>
      </div>
    );
  }
});

let BlogsComponent = React.createClass ({

  getInitialState() {
    return {    
       blogsData: AppStore.getBlogs(),
       blogsMeta: AppStore.getBlogsMeta(),
       locale: AppStore.getLocale()
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
      blogsData: AppStore.getBlogs(),
      blogsMeta: AppStore.getBlogsMeta(),
      locale: AppStore.getLocale()
    });
  },
  render() {
    let blogsMeta = this.state.blogsMeta;
    let locale = this.state.locale;
    let blogs = this.state.blogsData.map(function(blog) {    
      return (
        <BlogComponent blog={blog} blogsMeta={blogsMeta} locale={locale} key={blog.postedOn}/>
      );
    });
  
    return (
      
      <div id="albars-blog">
        <div className="container">
          <div className="row" style={{marginTop: '70px'}}>
            <div className="templatemo-line-header" style={{marginTop: '0px'}} >
              <div className="text-center">
                <hr className="team_hr team_hr_left hr_gray"/><span className="span_blog txt_darkgrey">{this.state.blogsMeta.title.toUpperCase()}</span>
                <hr className="team_hr team_hr_right hr_gray" />
              </div>
            </div>
            <br className="clearfix"/>
          </div>
          <div className="blog_box">
            {blogs}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BlogsComponent;
