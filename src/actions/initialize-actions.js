"use strict";

let Dispatcher = require('../dispatcher/dispatcher');
let ActionTypes = require('../constants/action-types');
let Api = require('../api/api');

let InitializeActions = {
	
	initApp() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				content: Api.getData('en_US')
			}
		});
	
	}
};

module.exports = InitializeActions;