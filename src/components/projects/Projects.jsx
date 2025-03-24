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
              <p className="heading">Equity News Research Tool (Generative AI Project)</p>
              <p>
                A user-friendly research tool refined for the financial industry, enabling users to effortlessly retrieve insights from stock market and financial news. The tool processes article content using LangChain's UnstructuredURL Loader and generates embedding vectors via OpenAI embeddings, leveraging FAISS for fast similarity-based information retrieval. The Streamlit interface allows users to query an LLM (ChatGPT) and receive detailed responses with source URLs, providing real-time, accurate analysis in a seamless, intuitive UI.
              </p>
              <p><u style={{ color: "greenyellow" }}>Tech Stack</u> ~ LLM, FAISS, Embeddings, LangChain's UnstructuredURL Loader, Streamlit</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="project">
              <p className="heading">Learning Management System (LMS)</p>
              <p>
                A comprehensive LMS built using Django for the backend, ReactJS for the UI, and MongoDB for the database, offering role-based functionality for both students and admins. The system includes authentication and analytics to enhance management and user experience. Admins can manage student registrations, track course progress, handle certifications, and perform full CRUD operations on student profiles, all while monitoring course enrollments and certification statistics. Students can register for multiple courses, track their learning progress, and receive certificates upon course completion.
              </p>
              <p><u style={{ color: "greenyellow" }}> Tech Stack ~</u> React JS, Django, MongoDB </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
