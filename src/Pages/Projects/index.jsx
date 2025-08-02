// src/pages/Projects/index.jsx
import React from "react";
import projects from "../../Data/projects.js";
import ProjectCard from "../../Components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-10">All Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
