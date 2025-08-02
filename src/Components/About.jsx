import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const About = () => {
  return (
    <motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-6">About me</h2>
      <p className="text-gray-300 leading-relaxed">
        Hi, I'm Luke Pupilli! I'm a passionate developer with a love for turning ideas into digital experiences.
        With a focus on clean code and creative solutions, I enjoy building projects that solve real-world problems.
        When I'm not coding, I'm working out, going on hikes, and watching sports.
      </p>
    </section>
    </motion.section>

  );
};

export default About;