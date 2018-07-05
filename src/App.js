import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Meet from "./Meet_the_revol/Meet_the_revol.js";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        
        <Meet />
      </div>
    );
  }
}

export default App;

