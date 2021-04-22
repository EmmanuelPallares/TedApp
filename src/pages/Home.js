import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import platziconfLogoImage from "../images/platziconf-logo.svg";
import ted from "../images/ted.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12">
              <h1>Conferences Badges</h1>
              <img src={ted} alt="Astronauts" className="img-fluid  desktop" />
              {/* <img
                src={platziconfLogoImage}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              /> */}

              <Link className="btn btn-light" to="/badges">
                Start
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              {/* <img src={ted} alt="Astronauts" className="img-fluid p-4" /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
