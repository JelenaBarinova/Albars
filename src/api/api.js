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
			default:
					_content = require('../../data/en.json');
		}
		return _content;
	},
	getBlogs(language) {
		return [
			{
				"title": "Albars Partner Conference in Vilnius",
				"postedBy": "Rimante",
				"postedOn": "2015-10-27",
				"imageUrl": "",
				"content": "We just had an awesome conference of all very intersting clients, visiting us at a beautiful place here in Vilnius. Great coffee, deliciuos pastries and a room full of smart likewise people - what not to like!?"
			},
			{
			  "title": "New Office 365 is around the conner",
				"postedBy": "Rimante",
				"postedOn": "2015-09-27",
				"imageUrl": "",
				"content": "This is why you should consider going Office 365! And we at Albars can make your transition as smooth as possible. In this blog post we will cover all main new features as well as all updated ones, that are really worth your attension."
			},
			{
				"title": "Albars Riga",
				"postedBy": "Rimante",
				"postedOn": "2015-08-27",
				"imageUrl": "",
				"content": "We have a great addition to our team - Riga office. It's a great valuable asset to have. We are really lucky we met Janis. He is very good."
			},
			{				
				"title": "New Microsfot devices!",
				"postedBy": "Rimante",
				"postedOn": "2015-10-02",
				"imageUrl": "",
				"content": "What do you think of them? Sounds really strong. I'd love to have one. We had a chance to touch and feel Lumias as well as Surface Book. And we can definitely say - it's impressive"
			}
			
		];
	}
};

module.exports = Api;