import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/navBar";

import Home from "./page/home";
import PostResForm from "./components/postResForm/postResForm.jsx";
import PostDetail from "./components/postForm/postDetail";
import ManagePost from "./page/managePost";
import ManageRoom from "./page/manageRoom";
import Notification from "./page/notification";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="bg-light">
          <Switch>
            <Route path="/create-post" component={PostResForm}></Route>
            <Route path="/post" component={PostDetail}></Route>
            <Route path="/manage-post" component={ManagePost}></Route>
            <Route path="/manage-room" component={ManageRoom}></Route>
            <Route path="/notification" component={Notification}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
