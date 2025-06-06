import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  // Scroll to top or #home smoothly
  const scrollToTop = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-950 to-black text-gray-300 overflow-hidden">
      {/* Background subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 via-transparent to-blue-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,78,121,0.1),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {/* Branding */}
          <div className="text-center sm:text-left">
            <h3 className="text-4xl font-extrabold text-white tracking-wide">Shobhit Gupta</h3>
            <p className="mt-4 text-gray-400 max-w-sm mx-auto sm:mx-0 leading-relaxed font-medium">
              Crafting digital experiences with code and creativity. <br />
              Building the future, one line at a time.
            </p>
          </div>

          {/* Contact */}
          <div className="text-left">
            <h4 className="text-xl font-semibold text-white mb-6 border-b border-gray-700 pb-2 w-max">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li>
                <a
                  href="mailto:shobhitg947@gmail.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  shobhitg947@gmail.com
                </a>
              </li>
              <li>📍 Based in India</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-left">
            <h4 className="text-xl font-semibold text-white mb-6 border-b border-gray-700 pb-2 w-max">
              Social
            </h4>
            <div className="flex gap-5">
              {[
                { href: 'https://github.com/shobhit26-09', icon: <Github size={26} />, bg: 'bg-white text-black', label: 'Github' },
                { href: 'https://www.linkedin.com/in/shobhit-gupta-867b12223/', icon: <Linkedin size={26} />, bg: 'bg-[#0077B5] text-white', label: 'LinkedIn' },
                { href: 'https://x.com/Shobhit_guptaa_', icon: <FaXTwitter size={26} />, bg: 'bg-black text-white', label: 'X' },
                { href: 'mailto:shobhitg947@gmail.com', icon: <Mail size={26} />, bg: 'bg-[#EA4335] text-white', label: 'Email' },
              ].map(({ href, icon, bg, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-3 rounded-full shadow-md ${bg} hover:scale-110 hover:shadow-lg transition-transform duration-300`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm select-none">
            © {new Date().getFullYear()} Shobhit Gupta. All rights reserved.
          </p>
          <p className="flex items-center text-sm text-gray-400 select-none">
            Made with
            <Heart size={16} className="mx-1 text-red-500 animate-pulse transition-colors duration-500 hover:text-pink-500" />
            by{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold cursor-default">
              Shobhit Gupta
            </span>
          </p>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
