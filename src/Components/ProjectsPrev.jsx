import React from "react";

const featuredProjects = [
  {
    slug: "fusion-help-desk-ticketing-application",
    title: "Fusion Help Desk Ticketing Application",
    date: "Sept 2024 – April 2026",
    description: "Enterprise-grade internal IT support platform (Spring Boot + Azure) with Microsoft SSO, role-based dashboards, full ticket lifecycle management, and automated Excel reporting — built and shipped by a 12-person team over 19 months.",
    tags: ["Java 21", "Spring Boot 3", "Spring Security", "Azure AD / OAuth2", "Azure SQL", "Apache POI"],
    type: "WEBAPP",
    image: "/images/projects/HelpDeskImage.jpg",
  },
  {
    slug: "warehouse-inventory-management-system",
    title: "Warehouse Inventory Management System",
    date: "July 1, 2025",
    description: "Real-time inventory management system with automated stock tracking. Built on a lightweight cloud architecture with Firebase integration, currently serving 50+ users.",
    tags: ["TypeScript", "Node.js", "Firebase DB & Hosting", "React"],
    type: "WEBAPP",
    image: "/images/projects/crackingandstacking.png",
  },
  {
    slug: "rocket-league-beer-league-site",
    title: "Rocket League Beer League Site",
    date: "July 7, 2025",
    description: "Community gaming league platform with an admin dashboard, tournament management, and real-time leaderboards. Features responsive design and dynamic content updates.",
    tags: ["React", "Node.js", "Vercel Hosting", "Firebase DB", "Tailwind CSS"],
    type: "WEBAPP",
    image: "/images/projects/rlbl.png",
  },
];

const getTypeColor = (type) => {
  const colors = {
    'WEBAPP': 'from-blue-500 to-blue-600',
    'WEB': 'from-green-500 to-green-600',
    'MOBILEAPP': 'from-yellow-500 to-yellow-600',
    'OS': 'from-red-500 to-red-600',
    'Virtual Reality Unity3D App': 'from-purple-500 to-purple-600',
    default: 'from-slate-500 to-slate-600'
  };
  return colors[type] || colors.default;
};

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Featured</span> <span className="text-white">Projects</span>
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Here are some of the projects I've worked on, showcasing my skills in{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-medium">web development</span>, problem-solving, and creative thinking.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <a key={project.slug} href={`/projects/${project.slug}`} className="group">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105">
              {/* Image/Video section */}
              <div className="relative overflow-hidden">
                {project.video ? (
                  <iframe
                    src={`${project.video}?autoplay=1&mute=1&loop=1&playlist=${project.video.split('/embed/')[1]}&controls=0`}
                    title={project.title}
                    className="w-full h-48 transition-transform duration-700 group-hover:scale-105"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Type badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-block bg-gradient-to-r ${getTypeColor(project.type)} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-white/20`}>
                    {project.type}
                  </span>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>

              {/* Content section */}
              <div className="p-6 relative">
                <h3 className="text-white font-bold text-xl mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-3 font-medium">{project.date}</p>
                
                <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3 group-hover:text-slate-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white text-xs px-3 py-1.5 rounded-full border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="/projects"
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
        >
          <span className="flex items-center gap-2">
            View All Projects
            <span>→</span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Projects;