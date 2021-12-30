import React, { Component } from "react";
import "../../assets/css/App.css";
import EducationForm from "./EducationForm";

class Education extends Component {
  constructor(props) {
    super(props);

    this.getInfoIndividual = this.getInfoIndividual.bind(this);
  }

  getInfoIndividual(data, id) {
    const educationArray = [...this.props.educationInfo];
    const updatedFormIndex = educationArray.findIndex((el) => el.id === id);
    educationArray[updatedFormIndex].info = data;
    this.props.getInfoEducation(educationArray);
  }

  render() {
    const { addForm, deleteForm, educationInfo } = this.props;

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
              getInfoIndividual={this.getInfoIndividual}
              update={this.findAndUpdateForms}
            />
          ))
        )}
        <button className="btn-add" onClick={addForm}>
          add
        </button>
      </div>
    );
  }
}

export default Education;
