import React from "react";
import Header from "./components/header/Header";
import Experience from "./components/experience/Experience";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Experience />
      <Projects />
    </>
  );
};

export default App;
