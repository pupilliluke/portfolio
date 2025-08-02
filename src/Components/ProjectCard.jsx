import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { slug, title, image, type, date, description, tags } = project;

  return (
    <Link to={`/projects/${slug}`}>
      <div className="bg-[#1e293b] rounded-xl overflow-hidden shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {type}
          </span>
          <h3 className="text-white font-bold text-lg mt-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-2">{date}</p>
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
