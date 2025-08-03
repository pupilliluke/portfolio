import React from "react";

const skillsData = {
  Languages: {
    items: ["Java", "HTML", "CSS", "JavaScript", "SQL", "Python"],
    color: "from-blue-500 to-blue-600",
    icon: "💻"
  },
  "Frontend Frameworks": {
    items: ["React JS", "Next.js"],
    color: "from-green-500 to-green-600",
    icon: "⚛️"
  },
  "Styling Libraries": {
    items: ["Bootstrap", "Tailwind CSS"],
    color: "from-yellow-500 to-yellow-600",
    icon: "🎨"
  },
  "Backend Frameworks": {
    items: ["Spring Boot", "ASP.NET Core"],
    color: "from-red-500 to-red-600",
    icon: "🛠️"
  },
  "Databases & CMS": {
    items: ["MySQL", "SQLite", "Firebase"],
    color: "from-purple-500 to-purple-600",
    icon: "🗄️"
  },
  "Other Tools": {
    items: ["Jira", "Atlassian", "Bitbucket", "VS Code", "Git", "GitHub", "Node.js"],
    color: "from-indigo-500 to-indigo-600",
    icon: "🔧"
  },
};

const Skills = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Skills</span> & <span className="text-white">Technologies</span>
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          I specialize in building seamless, user-friendly applications using proven web technologies. 
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-medium"> My toolkit includes:</span>
        </p>
      </div>

      <div className="grid gap-8 md:gap-12">
        {Object.entries(skillsData).map(([category, { items, color, icon }]) => (
          <div key={category} className="group">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center text-2xl shadow-lg`}>
                  {icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-600 to-transparent opacity-50"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {items.map((item) => (
                  <div
                    key={item}
                    className="group/skill"
                  >
                    <div className={`relative bg-slate-700/50 hover:bg-gradient-to-r hover:${color} text-slate-200 hover:text-white text-sm font-medium px-4 py-3 rounded-xl border border-slate-600/30 hover:border-transparent transition-all duration-300 text-center cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105`}>
                      <span className="relative z-10">{item}</span>
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Progress indicator */}
              <div className="mt-6 h-1 bg-slate-700/30 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${color} rounded-full w-full transition-all duration-1000 delay-300`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;