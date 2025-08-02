import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const skills = {
  Languages: ["Java", "HTML", "CSS", "JavaScript", "SQL", "Python"],
  "Frontend Frameworks": ["React JS", "Next.js"],
  "Styling Libraries": ["Bootstrap", "Tailwind CSS"],
  "Backend Frameworks": ["Spring Boot", "ASP.NET Core"],
  "Databases & CMS": ["MySQL", "SQLite", "Firebase"],
  "Other Tools": ["Jira", "Atlassian", "Bitbucket", "VS Code", "Git", "GitHub", "Node.js"],
};

const Skills = () => {
  return (
    <motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
      <p className="text-gray-300 mb-6">
        I specialize in building seamless, user-friendly applications using proven web technologies. My toolkit includes:
      </p>
      <div className="space-y-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg text-white font-semibold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
  key={item}
  className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full transition duration-300 hover:bg-orange-500 hover:scale-105"
>
  {item}
</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </motion.section>

  );
};

export default Skills;