"use strict";

let Dispatcher = require('../dispatcher/dispatcher');
let ActionTypes = require('../constants/action-types');
let Api = require('../api/api');

let InitializeActions = {
	
	initApp(lang) {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				content: Api.getData(lang)
			}
		});
	
	}
};

module.exports = InitializeActions;