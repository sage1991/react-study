import React, { Component } from "react";
import axios from "../../core/Axios";
import "./FullPost.css";
import { Optional } from "../../core/Types";

type LoadedPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface FullPostProps {
  id: Optional<number>;
  title?: string;
  content?: string;
}

interface FullPostState {
  loadedPost: Optional<LoadedPost>;
}

class FullPost extends Component<FullPostProps, FullPostState> {
  
  state: FullPostState = {
    loadedPost: null
  };

  render() {
    let post;
    if(this.props.id === null) {
      post  = <p style={{textAlign:"center"}}>Please select a Post!</p>;
    } else if(this.state.loadedPost === null) {
      post = <p style={{textAlign:"center"}}>now on loading....</p>;
    } else {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }

  componentDidUpdate() {
    if (this.hasNoData() || this.isPostChanged()) {
      if(this.state.loadedPost !== null) {
        this.setState({
          loadedPost: null
        });
      }
      axios
        .get(`/posts/${this.props.id}`)
        .then((response) => {
          console.log(response.data);
          this.setState({
            loadedPost: response.data
          });
        });
    }
  }

  private isPostChanged() {
    if(this.state.loadedPost) {
      return this.props.id !== this.state.loadedPost.id;
    } else {
      return this.props.id !== null;
    }
  }

  private hasNoData() {
    return this.state.loadedPost === null && this.props.id !== null;
  }


  private deletePostHandler = () => {
    axios
      .delete(`/posts/${this.props.id}`)
      .then(response => {
        console.log(response);
      });
  }

}

export default FullPost;
