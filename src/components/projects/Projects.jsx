import React from "react";
import "./projects.css";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <Fade direction="down">
            <p className="title-part mt-5">Self Projects</p>
          </Fade>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="project">
              <p className="heading">Feedback Mangement System</p>
              <p>
                I designed a WebEDI platform for APTIV, functioning as an
                intermediary between suppliers and consumers in the automotive
                parts ordering process. It incorporates advanced functionalities
                to enhance user experience, such as personalized pagination,
                filtering capabilities for data tables, and a fixed scrollable
                sidebar. Developed using React JS and Bootstrap classes, the
                website is powered by HTML, CSS, and JavaScript to ensure
                seamless performance and user-friendly interface.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="project">
              <p className="heading">Portfolio</p>
              <p>
                I developed acomprehensive Time &Attendance system aimed at
                managing employee attendance, leave records, and work reports
                efficiently. This project boasts an advanced analytics dashboard
                featuring bar graphs, line charts, and pie charts using React JS
                and Bootstrap classes for the front end, leveraging HTML, CSS,
                and JavaScript to ensure seamless functionality and user
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
