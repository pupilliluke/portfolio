import React from "react";
import { motion } from "framer-motion";
import projects from "../Data/projects.js"; // adjust path as needed
import data from "../Data/skillsData.js"; // adjust path as needed


// Collect all tags from the projects array
const projectTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort(); // optional sort for consistency

// Map each project tag to a skill category so project-derived
// technologies are grouped like the base skills instead of a flat list.
const TAG_CATEGORY = {
  // Languages
  Java: "Languages",
  "Java 21": "Languages",
  Python: "Languages",
  "C#": "Languages",
  C: "Languages",
  HTML: "Languages",
  CSS: "Languages",
  JavaScript: "Languages",
  Javascript: "Languages",
  TypeScript: "Languages",
  SQL: "Languages",
  Assembly: "Languages",
  // Frontend Frameworks
  React: "Frontend Frameworks",
  "Next.js": "Frontend Frameworks",
  "Three.js": "Frontend Frameworks",
  Zustand: "Frontend Frameworks",
  // Styling Libraries
  "Tailwind CSS": "Styling Libraries",
  // Backend Frameworks
  "Spring Boot": "Backend Frameworks",
  "Spring Boot 3": "Backend Frameworks",
  "Spring Security": "Backend Frameworks",
  "Hibernate / JPA": "Backend Frameworks",
  JSP: "Backend Frameworks",
  "ASP.NET Core": "Backend Frameworks",
  ".NET Core": "Backend Frameworks",
  "Node.js": "Backend Frameworks",
  "REST API": "Backend Frameworks",
  "Unity 3D": "Backend Frameworks",
  // Databases & CMS
  MySQL: "Databases & CMS",
  PostgreSQL: "Databases & CMS",
  "Azure SQL": "Databases & CMS",
  Firebase: "Databases & CMS",
  "Firebase DB": "Databases & CMS",
  "Firebase DB & Hosting": "Databases & CMS",
  // Cloud & DevOps
  "Azure AD / OAuth2": "Cloud & DevOps",
  AWS: "Cloud & DevOps",
  Vercel: "Cloud & DevOps",
  "Vercel Hosting": "Cloud & DevOps",
  Docker: "Cloud & DevOps",
  "Apache Spark": "Cloud & DevOps",
  Hadoop: "Cloud & DevOps",
  SonarQube: "Cloud & DevOps",
  "Google OAuth2.0": "Cloud & DevOps",
  "OAuth2.0": "Cloud & DevOps",
  // Other Tools
  "Apache POI": "Other Tools",
  "JUnit 5": "Other Tools",
  Stripe: "Other Tools",
  Jira: "Other Tools",
  Teams: "Other Tools",
  Vite: "Other Tools",
  Linux: "Other Tools",
  Oculus: "Other Tools",
  // Concepts & Fundamentals
  "Compiler Design": "Concepts & Fundamentals",
  "Language Parsing": "Concepts & Fundamentals",
  "Lexical Analysis": "Concepts & Fundamentals",
  "Code Generation": "Concepts & Fundamentals",
};

const CATEGORY_ORDER = [
  "Languages",
  "Frontend Frameworks",
  "Styling Libraries",
  "Backend Frameworks",
  "Databases & CMS",
  "Cloud & DevOps",
  "Other Tools",
  "Concepts & Fundamentals",
];

// Group the project tags under their categories.
const groupedProjectTags = projectTags.reduce((acc, tag) => {
  const category = TAG_CATEGORY[tag] || "Other Tools";
  (acc[category] = acc[category] || []).push(tag);
  return acc;
}, {});

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="skills"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Skills</h2>
      <p className="text-slate-600 dark:text-gray-300 mb-6">
        I specialize in building seamless, user-friendly applications using proven web technologies. My toolkit includes:
      </p>

      {/* Base skill categories */}
      <div className="space-y-6 mb-12">
         {Object.entries(data).map(([category, { items, color, icon }]) => (

          <div key={category}>
            <h3 className="text-lg text-slate-900 dark:text-white font-semibold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-white hover:text-white text-sm px-3 py-1 rounded-full transition duration-300 hover:bg-orange-500 hover:scale-105"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic project-derived skills, grouped by category */}
      <div className="space-y-6">
        {CATEGORY_ORDER.filter((category) => groupedProjectTags[category]).map(
          (category) => (
            <div key={category}>
              <h3 className="text-lg text-slate-900 dark:text-white font-semibold mb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {groupedProjectTags[category].map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-white hover:text-white text-sm px-3 py-1 rounded-full transition duration-300 hover:bg-orange-500 hover:scale-105"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </motion.section>
  );
};

export default Skills;
