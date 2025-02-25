import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="relative bg-[#0A0A0A] overflow-hidden text-gray-300">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,0,255,0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-12 py-16">
          {/* Branding */}
          <div className="text-center sm:text-left">
            <h3 className="text-3xl font-bold text-white">Shobhit Gupta</h3>
            <p className="mt-3 text-gray-400 leading-relaxed">
              Crafting digital experiences with code and creativity.  
              Building the future, one line at a time.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:shobhitg947@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  shobhitg947@gmail.com
                </a>
              </li>
              <li className="text-gray-400">📍 Based in India</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Social</h4>
            <div className="flex justify-center sm:justify-end space-x-4">
              {[
                { href: 'https://github.com/shobhit26-09', icon: <Github size={24} />, bg: 'bg-white text-black', label: 'Github' },
                { href: 'https://www.linkedin.com/in/shobhit-gupta-867b12223/', icon: <Linkedin size={24} />, bg: 'bg-[#0077B5] text-white', label: 'LinkedIn' },
                { href: 'https://x.com/Shobhit_guptaa_', icon: <FaXTwitter size={24} />, bg: 'bg-black text-white', label: 'X' },
                { href: 'mailto:shobhitg947@gmail.com', icon: <Mail size={24} />, bg: 'bg-[#EA4335] text-white', label: 'Email' },
              ].map(({ href, icon, bg, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-3 rounded-full ${bg} hover:scale-110 transition-transform duration-300`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Shobhit Gupta. All rights reserved.
            </p>
            <p className="flex items-center text-sm text-gray-400 mt-4 md:mt-0">
              Made with 
              <Heart size={16} className="mx-1 text-red-500 animate-pulse transition-colors duration-500 hover:text-pink-500" /> 
              by <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold ml-1">Shobhit Gupta</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
