import React, { Component } from "react";
import {
  PersonalInformation,
  Header,
  DataInformation,
} from "./previewView/viewComponents";
import "../assets/css/App.css";
import html2pdf from "html2pdf.js";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.createpdf = this.createpdf.bind(this);
  }

  createpdf() {
    const element = document.getElementById("preview");
    html2pdf().from(element).save();
  }

  render() {
    const { show } = this.props;
    const { personalInfo, educationInfo, workInfo } = this.props.info;

    return (
      <>
        <div id="preview" className="preview">
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
          <button className="" onClick={this.createpdf}>
            Download
          </button>
        </div>
      </>
    );
  }
}

export default Preview;
