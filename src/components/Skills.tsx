import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const techStack = [
  { name: 'Next.js', icon: '/nextjs.svg' },
  { name: 'JavaScript', icon: '/javascript.svg' },
  { name: 'Python', icon: '/python.svg' },
  { name: 'CSS', icon: '/css.svg' },
  { name: 'Git', icon: '/git.svg' },
  { name: 'Vite', icon: '/vite.svg' },
  { name: 'jQuery', icon: '/jquery.svg' },
  { name: 'Webpack', icon: '/webpack.svg' },
  { name: 'HTML5', icon: '/html5.svg' },
  { name: 'Express', icon: '/express.svg' },
  { name: 'Tailwind', icon: '/tailwind.svg' },
  { name: 'Bootstrap', icon: '/bootstrap.svg' },
  { name: 'GitHub', icon: '/github.svg' },
  { name: 'Postman', icon: '/postman.svg' },
  { name: 'React', icon: '/react.svg' },
  { name: 'Firebase', icon: '/firebase.svg' },
  { name: 'Node.js', icon: '/nodejs.svg' },
  { name: 'Material UI', icon: '/materialui.svg' },
  { name: 'Redux', icon: '/redux.svg' },
  { name: 'TypeScript', icon: '/typescript.svg' },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,0,255,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-white tracking-wider mb-16">
            S K I L L S
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-6 h-6"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
                <div className="absolute inset-0 border border-gray-700/50 rounded-xl group-hover:border-purple-500/50 transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;