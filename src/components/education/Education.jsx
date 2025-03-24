import React from "react";
import "./education.css";
import bg from "../../assets/bg.png";
import restapi from "../../assets/restapi.png";
import figma from "../../assets/Figma.png";
import { Fade } from "react-awesome-reveal";
import { SiMongodb, SiSqlite, SiOracle, SiPostman, SiDocker, SiRecoil, SiChartdotjs, SiI18Next } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs, FaNpm } from "react-icons/fa6";

import { BiLogoJavascript } from "react-icons/bi";
import { IoLogoPython } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { BsBootstrapFill, BsGithub } from "react-icons/bs";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <div className="row">
          <Fade direction="down">
            <p className="title-part mt-5">Here's what I do</p>
          </Fade>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Fade direction="left">
              <div className="text-part">
                <p className="p-ed mt-3">Full Stack Development</p>
              </div>
              {/* <div className="outside-icons"> */}
              <div className="icons ms-5 mt-2">
                <div className="d-flex">
                  <p className="mt-4"> Database:</p>
                  <li>
                    <SiMongodb style={{ color: "#88D66C" }} />
                    <span className="tooltip">MongoDB</span>{" "}
                  </li>
                  <li>
                    <SiOracle style={{ color: "red" }} />
                    <span className="tooltip">Oracle DB</span>{" "}
                  </li>
                  <li className="ms-2">
                    <SiMysql
                      style={{ color: "rgb(75, 190, 225)", fontSize: "55px" }}
                    />
                    <span className="tooltip">MySQL</span>
                  </li>
                  <li className="ms-2">
                    <SiSqlite style={{ color: "#A0DEFF", fontSize: "40px" }} />
                    <span className="tooltip">Sqlite </span>
                  </li>
                </div>
              </div>
              <div className="icons ms-5 mt-2">
                <div className="d-flex">
                  <p className="mt-4">Backend:</p>

                  <li>
                    <FaNodeJs style={{ color: "#B0EBB4" }} />
                    <span className="tooltip">Node JS</span>{" "}
                  </li>
                  <img
                    className="img-fluid mt-2"
                    src={restapi}
                    alt="pic"
                    style={{ height: "50px", width: "100%" }}
                  />

                  <li>
                    <p
                      className="mt-4"
                      style={{
                        width: "210px",
                        textDecoration: "underline",
                        textDecorationColor: "greenyellow",
                      }}
                    >
                      Json Web Token (JWT)
                    </p>
                  </li>
                </div>
              </div>
              <div className="icons ms-5 mt-2">
                <div className="d-flex">
                  <p className="mt-4"> Frontend:</p>

                  <li>
                    <GrReactjs style={{ color: "rgb(38, 114, 229)" }} />
                    <span className="tooltip">React</span>{" "}
                  </li>

                  <li className="ms-2">
                    <BiLogoJavascript style={{ color: "yellow" }} />
                    <span className="tooltip">Javascript</span>
                  </li>
                  <li className="ms-2">
                    <DiCss3Full style={{ color: " rgb(38, 114, 229)" }} />
                    <span className="tooltip">CSS3</span>
                  </li>
                  <li className="ms-2">
                    <AiFillHtml5 style={{ color: "orange" }} />
                    <span className="tooltip">HTML5</span>
                  </li>
                </div>
              </div>
              <div className="icons ms-5 mt-2">
                <div className="d-flex">
                  <p className="mt-4"> Libraries/Frameworks:</p>
                  <li className="">
                    <FaNpm style={{ backgroundColor: "#FF4C4C", color: "white" }} />
                    <span className="tooltip">Node Package Manager(NPM)</span>
                  </li>
                  <li className="ms-2">
                    <BsBootstrapFill style={{ color: "purple" }} />
                    <span className="tooltip">Bootstrap</span>
                  </li>
                  <li className="ms-2">
                    <SiRecoil style={{ color: "white", backgroundColor: "#008DDA" }} />
                    <span className="tooltip">Recoil JS</span>
                  </li>
                  <li className="ms-2">
                    <SiChartdotjs style={{ color: "#FF9EAA" }} />
                    <span className="tooltip">Chart JS</span>
                  </li>
                  <li className="ms-2">
                    <SiI18Next style={{ color: "#219C90" }} />
                    <span className="tooltip">i18next</span>
                  </li>
                </div>
              </div>
              <div className="icons ms-5 mt-2">
                <div className="d-flex">
                  <p className="mt-4"> Tools:</p>
                  <li className="ms-2">
                    <BsGithub />
                    <span className="tooltip">Git(version control)</span>
                  </li>
                  <li className="ms-2">
                    <SiPostman style={{ color: "#FF6500", background: "white" }} />
                    <span className="tooltip">Postman</span>
                  </li>
                  <li className="ms-2">
                    <SiDocker style={{ color: "#03AED2" }} />
                    <span className="tooltip">Docker</span>
                  </li>
                  <img
                    className="img-fluid mt-3 ms-2"
                    src={figma}
                    alt="pic"
                    style={{ height: "40px", width: "100%" }}
                  />
                  <p
                    className="mt-4 ms-1"
                    style={{
                      width: "50px"
                    }}
                  >
                    (Figma)
                  </p>
                  {/* <li className="ms-2">
                    <SiFigma   style={{  background: "linear-gradient(90deg, rgba(236,3,8,0.499124649859944) 6%, rgba(157,22,2,1) 23%, rgba(228,87,22,0.8576680672268908) 35%, rgba(16,222,188,1) 55%, rgba(20,94,6,1) 83%)"
 }} />
                    <span className="tooltip">Figma</span>
                  </li> */}
                </div>
              </div>
              <div className="texts">
                <p className="p-text mt-4">
                  <TbArrowBadgeRightFilled style={{ color: "greenyellow" }} />
                  Building responsive and dynamic websites using ReactJS.{" "}
                </p>
              </div>
            </Fade>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <Fade direction="right">
              <div className="img-parts">
                <img className="img-fluid" src={bg} alt="pic" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
