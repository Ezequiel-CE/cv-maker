import React, { Component } from "react";
import "../assets/css/App.css";

class Preview extends Component {
  render() {
    const { show } = this.props;
    return (
      <>
        <div className="preview">
          <header className="name-box">
            <h1>Nombre de la persona</h1>
            <h2> profesioon</h2>
          </header>
          <main className="preview-main">
            <section className="preview-personal">
              <h3 className="title">Personal Details</h3>
              <div className="separator"></div>
              <div className="personal-information">
                <div>
                  <h4>Adress</h4>
                  <p>example address</p>
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>15468741</p>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>joassdas@gmail.com</p>
                </div>
              </div>
            </section>
            <section className="preview-data">
              <h3 className="title">Description</h3>
              <div className="separator"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida,
                nulla eget blandit fermentum, mauris nisi rutrum libero, ac
                pharetra erat est sit amet tellus. Quisque fermentum dolor a
                interdum fermentum. Maecenas vehicula ac ipsum nec gravida.
                Integer quis porta turpis. Aenean et metus.
              </p>
              <h3 className="title">Experience</h3>
              <div className="separator"></div>
              <h3 className="title">Education</h3>
              <div className="separator"></div>
            </section>
          </main>
        </div>
        <button onClick={show}>Continue edit</button>
      </>
    );
  }
}

export default Preview;
