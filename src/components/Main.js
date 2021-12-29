import React, { Component } from "react";
import "../assets/css/App.css";
import Personal from "./sections/Personal";
import Education from "./sections/Education";
import Work from "./sections/Work";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Personal />
        <Education />
        <Work />
        <button className="btn-submit">Submit</button>
      </div>
    );
  }
}

export default Main;
