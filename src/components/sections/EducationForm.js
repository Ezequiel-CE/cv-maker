import React from "react";
import "../../assets/css/App.css";

const EducationForm = ({ id, formInfo, getInfoIndividual, deleteForm }) => {
  //manejador de los inputs
  const inputHandler = (e) => {
    const inputName = e.target.name;

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
  };

  const { name, city, degree, subject, from, to } = formInfo;

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="University name"
          name="UniversityName"
          onChange={inputHandler}
          value={name}
        />
        <input
          type="text"
          placeholder="City"
          name="City"
          onChange={inputHandler}
          value={city}
        />
        <input
          type="text"
          placeholder="Degree"
          name="Degree"
          onChange={inputHandler}
          value={degree}
        />
        <input
          type="text"
          placeholder="Subject"
          name="Subject"
          onChange={inputHandler}
          value={subject}
        />
        <input
          type="text"
          placeholder="From"
          name="From"
          onChange={inputHandler}
          value={from}
        />
        <input
          type="text"
          placeholder="to"
          name="To"
          onChange={inputHandler}
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
};

export default EducationForm;
