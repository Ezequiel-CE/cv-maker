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
    let width = element.offsetWidth;
    let height = element.offsetHeight;

    let heightCM = (height * 2.54) / 96;
    let widthCM = (width * 2.54) / 96;

    html2pdf(element, {
      margin: 0,
      filename: "Curriculum.pdf",
      html2canvas: { dpi: 96, letterRendering: true },
      jsPDF: {
        orientation: "portrait",
        unit: "cm",
        format: [heightCM, widthCM],
      },
    });
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
