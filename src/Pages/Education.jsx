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
      <p className="text-gray-400 text-sm mb-8">August 2021 – May 2025 • Morgantown, WV</p>

      <p className="text-gray-300 text-md leading-relaxed mb-10 max-w-3xl">
        At WVU, I developed a strong foundation in full-stack software development, systems thinking, and collaborative engineering. From advanced algorithms to responsive UI design, my academic experience prepared me to build elegant, scalable web applications with real-world impact.
      </p>

      {/* Relevant Coursework */}
      <div className="mb-12">
        <h4 className="text-lg text-white font-semibold mb-2">Relevant Coursework</h4>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 pl-4">
          <li>Data Structures & Algorithms</li>
          <li>Web Development</li>
          <li>Operating Systems</li>
          <li>Database Systems</li>
          <li>Software Engineering</li>
          <li>Computer Architecture</li>
        </ul>
      </div>

      {/* Extracurriculars */}
      <div>
        <h4 className="text-lg text-white font-semibold mb-2">Extracurricular Activities</h4>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 pl-4">
          <li>President, WVU Software Engineering Club</li>
          <li>Member, ACM Student Chapter</li>
          <li>WVU Hackathon Finalist 2023</li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Education;
