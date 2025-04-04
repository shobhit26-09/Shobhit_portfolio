import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const typedRef = useRef(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Hi, I am Shobhit Gupta.",
        "I build things for the web.",
        "Let's create something amazing.",
        "Hi, I am Shobhit Guptaa.",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      fadeOut: true,
      showCursor: false,
      onComplete: () => setTypingComplete(true),
    });

    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.classList.toggle("opacity-0");
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 bg-[#050505] overflow-hidden"
    >
      {/* Holographic Effect - Changing Colors */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute right-[-100px] top-1/3 h-[500px] w-[500px] rounded-full blur-[200px] opacity-50"
          animate={{
            rotate: [0, 360], // Continuous Rotation
            background: [
              "radial-gradient(circle, #007cf0, #00dfd8)",
              "radial-gradient(circle, #7928ca, #ff0080)",
              "radial-gradient(circle, #ff4d4d, #f9cb28)",
              "radial-gradient(circle, #00c6ff, #0072ff)",
              "radial-gradient(circle, #ff6a00, #ee0979)"
            ]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            background: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </motion.div>


      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight min-h-[90px] flex">
          <span ref={typedRef}></span>
          <span ref={cursorRef} className="text-white ml-1">|</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mt-4 max-w-2xl">
          Crafting seamless digital experiences with modern technology.
        </p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-8 py-3 text-lg font-medium text-white border border-gray-600 rounded-full transition hover:bg-white hover:text-black"
        >
          View My Work
        </motion.a>
      </div>

      {/* Scroll Down Animation */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-sm md:text-base">Scroll Down</p>
        <ChevronDown className="w-6 h-6 mt-1" />
      </motion.div>
    </section>
  );
};

export default Hero;
