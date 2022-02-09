import React, { useEffect, useState } from "react";
import "../assets/css/App.css";
import Personal from "./sections/Personal";
import Education from "./sections/Education";
import Work from "./sections/Work";
import uniqid from "uniqid";

const Main = ({ show, getInfo, info }) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    profession: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  });

  const [workInfo, setWorkInfo] = useState([
    {
      info: {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
      },
      id: uniqid(),
    },
  ]);

  const [educationInfo, setEducationInfo] = useState([
    {
      info: {
        name: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
      id: uniqid(),
    },
  ]);

  //get info functions

  const getInfoPersonal = (data) => {
    setPersonalInfo(data);
  };

  const getInfoEducation = (data) => {
    setEducationInfo(data);
  };

  const getInfoWork = (data) => {
    setWorkInfo(data);
  };

  //form education

  const addFormEducation = (e) => {
    e.preventDefault();

    setEducationInfo([
      ...educationInfo,
      {
        info: {
          name: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
        id: uniqid(),
      },
    ]);
  };

  const deleteFormEducation = (e, id) => {
    e.preventDefault();
    setEducationInfo(educationInfo.filter((form) => form.id !== id));
  };

  //form work
  const addFormWork = (e) => {
    e.preventDefault();
    setWorkInfo([
      ...workInfo,
      {
        info: {
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
        id: uniqid(),
      },
    ]);
  };

  const deleteFormWork = (e, id) => {
    e.preventDefault();
    setWorkInfo(workInfo.filter((form) => form.id !== id));
  };

  const onclickPreview = () => {
    const allInfoSections = { personalInfo, workInfo, educationInfo };
    show();
    getInfo(allInfoSections);
  };

  //remember the data from the previous state
  // componentDidMount() {
  //   const { info } = this.props;
  //   this.setState(info);
  // }

  useEffect(() => {
    //si info esta vacio sale
    if (Object.keys(info).length === 0 && info.constructor === Object) return;

    const { personalInfo, educationInfo, workInfo } = info;

    setPersonalInfo(personalInfo);
    setEducationInfo(educationInfo);
    setWorkInfo(workInfo);
  }, [info]);

  return (
    <div className="main">
      <Personal getInfoPersonal={getInfoPersonal} personalInfo={personalInfo} />
      <Education
        addForm={addFormEducation}
        deleteForm={deleteFormEducation}
        educationInfo={educationInfo}
        getInfoEducation={getInfoEducation}
      />
      <Work
        addForm={addFormWork}
        deleteForm={deleteFormWork}
        workInfo={workInfo}
        getInfoWork={getInfoWork}
      />
      <button className="btn-preview" onClick={onclickPreview}>
        Preview
      </button>
    </div>
  );
};

export default Main;
