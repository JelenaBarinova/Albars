"use strict";

let Dispatcher = require('../dispatcher/dispatcher');
let ActionTypes = require('../constants/action-types');

let MenuActions = {
	
	switchLanguage(language) {
		Dispatcher.dispatch({
			actionType: ActionTypes.SWITCH_LANGUAGE,
			language: language
		});
	}
	
};

module.exports = MenuActions;