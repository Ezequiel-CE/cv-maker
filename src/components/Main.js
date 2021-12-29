import React, { Component } from "react";
import "../assets/css/App.css";
import Personal from "./sections/Personal";
import Education from "./sections/Education";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Personal />
        <Education />
      </div>
    );
  }
}

export default Main;
