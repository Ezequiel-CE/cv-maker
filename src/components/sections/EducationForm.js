import React, { Component } from "react";
import "../../assets/css/App.css";

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e) {
    const inputName = e.target.name;
    const { id, formInfo, getInfoIndividual } = this.props;
    console.log(formInfo);

    switch (inputName) {
      case "UniversityName":
        getInfoIndividual({ ...formInfo, name: e.target.value }, id);
        break;
      case "City":
        getInfoIndividual({ ...formInfo, city: e.target.value }, id);
        break;
      case "Degree":
        getInfoIndividual({ ...formInfo, degree: e.target.value }, id);
        break;
      case "Subject":
        getInfoIndividual({ ...formInfo, subject: e.target.value }, id);
        break;
      case "From":
        getInfoIndividual({ ...formInfo, from: e.target.value }, id);
        break;

      case "To":
        getInfoIndividual({ ...formInfo, to: e.target.value }, id);
        break;
      default:
        console.log("not found");
    }
  }

  render() {
    const { deleteForm, id } = this.props;
    // const { name, city, degree, subject, from, to } = this.state;
    return (
      <>
        <form>
          <input
            type="text"
            placeholder="University name"
            name="UniversityName"
            onChange={this.inputHandler}
            // value={name}
          />
          <input
            type="text"
            placeholder="City"
            name="City"
            onChange={this.inputHandler}
            // value={city}
          />
          <input
            type="text"
            placeholder="Degree"
            name="Degree"
            onChange={this.inputHandler}
            // value={degree}
          />
          <input
            type="text"
            placeholder="Subject"
            name="Subject"
            onChange={this.inputHandler}
            // value={subject}
          />
          <input
            type="text"
            placeholder="From"
            name="From"
            onChange={this.inputHandler}
            // value={from}
          />
          <input
            type="text"
            placeholder="to"
            name="To"
            onChange={this.inputHandler}
            // value={to}
          />
          <div className="btn-part">
            <button className="btn-edu" onClick={(e) => deleteForm(e, id)}>
              delete
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default EducationForm;
