import React, { useState } from "react";
import experiences, { nonTechnicalExperiences } from "../Data/experiences.js";
import { motion } from "framer-motion";
import ShaderBackground from "../Components/ui/shader-background-1";

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

const ExperienceToggle = ({ active, onChange }) => {
  const tabs = [
    { key: "technical", label: "Technical" },
    { key: "nonTechnical", label: "Non-Technical" },
  ];

  return (
    <div className="flex justify-center mb-12">
      {/* Border: 1px top/sides, 3px bottom; border-slate-500 is a lighter shade than the slate-700 toggle */}
      <div className="inline-flex w-full max-w-xl rounded-2xl border border-b-[3px] border-slate-500 bg-slate-700 p-1 overflow-hidden">
        {tabs.map((tab) => {
          const isActive = active === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onChange(tab.key)}
              className={`flex-1 rounded-xl px-8 py-4 text-lg font-semibold transition-colors duration-300 ${
                isActive
                  ? "bg-slate-900 text-white shadow-inner"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState("technical");
  const list = activeTab === "technical" ? experiences : nonTechnicalExperiences;

  return (
    <div className="relative overflow-hidden">
      {/* Ambient shader background (moved from the home page hero) */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <ShaderBackground
          className="h-full w-full opacity-60"
          speed={0.6}
          mouseEnable={false}
        />
        {/* Fade the shader so foreground text stays readable */}
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        id="experience"
        className="relative max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Experience</h2>

        <ExperienceToggle active={activeTab} onChange={setActiveTab} />

        <div className="space-y-8">
          {list.map((exp, index) => (
            <ExperienceCard key={`${activeTab}-${index}`} exp={exp} />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Experience;
