import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import ProjectsHome from "../Components/ProjectsPrev";
import Contact from "../Components/Contact";
import EntryScreen from "../Components/EntryScreen";

const Home = () => {
  // Show the spiral entry splash once per browser session (first site load).
  const [showEntry, setShowEntry] = useState(
    () => sessionStorage.getItem("hasEnteredSite") !== "true"
  );

  // Lock page scroll while the entry overlay is visible.
  useEffect(() => {
    if (showEntry) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [showEntry]);

  const handleEnter = () => {
    sessionStorage.setItem("hasEnteredSite", "true");
    setShowEntry(false);
  };

  return (
    <>
      {showEntry && <EntryScreen onEnter={handleEnter} />}
      <Hero />
      <About />
      <ProjectsHome />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
