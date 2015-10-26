"use strict";

let Dispatcher = require('../dispatcher/dispatcher');
let ActionTypes = require('../constants/action-types');
let EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
let Api =  require('../api/api');

let CHANGE_EVENT = 'change';

let _content;

let AppStore = assign({}, EventEmitter.prototype, {
//let AppStore = Object.assign({}, EventEmitter.prototype, {
	
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback)
	},
	
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback)
	},
	
	emitChange() {
		this.emit(CHANGE_EVENT);
	},
	
	getContent() {
		return _content; 
	},
	
	getMenu() {
		return _content.menu;
	},
	
	getCarousel() {
		return _content.carousel;
	},
	
	getServices() {
		return _content.services;
	},
	
	getTeam() {
		return _content.team;
	},

	getClients() {
		return _content.clients;
	},
	
	getFooter() {
		return _content.footer;
	},
	
	getReadMore() {
		return _content.readMore;
	},
	
	getTestimonial() {
		let n = _content.testimonials.list.length;
		return _content.testimonials.list[Math.floor(Math.random() * (n))];
	},
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