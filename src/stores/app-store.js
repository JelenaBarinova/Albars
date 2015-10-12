"use strict";


let Dispatcher = require('../dispatcher/dispatcher.js');
let ActionTypes = require('../constants/action-types.js');
let EventEmitter = require('events').EventEmitter;
let Api =  require('../api/api.js');
let CHANGE_EVENT = 'change';


let _content, _menu;

let AppStore = Object.assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback)
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback)
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	getContent: function(){
		return _content; 
	},
	getMenu: function(){
		return _content.menu;
	},
	getCarousel: function(){
		return _content.carousel;
	}
});

Dispatcher.register(function(action){
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			_content = action.initialData.content;
			AppStore.emitChange();
			break;
		case ActionTypes.SWITCH_LANGUAGE:
			_content = Api.getData(action.language);
			AppStore.emitChange();
			break;
		default:
	}
});

module.exports = AppStore;