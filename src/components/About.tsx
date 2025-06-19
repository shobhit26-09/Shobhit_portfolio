import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UserPlus, Award, Laptop, Rocket, Leaf } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-28 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), 
                         linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-20 items-center"
        >
          {/* TEXT SECTION */}
          <div className="space-y-10">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl font-semibold text-white tracking-tight relative inline-block group"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">myself</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </motion.h2>

            {/* PARAGRAPH CONTENT */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              {[
                `I'm `,
                `I'm deeply passionate about creating tools that not only solve real problems but also delight the people using them.`,
                `Outside of coding, I spend time reading about design systems, psychology, and how people interact with digital environments.`,
                `I believe in clean, testable code, seamless performance, and building things that scale both technically and socially.`,
                `Tech is my toolkit—but empathy is my superpower.`,
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {index === 0 ? (
                    <>
                      I'm <span className="text-white font-medium">Shobhit Gupta</span>, a full-stack developer specializing in performant, scalable applications with intuitive interfaces.
                    </>
                  ) : (
                    text
                  )}
                </motion.p>
              ))}
            </div>

            {/* FUN FACT / COOL SECTION */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-6 bg-gray-800/60 border border-gray-700 rounded-lg px-5 py-4 text-sm text-gray-300"
            >
              💡 <span className="text-white font-semibold">Did you know?</span>
              {" "}I built my first website when I was 14—using nothing but HTML and MS Paint. It was terrible. I’ve been obsessed with making better things ever since.
            </motion.div>

            {/* JOURNEY TIMELINE */}
            <div className="pt-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1 }}
                className="flex items-center justify-between max-w-xl mx-auto space-x-6"
              >
                {[
                  { Icon: UserPlus, label: 'Started Coding at 14' },
                  { Icon: Award, label: 'Graduated BTech CSE' },
                  { Icon: Laptop, label: 'Built Full-stack Apps' },
                  { Icon: Rocket, label: 'Focused on Scalable Solutions' },
                  { Icon: Leaf, label: 'Lifelong Learner' },
                ].map(({ Icon, label }, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <Icon className="text-cyan-400" size={36} strokeWidth={1.5} />
                    <p className="text-gray-300 text-sm max-w-[90px] mt-2">{label}</p>
                    {i !== 4 && (
                      <div className="w-14 h-1 bg-cyan-500 rounded mt-3" />
                    )}
                  </div>
                ))}
              </motion.div>
            </div>


          </div>

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative group"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg shadow-black/30">
              <motion.img
                src="https://imagizer.imageshack.com/img923/2084/hFDfho.jpg"
                alt="Shobhit Gupta"
                className="w-full h-full object-cover rounded-xl"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
              />

              {/* Border Glow */}
              <motion.div
                className="absolute inset-0 border border-gray-800 rounded-xl pointer-events-none"
                initial={{ opacity: 0.5 }}
                whileHover={{
                  opacity: 1,
                  borderColor: "#ffffff",
                  boxShadow: "0 0 30px rgba(255,255,255,0.1)"
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Subtle Glow */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(255, 255, 255, 0.08)"
                }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
