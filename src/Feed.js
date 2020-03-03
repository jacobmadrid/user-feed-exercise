import React, { Component } from "react";
import Post from "./Post.js";

class Feed extends Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: props.data.feed
		}
	}
	
	post() {
		let newPost = {
			user: "User 3",
			value: document.getElementById("postText").value,
			id: 1,
			timestamp: Math.round((new Date()).getTime() / 1000),
			timeZoneOffset: "300",
			likes: 0
			
		}
		this.setState(state => ({posts: [...this.state.posts, newPost]}))
		

	}



	render() {
		let posts = this.state.posts.map((post, index) =>  
			<Post data={post} key={index} />
		)
					
		return (
				<div>
					# of Posts: {this.state.posts.length}
					{posts}
				
					<div>
						<input id="postText" type="text"></input>
						<button onClick={() => this.post()}>Post</button>
					</div>
				</div>
				
		)
	}
	
}

export default Feed;