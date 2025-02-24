import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import {
  Code,
  Monitor,
  Cpu,
  Terminal,
  Database,
  Settings,
  BrainCircuit,
  Brackets,
  MousePointer,
  ShieldCheck,
  Lightbulb,
  Coffee,
  Palette
} from 'lucide-react';

const colors = [
  { name: "Purple", value: "rgba(168, 85, 247, 0.2)" },
  { name: "Blue", value: "rgba(37, 99, 235, 0.2)" },
  { name: "Green", value: "rgba(16, 185, 129, 0.2)" },
  { name: "Red", value: "rgba(239, 68, 68, 0.2)" },
  { name: "Orange", value: "rgba(249, 115, 22, 0.2)" },
  { name: "Pink", value: "rgba(219, 39, 119, 0.2)" },
  { name: "Yellow", value: "rgba(234, 179, 8, 0.2)" },
];

const Hero = () => {
  const typedRef = useRef(null);
  const [bgColor, setBgColor] = useState(colors[0].value);
  const [showPalette, setShowPalette] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Hi, I am Shobhit Gupta',
        'I am a Software Developer',
        'I build things for the web',
        'Hi, I am Shobhit Gupta'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      showCursor: false,
      fadeOut: true,
      onComplete: () => setTypingComplete(true),
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 px-4"
      style={{
        background: `radial-gradient(circle at 50% 50%, ${bgColor}, transparent 70%)`
      }}
    >
      {/* Typewriter Text (Only this moves) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span ref={typedRef}></span>
          {!typingComplete && (
            <motion.span
              className="text-purple-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          )}
        </h1>
      </motion.div>

      {/* Bullet Points Below Name (Static) */}
      <ul className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 space-y-2 opacity-90 hover:opacity-100 transition-opacity duration-300 text-left">
        <li>🚀 Passionate about creating elegant solutions to complex problems</li>
        <li>💡 Always learning and exploring new technologies</li>
        <li>💻 Experienced in full-stack web development</li>
        <li>🎯 Focused on writing clean, maintainable code</li>
      </ul>

      {/* Buttons Container (Static) */}
      <div className="relative z-10 flex gap-4 mt-4">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block border-2 px-8 py-3 rounded-full font-medium transition-all duration-300"
          style={{
            borderColor: bgColor.replace("0.2", "1"), // Full opacity for border
            color: bgColor.replace("0.2", "1"), // Text matches the selected color
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = bgColor.replace("0.2", "1"); // Full opacity on hover
            target.style.color = "#fff"; // White text on hover
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = "transparent"; // Reset to transparent
            target.style.color = bgColor.replace("0.2", "1"); // Restore text color
          }}
        >
          View My Work
        </motion.a>

        {/* Color Palette Button */}
        <div className="relative">
          <button
            onClick={() => setShowPalette(!showPalette)}
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-3 rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            <Palette className="w-5 h-5" /> Change Background
          </button>

          {/* Color Palette Selection */}
          {showPalette && (
            <div className="absolute mt-2 bg-black/90 p-3 rounded-lg shadow-lg grid grid-cols-4 gap-2">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setBgColor(color.value); // Change background color
                    setShowPalette(false); // Hide palette after selecting
                  }}
                  className="w-8 h-8 rounded-full border-2"
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating Icons - Evenly Spaced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { icon: <Code />, top: '5%', left: '10%' },
          { icon: <Monitor />, top: '5%', left: '40%' },
          { icon: <Cpu />, top: '5%', left: '70%' },

          { icon: <Terminal />, top: '30%', left: '5%' },
          { icon: <Database />, top: '30%', left: '35%' },
          { icon: <Settings />, top: '30%', left: '65%' },
          { icon: <BrainCircuit />, top: '30%', left: '90%' },

          { icon: <Brackets />, top: '55%', left: '10%' },
          { icon: <MousePointer />, top: '55%', left: '40%' },
          { icon: <ShieldCheck />, top: '55%', left: '70%' },

          { icon: <Lightbulb />, top: '80%', left: '5%' },
          { icon: <Coffee />, top: '80%', left: '35%' },
          { icon: <Cpu />, top: '80%', left: '65%' },
          { icon: <Monitor />, top: '80%', left: '90%' },
        ].map((doodle, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-300 opacity-60"
            style={{
              top: doodle.top,
              left: doodle.left,
              fontSize: '4rem',
              filter: 'drop-shadow(0px 0px 20px rgba(168, 85, 247, 1))',
            }}
            initial={{ y: 0, rotate: 0 }}
            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {doodle.icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
