// src/pages/Projects/[slug].jsx
import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../Data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();

  const project = projects.find((p) =>
    p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return <p className="text-white p-10">Project not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg mb-6 shadow-lg"
      />
      <p className="text-gray-400 mb-2">
        {project.date} — <span className="uppercase">{project.type}</span>
      </p>
      <p className="text-gray-300 mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
