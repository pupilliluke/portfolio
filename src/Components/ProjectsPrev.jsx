import React from "react";
import { Gallery4 } from "./ui/gallery4";

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
    date: "June 2025 & 2026",
    description: "Real-time inventory management system with automated stock tracking. Built on a lightweight cloud architecture with Firebase integration, currently serving 50+ users.",
    tags: ["TypeScript", "Node.js", "Firebase DB & Hosting", "React"],
    type: "WEBAPP",
    image: "/images/projects/crackingandstacking.png",
  },
  {
    slug: "rocket-league-beer-league-site",
    title: "Rocket League Beer League Site",
    date: "2025-2026",
    description: "Community gaming league platform with an admin dashboard, tournament management, and real-time leaderboards. Features responsive design and dynamic content updates.",
    tags: ["React", "Node.js", "Vercel Hosting", "Firebase DB", "Tailwind CSS"],
    type: "WEBAPP",
    image: "/images/projects/rlbl.png",
  },
  {
    slug: "flash-stats---baseball-scouting-research-platform",
    title: "Flash Stats - Baseball Scouting Research Platform",
    date: "January 2025",
    description: "B2B scouting research platform serving active MLB clientele. Led the SDLC on a client/server REST API and public-facing site delivering critical scouting data to professional baseball teams.",
    tags: ["Python", "JavaScript", "React", "SQL", "REST API"],
    type: "WEB",
    image: "/images/projects/fs.png",
  },
];

// Map the featured-project data onto the Gallery4 item shape.
const galleryItems = featuredProjects.map((project) => ({
  id: project.slug,
  title: project.title,
  description: project.description,
  href: `/projects/${project.slug}`,
  image: project.image,
}));

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <Gallery4
        title="Featured Projects"
        description="A few of the projects I've built — showcasing my skills in web development, problem-solving, and creative thinking. Drag to browse."
        items={galleryItems}
      />
    </section>
  );
};

export default Projects;