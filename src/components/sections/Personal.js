import React, { Component } from "react";
import "../../assets/css/App.css";

class Personal extends Component {
  render() {
    return (
      <div className="Personal-section">
        <h2>Personal Information</h2>
        <form>
          <input type="text" id="fname" placeholder="First Name" />
          <input type="text" id="lname" placeholder="Last Name" />
          <input type="text" id="address" placeholder="Adress" />
          <input type="text" id="Pnumber" placeholder="Phone Number" />
          <input type="email" id="mail" placeholder="Email" />
          <textarea
            id="descrption"
            placeholder="Description"
            rows="5"
          ></textarea>
        </form>
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default Personal;
