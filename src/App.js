import React, { Component } from "react";
import NavBar from "./components/navBar";
import PostForm from "./components/postForm/postForm.jsx";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container">
          <PostForm></PostForm>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
