import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto p-6 pt-24">
      <div className="max-w-xl">
        <p className="text-lg mb-2">Hola 👋</p>
        <h1 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Luke</span>{" "}
          <span className="text-white">Pupilli</span>
        </h1>
        <p className="text-slate-300 mb-4">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold">Full-Stack Developer</span>{" "}
          | Java, Spring, AWS, Azure | Building scalable services used by MLB teams & ML Research Teams from{" "}
          <span className="text-blue-400 font-medium">Pittsburgh, PA</span>
        </p>
        <div className="flex gap-4">
          <a 
            href="/contact" 
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
          <a 
            href="/Luke Pupilli Resume 12.8.2025.pdf" 
            download 
            className="bg-green-700 hover:bg-slate-600/50 text-white font-medium px-6 py-3 rounded-lg border border-green-600/50 hover:border-slate-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
        
        {/* Stats */}
        <div className="hidden lg:flex gap-8 mt-12 pt-8 border-t border-slate-700/50">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-1">15+</div>
            <div className="text-sm text-slate-400">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-1">20+</div>
            <div className="text-sm text-slate-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-1">3+ Years</div>
            <div className="text-sm text-slate-400">Experience</div>
          </div>
        </div>
      </div>

      <div className="relative mb-8 lg:mb-0">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          <img 
            src="/images/luke-pupilli.png" 
            alt="Luke Pupilli" 
            className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-xl border border-slate-700/50 group-hover:shadow-blue-500/20 transition-all duration-500" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;