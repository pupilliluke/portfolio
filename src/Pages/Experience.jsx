import React from "react";
import experiences, { nonTechnicalExperiences } from "../Data/experiences.js";
import { motion } from "framer-motion";

const ExperienceCard = ({ exp }) => (
  <div className="bg-[#1e293b] p-6 rounded-lg shadow-md transition hover:shadow-lg">
    <div className="flex flex-col md:flex-row md:justify-between mb-2">
      <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
      <span className="text-sm text-orange-400">
        {exp.startDate} – {exp.endDate}
      </span>
    </div>
    <p className="text-sm text-gray-400 mb-1">
      {exp.company} • {exp.location}
      {exp.website && (
        <>
          {" • "}
          <a
            href={exp.website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-1"
          >
            {exp.website.text}
            <img src={exp.website.icon} alt="External link" className="w-3 h-3" />
          </a>
        </>
      )}
    </p>
    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
  </div>
);

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="experience"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-white mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>

      {nonTechnicalExperiences.length > 0 && (
        <>
          <h2 className="text-3xl font-bold text-white mt-16 mb-6">
            Non-Technical Experience
          </h2>
          <div className="space-y-8">
            {nonTechnicalExperiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} />
            ))}
          </div>
        </>
      )}
    </motion.section>
  );
};

export default Experience;
