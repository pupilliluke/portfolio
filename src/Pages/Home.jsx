import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import ProjectsHome from "../Components/ProjectsPrev";
import Contact from "../Components/Contact";
import EntryScreen from "../Components/EntryScreen";
import ArcGalleryHero from "../Components/ui/arc-gallery-hero";
import projects from "../Data/projects.js";

// Known-missing image files to keep out of the arc gallery.
const MISSING_IMAGES = new Set(["/images/projects/collins-signatures-thumbnail.png"]);

// Build clickable arc cards from project data, each linking to its slug page.
const arcCards = projects
  .filter((p) => p.image && !MISSING_IMAGES.has(p.image))
  .map((p) => ({
    image: p.image,
    title: p.title,
    href: `/projects/${p.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")}`,
  }))
  .slice(0, 12);

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

  const navigate = useNavigate();

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

      {/* Arc gallery of projects, underneath the featured projects carousel */}
      <ArcGalleryHero
        items={arcCards}
        title="Projects & Portfolio"
        subtitle="A visual tour through the applications, platforms, and tools I've designed, built, and shipped. Click any card to dive in."
        primaryLabel="View All Projects"
        onPrimary={() => navigate("/projects")}
      />

      <Skills />
      <Contact />
    </>
  );
};

export default Home;
