import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	title:"",
	  	message:""
	  };
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e){
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleSubmit(e){
		e.preventDefault();
		const { title , message } = this.state;
		const data = {
			id: new Date(),
			title: title,
			message: message
		}

		this.props.dispatch({
	      type:'ADD_POST',
	      data
	  	});
	    this.setState({
			title:'',
			message:''
		})
	}

	render(){
		return(
			<div>
				<h1>Creat List</h1>
				<form className="formRow" onSubmit={this.handleSubmit}>
					<input type="text" name="title" value={this.state.title} placeholder="Enter Title" onChange={this.handleChange} />
					<textarea name="message" value={this.state.message} placeholder="Enter Post" onChange={this.handleChange}></textarea>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default connect() (PostForm);