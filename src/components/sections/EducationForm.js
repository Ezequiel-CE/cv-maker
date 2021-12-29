import React, { Component } from "react";
import "../../assets/css/App.css";

class EducationForm extends Component {
  render() {
    return (
      <>
        <form>
          <input type="text" id="universityN" placeholder="University name" />
          <input type="text" id="city" placeholder="City" />
          <input type="text" id="degree" placeholder="Degree" />
          <input type="text" id="subject" placeholder="Subject" />
          <input type="text" id="from" placeholder="From" />
          <input type="text" id="to" placeholder="to" />
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
