var React = require('react')

var ProfileView = React.createClass({
	render: function() {
		return(
			<div>
				<Header />
				<UserStuff />
				<BlogSnippets />
			</div>
			)
	}
})

var Header = React.createClass({
	render: function() {
		return(
			<div id="header">
				<img id="logo" src="http://lh5.ggpht.com/_RT2ZlZ4zOLQ/TS3lV7cYHfI/AAAAAAAAAX4/xAs5J9F_UZ8/iyudz%20blog%20logo.png"/>
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
			</div>
			)
	}
})


export default ProfileView





