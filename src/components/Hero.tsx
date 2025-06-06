import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center bg-black overflow-hidden px-6"
    >
      {/* Dark Background */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Enhanced Ambient Lighting (Brighter, Smoother Color Transitions) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 223, 216, 0.4), rgba(0, 124, 240, 0.3), transparent 70%)",
            filter: "blur(120px)",
          }}
          animate={{
            background: [
              "radial-gradient(circle at center, rgba(0, 223, 216, 0.4), rgba(0, 124, 240, 0.3), transparent 70%)",
              "radial-gradient(circle at center, rgba(223, 0, 216, 0.4), rgba(124, 0, 240, 0.3), transparent 70%)",
              "radial-gradient(circle at center, rgba(0, 216, 223, 0.4), rgba(0, 240, 124, 0.3), transparent 70%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Refined Grid Lines (More Visible, Better Fading) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(180, 220, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(180, 220, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
            maskImage: "radial-gradient(circle at center, white, transparent 85%)",
            WebkitMaskImage: "radial-gradient(circle at center, white, transparent 85%)",
            opacity: 0.8,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-white">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Shobhit Gupta
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg sm:text-xl md:text-2xl mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          I build scalable full-stack products with AI, clean design, and modern tech.
        </motion.p>

        {/* Enhanced "See My Work" Button */}
        <motion.a
          href="#projects"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 20px rgba(0, 223, 216, 0.5)"
          }}
          whileTap={{ scale: 0.98 }}
          className="inline-block mt-10 px-8 py-3.5 text-lg font-medium rounded-full relative overflow-hidden group"
          style={{
            background: "linear-gradient(45deg, rgba(0, 223, 216, 0.9), rgba(0, 124, 240, 0.9))",
            boxShadow: "0 0 15px rgba(0, 223, 216, 0.4)",
          }}
        >
          <span className="relative z-10">See My Work</span>
          <span 
            className="absolute inset-0 bg-gradient-to-r from-[#00dfd8] to-[#007cf0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              mixBlendMode: "overlay",
            }}
          />
        </motion.a>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center text-gray-400 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <p className="text-sm md:text-base">Scroll Down</p>
        <ChevronDown className="w-6 h-6 mt-1 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;