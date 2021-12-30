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
      workInfo: [
        {
          info: {
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
          },
          id: uniqid(),
        },
      ],
    };

    this.getInfoPersonal = this.getInfoPersonal.bind(this);
    this.addFormEducation = this.addFormEducation.bind(this);
    this.deleteFormEducation = this.deleteFormEducation.bind(this);
    this.getInfoEducation = this.getInfoEducation.bind(this);
    this.deleteFormWork = this.deleteFormWork.bind(this);
    this.addFormWork = this.addFormWork.bind(this);
    this.getInfoWork = this.getInfoWork.bind(this);
  }

  //get info functions

  getInfoPersonal(data) {
    this.setState({ personailInfo: data });
  }

  getInfoEducation(data) {
    this.setState({ educationInfo: data });
  }

  getInfoWork(data) {
    this.setState({ educationInfo: data });
  }

  //form education

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

  //form work
  addFormWork(e) {
    e.preventDefault();
    this.setState({
      workInfo: [
        ...this.state.workInfo,
        {
          info: {
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
          },
          id: uniqid(),
        },
      ],
    });
  }

  deleteFormWork(e, id) {
    e.preventDefault();
    this.setState({
      workInfo: this.state.workInfo.filter((form) => form.id !== id),
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
        <Work
          addForm={this.addFormWork}
          deleteForm={this.deleteFormWork}
          workInfo={this.state.workInfo}
          getInfoWork={this.getInfoWork}
        />
        <button className="btn-preview" onClick={show}>
          Preview
        </button>
        <button className="btn-submit">Submit</button>
      </div>
    );
  }
}

export default Main;
