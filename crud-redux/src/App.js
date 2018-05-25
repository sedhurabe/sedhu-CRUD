import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="left">
       	<PostForm />
       </div>
       <div className="left">
       	<AllPost />
       	</div>
      </div>
    );
  }
}

export default App;
