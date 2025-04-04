import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[98%] max-w-6xl bg-black/50 backdrop-blur-md rounded-full shadow-lg transition-all duration-300 py-5 px-14 border border-white/10">
      <div className="flex items-center justify-between">
        
        {/* Logo/Text */}
        <div className="text-white text-2xl font-bold tracking-wide select-none">
          Shobhit.Gupta
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 text-lg">
          {["Home", "AboutMe", "Skills", "Projects"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-200 hover:text-white transition-colors relative group"
            >
              {item}
              {/* Glowing Effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-purple-400 transition-colors"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[95%] max-w-lg bg-black/60 backdrop-blur-md border border-white/10 rounded-lg shadow-xl md:hidden transition-all duration-300">
          <div className="flex flex-col items-center space-y-5 py-6 text-lg">
            {["Home", "AboutMe", "Skills", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-200 hover:text-white transition-colors relative group"
              >
                {item}
                {/* Glowing Effect */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
