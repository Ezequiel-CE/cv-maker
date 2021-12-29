import React, { Component } from "react";
import "../../assets/css/App.css";
import EducationForm from "./EducationForm";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = { children: [{ name: "form", id: uniqid() }] };

    this.addForm = this.addForm.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
  }

  addForm(e) {
    e.preventDefault();
    this.setState({
      children: [...this.state.children, { name: "form", id: uniqid() }],
    });
  }

  deleteForm(e, id) {
    e.preventDefault();
    this.setState({
      children: this.state.children.filter((child) => child.id !== id),
    });
  }

  render() {
    return (
      <div className="Education-section">
        <h2>Education</h2>
        {this.state.children.map((el, i) => (
          <EducationForm
            key={el.id}
            addForm={this.addForm}
            deleteForm={this.deleteForm}
            id={el.id}
          />
        ))}

        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default Education;
