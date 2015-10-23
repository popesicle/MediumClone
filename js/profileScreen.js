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

	_goHome: function(){
		location.hash = "homepage"
	},
	
	_goToProfile: function() {
		location.hash = "profile"
	},

	render: function() {
		return(
			<div id="header">
				<img id="logo" src="http://lh5.ggpht.com/_RT2ZlZ4zOLQ/TS3lV7cYHfI/AAAAAAAAAX4/xAs5J9F_UZ8/iyudz%20blog%20logo.png"/>
				<button id="profile" onClick ={this._goToProfile} type="button">Profile</button>
 				<button id="logOut" onClick={this._handleLogOut} type="button">Log Out</button>
				<button id="write" onClick={this._newStory} type="button">Tell Us A Story</button>
			</div>
			)
	}
})

var UserStuff = React.createClass({
	_getBlogSnippets: function(blogObj) {
		return <BlogSnippets userInfo={this.props.userInfo} getUsername={this.props.getUsername}/> 
	},

	render: function() {
		var blogArray = this.props.userInfo
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
				{blogArray.map(this._getBlogSnippets)}
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
				<p id="blogDate">{this.props.userInfo.attributes.createdAt}</p>
				<p id="blogTitle">{this.props.userInfo.attributes.title}</p>
				<p id="blogSnippet">{this.props.userInfo.attributes.body}</p>
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





