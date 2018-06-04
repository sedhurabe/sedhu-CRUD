import React, { Component } from 'react';
import {connect} from 'react-redux';

class Post extends Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleDelete(){
		this.props.dispatch({
			type:'DELETE_POST',
			id:this.props.post.id
		})
	}

	handleEdit(){
		this.props.dispatch({
			type:'EDIT_POST',
			id:this.props.post.id
		})
	}

	render() {
		return (
			<div>
				<table>
					<tbody>
						<tr>
							<td>
								<span>Title</span>
								{this.props.post.title}
							</td>
							<td>
								<span>Message</span>
								{this.props.post.message}
							</td>
							<td>
								<span>Qty</span>
								{this.props.post.qty}
							</td>
							<td><button onClick={this.handleEdit} className="smallBtn">Edit</button></td>
							<td><button onClick={this.handleDelete} className="smallBtn"> Delete</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
export default connect()(Post);