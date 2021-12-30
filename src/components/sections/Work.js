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
    this.trackChangesOnInputs = this.trackChangesOnInputs.bind(this);
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

  trackChangesOnInputs(state, id) {
    const childrenStateCopy = [...this.state.children];
    const updatedFormIndex = childrenStateCopy.findIndex((el) => el.id === id);
    childrenStateCopy[updatedFormIndex].info = state;
    this.setState({ children: childrenStateCopy });
  }

  render() {
    return (
      <div className="Work-section">
        <h2>Work Experience</h2>
        {this.state.children.length < 1 ? (
          <> </>
        ) : (
          this.state.children.map((el) => (
            <WorkForm
              key={el.id}
              addForm={this.addForm}
              deleteForm={this.deleteForm}
              id={el.id}
              update={this.trackChangesOnInputs}
            />
          ))
        )}
        <button className="btn-add" onClick={this.addForm}>
          add
        </button>
      </div>
    );
  }
}

export default Work;
