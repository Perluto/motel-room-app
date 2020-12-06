import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/navBar";

import PostResForm from "./components/postResForm/postResForm.jsx";
import PostShortCut from "./components/postForm/postShortcut";
import PostDetail from "./components/postForm/postDetail";
import ManagePost from "./page/owner/managePost";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container">
          <Switch>
            <Route path="/postForm" component={PostResForm}></Route>
            <Route path="/postShortcut" component={PostShortCut}></Route>
            <Route path="/postDetail" component={PostDetail}></Route>
            <Route path="/manage-post" component={ManagePost}></Route>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
