import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const techStack = [
  { name: 'Next.js', icon: '/nextjs.svg', category: 'Framework' },
  { name: 'React', icon: '/react.svg', category: 'Library' },
  { name: 'TypeScript', icon: '/typescript.svg', category: 'Language' },
  { name: 'Node.js', icon: '/nodejs.svg', category: 'Runtime' },
  { name: 'Tailwind', icon: '/tailwind.svg', category: 'CSS' },
  { name: 'Python', icon: '/python.svg', category: 'Language' },
  { name: 'Express', icon: '/express.svg', category: 'Backend' },
  { name: 'Firebase', icon: '/firebase.svg', category: 'Database' },
  { name: 'Git', icon: '/git.svg', category: 'Version' },
  { name: 'Redux', icon: '/redux.svg', category: 'State' },
  { name: 'GraphQL', icon: '/graphql.svg', category: 'API' },
  { name: 'Docker', icon: '/docker.svg', category: 'DevOps' },
  { name: 'AWS', icon: '/aws.svg', category: 'Cloud' },
  { name: 'MongoDB', icon: '/mongodb.svg', category: 'Database' },
  { name: 'PostgreSQL', icon: '/postgresql.svg', category: 'Database' },
  { name: 'Jest', icon: '/jest.svg', category: 'Testing' },
  { name: 'Figma', icon: '/figma.svg', category: 'Design' },
  { name: 'Sass', icon: '/sass.svg', category: 'CSS' },
  { name: 'Webpack', icon: '/webpack.svg', category: 'Bundler' },
  { name: 'Vite', icon: '/vite.svg', category: 'Bundler' },
];

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -6,
      boxShadow: '0 10px 25px rgba(0, 223, 216, 0.1)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-20 bg-black overflow-hidden scroll-mt-24"
      ref={ref}
    >
      {/* Background effects */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,223,216,0.04)_0,transparent_70%)]" />
      </motion.div>

      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div initial="hidden" animate={controls} variants={containerVariants}>
          <motion.div
            className="text-center mb-12"
            initial={{ y: -20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-3 relative inline-block group">
              Technical Expertise
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </h2>

            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              A curated set of tools and technologies I use to build and scale modern applications.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-7"
            variants={containerVariants}
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className="h-full bg-gray-900/50 rounded-xl p-5 border border-gray-800 hover:border-cyan-400/30 hover:bg-gray-800/50 backdrop-blur-md transition-all duration-300">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-gray-800 rounded-lg group-hover:bg-gray-700 transition">
                      <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-white font-medium text-sm">{tech.name}</h3>
                      <p className="text-xs text-gray-400 mt-1">{tech.category}</p>
                    </div>
                  </div>
                  {/* Glow ring on hover */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      boxShadow: 'inset 0 0 20px rgba(0, 223, 216, 0.1)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1 }}
      >
        <div className="animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
