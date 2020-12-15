import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/navBar";

import Home from "./page/home";
import PostResForm from "./components/postResForm/postResForm.jsx";
import PostDetail from "./components/postForm/postDetail";
import ManagePost from "./page/managePost";
import ManageRoom from "./page/manageRoom";
import Login from "./page/login";
import UserResFrom from "./page/register";
import RegisterForm from "./page/register";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="bg-light min-vh-100">
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={UserResFrom}></Route>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/create-post" component={PostResForm}></Route>
            <Route path="/posts/:id" component={PostDetail}></Route>
            <Route path="/posts" component={PostDetail}></Route>
            <Route path="/manage-post" component={ManagePost}></Route>
            <Route path="/manage-room" component={ManageRoom}></Route>
            <Route path="/notifications/:id" component={ManagePost}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
