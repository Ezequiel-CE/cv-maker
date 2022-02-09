import React from "react";
import "../../assets/css/App.css";

const WorkForm = ({ id, formInfo, getInfoIndividual, deleteForm }) => {
  const inputHandler = (e) => {
    const inputName = e.target.name;

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
  };

  const { position, company, city, from, to } = formInfo;

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Position"
          name="position"
          onChange={inputHandler}
          value={position}
        />
        <input
          type="text"
          placeholder="Company"
          name="company"
          onChange={inputHandler}
          value={company}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          onChange={inputHandler}
          value={city}
        />
        <input
          type="text"
          placeholder="From"
          name="from"
          onChange={inputHandler}
          value={from}
        />
        <input
          type="text"
          placeholder="to"
          name="to"
          onChange={inputHandler}
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
};

export default WorkForm;
