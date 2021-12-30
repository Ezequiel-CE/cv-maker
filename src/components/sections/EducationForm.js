import React, { Component } from "react";
import "../../assets/css/App.css";

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    };
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e) {
    const inputName = e.target.name;

    switch (inputName) {
      case "UniversityName":
        this.setState({ name: e.target.value });
        break;
      case "City":
        this.setState({ city: e.target.value });
        break;
      case "Degree":
        this.setState({ degree: e.target.value });
        break;
      case "Subject":
        this.setState({ subject: e.target.value });
        break;
      case "From":
        this.setState({ from: e.target.value });
        break;

      case "To":
        this.setState({ to: e.target.value });
        break;
      default:
        console.log("not found");
    }
  }

  //lifecycle hook
  componentDidUpdate(prevProps, prevState) {
    //evita el loop ,solo pasa cuando se cambia el estado
    if (JSON.stringify(prevState) === JSON.stringify(this.state)) return;
    const StateCopy = { ...this.state };
    const id = this.props.id;

    this.props.update(StateCopy, id);
  }

  render() {
    const { deleteForm, id } = this.props;
    const { name, city, degree, subject, from, to } = this.state;
    return (
      <>
        <form>
          <input
            type="text"
            placeholder="University name"
            name="UniversityName"
            onChange={this.inputHandler}
            value={name}
          />
          <input
            type="text"
            placeholder="City"
            name="City"
            onChange={this.inputHandler}
            value={city}
          />
          <input
            type="text"
            placeholder="Degree"
            name="Degree"
            onChange={this.inputHandler}
            value={degree}
          />
          <input
            type="text"
            placeholder="Subject"
            name="Subject"
            onChange={this.inputHandler}
            value={subject}
          />
          <input
            type="text"
            placeholder="From"
            name="From"
            onChange={this.inputHandler}
            value={from}
          />
          <input
            type="text"
            placeholder="to"
            name="To"
            onChange={this.inputHandler}
            value={to}
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
