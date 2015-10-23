var React = require('react')

var ProfileView = React.createClass({
	componentDidMount: function() {
		console.log(this)
	},

	render: function() {
		return(
			<div>
				<Header />
				<UserStuff userInfo={this.props.profileInfo} getUsername={this.props.getUsername}/>
				<BlogSnippets getUsername={this.props.getUsername}/>
			</div>
			)
	}
})

var Header = React.createClass({
	_handleLogOut: function() {
		location.hash = "logout"
	},

	_newStory: function() {
		location.hash = "new-story"
	},

	render: function() {
		return(
			<div id="header">
				<img id="logo" src="http://lh5.ggpht.com/_RT2ZlZ4zOLQ/TS3lV7cYHfI/AAAAAAAAAX4/xAs5J9F_UZ8/iyudz%20blog%20logo.png"/>
				<button id="logOut" onClick={this._handleLogOut} type="button">Log Out</button>
				<button id="write" onClick={this._newStory} type="button">Tell Us A Story</button>
			</div>
			)
	}
})

var UserStuff = React.createClass({

	render: function() {
		return(
			<div id="userInfo">
				<h3 id="userName">{this.props.getUsername()}</h3>
				<div id="followers">
					<p>Followers:</p>
					<p className="followNumber">0</p>
				</div>
				<div id="follwing">
					<p>Following:</p>
					<p className="followNumber">0</p>
				</div>
				<div id="socialLinks">
					<p>Other Hangouts:</p>
					<a href="https://www.facebook.com"><i className="fa fa-facebook-official"></i></a>
					<a href="https://twitter.com/"><i className="fa fa-twitter-square"></i></a>
				</div>
			</div>
			)
	}
})

var BlogSnippets = React.createClass({
	render: function() {
		return(
			<div id="blogs">
				<h4>Blogs!!!</h4>
				<p id="blogName">{this.props.getUsername()}</p>
				<p id="blogDate">Date Created</p>
				<p id="blogTitle">Blog Title</p>
				<p id="blogSnippet">This will be a blog snippett. Bloggity blog. Bloggity blog blog blog. How about a blog to go with your blog? Sorry we're all out of blogs. How about a blog?</p>
				<div id="snippetFooter">
					<a href="#blog-post-id" id="blogPost">Read more</a>
					<i className="fa fa-comment"></i>
				</div>
			</div>
			)
	}
})


export default ProfileView
export {Header}





