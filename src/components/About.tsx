
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Hey there! I'm <span className="text-purple-400 font-semibold">Shobhit</span>, a **software developer** who’s obsessed with **clean code, 
                beautiful UI/UX, and solving real-world problems with technology**.
              </p>
              <p>
                My journey started with pure curiosity—breaking things apart to see how they work. That curiosity soon turned into a passion for building 
                meaningful applications that **not only function well but feel great to use**.
              </p>
              <p>
                I believe in **continuous learning and pushing boundaries**. Whether it's experimenting with new frameworks, refining performance, or just 
                geeking out over design patterns, I love the process of **building and improving**.
              </p>
              <p>
                When I’m not coding, you’ll probably find me **reading about new tech trends, working on side projects, or debating whether tabs are better than spaces**. (Spoiler: I prefer tabs 😉)
              </p>
            </div>
          </div>

          {/* Image Section with Smooth Hover Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Image Container */}
            <div className="aspect-square rounded-2xl overflow-hidden border border-purple-500/30 transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-lg">
              <img
                src="/shobhit_image.jpg"
                alt="Professional developer workspace"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Subtle Glow Effect on Hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(128,0,128,0.3)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
