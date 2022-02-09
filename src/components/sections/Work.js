import React from "react";
import "../../assets/css/App.css";
import WorkForm from "./WorkForm";

const Work = ({ addForm, deleteForm, workInfo, getInfoWork }) => {
  const getInfoIndividual = (data, id) => {
    const workArrayCopy = [...workInfo];
    const updatedFormIndex = workArrayCopy.findIndex((el) => el.id === id);
    workArrayCopy[updatedFormIndex].info = data;
    getInfoWork(workArrayCopy);
  };

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

export default Work;
