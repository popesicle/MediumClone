var React = require("react")

var HomeView = React.createClass({
	
	_displayRecentPosts: function(posts){
		var homepageData = this.props.postCollection.models

		return(
			<RecentPosts 
				posts={posts}
				postsCollection={this.props.postCollection}
				/>
			)
	},


	render: function(){

		var homepageData = this.props.postCollection.models

			console.log(homepageData)
			postCollection.fetch({
				headers: postCollection.parseHeaders,
				processData: true
			}).then(function(response){
				console.log(response)
				homepageData = response	
				return homepageData
			})
			

		
		return(
			<div id='homepage'>
				<CurrentInfo postCollection={this.props.postCollection} />
				<div id='homePageHeader'>
					<h1>Today on Moderate</h1>
				</div>	
				<ul>
					{homepageData.map(this._displayRecentPosts)}
				</ul>
			</div>
			)
	}
})

var CurrentInfo = React.createClass({

	render:function(){
		return(
			<div id='sidebar'>
				<p>Placeholder!</p>
			</div>	
			)
	}
})

var RecentPosts = React.createClass({

	render: function(){
			console.log(this.props.posts)
			var posts = this.props.posts.attributes

		return(
			<div>
				<ul>
					<li>Posted {posts.createdAt}</li>
					<li>Last updated {posts.updatedAt}</li>
				</ul>
				<p>{posts.description}</p>
			</div>
			)
	}
})

export {HomeView}
export {RecentPosts}