import React, { Component } from "react";
import "../../assets/css/App.css";

class WorkForm extends Component {
  constructor(props) {
    super(props);

    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e) {
    const inputName = e.target.name;
    const { id, formInfo, getInfoIndividual } = this.props;

    switch (inputName) {
      case "position":
        getInfoIndividual({ ...formInfo, position: e.target.value }, id);
        break;
      case "company":
        getInfoIndividual({ ...formInfo, company: e.target.value }, id);
        break;
      case "city":
        getInfoIndividual({ ...formInfo, city: e.target.value }, id);
        break;
      case "from":
        getInfoIndividual({ ...formInfo, from: e.target.value }, id);
        break;

      case "to":
        getInfoIndividual({ ...formInfo, to: e.target.value }, id);
        break;
      default:
        console.log("not found");
    }
  }

  render() {
    const { deleteForm, id } = this.props;

    const { position, company, city, from, to } = this.props.formInfo;

    return (
      <>
        <form>
          <input
            type="text"
            placeholder="Position"
            name="position"
            onChange={this.inputHandler}
            value={position}
          />
          <input
            type="text"
            placeholder="Company"
            name="company"
            onChange={this.inputHandler}
            value={company}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            onChange={this.inputHandler}
            value={city}
          />
          <input
            type="text"
            placeholder="From"
            name="from"
            onChange={this.inputHandler}
            value={from}
          />
          <input
            type="text"
            placeholder="to"
            name="to"
            onChange={this.inputHandler}
            value={to}
          />
          <div className="btn-part">
            <button className="btn-work" onClick={(e) => deleteForm(e, id)}>
              delete
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default WorkForm;
