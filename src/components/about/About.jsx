import React from "react";
import "./about.css";
import { Fade } from "react-awesome-reveal";
import girl from "../../assets/sakshi2.png";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <Fade direction="left">
              <div className="photo2-part">
                <img className="img-fluid" src={girl} alt="girl_pic" />
              </div>
            </Fade>
          </div>

          <div className="col-lg-8 col-md-12 col-sm-12 ">
            <Fade direction="right">
              <div className="about-part">
                <h5>Get To Know</h5>
                <h2>About Me</h2>
                <p>
                  Proactive and dynamic Full Stack Developer with expertise in
                  React.js, Node.js, and Python. Proven track record in
                  developing responsive and scalable web applications. Skilled
                  in leading projects, collaborating with business teams, and
                  driving technological advancements. Committed to delivering
                  high-performance applications and exceptional user
                  experiences. Growing professional as well personal skills.
                </p>
                {/* <p>
                  I am a curious, enthusiastic individual who takes the lead,
                  works smart, and embraces innovation. With projects in Python
                  and React JS under my belt, I have demonstrated my skills and
                  passion for exploring new technologies. My deep interest in
                  art and creativity fuels my drive, and I aspire to transform
                  this passion into a fulfilling career. As a software engineer,
                  my goal is to infuse creativity into my work, bringing me joy
                  as I align my passion with my profession. 😊
                </p>

                <p>
                  In addition to my technical pursuits, I find great
                  satisfaction in contributing the engineering community.
                  Platforms like Quora and Glassdoor provide me with
                  opportunities to share my thoughts and knowledge, enabling
                  better understanding and communication among individuals. It
                  brings me joy to engage with others in this way.💯
                </p>

                <p>
                  I independently acquired proficiency in Python, HTML, CSS,
                  JavaScript, and React JS through self-learning. Utilizing my
                  interest in front-end development, I leveraged React JS to
                  build this static portfolio website. Additionally, I embarked
                  on a personal project where I developed an dynamic e-commerce
                  application using React. Furthermore, I undertook the creation
                  of several mini-projects using Python. 👩🏽‍💻{" "}
                </p> */}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
