"use strict";

let Api = {
	getData(language) {
		let _content = {};
		switch(language) {
			case 'ru':
					_content = require('../../data/ru.json');
					break;
			case 'en':
					_content = require('../../data/en.json');
					break;
			case 'lt':
					_content = require('../../data/lt.json');
					break;
			case 'lv':
					_content = require('../../data/lv.json');
					break;
			default:
					_content = require('../../data/en.json');
		}
		return _content;
	}
};

module.exports = Api;