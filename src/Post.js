import React from "react";
import "./Post.css"

function Post({ posts }) {
  return(
    
        <div className = "post" key = {posts.id}>
          <small>
           {posts.id}
          </small>
          <h3>{posts.title}</h3>
          <h4>{posts.body} </h4>
        </div>
 

  );
}

export default Post;
