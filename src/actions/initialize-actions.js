"use strict";

let Dispatcher = require('../dispatcher/dispatcher');
let ActionTypes = require('../constants/action-types');
let Api = require('../api/api');

let InitializeActions = {
	
	initApp(language) {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				content: Api.getData(language),
				blogs: Api.getBlogs(language),
				language: language 
			}
		});
	
	}
};

module.exports = InitializeActions;