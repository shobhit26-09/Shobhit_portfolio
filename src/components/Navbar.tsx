import React, { useEffect, useState } from 'react';
import { Menu, X, Home, User2, Code2, FolderKanban } from 'lucide-react';

const navItems = [
  { name: 'Home', icon: <Home size={16} />, href: '#home', id: 'home' },
  { name: 'About', icon: <User2 size={16} />, href: '#about', id: 'about' },
  { name: 'Skills', icon: <Code2 size={16} />, href: '#skills', id: 'skills' },
  { name: 'Projects', icon: <FolderKanban size={16} />, href: '#projects', id: 'projects' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const buffer = 120; // offset buffer

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && scrollPos >= el.offsetTop - buffer) {
          setActiveSection(item.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[98%] max-w-7xl bg-white/5 backdrop-blur-md rounded-full border border-white/10 px-10 py-5 shadow-md transition-all duration-300">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold text-gray-200 select-none">
          shobhit.gupta
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 text-base font-medium">
          {navItems.map(({ name, icon, href, id }) => (
            <a
              key={name}
              href={href}
              className={`group relative flex items-center gap-2 transition-all ${
                activeSection === id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-blue-400">
                {icon}
              </span>
              {name}
              {/* Animated underline */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-blue-400 transition-all duration-300 ease-in-out ${
                  activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-blue-400 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-[95%] max-w-md bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg md:hidden transition-all duration-300">
          <div className="flex flex-col items-center space-y-6 py-6 text-base font-medium">
            {navItems.map(({ name, icon, href, id }) => (
              <a
                key={name}
                href={href}
                className={`group relative flex items-center gap-2 ${
                  activeSection === id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-blue-400">
                  {icon}
                </span>
                {name}
                {/* Underline animation */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-blue-400 transition-all duration-300 ease-in-out ${
                    activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
