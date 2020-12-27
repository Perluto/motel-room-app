import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import ProtectedRoute from "./components/protectedRoute";
import ProtectedRouteOwner from "./components/protectedRouteOwner.jsx";

import Home from "./page/home";
import PostResForm from "./components/postResForm/postResForm.jsx";
import PostDetail from "./components/postForm/postDetail";
import ManagePost from "./page/managePost";
import ManageRoom from "./page/manageRoom";
import Login from "./page/login";
import Logout from "./page/logout";
import UserResFrom from "./page/register";
import RegisterForm from "./page/register";
import Notify from "./components/notify";
import Profile from "./page/profile";

import auth from "./service/authService";
class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        {user && <NavBar user={user}></NavBar>}
        <main className="bg-light min-vh-100">
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/profile" component={Profile}></Route>
            <ProtectedRouteOwner
              path="/create-post"
              component={PostResForm}
            ></ProtectedRouteOwner>
            <ProtectedRoute
              path="/posts/:id"
              component={PostDetail}
            ></ProtectedRoute>
            <ProtectedRoute
              path="/posts"
              component={PostDetail}
            ></ProtectedRoute>
            <ProtectedRouteOwner
              path="/manage-post"
              component={ManagePost}
            ></ProtectedRouteOwner>
            <ProtectedRouteOwner
              path="/manage-room"
              component={ManageRoom}
            ></ProtectedRouteOwner>
            <ProtectedRoute
              path="/notifications/:id"
              component={Notify}
            ></ProtectedRoute>
            <ProtectedRoute
              path="/notifications"
              component={Notify}
            ></ProtectedRoute>
            <ProtectedRoute path="/" component={Home}></ProtectedRoute>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
