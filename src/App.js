import React, { Component } from "react";
import NavBar from "./components/navBar";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container"></main>
      </React.Fragment>
    );
  }
}

export default App;
