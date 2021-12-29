import React, { Component } from "react";
import "../../assets/css/App.css";

class WorkForm extends Component {
  render() {
    return (
      <>
        <form>
          <input type="text" placeholder="Position" />
          <input type="text" placeholder="Company" />
          <input type="text" placeholder="City" />
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

export default WorkForm;
