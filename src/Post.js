import React, { Component } from "react";

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: props.data.user,
			value: props.data.value,
			id: props.id,
			timestamp: new Date(props.data.timestamp * 1000).toString(),
			timeZoneOffset: props.data.timeZoneOffset,
			likes: props.data.likes,
			liked: false,
			likeText: "Like"
		}
	}

	likeButton() {
		if (!this.state.liked) {
			this.setState((state) => {
				return {
					likes: this.state.likes + 1,
					liked: true,
					likeText: "Liked"

				}
			}
			)
		}
	}

	render() {
		return (
			<div key={this.state.id} id={this.state.id}>
				{this.state.user} | {this.state.timestamp} <br/>
				{this.state.value} <br/>
				Likes: {this.state.likes} <button onClick={() => this.likeButton()}>{this.state.likeText}</button>
				<hr/>
			</div>
		)
	}
}

export default Post;