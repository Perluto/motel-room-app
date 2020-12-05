import React, { Component } from "react";
import NavBar from "./components/navBar";
import PostForm from "./components/postForm/postForm.jsx";
import PostShotCut from "./components/postShortcut";
import {Switch , Route} from "react-router-dom";
import postDetail from "./components/postDetail";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container">
          <Switch>
            <Route path="/postForm" component={PostForm}></Route>
            <Route path="/postShotcut" component={PostShotCut}></Route>
            <Route path="/postDetail" component={postDetail}></Route>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
