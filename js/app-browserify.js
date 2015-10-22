// es5 and 6 polyfills, powered by babel
require("babel/polyfill")

let fetch = require('./fetcher')

var $ = require('jquery'),
	Backbone = require('backbone'),
	React = require('react'),
	Parse = require('parse')

console.log('everything is loaded up')

// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

// window.addEventListener('load', app)

// function app() {
    // start app
    // new Router()
// }

import LoginScreen from "./loginView.js"
import ProfileView from "./profileScreen.js"

var APP_ID = '2Ny36UiXeUinzRGlaqPhQdCLF9lau4Prr3IlwUyR',
	JS_KEY = 'GY4eu2UHA24yTwzR3Lpjsu9MVRJWKHA23AH6yYYk',
	REST_KEY = 'bCXkkNeVbfrWyAiw9NFmAa92NO5MebcAczWansaF'

Parse.initialize( APP_ID, JS_KEY, REST_KEY)

var MediumPostModel = Backbone.Model.extend({
	url: "https://api.parse.com/1/classes/posts",

	parseHeaders: {
		"X-Parse-Application-Id": APP_ID,
		"X-Parse-REST-API-Key": REST_KEY
	}
})

var MediumPostCollection = Backbone.Collection.extend({
	url: "https://api.parse.com/1/classes/posts",

	parseHeaders: {
		"X-Parse-Application-Id": APP_ID,
		"X-Parse-REST-API-Key": REST_KEY
	},

	model: MediumPostModel
})


var MedRoute = Backbone.Router.extend({

	routes:{
		'login': 'showLoginView',
		'signup': 'showSignUp',
		"profile": "showProfile"
	},

	initialize: function(){
		this.mc = new MediumPostCollection()
		Backbone.history.start()
	},

	showProfile: function() {
		// var paramObject = {
		// 	userid: Parse.User.current().id
		// }
		// var stringyParam = JSON.stringify(paramObject)

		// this.mc.fetch({
		// 	data: {
		// 		where: stringyParam
		// 	},
		// 	headers: this.mc.parseHeaders,
		// 	processData: true
		// })
		React.render(<ProfileView />,document.querySelector("#container"))
	},

	showSignUp: function(){
		React.render(<SignUpScreen/>,document.querySelector('#container'))
	},

	showLoginView: function(){
		React.render(<LoginScreen/>, document.querySelector('#container'))
	}

})

var mr = new MedRoute()
