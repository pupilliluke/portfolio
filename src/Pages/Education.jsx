import React from "react";
import { motion } from "framer-motion";
// import wvuImg from "../../images/wvu.jpg"; 

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="education"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <div className="mb-12">
        <img
        src="/images/wvu.jpg"
          alt="West Virginia University"
          className="w-full h-60 object-cover rounded-xl shadow-lg"
        />
      </div>

      <h2 className="text-4xl font-bold text-white mb-4">West Virginia University</h2>
      <h3 className="text-xl text-orange-400 font-semibold mb-2">
        Bachelor of Science in Computer Science
      </h3>
      <p className="text-gray-400 text-sm mb-8">August 2020 – Dec 2024 • Morgantown, WV</p>

      <p className="text-gray-300 text-md leading-relaxed mb-10 max-w-3xl">
        ABET accredited computer science education with focus on software engineering principles, data structures, algorithms, and system design. Gained hands-on experience in full SDLC on agile teams, full-stack development, database management, creating machine learning models, and big data engineering through project-based learning.
      </p>

      {/* Relevant Coursework */}
      <div className="mb-12">
        <h4 className="text-lg text-white font-semibold mb-2">Relevant Coursework</h4>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 pl-4">
          <li>Data Structures & Algorithms</li>
          <li>Artificial Intelligence</li>
          <li>Operating Systems</li>
          <li>Database Systems</li>
          <li>Software Engineering I & II</li>
          <li>Big Data Engineering (Grad Level)</li>
          <li>Calculus 1-3</li>
        </ul>
      </div>

      {/* Extracurriculars */}
      <div>
        <h4 className="text-lg text-white font-semibold mb-2">Extracurricular Activities</h4>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 pl-4">
          <li>WVU Ai Club</li>
          <li>Theta Chi Fraternity</li>
          <li>WVU Engineering Challenge Camp Counselor</li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Education;
