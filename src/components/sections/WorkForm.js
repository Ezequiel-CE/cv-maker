import React, { Component } from "react";
import "../../assets/css/App.css";

class WorkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    };
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e) {
    const inputName = e.target.name;

    switch (inputName) {
      case "position":
        this.setState({ position: e.target.value });
        break;
      case "company":
        this.setState({ company: e.target.value });
        break;
      case "city":
        this.setState({ city: e.target.value });
        break;
      case "from":
        this.setState({ from: e.target.value });
        break;
      case "to":
        this.setState({ to: e.target.value });
        break;
      default:
        console.log("not found");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //evita el loop ,solo pasa cuando se cambia el estado
    if (JSON.stringify(prevState) === JSON.stringify(this.state)) return;
    const StateCopy = { ...this.state };
    const id = this.props.id;

    this.props.update(StateCopy, id);
  }

  render() {
    const { deleteForm, id } = this.props;

    const { position, company, city, from, to } = this.state;

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
