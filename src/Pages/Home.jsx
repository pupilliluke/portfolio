import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import ProjectsHome from "../Components/ProjectsPrev";
import Contact from "../Components/Contact";
import EntryScreen from "../Components/EntryScreen";
import ShaderBackground from "../Components/ui/shader-background-1";

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

      {/* Animated shader background sitting behind the hero at the top of the page */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <ShaderBackground
            className="h-full w-full opacity-60"
            speed={0.6}
            mouseEnable={false}
          />
          {/* Fade the shader into the page background so hero text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900" />
        </div>
        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      <About />
      <ProjectsHome />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
