import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/navBar";

import Home from "./page/renter/home";

import CreatePost from "./page/owner/createPost";

import PostDetail from "./components/postForm/postDetail";
import ManagePost from "./page/owner/managePost";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main>
          <Switch>
            <Route path="/create-post" component={CreatePost}></Route>
            <Route path="/post" component={PostDetail}></Route>
            <Route path="/manage-post" component={ManagePost}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
