import React from "react";
import { Link } from "react-router-dom";

import skillsData from "../Data/skillsData"; // adjust path as needed

const Skills = () => {
  const categories = Object.entries(skillsData);
  const totalSkills = new Set(
    categories.flatMap(([, { items }]) => items)
  ).size;

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Skills</span> & <span className="text-slate-900 dark:text-white">Technologies</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          I build seamless, user-friendly applications across the full stack — from
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-medium"> {totalSkills}+ tools and technologies</span> spanning frontend, backend, data, and cloud.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(([category, { color, icon }]) => (
          <div
            key={category}
            className="flex items-center gap-4 bg-white/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-5 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-slate-600"
          >
            <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center text-2xl shadow-lg`}>
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category}</h3>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/skills"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          Explore all skills
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
};

export default Skills;
