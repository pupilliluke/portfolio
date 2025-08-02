import React from "react";
import Contact from "../Components/Contact"; // Adjust path if needed
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#0f172a] text-white"
    >
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
        <p className="text-gray-300 mb-10 max-w-2xl">
          If you're interested in collaborating, have a project in mind, or just want to chat about development, feel free to drop a message.
        </p>

        <Contact />
      </section>
    </motion.div>
  );
};

export default ContactPage;
