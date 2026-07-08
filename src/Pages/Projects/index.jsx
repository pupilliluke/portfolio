import React from "react";
import projects from "../../Data/projects.js";
import ArcGalleryHero from "../../Components/ui/arc-gallery-hero.jsx";

// Known-missing image files to keep out of the arc gallery.
const MISSING_IMAGES = new Set(["/images/projects/collins-signatures-thumbnail.png"]);

// Clickable arc cards, each linking to its project's slug page.
const arcCards = projects
  .filter((p) => p.image && !MISSING_IMAGES.has(p.image))
  .map((p) => ({
    image: p.image,
    title: p.title,
    href: `/projects/${p.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")}`,
  }))
  .slice(0, 12);

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

const ProjectsPage = () => {
  return (
    <>
      {/* Arc gallery of project cards (no text/buttons) */}
      <ArcGalleryHero
        items={arcCards}
        title={null}
        subtitle={null}
        primaryLabel={null}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">All</span> <span className="text-white">Projects</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Explore my complete portfolio of projects, from{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-medium">web applications</span> to{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-medium">mobile solutions</span>.
        </p>
        
        {/* Project stats */}
        <div className="flex justify-center gap-8 mt-8 pt-8 border-t border-slate-800/50">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-1">{projects.length}+</div>
            <div className="text-sm text-slate-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-1">15+</div>
            <div className="text-sm text-slate-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-1">3+</div>
            <div className="text-sm text-slate-400">Years</div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const slug = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
          return (
            <a key={project.title} href={`/projects/${slug}`} className="group">
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
          );
        })}
      </div>
      </div>
    </>
  );
};

export default ProjectsPage;
