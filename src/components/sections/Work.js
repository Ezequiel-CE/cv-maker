import React, { Component } from "react";
import "../../assets/css/App.css";
import WorkForm from "./WorkForm";

class Work extends Component {
  constructor(props) {
    super(props);

    this.getInfoIndividual = this.getInfoIndividual.bind(this);
  }

  getInfoIndividual(data, id) {
    const workArray = [...this.props.workInfo];
    const updatedFormIndex = workArray.findIndex((el) => el.id === id);
    workArray[updatedFormIndex].info = data;
    this.props.getInfoWork(workArray);
  }

  render() {
    const { addForm, deleteForm, workInfo } = this.props;

    return (
      <div className="Work-section">
        <h2>Work Experience</h2>
        {workInfo.length < 1 ? (
          <> </>
        ) : (
          workInfo.map((el) => (
            <WorkForm
              formInfo={el.info}
              key={el.id}
              deleteForm={deleteForm}
              id={el.id}
              getInfoIndividual={this.getInfoIndividual}
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

export default Work;
