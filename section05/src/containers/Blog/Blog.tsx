import React, { Component, ReactNode } from "react";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import axios from "../../core/Axios";
import "./Blog.css";
import { Optional } from "../../core/Types";


type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: string;
};


interface BlogState {
  posts: PostData[];
  selectedPostId: Optional<number>;
  error: boolean;
}


class Blog extends Component<{}, BlogState> {
  
  state = {
    posts: [],
    selectedPostId: null,
    error: false
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
        this.setState({
          error: true
        })
      });
  }

  postSelectedHandler = (id: number) => {
    this.setState({
      selectedPostId : id
    })
  };

  render() {
    
    let posts:ReactNode;
    if(this.state.error) {
      posts = <p style={{textAlign:"center"}}>something went wrong!</p>
    } else {
      posts = this.state.posts.map((post: PostData) => {
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
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
