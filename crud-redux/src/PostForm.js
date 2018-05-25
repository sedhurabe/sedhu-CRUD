import React, { Component } from 'react';

class PostForm extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	title:"",
	  	message:""
	  };
	  this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		//e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		})
	}
	render(){
		return(
			<div>
				<h1>Creat List</h1>
				<form className="formRow">
					<input type="text" name="title" value={this.state.title} placeholder="Enter Title" onChange={this.handleChange} />
					<textarea name="message" value={this.state.message} placeholder="Enter Post" onChange={this.handleChange}></textarea>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm;