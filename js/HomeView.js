var React = require("react")

var HomeView = React.createClass({

	componentWillMount: function(){
		var self = this
		var updateStuff = function(){self.forceUpdate()}
		this.props.postCollection.on('sync', updateStuff)
	},
	
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

		var homepageData = this.props.postCollection.models.reverse()

		console.log(homepageData)

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
					<h2>{posts.title}</h2>
					<li>Posted {posts.createdAt}</li>
					<li>Last updated {posts.updatedAt}</li>
				</ul>
				<p>{posts.body}</p>
			</div>
			)
	}
})

export {HomeView}
export {RecentPosts}