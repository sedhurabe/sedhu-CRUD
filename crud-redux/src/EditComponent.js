import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        newTitle:'',
        newMessage:'',
        newQty:''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount(){
        this.setState({
            newTitle:this.props.post.title,
            newMessage:this.props.post.message,
            newQty: this.props.post.qty
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleEdit(e){
      e.preventDefault();
      const { newTitle, newMessage, newQty } = this.state;
      const data = {
        newTitle: newTitle,
        newMessage: newMessage,
        newQty: newQty
      }
      this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }

    render() {
        const { newTitle, newMessage, newQty } = this.state;
        return (
            <div>
               <form className="formRow" onSubmit={this.handleEdit}>
                    <input type="text" name="newTitle" value={newTitle} placeholder="Enter Title" onChange={this.handleChange} />
                    <input type="number" name="newQty" value={newQty} placeholder="Enter Unit" onChange={this.handleChange} />
                    <textarea name="newMessage" value={newMessage} placeholder="Enter Post" onChange={this.handleChange}></textarea>
                    <button>Update</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(EditComponent);