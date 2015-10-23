var React = require('react')

import {Header} from "./profileScreen.js"

var NewBlogView = React.createClass({
	render: function() {
		return(
			<div>
				<Header />
				<NewBlog />
			</div>
			)
	}
})

var NewBlog = React.createClass({
	_saveBlog: function() {
		location.hash = "blog-post-id"
	},

	render: function() {
		return(
			<div id="newBlog">
			<input type="text" placeholder="Title" id="blogTitle"></input>
			<input type="text" placeholder="Your story..." id="blogBody"></input>
			<button id="publish" onClick={this._saveBlog} type="button">Publish</button>
			</div>
			)
	}
})

export default NewBlogView