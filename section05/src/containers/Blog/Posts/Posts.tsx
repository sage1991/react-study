import React, { Component } from "react";
import "./Posts.css"
import Post from "../../../components/Post/Post";
import axios from "../../../core/Axios";
import { RouteComponentProps, Route } from "react-router";
import FullPost from "../FullPost/FullPost";


type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: string;
};

interface PostsState {
  posts: PostData[];
}

interface PostProps extends RouteComponentProps {

}

class Posts extends Component<PostProps, PostsState> {

  state:PostsState = {
    posts: [],
  };


  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4).map((post: any) => {
          return { ...post, author: "Harry" };
        });
        console.log(posts);
        this.setState({ posts: posts });
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  postSelectedHandler = (id:number) => {
    this.props.history.push({pathname: `/posts/${id}`});
  }
  
  render() {

    let posts = this.state.posts.map((post: PostData) => {
      return (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          onClick={this.postSelectedHandler}
        />
      );
    });

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={`${this.props.match.url}/:id`} exact component={FullPost} />
      </div>
    )
  }

}


export default Posts;