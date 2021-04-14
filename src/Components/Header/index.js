import React from 'react';
import {Button} from "reactstrap";
import "./style.css";

const Header = (props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="./index.html"><i className="fas fa-skull"></i> JayArghArgh</a>
          <Button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 hidden">
              <li></li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/JayArghArgh" target="_blank"><i
                  className="fab fa-github fa-3x"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/jayarghargh/" target="_blank"><i
                  className="fab fa-linkedin fa-3x"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./index.html?contact"><i className="far fa-paper-plane fa-3x"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"
                   href="https://github.com/JayArghArgh/jayarghargh.github.io/blob/master/docs/CV_JR_FullStack_2021_R01.pdf"
                   target="_blank"><i className="far fa-file fa-3x"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
