"use strict";

let React   = require('react');
let ReactRouter = require('react-router');

let Router = ReactRouter.Router;

let Routes = require('./routes.jsx');
let InitializeActions = require('./actions/initialize-actions.js');


InitializeActions.initApp();


React.render(<Router>{Routes}</Router>, document.getElementById('HomePage'));
