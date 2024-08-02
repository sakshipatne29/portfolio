import React from "react";
import "./navbar.css";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  return (
    <div className="fixed-top">
      <Fade direction="down" triggerOnce>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "white" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">
                Sakshi's Portfolio
              </a>

              <ul className="navbar-nav ms-auto " style={{ gap: "35px" }}>
                <li className="nav-item">
                  <a className="nav-link" href="#header">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#education">
                    Skills  
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Others
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fade>
    </div>
  );
};

export default Navbar;
