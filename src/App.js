import "./assets/css/App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Preview from "./components/preview";

const App = () => {
  const [preview, setPreview] = useState(false);
  const [generalInformation, setGeneralInformation] = useState({});

  const showPreview = () => {
    setPreview(!preview);
  };

  const getGeneralInformation = (data) => {
    setGeneralInformation(data);
  };

  return (
    <div>
      <Header />

      {preview ? (
        <Preview show={showPreview} info={generalInformation} />
      ) : (
        <Main
          show={showPreview}
          getInfo={getGeneralInformation}
          info={generalInformation}
        />
      )}
    </div>
  );
};

export default App;
