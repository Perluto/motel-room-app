import React, { Component } from "react";
import PostResForm from "../../components/postResForm/postResForm";

class CreatePost extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PostResForm></PostResForm>
      </div>
    );
  }
}

export default CreatePost;
