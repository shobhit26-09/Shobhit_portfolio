import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl bg-black/30 backdrop-blur-lg rounded-full shadow-lg transition-all duration-300 py-6 px-12">
      <div className="flex items-center justify-between">
        {/* Logo/Text */}
        <div className="text-white text-2xl font-bold">
          Shobhit.Gupta
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-14 text-xl">
          <a href="#home" className="text-white hover:text-purple-400 transition-colors"> Home </a>
          <a href="#about" className="text-white hover:text-purple-400 transition-colors"> AboutMe </a>
          <a href="#skills" className="text-white hover:text-purple-400 transition-colors"> Skills </a>
          <a href="#projects" className="text-white hover:text-purple-400 transition-colors"> Projects </a>
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
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg bg-black/30 backdrop-blur-lg rounded-lg shadow-lg md:hidden">
          <div className="flex flex-col items-center space-y-4 py-6 text-xl">
            <a href="#home" className="text-white hover:text-purple-400 transition-colors"> Home </a>
            <a href="#about" className="text-white hover:text-purple-400 transition-colors"> AboutMe </a>
            <a href="#skills" className="text-white hover:text-purple-400 transition-colors"> Skills </a>
            <a href="#projects" className="text-white hover:text-purple-400 transition-colors"> Projects </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
