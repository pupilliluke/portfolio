import React from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaDiscord, href: "https://discord.com/users/luke_pup", color: "hover:text-indigo-400", label: "Discord" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/luke-pupilli-b36a22258/", color: "hover:text-blue-400", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/pupilliluke", color: "hover:text-white", label: "GitHub" },
    { icon: FaInstagram, href: "https://www.instagram.com/lukepupilli_", color: "hover:text-pink-400", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800/50">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-50"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">LP</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Luke Pupilli</h3>
                <p className="text-slate-400 text-sm">Full Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Center: Copyright */}
          <div className="text-center">
            <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
              Made with 
              <FaHeart className="text-red-500 animate-pulse" />
              by <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-medium">Luke Pupilli</span>
            </p>
            <p className="text-slate-500 text-xs mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map(({ icon: Icon, href, color, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`p-3 rounded-xl bg-slate-800/50 text-slate-400 ${color} border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-700/50 hover:scale-110 hover:-translate-y-1`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom divider with tech stack */}
        <div className="mt-8 pt-6 border-t border-slate-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
            <div className="flex items-center gap-4">
              <span>Built with React & Tailwind CSS</span>
              <div className="hidden sm:block w-px h-4 bg-slate-700"></div>
              <span>Animated with Framer Motion</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Deployed on</span>
              <span className="text-blue-400 font-medium">Vercel</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle animated dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 bg-slate-600 rounded-full animate-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;