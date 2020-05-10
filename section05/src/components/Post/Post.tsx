import React, { FC } from "react";

import "./Post.css";

interface PostTitle {
  id: number;
  title: string;
  author: string;
  onClick: (id:number) => void;
}

const post: FC<PostTitle> = (props) => (
  <article className="Post" onClick={props.onClick.bind(null, props.id)}>
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">{props.author}</div>
    </div>
  </article>
);

export default post;
