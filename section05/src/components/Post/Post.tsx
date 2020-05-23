import React, { FC } from "react";
import "./Post.css";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface PostProps extends RouteComponentProps {
  id: number;
  title: string;
  author: string;
  onClick: (id:number) => void;
}

const Post: FC<PostProps> = (props) => (
  <article className="Post" onClick={props.onClick.bind(null, props.id)}>
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">{props.author}</div>
    </div>
  </article>
);

export default withRouter(Post);
