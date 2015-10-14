"use strict";

let Dispatcher = require('../dispatcher/dispatcher.js');
let ActionTypes = require('../constants/action-types.js');
let Api = require('../api/api.js');

let InitializeActions = {
	
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