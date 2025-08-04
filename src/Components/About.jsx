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
          I'm <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold">Luke Pupilli</span>, a full-stack software engineer with 3+ years of experience building scalable web applications and enterprise solutions. 
          I specialize in <span className="text-blue-400 font-medium">React.js, Node.js, and cloud technologies</span>, with expertise in 
          <span className="text-blue-400 font-medium"> database design, API development, and DevOps practices</span>. 
          My passion lies in creating efficient, maintainable code that drives business value and delivers exceptional user experiences. 
          I thrive in collaborative environments and enjoy solving complex technical challenges.
        </p>
      </div>
    </section>
  );
};

export default About;