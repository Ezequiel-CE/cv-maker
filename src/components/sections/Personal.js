import React, { Component } from "react";
import "../../assets/css/App.css";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e) {
    const { getInfoPersonal, personalInfo } = this.props;
    const inputName = e.target.name;

    switch (inputName) {
      case "firstName":
        getInfoPersonal({
          ...personalInfo,
          firstName: e.target.value,
        });
        break;
      case "lastName":
        getInfoPersonal({
          ...personalInfo,
          lastName: e.target.value,
        });
        break;
      case "address":
        getInfoPersonal({
          ...personalInfo,
          address: e.target.value,
        });
        break;
      case "profession":
        getInfoPersonal({
          ...personalInfo,
          profession: e.target.value,
        });
        break;
      case "number":
        getInfoPersonal({
          ...personalInfo,
          number: e.target.value,
        });
        break;
      case "mail":
        getInfoPersonal({
          ...personalInfo,
          mail: e.target.value,
        });
        break;
      case "description":
        getInfoPersonal({
          ...personalInfo,
          description: e.target.value,
        });
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
    } = this.props.personalInfo;
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
