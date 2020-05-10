import React, { Component } from "react";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import axios from "axios";
import "./Blog.css";

type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: string;
};

interface BlogState {
  posts: PostData[];
  selectedPostId: number;
}

class Blog extends Component<{}, BlogState> {
  state = {
    posts: [],
    selectedPostId: -1
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const posts = res.data.slice(0, 4).map((post: any) => {
          return { ...post, author: "Harry" };
        });
        console.log(posts);
        this.setState({ posts: posts });
      });
  }

  postSelectedHandler = (id: number) => {
    this.setState({
      selectedPostId : id
    })
  };

  render() {
    const posts = this.state.posts.map((post: PostData) => {
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
