"use strict";

let Api = {
	getData: function(language) {
		let _content = {};
		if (language == 'ru_RU')
		{
			_content = require('../../data/ru_RU.json');
		}
		else{
			_content = require('../../data/en_US.json');
		}
		return _content;
	}
};

module.exports = Api;