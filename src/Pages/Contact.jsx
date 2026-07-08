import React from "react";
import Contact from "../Components/Contact"; // Adjust path if needed
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen text-slate-900 dark:text-white"
    >
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Contact Me</h1>
        <p className="text-slate-600 dark:text-gray-300 mb-10 max-w-2xl">
          I'm actively seeking software engineering opportunities where I can contribute to innovative projects and grow professionally. Feel free to reach out for collaboration, project discussions, or career opportunities.
        </p>

        <Contact />
      </section>
    </motion.div>
  );
};

export default ContactPage;
