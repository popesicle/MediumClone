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
import {LoginScreen} from "./loginView.js"
import {SignUpScreen} from "./loginView.js"

window.p = Parse

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
		'signup': 'showSignUp'
	},

	createNewUser: function(username, password){
		console.log(username)
		var newUsr = new Parse.User()

		newUsr.set('username', username)
		newUsr.set('password', password)
		newUsr.signUp().then(function(user){
			location.hash = 'profile'
			alert('Congratulations! ' + user + ' has signed up for Median!')
		}).fail(function(err){
			alert('that username is already taken, please try another.')
		})
	},

	logInUser: function(username, password){
			Parse.User.logIn(username, password)
			.then(function(){
				console.log('success')
				location.hash = 'profile'
			}).fail(function(err){
				alert('Username or password is incorrect, please try again.')
			})
	},

	initialize: function(){
		this.mc = new MediumPostCollection()
		Backbone.history.start()
	},

	showSignUp: function(){
		React.render(<SignUpScreen sendUserData={this.createNewUser}/>,document.querySelector('#container'))
	},

	showLoginView: function(){
		React.render(<LoginScreen logInUser={this.logInUser}/>, document.querySelector('#container'))
	}

})

var mr = new MedRoute()
