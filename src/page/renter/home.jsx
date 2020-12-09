import React, { Component } from "react";
import PostShortcut from "../../components/postForm/postShortcut";
import Search from "../../components/common/search";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex">
        <div className="w-25 mr-1 ml-1">
          <Search></Search>
        </div>
        <div className="w-75 ml-1 mr-1">
          <PostShortcut></PostShortcut>
        </div>
      </div>
    );
  }
}

export default Home;
