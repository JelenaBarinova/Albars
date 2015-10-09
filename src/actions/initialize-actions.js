"use strict";

var Dispatcher = require('../dispatcher/dispatcher.js');
var ActionTypes = require('../constants/action-types.js');
let Api = require('../api/api.js');

var InitializeActions = {
	
	initApp: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				content: Api.getData('en_US')
			}
		});
	
	}
};

module.exports = InitializeActions;