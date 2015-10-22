React = require('react')

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

export LoginScreen
export SignUpScreen