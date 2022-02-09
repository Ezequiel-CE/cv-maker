import React from "react";
import "../../assets/css/App.css";

const Personal = ({ getInfoPersonal, personalInfo }) => {
  const inputHandler = (e) => {
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
          phoneNumber: e.target.value,
        });
        break;
      case "mail":
        getInfoPersonal({
          ...personalInfo,
          email: e.target.value,
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
  };

  const {
    firstName,
    lastName,
    profession,
    address,
    phoneNumber,
    email,
    description,
  } = personalInfo;

  return (
    <div className="Personal-section">
      <h2>Personal Information</h2>
      <form>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={inputHandler}
          value={firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={inputHandler}
          value={lastName}
        />
        <input
          type="text"
          placeholder="Profession"
          name="profession"
          onChange={inputHandler}
          value={profession}
        />
        <input
          type="text"
          placeholder="Adress"
          name="address"
          onChange={inputHandler}
          value={address}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="number"
          onChange={inputHandler}
          value={phoneNumber}
        />
        <input
          type="email"
          placeholder="Email"
          name="mail"
          onChange={inputHandler}
          value={email}
        />
        <textarea
          placeholder="Description"
          rows="5"
          name="description"
          onChange={inputHandler}
          value={description}
        ></textarea>
      </form>
    </div>
  );
};

export default Personal;
