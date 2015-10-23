var React = require('react'),
	$ = require('jquery')

import {Header} from "./profileScreen.js"

var NewBlogView = React.createClass({
	render: function() {
		return(
			<div>
				<Header />
				<NewBlog sendBlogInfo={this.props.sendBlogInfo}/>
			</div>
			)
	}
})

var NewBlog = React.createClass({
	_saveBlog: function() {
		var newTitle = this.refs.blogTitle.getDOMNode().value,
			newBody = this.refs.blogBody.getDOMNode().value
		console.log(newTitle)
		console.log(newBody)
		this.props.sendBlogInfo(newTitle, newBody)
	},

	render: function() {
		return(
			<div id="newBlog">
			<input type="text" placeholder="Title" id="blogTitle" ref="blogTitle"></input>
			<input type="text" placeholder="Your story..." id="blogBody" ref="blogBody"></input>
			<button id="publish" onClick={this._saveBlog} type="button">Publish</button>
			</div>
			)
	}
})

export default NewBlogView