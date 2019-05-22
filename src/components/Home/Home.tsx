import React from "react";
import "./home.css";
import logo from "../../assets/academicly.purple.png";

const Home = () => (
  <main id="mainContent">
    <div className="header">
      <h1>Academicly</h1>
      <p>Will come back to this</p>
      <a className="btn btn-primary my-2">Link to our Github</a>
    </div>

    <div className="container">
      <div className="row justify-content-center py-5">
        <h1>Bootstrap HomePage Template</h1>
      </div>

      <div className="row justify-content-around text-center pb-5">
        <div className="col-md-4 col-sm-12 p-5">
          <img src={logo} alt="Default Grey Box" className="mb-3" />
          <h3>Header header </h3>
          <p>cool disccc</p>
        </div>
      </div>
    </div>
  </main>
);

export default Home;
