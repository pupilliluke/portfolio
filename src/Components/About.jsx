import React from "react";

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">About</span>{" "}
          <span className="text-white">Me</span>
        </h2>
      </div>
      
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 shadow-xl">
        <p className="text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Hi, I'm <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold">Luke Pupilli</span>! 
          I'm a passionate developer with a love for turning ideas into digital experiences.
          With a focus on <span className="text-blue-400 font-medium">clean code</span> and 
          <span className="text-blue-400 font-medium"> creative solutions</span>, I enjoy building projects that solve real-world problems.
          When I'm not coding, I'm working out, going on hikes, and watching sports.
        </p>
      </div>
    </section>
  );
};

export default About;