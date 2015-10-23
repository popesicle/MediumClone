var React = require('react')

var ProfileView = React.createClass({
	componentDidMount: function() {
		console.log(this)
	},

	render: function() {
		return(
			<div>
				<Header />
				<UserStuff userInfo={this.props.profileInfo} />
				<BlogSnippets />
			</div>
			)
	}
})

var Header = React.createClass({
	_handleLogOut: function() {
		location.hash = "logout"
	},

	render: function() {
		return(
			<div id="header">
				<img id="logo" src="http://lh5.ggpht.com/_RT2ZlZ4zOLQ/TS3lV7cYHfI/AAAAAAAAAX4/xAs5J9F_UZ8/iyudz%20blog%20logo.png"/>
				<button id="logOut" onClick={this._handleLogOut} type="button">Log Out</button>
				<button id="write" type="button">Tell Us A Story</button>
			</div>
			)
	}
})

var UserStuff = React.createClass({
	render: function() {
		return(
			<div id="userInfo">
			</div>
			)
	}
})

var BlogSnippets = React.createClass({
	render: function() {
		return(
			<div id="blogs">
				<h3></h3>
				<p></p>
			</div>
			)
	}
})


export default ProfileView





