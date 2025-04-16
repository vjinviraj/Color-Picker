import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#121212] text-white shadow-md border-b border-[#2E2E2E] font-inter">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Name */}
        <div className="text-xl font-semibold tracking-wide text-[#FAFAFA]">
          🎨 ColorPickr
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 items-center text-lg">
          <a
            href="https://www.linkedin.com/in/viraj-singh-121b43203"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B3B3B3] hover:text-[#7C3AED] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.github.com/vjinviraj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B3B3B3] hover:text-[#A78BFA] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;