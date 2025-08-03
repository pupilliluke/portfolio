import React, { useState, useEffect } from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-800/90 border-b border-slate-700/50 shadow-xl' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold text-xl">LP</span>
        </div>
        
        <ul className="hidden md:flex space-x-2 text-sm font-medium">
          {[
            { label: "Home", href: "/" },
            { label: "Skills", href: "/skills" },
            { label: "Projects", href: "/projects" },
            { label: "Experience", href: "/experience" },
            { label: "Education", href: "/education" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }, index) => (
            <li key={label}>
              <a
                href={href}
                className="group relative text-slate-200 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/5"
              >
                <span className="relative z-10">{label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex space-x-4 text-slate-300 text-lg">
          {[
            { icon: FaDiscord, href: "https://discord.com/users/luke_pup", color: "hover:text-indigo-400" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/luke-pupilli-b36a22258/", color: "hover:text-blue-400" },
            { icon: FaGithub, href: "https://github.com/pupilliluke", color: "hover:text-white" },
            { icon: FaInstagram, href: "https://www.instagram.com/lukepupilli_", color: "hover:text-pink-400" },
          ].map(({ icon: Icon, href, color }, index) => (
            <a 
              key={href}
              href={href}
              target="_blank" 
              rel="noopener noreferrer"
              className={`${color} transition-all duration-300 transform hover:scale-125 hover:rotate-12 p-2 rounded-lg hover:bg-white/5`}
            >
              <Icon />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;