import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Oliver Projections Website",
    date: "May 31, 2025",
    description: "An encyclopedia for statistics and portal for expert analysis and projections covering all leagues and ages in the baseball world.",
    tags: ["Javascript", "Python", "SQL", "React", "HTML", "CSS"],
    type: "WEBAPP",
    image: "/oliver.png",
  },
  {
    title: "Flash Stats Website",
    date: "December 4, 2024",
    description: "A browser extension designed to assist users in solving LeetCode problems by providing real-time information and tools.",
    tags: ["Framer Motion", "React", "Typescript", "Tailwind"],
    type: "WEB",
    image: "/leetbot.png",
  },
  {
    title: "Fusion Help Desk Ticketing System",
    date: "October 15, 2024",
    description: "A comprehensive ticketing system for managing customer support requests, integrating with various communication channels.",
    tags: ["Python", "Django", "PostgreSQL", "HTML", "CSS"],
    type: "WEBAPP",
    image: "/fusion.png",
  },

];

const Projects = () => {
  return (
        <motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
      <p className="text-gray-300 mb-10">
        Here are some of the projects I've worked on, showcasing my skills in web development, problem-solving, and creativity.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
<div
  key={project.title}
  className="bg-[#1e293b] rounded-xl overflow-hidden shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(255,115,0,0.4)]"
>
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                {project.type}
              </span>
              <h3 className="text-white font-bold text-lg mt-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{project.date}</p>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
       <a
  href="/projects"
  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm inline-block transition"
>
  More Projects
</a>
      </div>
    </section>
        </motion.section>
  );
};

export default Projects;