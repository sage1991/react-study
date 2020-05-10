import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

type LoadedPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface FullPostProps {
  id: number;
  title?: string;
  content?: string;
}

interface FullPostState {
  loadedPost : LoadedPost | null;
}

class FullPost extends Component<FullPostProps, FullPostState> {
  
  state:FullPostState = {
    loadedPost : null
  };


  componentDidUpdate() {
    if (this.hasNoData() || this.isPostChanged()) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
        .then((response) => {
          console.log(response.data);
          this.setState({
            loadedPost : response.data
          });
        });
    }
  }

  isPostChanged() {
    if(this.state.loadedPost) {
      return this.props.id !== this.state.loadedPost.id;
    } else {
      return this.props.id !== -1;
    }
  }

  hasNoData() {
    return this.state.loadedPost === null && this.props.id !== -1;
  }

  render() {
    let post;
    if(this.props.id === -1) {
      post  = <p>Please select a Post!</p>;
    } else if(this.state.loadedPost !== null) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    } else {
      post = <div>now on loading....</div>;
    }
    return post;
  }
}

export default FullPost;
