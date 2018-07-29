import React, { Component } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import SocialApp from "./components/SocialApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SocialApp />
      </div>
    );
  }
}

export default App;
