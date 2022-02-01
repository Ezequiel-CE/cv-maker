import React, { Component } from "react";
import {
  PersonalInformation,
  Header,
  DataInformation,
} from "./previewView/viewComponents";
import "../assets/css/App.css";

class Preview extends Component {
  render() {
    const { show } = this.props;
    const { personalInfo, educationInfo, workInfo } = this.props.info;

    return (
      <>
        <div className="preview">
          <Header data={personalInfo} />
          <main className="preview-main">
            <PersonalInformation data={personalInfo} />
            <DataInformation
              dataP={personalInfo}
              dataE={educationInfo}
              dataW={workInfo}
            />
          </main>
        </div>
        <div className="preview-btn-section">
          <button className="" onClick={() => show()}>
            Continue edit
          </button>
          <button className="">Download</button>
        </div>
      </>
    );
  }
}

export default Preview;
