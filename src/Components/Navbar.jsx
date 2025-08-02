import React from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* <span className="text-white font-bold text-lg">Luke Pupilli</span> */}
        </div>
       <ul className="hidden md:flex space-x-6 text-sm font-medium">
  {[
    { label: "Home", href: "/" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Education", href: "/education" },
    { label: "Contact", href: "/contact" },
  ].map(({ label, href }) => (
    <li key={label}>
      <a
        href={href}
        className="group text-white transition duration-300"
      >
        <span className="group-hover:bg-orange-500 group-hover:text-white transition px-3 py-1 rounded-full">
          {label}
        </span>
      </a>
    </li>
  ))}
</ul>

        <div className="flex space-x-4 text-white text-lg">
          <a href="https://discord.com/users/luke_pup"
          target="_blank" 
          rel="noopener noreferrer"><FaDiscord /></a>
          <a href="https://www.linkedin.com/in/luke-pupilli-b36a22258/"
          target="_blank" 
          rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/pupilliluke"
          target="_blank" 
          rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/lukepupilli_"
          target="_blank" 
          rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;