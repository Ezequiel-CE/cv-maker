import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import "../assets/css/App.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} alt="logo" />
        <h1> CV Maker</h1>
      </div>
    );
  }
}

export default Header;
