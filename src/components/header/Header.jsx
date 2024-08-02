import React from "react";
import "./header.css";
import mee from "../../assets/IMG_3030.JPG";
// import ReactPlayer from 'react-player'
import girl from "../../assets/sakshi.png";
import { Fade } from "react-awesome-reveal";
import { FaGithubSquare } from "react-icons/fa";
// import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

const Header = () => {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  // const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  return (
    <section id="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="intro-part">
              <Fade direction="left">
                <h4>
                  <b>Hello!</b>
                </h4>
              </Fade>
              <div className="new_div">
                <Fade direction="left" delay={1000}>
                  <p className="name-part">
                    <span>I'm </span>
                    <span
                      style={{
                        color: "orange",
                      }}
                    >
                      Sakshi Patne.
                    </span>
                    <br></br>
                    <span style={{ fontSize: "33px" }}>
                      Fullstack Developer <br></br>
                      <span style={{ marginLeft: "85px" }}>& </span>
                      <br></br>
                      <span> UI/UX Designer .</span>
                    </span>
                  </p>
                </Fade>
              </div>
            </div>
            <Fade direction="left" delay={1500}>
              <div
                className="header_socials d-flex mt-2"
                style={{
                  backgroundColor: "",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <li>
                  <span className="tooltip">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/sakshi-patne-b89a201b6/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <BsLinkedin
                      style={{
                        fontSize: "28px",
                        color: "#0a638c",
                        backgroundColor: "white",
                        borderRadius: "10px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sakshipatne29"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <FaGithubSquare
                      style={{ fontSize: "30px", color: "white" }}
                    />
                  </a>
                  <span className="tooltip">Github</span>
                </li>
                <li>
                  <a
                    href="https://twitter.com/sakshi_patne"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <AiFillTwitterSquare
                      style={{
                        fontSize: "30px",
                        color: "blue",
                        borderRadius: "10px",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                  <span className="tooltip">Twitter</span>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/sakshi._.patne/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <AiFillInstagram
                      className="insta"
                      style={{ fontSize: "30px" }}
                    />
                  </a>
                  <span className="tooltip">Instagram</span>
                </li>
              </div>
            </Fade>
            <Fade direction="left" delay={1500}>
              <a
                className="btn mt-1 mb-2"
                href="www.google.com"
                role="button"
                style={{
                  backgroundColor: "greenyellow",
                  color: "black",
                  fontSize: "15px",
                  padding: "5px",
                  width: "20vh",
                }}
              >
                Contact Me
              </a>
            </Fade>
          </div>
       
        <div className="col-lg-6 col-md-12 col-sm-12 ">
        <Fade direction="right"  delay={2000}>
          <div className="about-part">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <p>
              Proactive and dynamic Full Stack Developer with expertise in
              React.js, Node.js, and Python. Proven track record in developing
              responsive and scalable web applications. Skilled in leading
              projects, collaborating with business teams, and driving
              technological advancements. Committed to delivering
              high-performance applications and exceptional user experiences.
              Growing professional as well personal skills.
            </p>
          </div>
          </Fade>
        </div>
      </div>

      <div className="col-lg-8 col-md-12 col-sm-12 ">
        <Fade direction="right">
          <a href="#" className="scroll_down">
            Scroll Down
          </a>
        </Fade>
      </div>
      </div>
    </section>
  );
};

export default Header;
