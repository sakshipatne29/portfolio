import React from "react";
import "./exp.css";
import dash from "../../assets/dash.png";
import blush from "../../assets/Blushup.png";
import bookstore from "../../assets/BookStore.png";
import furniture from "../../assets/newfur.PNG";
import { Fade } from "react-awesome-reveal";

const Experience = () => {
  return (
    <section className="" id="experience">
      <div className="container">
        <div className="row">
          <Fade direction="left">
            <h2
              className="heading mt-5"
              style={{ borderBottom: "1px solid greenyellow" }}
            >
              Work Experience
            </h2>
            <span className="d-flex">
              <p>Full Stack Developer, Tata Consultancy Services </p>
              <p className="ms-auto"> May 2023 - Present</p>
            </span>
            <ul
              className="ms-5"
              style={{
                color: "white",
                width: "910px",
                textAlign: "justify",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              <li>
                Developed and maintained a responsive website from scratch using
                React.js, improving load times by 60%.
              </li>
              <li>
                Implemented authentication and authorization functionalities for
                secure user access.
              </li>
              <li>
                Utilized Bootstrap, an open-source framework, for additional
                styling and layout enhancements.
              </li>
              <li>
                Integrated multi-language support (Chinese, Spanish) using
                i18next, enhancing user accessibility.
              </li>
              <li>
                Developed role-based access functionality, enabling users to
                view pages and perform actions based on assigned roles, reducing
                downtime of the application by 30%.
              </li>
              <li>
                Managed data storage and session management using local and
                session storage, including session timeout implementation
              </li>
              <li>
                Utilized JavaScript and Node.js for backend development,
                crafting and integrating RESTful APIs.
              </li>
              <li>
                Handled ad-hoc development tasks, delivering multiple features
                within Agile two-week sprints.
              </li>
              <li>
                Collaborated in cross-functional teams, participating in code
                reviews and design discussions.
              </li>
            </ul>
            <hr style={{ color: "white" }}></hr>

            <span className="d-flex">
              <p>Full Stack Developer, Capgemini Technology Services</p>
              <p className="ms-auto"> July 2021 - May 2023</p>
            </span>
            <ul
              className="ms-5"
              style={{
                color: "white",
                width: "910px",
                textAlign: "justify",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              <li>
                Upgraded user experience by 30% through the implementation of
                interactive dashboards with charts and graphs, saving users 20%
                time.
              </li>
              <li>
                Developed and implemented pagination functionality in the
                backend, enabling data fetching and display per user scroll,
                with 25 or 50 records per scroll.
              </li>
              <li>
                Created a scalable and responsive application for monitoring and
                tracking time and attendance, leaves, holidays, working hours,
                and included numerous additional features for employees and
                managers.
              </li>
              <li>Developed log-in and log-out functionality.</li>
              <li>
                Performed complex queries and collaborated cross teams and
                connected with multiple international clients and resolved their
                queries and tickets.
              </li>
              <li>
                Developed a comprehensive feedback management system capable of
                enabling CRUD operations. The system supports individual
                feedback retrieval and displays a list of feedback entries,
                ensuring efficient user interaction and data management.
              </li>
            </ul>
            <hr style={{ color: "white" }}></hr>

            <p className="p">Some things I've built</p>
            <h2
              className="heading"
              style={{ borderBottom: "1px solid greenyellow" }}
            >
              My Work
            </h2>
            <p className="para">
              I am a Web Designer from Bengaluru, INDIA. I've been designing for
              2+ years. I've worked remotely and on hybrid with exciting and
              established companies. I provide website design and development
              services, working with stablished companies to improve performance
              and ease-of-use of their products.
            </p>
          </Fade>
          <div className="d-flex">
            <Fade direction="left">
              <div>
                <img className="img-fluid dash" alt="img" src={dash} />
              </div>
            </Fade>
            <div className="dash_p">
              <Fade direction="right">
                <p
                  style={{
                    borderBottom: "1px solid greenyellow",
                    fontSize: "20px",
                  }}
                >
                  Analytics Dashboard
                </p>
                <p>I've built and worked on different analytics dashboards.</p>
                <p>
                  I've worked on different charts like, Bar Chart, Line Chart,
                  Pie Chart, Donut Chart etc.{" "}
                </p>
              </Fade>
            </div>
          </div>

          <div className="d-flex">
            <div className="dash_pp">
              <Fade direction="left">
                <p
                  style={{
                    borderBottom: "1px solid greenyellow",
                    fontSize: "20px",
                  }}
                >
                  Designs on Figma
                </p>
                <p>Designed Sample Screens for furniture websites. </p>
              </Fade>
            </div>
            <Fade direction="right">
              <div>
                <img
                  className="img-fluid"
                  style={{
                    marginTop: "40px",
                    height: "350px",
                    width: "580px",
                    marginLeft: "110px",
                    border: "3px solid white",
                  }}
                  alt="img"
                  src={furniture}
                />
              </div>
            </Fade>
          </div>

          <div className="d-flex">
            <div className="dash_pp">
              <Fade direction="left">
                <p>Designed Sample Screens for bookstore. </p>
              </Fade>
            </div>
            <Fade direction="right">
              <div>
                <img
                  className="img-fluid"
                  style={{
                    marginTop: "40px",
                    height: "350px",
                    width: "580px",
                    marginLeft: "190px",
                    border: "3px solid white",
                  }}
                  alt="img"
                  src={bookstore}
                />
              </div>
            </Fade>
          </div>

          <div className="d-flex">
            <div className="dash_pp">
              <Fade direction="left">
                <p>
                  Designed Sample Screens for makeup and cosmetics websites.{" "}
                </p>
              </Fade>
            </div>
            <Fade direction="right">
              <div>
                <img
                  className="img-fluid mb-4"
                  style={{
                    marginTop: "40px",
                    height: "350px",
                    width: "580px",
                    marginLeft: "10px",
                    border: "3px solid white",
                  }}
                  alt="img"
                  src={blush}
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
