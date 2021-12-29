import React, { Component } from "react";
import "../../assets/css/App.css";
import uniqid from "uniqid";
import WorkForm from "./WorkForm";

class Work extends Component {
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
      <div className="Work-section">
        <h2>Work Experience</h2>
        {this.state.children.length < 1 ? (
          <button className="block" onClick={this.addForm}>
            add
          </button>
        ) : (
          this.state.children.map((el, i) => (
            <WorkForm
              key={el.id}
              addForm={this.addForm}
              deleteForm={this.deleteForm}
              id={el.id}
            />
          ))
        )}
      </div>
    );
  }
}

export default Work;
