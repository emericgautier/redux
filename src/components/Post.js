import React from "react";
import Like from "./Like";

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <img
        className="post-img"
        src="https://picsum.photos/1500/400"
        alt="img-post"
      />

      <p>{post.content}</p>

      <div className="author">
        <h5>{post.author}</h5>
      </div>
    </div>
  );
};

export default Post;
