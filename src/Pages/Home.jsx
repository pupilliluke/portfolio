import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import ProjectsHome from "../Components/ProjectsPrev";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ProjectsHome />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
