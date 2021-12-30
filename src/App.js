import "./assets/css/App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Preview from "./components/preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { preview: false, generalInformation: {} };

    this.showPreview = this.showPreview.bind(this);
    this.getGeneralInformation = this.getGeneralInformation.bind(this);
  }

  showPreview() {
    this.setState({ preview: !this.state.preview });
  }

  getGeneralInformation(data) {
    this.setState({ generalInformation: data });
  }

  render() {
    const { preview } = this.state;
    return (
      <div>
        <Header />

        {preview ? (
          <Preview show={this.showPreview} />
        ) : (
          <Main
            show={this.showPreview}
            getInfo={this.getGeneralInformation}
            info={this.state.generalInformation}
          />
        )}
      </div>
    );
  }
}

export default App;
