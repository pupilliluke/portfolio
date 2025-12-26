import React from "react";
import { useParams } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaClock, FaUsers, FaCode } from "react-icons/fa";
import projects from "../../Data/projects";

// Import project templates
import { flashstatsTemplate } from "./flashstats-template";
import { inventoryAppTemplate } from "./inventory-app-template";
import { picardTemplate } from "./picard-template";
import { fitnessTrackerTemplate } from "./fitness-tracker-template";
import { rocketLeagueTemplate } from "./rocket-league-template";
import { juiceShopTemplate } from "./juice-shop-template";
import { compilerTemplate } from "./compiler-template";
import { collinsSignaturesTemplate } from "./collins-signatures-template";
import { FusionHelpDeskTemplate } from './fusion-helpdesk-template';
import { OliverProjectionsTemplate } from './oliver-projections-template';

const ProjectDetail = () => {
  const { slug } = useParams();

  const project = projects.find((p) =>
    p.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, '') === slug
  );

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-slate-400 mb-8">The project you're looking for doesn't exist.</p>
        <a 
          href="/projects" 
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Back to Projects
        </a>
      </div>
    );
  }

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

  // Get project-specific template data
  const getTemplateData = (projectTitle) => {
    const titleLower = projectTitle.toLowerCase();
    
    if (titleLower.includes('collins signatures')) {
      return collinsSignaturesTemplate;
    }
    if (titleLower.includes('oliver projections')) {
      return OliverProjectionsTemplate;
    }
    if (titleLower.includes('fusion help')) {
      return FusionHelpDeskTemplate;
    }
    if (titleLower.includes('flash stats')) {
      return flashstatsTemplate;
    }
    if (titleLower.includes('warehouse inventory')) {
      return inventoryAppTemplate;
    }
    if (titleLower.includes('picard')) {
      return picardTemplate;
    }
    if (titleLower.includes('fittrackr') || titleLower.includes('fitness')) {
      return fitnessTrackerTemplate;
    }
    if (titleLower.includes('rocket league')) {
      return rocketLeagueTemplate;
    }
    if (titleLower.includes('plntd sips')) {
      return juiceShopTemplate;
    }
    if (titleLower.includes('compiler')) {
      return compilerTemplate;
    }
    
    // Default template for projects without specific templates
    return {
      overview: "This is a comprehensive overview of the project. Describe what the project does, its main purpose, and why it was built. Explain the problem it solves and the value it provides to users or businesses.",
      
      keyFeatures: [
        "Feature 1: Describe a key functionality or capability",
        "Feature 2: Another important feature that makes this project stand out",
        "Feature 3: Additional functionality that adds value",
        "Feature 4: Any unique or innovative aspects of the project"
      ],
      
      challenges: [
        "Challenge 1: Describe a technical or design challenge you faced",
        "Challenge 2: Another obstacle and how you overcame it",
        "Challenge 3: Any complex problems solved during development"
      ],
      
      solutions: [
        "Solution 1: How you addressed the first challenge",
        "Solution 2: Your approach to solving the second challenge", 
        "Solution 3: Technical solutions implemented"
      ],
      
      technicalDetails: {
        architecture: "Describe the overall architecture (e.g., MVC, microservices, monolithic, etc.)",
        database: "Database technology used and design decisions",
        deployment: "How the project is deployed (cloud provider, CI/CD pipeline, etc.)",
        testing: "Testing strategies and frameworks used"
      },
      
      learnings: [
        "Learning 1: What you learned about a specific technology",
        "Learning 2: New skills or concepts gained during development",
        "Learning 3: Insights about software engineering practices"
      ],
      
      futureImprovements: [
        "Improvement 1: Features you would add given more time",
        "Improvement 2: Performance optimizations you would implement",
        "Improvement 3: Scalability enhancements you would consider"
      ],
      
      metrics: {
        duration: "3 months",
        teamSize: "Solo project",
        linesOfCode: "~5,000 lines",
        userBase: "50+ users"
      }
    };
  };

  const templateData = getTemplateData(project ? project.title : '');

  // Get GitHub repository link based on project
  const getGitHubLink = (projectTitle) => {
    const titleLower = projectTitle.toLowerCase();
    const baseURL = "https://github.com/pupilliluke";
    
    if (titleLower.includes('collins signatures')) {
      return `${baseURL}/baseball-sigs`;
    }
    if (titleLower.includes('flash stats')) {
      return `${baseURL}/FLASHSTATS`;
    }
    if (titleLower.includes('warehouse inventory')) {
      return `${baseURL}/inventoryApp`;
    }
    if (titleLower.includes('picard')) {
      return `https://github.com/ThePICARDProject`;
    }
    if (titleLower.includes('fittrackr') || titleLower.includes('fitness')) {
      return `${baseURL}/FitnessTracker-main`;
    }
    if (titleLower.includes('rocket league')) {
      return `${baseURL}/rlbl-website`;
    }
    if (titleLower.includes('plntd sips')) {
      return `${baseURL}/Plntd-Sips`;
    }
    if(titleLower.includes('oliver')) {
      return `${baseURL}/oliverprojections-react`;
    }
    if (titleLower.includes('rantr')) {
      return `${baseURL}/rantr`;
    }
    if (titleLower.includes('compiler')) {
      return `${baseURL}/Compiler-cs410`;
    }
    
    // Default to main GitHub profile for projects without specific repos
    return baseURL;
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-6">
          <a 
            href="/projects" 
            className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            ← Back to Projects
          </a>
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">{project.title}</span>
        </h1>
        
        <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Project Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {project.link && project.link !== "unauthorized" && project.link !== "n/a" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <FaExternalLinkAlt />
              View Live Project
            </a>
          )}
          
          {/* GitHub link - dynamically determined based on project */}
          <a
            href={getGitHubLink(project.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium px-6 py-3 rounded-lg border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <FaGithub />
            View Code
          </a>
        </div>

        {/* Project Meta */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            {project.date}
          </div>
          <div className="flex items-center gap-2">
            <FaCode />
            <span className={`bg-gradient-to-r ${getTypeColor(project.type)} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
              {project.type}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock />
            {templateData.metrics.duration}
          </div>
          <div className="flex items-center gap-2">
            <FaUsers />
            {templateData.metrics.teamSize}
          </div>
        </div>
      </div>

      {/* Hero Image/Video */}
      <div className="mb-16">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          {project.video && project.title.toLowerCase().includes('collins signatures') ? (
            <iframe
              src={`${project.video}?autoplay=1&mute=1&loop=1&playlist=${project.video.split('/embed/')[1]}&controls=0&showinfo=0&rel=0&modestbranding=1`}
              title={project.title}
              className="relative w-full h-[70vh] min-h-[500px] rounded-2xl shadow-xl border border-slate-700/50 group-hover:shadow-blue-500/20 transition-all duration-500"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="relative w-full h-96 object-cover rounded-2xl shadow-xl border border-slate-700/50 group-hover:shadow-blue-500/20 transition-all duration-500"
            />
          )}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Project Overview */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                📋
              </div>
              Project Overview
            </h2>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <p className="text-slate-300 leading-relaxed">
                {templateData.overview}
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                ⭐
              </div>
              Key Features
            </h2>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <ul className="space-y-3">
                {templateData.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
                🎯
              </div>
              Challenges & Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-4">Challenges</h3>
                <ul className="space-y-2">
                  {templateData.challenges.map((challenge, index) => (
                    <li key={index} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-red-400 flex-shrink-0">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-4">Solutions</h3>
                <ul className="space-y-2">
                  {templateData.solutions.map((solution, index) => (
                    <li key={index} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">•</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Details */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                ⚙️
              </div>
              Technical Implementation
            </h2>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Architecture</h3>
                  <p className="text-slate-300 text-sm">{templateData.technicalDetails.architecture}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Database</h3>
                  <p className="text-slate-300 text-sm">{templateData.technicalDetails.database}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Deployment</h3>
                  <p className="text-slate-300 text-sm">{templateData.technicalDetails.deployment}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Testing</h3>
                  <p className="text-slate-300 text-sm">{templateData.technicalDetails.testing}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Learnings */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center">
                🎓
              </div>
              Key Learnings
            </h2>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <ul className="space-y-3">
                {templateData.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">
                      💡
                    </div>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Technologies Used */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
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
          </div>

          {/* Project Metrics */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Project Metrics</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Duration:</span>
                <span className="text-white">{templateData.metrics.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Team Size:</span>
                <span className="text-white">{templateData.metrics.teamSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Lines of Code:</span>
                <span className="text-white">{templateData.metrics.linesOfCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">User Base:</span>
                <span className="text-white">{templateData.metrics.userBase}</span>
              </div>
            </div>
          </div>

          {/* Future Improvements */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Future Improvements</h3>
            <ul className="space-y-2">
              {templateData.futureImprovements.map((improvement, index) => (
                <li key={index} className="text-slate-300 text-sm flex items-start gap-2">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  {improvement}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Interested in this project?</h3>
            <p className="text-slate-300 text-sm mb-4">
              Let's discuss how I can bring similar solutions to your team.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-sm w-full text-center block"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="mt-16 pt-16 border-t border-slate-800/50">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">More</span> Projects
        </h2>
        <div className="flex justify-center">
          <a
            href="/projects"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;