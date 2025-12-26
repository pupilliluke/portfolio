import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const { slug, title, image, type, date, description, tags } = project;
  const [isHovered, setIsHovered] = useState(false);

  const getTypeColor = (type) => {
    const colors = {
      'WEBAPP': 'from-google-blue-500 to-google-blue-600',
      'WEB': 'from-google-green-500 to-google-green-600',
      'MOBILEAPP': 'from-google-yellow-500 to-google-yellow-600',
      'OS': 'from-google-red-500 to-google-red-600',
      'Virtual Reality Unity3D App': 'from-purple-500 to-purple-600',
      default: 'from-slate-custom-500 to-slate-custom-600'
    };
    return colors[type] || colors.default;
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <Link to={`/projects/${slug}`}>
        <motion.div 
          className="relative glass-card rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-google-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ 
            y: -8,
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-google-blue-500/20 via-transparent to-google-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          
          {/* Image section with overlay */}
          <div className="relative overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-custom-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Floating type badge */}
            <motion.div 
              className="absolute top-4 left-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            >
              <span className={`inline-block bg-gradient-to-r ${getTypeColor(type)} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-google backdrop-blur-sm border border-white/20`}>
                {type}
              </span>
            </motion.div>

            {/* Hover arrow */}
            <motion.div 
              className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              animate={{ 
                rotate: isHovered ? 45 : 0,
                scale: isHovered ? 1.1 : 1 
              }}
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </motion.div>
          </div>

          {/* Content section */}
          <div className="p-6 relative">
            <motion.h3 
              className="text-white font-display font-bold text-xl mb-2 group-hover:text-gradient transition-all duration-300"
              animate={{ x: isHovered ? 4 : 0 }}
            >
              {title}
            </motion.h3>
            
            <p className="text-slate-custom-400 text-sm mb-3 font-medium">{date}</p>
            
            <p className="text-slate-custom-300 text-sm mb-4 leading-relaxed line-clamp-3 group-hover:text-slate-custom-200 transition-colors duration-300">
              {description}
            </p>

            {/* Tags with staggered animation */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  className="bg-slate-custom-700/50 hover:bg-slate-custom-600/50 text-slate-custom-300 hover:text-white text-xs px-3 py-1.5 rounded-full border border-slate-custom-600/30 hover:border-slate-custom-500/50 transition-all duration-300 backdrop-blur-sm"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: index * 0.1 + tagIndex * 0.05 + 0.5, 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Bottom gradient line */}
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-google-blue-500 to-google-blue-400 transition-all duration-500"
              animate={{ width: isHovered ? "100%" : "0%" }}
            ></motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
