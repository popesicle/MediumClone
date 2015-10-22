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


var LoginScreen = React.createClass({

	_toSignUp: function(){
		location.hash = 'signup'
	},

	render:function(){

		return(
			<div id='loginDiv'>
				<h1>Moderate</h1>
				<div id='loginBox'>
					<input type="text" placeholder='username'/>
					<input type="password" placeholder='password'/>
					<button id="loginButton">Log in</button>
					<button onClick={this._toSignUp}id="loginButton">Sign Up</button>
				</div>	
			</div>	
			)
	}

})

var SignUpScreen = React.createClass({

	render: function(){

		return(

			<div id='signUp'>
				<h1>Sign Up!</h1>
				<div id='signUpBox'>
					<input type='text' placeholder='choose username'/>
					<input type='password' placeholder='choose password'/>
				</div>
				<button onClick={}>Create User</button>
			</div>	
			)
	}
})

var MedRoute = Backbone.Router.extend({

	routes:{
		'login': 'showLoginView',
		'signup': 'showSignUp'
	},

	initialize: function(){
		this.mc = new MediumPostCollection()
		Backbone.history.start()
	},

	showSignUp: function(){
		React.render(<SignUpScreen/>,document.querySelector('#container'))
	},

	showLoginView: function(){
		React.render(<LoginScreen/>, document.querySelector('#container'))
	}

})

var mr = new MedRoute()
