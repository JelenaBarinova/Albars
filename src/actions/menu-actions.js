"use strict";

let Dispatcher = require('../dispatcher/dispatcher.js');
let ActionTypes = require('../constants/action-types.js');

let MenuActions = {
	switchLanguage: function(language) {
		Dispatcher.dispatch({
			actionType: ActionTypes.SWITCH_LANGUAGE,
			language: language
		});
	}
};

module.exports = MenuActions;