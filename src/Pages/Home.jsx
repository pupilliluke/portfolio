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
import useIsMobile from "../hooks/useIsMobile";

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
  const isMobile = useIsMobile();

  // Show the spiral entry splash once per browser session (first site load).
  // Skip it on mobile — the 5000-star canvas can freeze/crash phone browsers.
  const [showEntry, setShowEntry] = useState(
    () => sessionStorage.getItem("hasEnteredSite") !== "true"
  );
  const entryVisible = showEntry && !isMobile;

  // Lock page scroll while the entry overlay is visible.
  useEffect(() => {
    if (entryVisible) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [entryVisible]);

  const navigate = useNavigate();

  const handleEnter = () => {
    sessionStorage.setItem("hasEnteredSite", "true");
    setShowEntry(false);
  };

  return (
    <>
      {entryVisible && <EntryScreen onEnter={handleEnter} />}

      <Hero />

      <About />
      {/* Featured projects carousel — desktop/tablet only */}
      <div className="hidden md:block">
        <ProjectsHome />
      </div>

      <Skills />

      {/* Arc gallery of projects, underneath the featured projects carousel */}
      <ArcGalleryHero
        items={arcCards}
        title="Projects & Portfolio"
        subtitle="A tour through the applications, platforms, and tools I've designed, built, and shipped. Click any card to dive in."
        primaryLabel="View All Projects"
        onPrimary={() => navigate("/projects")}
      />

      <Contact />
    </>
  );
};

export default Home;
