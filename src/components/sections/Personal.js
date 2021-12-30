import React, { Component } from "react";
import "../../assets/css/App.css";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      profession: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
    };
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e) {
    const inputName = e.target.name;

    switch (inputName) {
      case "firstName":
        this.setState({ firstName: e.target.value });
        break;
      case "lastName":
        this.setState({ lastName: e.target.value });
        break;
      case "address":
        this.setState({ address: e.target.value });
        break;
      case "profession":
        this.setState({ profession: e.target.value });
        break;
      case "number":
        this.setState({ phoneNumber: e.target.value });
        break;
      case "mail":
        this.setState({ email: e.target.value });
        break;
      case "description":
        this.setState({ description: e.target.value });
        break;
      default:
        console.log("not found");
    }
  }

  render() {
    const {
      firstName,
      lastName,
      profession,
      address,
      phoneNumber,
      email,
      description,
    } = this.state;
    return (
      <div className="Personal-section">
        <h2>Personal Information</h2>
        <form>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={this.inputHandler}
            value={firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={this.inputHandler}
            value={lastName}
          />
          <input
            type="text"
            placeholder="Profession"
            name="profession"
            onChange={this.inputHandler}
            value={profession}
          />
          <input
            type="text"
            placeholder="Adress"
            name="address"
            onChange={this.inputHandler}
            value={address}
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="number"
            onChange={this.inputHandler}
            value={phoneNumber}
          />
          <input
            type="email"
            placeholder="Email"
            name="mail"
            onChange={this.inputHandler}
            value={email}
          />
          <textarea
            placeholder="Description"
            rows="5"
            name="description"
            onChange={this.inputHandler}
            value={description}
          ></textarea>
        </form>
      </div>
    );
  }
}

export default Personal;
