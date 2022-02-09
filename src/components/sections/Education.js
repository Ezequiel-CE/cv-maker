import React from "react";
import "../../assets/css/App.css";
import EducationForm from "./EducationForm";

const Education = ({
  addForm,
  deleteForm,
  educationInfo,
  getInfoEducation,
}) => {
  const getInfoIndividual = (data, id) => {
    const educationArrayCopy = [...educationInfo];
    const updatedFormIndex = educationArrayCopy.findIndex((el) => el.id === id);
    educationArrayCopy[updatedFormIndex].info = data;
    //update the main state from education
    getInfoEducation(educationArrayCopy);
  };

  return (
    <div className="Education-section">
      <h2>Education</h2>
      {educationInfo.length < 1 ? (
        <></>
      ) : (
        educationInfo.map((el) => (
          <EducationForm
            formInfo={el.info}
            key={el.id}
            deleteForm={deleteForm}
            id={el.id}
            getInfoIndividual={getInfoIndividual}
          />
        ))
      )}
      <button className="btn-add" onClick={addForm}>
        add
      </button>
    </div>
  );
};

export default Education;
