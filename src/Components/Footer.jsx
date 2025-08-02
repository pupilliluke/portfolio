import React from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-white">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          {/* <img src="/logo.png" alt="Logo" className="w-6 h-6" /> */}
          {/* <span className="font-bold">Luke Pupilli</span> */}
        </div>
        
        <p className="text-sm text-gray-400 mt-4 md:mt-0">Made with ❤️ by <span className="text-orange-400">Luke Pupilli</span>.</p>
        <div className="flex space-x-4 text-lg">
            <a href="#"><FaDiscord /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaInstagram /></a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
