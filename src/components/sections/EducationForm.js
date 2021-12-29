import React, { Component } from "react";
import "../../assets/css/App.css";

class EducationForm extends Component {
  render() {
    return (
      <>
        <form>
          <input type="text" placeholder="University name" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Degree" />
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="From" />
          <input type="text" placeholder="to" />
          <div className="btn-part">
            <button onClick={this.props.addForm}>add</button>
            <button onClick={(e) => this.props.deleteForm(e, this.props.id)}>
              delete
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default EducationForm;
