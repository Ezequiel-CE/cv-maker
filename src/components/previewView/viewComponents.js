import React from "react";

export const PersonalInformation = ({ data }) => {
  const { address, phoneNumber, email } = data;
  return (
    <section className="preview-personal">
      <h3 className="title">Personal Details</h3>
      <div className="separator"></div>
      <div className="personal-information">
        <div>
          <h4>Adress</h4>
          <p>{address}</p>
        </div>
        <div>
          <h4>Phone Number</h4>
          <p>{phoneNumber}</p>
        </div>
        <div>
          <h4>Email</h4>
          <p>{email}</p>
        </div>
      </div>
    </section>
  );
};

export const Header = ({ data }) => {
  const { firstName, lastName, profession } = data;
  return (
    <header className="name-box">
      <h1>
        {lastName} {firstName}
      </h1>
      <h2> {profession}</h2>
    </header>
  );
};

export const DataInformation = ({ dataP, dataE, dataW }) => {
  const { description } = dataP;

  return (
    <section className="preview-data">
      <h3 className="title">Description</h3>
      <div className="separator"></div>
      <p className="description">{description}</p>
      <h3 className="title">Experience</h3>
      <div>
        <div className="separator"></div>

        {dataW.map((exp) => (
          <ExperienceComponent data={exp} key={exp.id} />
        ))}
      </div>

      <h3 className="title">Education</h3>
      <div className="separator"></div>
      {dataE.map((edu) => (
        <EducationceComponent data={edu} key={edu.id} />
      ))}
    </section>
  );
};

export const ExperienceComponent = ({ data }) => {
  console.log(data);
  const { position, company, city, from, to } = data.info;
  return (
    <div className="experience-el">
      <p className="title">
        {" "}
        {from} - {to}
      </p>
      <p className="title">{position}</p>
      <p className="sub">
        {" "}
        {company},{city}
      </p>
    </div>
  );
};

export const EducationceComponent = ({ data }) => {
  console.log(data);

  const { name, degree, subject, from, to, city } = data.info;
  return (
    <div className="experience-el">
      <p className="title">
        {" "}
        {from} - {to}
      </p>
      <p className="title">{degree}</p>
      <p className="sub">{subject}</p>
      <p className="sub">
        {" "}
        {name},{city}
      </p>
    </div>
  );
};
