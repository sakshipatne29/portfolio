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
            <span className="d-md-flex d-sm-block">
              <p>Tata Consultancy Services ~ <u> <b>Client - Aptiv - Automotive Technology Supplier</b></u> </p> <br></br>
              <p className="ms-auto"> Bengaluru</p>
            </span>
            <span className="d-md-flex d-sm-block" style={{ textAlign: "left", color: "white" }}>
              <p>Full Stack Developer</p>
              <p className="ms-auto"> January 2024 - Present</p>

            </span>

            <ul
              className="ms-5 mt-2"
              style={{
                color: "white",
                width: "910px",
                textAlign: "justify",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              <li>
                Engineered a React.js-based responsive website, reducing load times by 70% and enhancing user experience through
                optimized styling with Bootstrap.
              </li>
              <li>
                Planned and implemented a scalable role-based access control system, cutting application downtime by 30% and
                improving security measures.
              </li>
              <li>
                Developed and deployed multi-language support, expanding accessibility to a global audience in English, Chinese,
                and Spanish, increasing user adoption by 70%.
              </li>
              <li>
                Enhanced session handling by integrating local storage and session storage, improving application state
                management and reducing session-related issues by 40%
              </li>
              <li>
                Analyzed and integrated RESTful APIs using FASTAPI and Python, ensuring seamless backend connectivity and
                enhancing system efficiency by 60%.
              </li>
              <li>
                Validated and secured API requests using Pydantic, and implemented automated testing with Pytest, increasing test
                coverage by 30% and reducing production bugs by 50%.
              </li>

            </ul>
            <hr style={{ color: "white" }}></hr>

            <span className="d-md-flex d-sm-block">
              <p>Tata Consultancy Services ~ <u><b>Internal </b></u> </p><br></br>
              <p className="ms-auto">Bengaluru</p>
            </span>
            <span className="d-md-flex d-sm-block" style={{ textAlign: "left", color: "white" }}>
              <p>Full Stack Developer</p>
              <p className="ms-auto">  May 2023 - January 2024</p>

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
                Designed a scalable authentication service using FAST API and JWT, securing session management and token
                refresh, reducing authentication failures by 30%
              </li>
              <li>
                Optimized React architecture by executing design patterns like Higher-Order Components and State management
                libraries, improving code reusability by 40%.
              </li>
              <li>
                Developed an email-based password reset feature, enhancing account recovery efficiency and reducing user
                support tickets by 25%.
              </li>
              <li>
                Strengthened security by integrating password hashing and data encryption, minimizing vulnerabilities and ensuring
                100% compliance with security standards.
              </li>
            </ul>
            <hr style={{ color: "white" }}></hr>


            <span className="d-md-flex d-sm-block">
              <p>Capgemini Technology Services ~ <u><b>Client - GE Healthcare</b></u></p>
              <p>Full Stack Developer</p>
              <p className="ms-auto"> Bengaluru</p>
            </span>
            <span className="d-md-flex d-sm-block" style={{ textAlign: "left", color: "white" }}>
              <p>Full Stack Developer</p>
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
                Created robust, scalable, and responsive web applications using JavaScript and modern frameworks, accelerating
                development efficiency by 40% while ensuring seamless cross-functional team collaboration.
              </li>
              <li>
                Streamlined user experience, leading to a 30% increase in engagement by developing interactive dashboards with
                charts and graphs, reducing navigation time by 20%.
              </li>
              <li>
                Enforced high-performance pagination, reducing backend query load by 35% and enabling seamless data retrieval
                per user scroll (handling 25–50 records dynamically).
              </li>
              <li>Designed and launched a time-tracking system that automated attendance, leave, and working hour monitoring,
                cutting manual tracking errors by 50% and improving compliance..</li>
              <li>
                Resolved 95% of client-reported SQL query issues by executing complex queries, collaborating with international
                clients, and ensuring prompt ticket resolution.
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
          <div className="d-md-flex d-sm-block">
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

          <div className="d-md-flex d-sm-block">
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

          <div className="d-md-flex d-sm-block">
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

          <div className="d-md-flex d-sm-block">
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
