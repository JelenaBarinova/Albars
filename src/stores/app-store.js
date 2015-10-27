"use strict";

let Dispatcher = require('../dispatcher/dispatcher');
let ActionTypes = require('../constants/action-types');
let EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
let Api =  require('../api/api');
const locales = require('../constants/locales');

let CHANGE_EVENT = 'change';

let _content, _blogs, _locale;

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
	
	getTrainings() {
		return _content.trainings;
	},
	
	getTeam() {
		return _content.team;
	},

	getClients() {
		return _content.clients;
	},
	
	getContacts() {
		return _content.contacts;
	},
	
	getFooter() {
		return _content.footer;
	},
	
	getTestimonial() {
		let n = _content.testimonials.list.length;
		return _content.testimonials.list[Math.floor(Math.random() * (n))];
	},
	
	getBlogsMeta() {
		return _content.blogs;
	},
	
	getBlogs() {
		return _blogs;
	},
	
	getLocale() {
		return _locale;
	}
});

Dispatcher.register(function(action){
	
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			_content = action.initialData.content;
			_blogs = action.initialData.blogs;			
			_locale = locales.get(action.initialData.language);
			console.log(_blogs);
			AppStore.emitChange();
			break;
		case ActionTypes.SWITCH_LANGUAGE:
			_content = Api.getData(action.language);
			_blogs = Api.getBlogs(action.language);
			_locale = locales.get(action.language);
			console.log(_blogs);
			AppStore.emitChange();
			break;
		default:
	}
	
});

module.exports = AppStore;