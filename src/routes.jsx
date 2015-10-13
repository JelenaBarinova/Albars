"use strict";

let React = require('react');
let ReactRouter = require('react-router');
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;


let Routes = (
  <Route path="/" component={require('./components/app.jsx')}>
    
    
    <Route path="*" component={require('./components/app.jsx')} />
  </Route>
);

module.exports = Routes;