"use strict";

let React   = require('react');
let App = require('./components/app');

let InitializeActions = require('./actions/initialize-actions');

let getQueryParams = function(str) {
	let query_params = [];
	if (str != undefined) {
		let query = str.split('?');
		if (query.length > 1) {
				query_params = query[1].split('&').map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
		}
	}
	return query_params;
}

let query_params = getQueryParams(window.location.href);
let lang = query_params['lang'] || 'en-us';

InitializeActions.initApp(lang);

React.render(<App />, document.getElementById('HomePage'));
