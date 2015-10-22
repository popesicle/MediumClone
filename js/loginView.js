var React = require('react')

var LoginScreen = React.createClass({

	_toSignUp: function(){
		location.hash = 'signup'
	},

	_getUserData: function(){

		var username = this.refs.username.getDOMNode().value,
			password = this.refs.password.getDOMNode().value
			this.props.logInUser(username, password)
	},

	render:function(){

		return(
			<div id='loginDiv'>
				<h1>Moderate</h1>
				<div id='loginBox'>
					<input 
						type="text" 
						placeholder='username'
						ref='username'
						/>
					<input 
						type="password" 
						placeholder='password'
						ref='password'
						/>
					<button onClick={this._getUserData}id="loginButton">Log in</button>
					<button onClick={this._toSignUp}id="loginButton">Sign Up</button>
				</div>	
			</div>	
			)
	}

})

var SignUpScreen = React.createClass({

	_getNewUserData: function(){
		var username = this.refs.username.getDOMNode().value,
			password = this.refs.password.getDOMNode().value
			this.props.sendUserData(username, password)
		
	},

	render: function(){

		return(

			<div id='signUp'>
				<h1>Sign Up!</h1>
				<div id='signUpBox'>
					<input 
						type='text' 
						placeholder='choose username'
						ref='username'
						/>
					<input 
						type='password' 
						placeholder='choose password'
						ref='password'
						/>
				</div>
				<button onClick={this._getNewUserData}>Create User</button>
			</div>	
			)
	}
})

export {LoginScreen}
export {SignUpScreen}