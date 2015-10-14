"use strict";

let React   = require('react');
let App = require('./components/app');

let InitializeActions = require('./actions/initialize-actions');

InitializeActions.initApp();

React.render(<App />, document.getElementById('HomePage'));
