"use strict";

let React   = require('react');
let App = require('./components/app.jsx');

let InitializeActions = require('./actions/initialize-actions.js');

InitializeActions.initApp();

React.render(
   <App/>, 
   document.getElementById('HomePage'));