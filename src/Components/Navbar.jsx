import React, { useState, useEffect } from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  HiHome,
  HiCommandLine,
  HiRocketLaunch,
  HiBriefcase,
  HiAcademicCap,
  HiEnvelope,
  HiXMark,
  HiSun,
  HiMoon
} from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ThemeToggle = ({ className = "" }) => (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className={`flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 ${className}`}
    >
      {theme === "dark" ? <HiSun className="w-4 h-4" /> : <HiMoon className="w-4 h-4" />}
    </button>
  );

  return (
    <>
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/90 border-b border-slate-200 dark:bg-slate-800/90 dark:border-slate-700/50 shadow-xl backdrop-blur-md'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/" className="transition-transform duration-300 hover:scale-110">
            <img src="/images/favicon-32x32.png" alt="Pacman Logo" className="w-8 h-8" />
          </a>
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
                className="group relative text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
              >
                <span className="relative z-10">{label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile controls: persistent theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="w-9 h-9" />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col justify-center items-center w-9 h-9 space-y-1 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-4 text-slate-500 dark:text-slate-300 text-lg">
          {[
            { icon: FaDiscord, href: "https://discord.com/users/luke_pup", color: "hover:text-indigo-400" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/luke-pupilli-b36a22258/", color: "hover:text-blue-400" },
            { icon: FaGithub, href: "https://github.com/pupilliluke", color: "hover:text-slate-900 dark:hover:text-white" },
            { icon: FaInstagram, href: "https://www.instagram.com/lukepupilli_", color: "hover:text-pink-400" },
          ].map(({ icon: Icon, href, color }, index) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${color} transition-all duration-300 transform hover:scale-125 hover:rotate-12 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5`}
            >
              <Icon />
            </a>
          ))}

          {/* Light / Dark theme toggle */}
          <ThemeToggle className="ml-1 w-7 h-7" />
        </div>
      </nav>
    </header>

      {/* Mobile Menu Overlay — kept OUTSIDE <header> so the header's
          backdrop-blur doesn't become the containing block for this fixed
          overlay (which would clip it to the header when scrolled). */}
      <div className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Mobile Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border-l border-slate-200 dark:border-slate-700/50 shadow-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full overflow-hidden">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700/50 flex-shrink-0">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold text-xl">Luke Pupilli</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors duration-300 p-2"
                aria-label="Close menu"
              >
                <HiXMark className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex-1 px-6 py-8 overflow-y-auto scrollbar-hide">
              <ul className="space-y-4">
                {[
                  { label: "Home", href: "/", icon: HiHome },
                  { label: "Skills", href: "/skills", icon: HiCommandLine },
                  { label: "Projects", href: "/projects", icon: HiRocketLaunch },
                  { label: "Experience", href: "/experience", icon: HiBriefcase },
                  { label: "Education", href: "/education", icon: HiAcademicCap },
                  { label: "Contact", href: "/contact", icon: HiEnvelope },
                ].map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center space-x-4 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/50 border border-transparent hover:border-slate-200 dark:hover:border-slate-600/50"
                    >
                      <Icon className="text-xl transition-transform duration-300 group-hover:scale-110 text-blue-400" />
                      <span className="text-lg font-medium">{label}</span>
                      <div className="flex-1"></div>
                      <svg className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Social Links */}
            <div className="px-6 pb-8 border-t border-slate-200 dark:border-slate-700/50 pt-6 flex-shrink-0">
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 font-medium">Connect with me</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: FaDiscord, href: "https://discord.com/users/luke_pup", label: "Discord", color: "hover:text-indigo-400" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/luke-pupilli-b36a22258/", label: "LinkedIn", color: "hover:text-blue-400" },
                  { icon: FaGithub, href: "https://github.com/pupilliluke", label: "GitHub", color: "hover:text-white" },
                  { icon: FaInstagram, href: "https://www.instagram.com/lukepupilli_", label: "Instagram", color: "hover:text-pink-400" },
                ].map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 text-slate-600 dark:text-slate-300 ${color} transition-all duration-300 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 border border-slate-200 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600/50`}
                  >
                    <Icon className="text-lg" />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;