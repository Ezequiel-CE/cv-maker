import React, { Component } from "react";
import "../assets/css/App.css";
import Personal from "./sections/Personal";
import Education from "./sections/Education";
import Work from "./sections/Work";
import uniqid from "uniqid";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personailInfo: {
        firstName: "",
        lastName: "",
        profession: "",
        address: "",
        phoneNumber: "",
        email: "",
        description: "",
      },
      educationInfo: [
        {
          info: {
            name: "",
            city: "",
            degree: "",
            subject: "",
            from: "",
            to: "",
          },
          id: uniqid(),
        },
      ],
      workInfor: [],
    };

    this.getInfoPersonal = this.getInfoPersonal.bind(this);
    this.addForm = this.addForm.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
    this.getInfoEducation = this.getInfoEducation.bind(this);
  }

  //get info functions

  getInfoPersonal(data) {
    this.setState({ personailInfo: data });
  }

  getInfoEducation(data) {
    this.setState({ educationInfo: data });
  }

  //add education form form

  addFormEducation(e) {
    e.preventDefault();
    this.setState({
      educationInfo: [
        ...this.state.educationInfo,
        {
          info: {
            name: "",
            city: "",
            degree: "",
            subject: "",
            from: "",
            to: "",
          },
          id: uniqid(),
        },
      ],
    });
  }

  deleteFormEducation(e, id) {
    e.preventDefault();
    this.setState({
      educationInfo: this.state.educationInfo.filter((form) => form.id !== id),
    });
  }

  render() {
    const { show } = this.props;
    return (
      <div className="main">
        <Personal
          getInfoPersonal={this.getInfoPersonal}
          personalInfo={this.state.personailInfo}
        />
        <Education
          addForm={this.addFormEducation}
          deleteForm={this.deleteFormEducation}
          educationInfo={this.state.educationInfo}
          getInfoEducation={this.getInfoEducation}
        />
        <Work />
        <button className="btn-preview" onClick={show}>
          Preview
        </button>
        <button className="btn-submit">Submit</button>
      </div>
    );
  }
}

export default Main;
