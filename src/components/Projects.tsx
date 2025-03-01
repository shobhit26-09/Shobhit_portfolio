import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ResumeAI",
    description: "AI powered resume builder and analyser",
    image:
      "https://i.imgur.com/Fz1QhZ9.png",
    tech: ["TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/shobhit26-09/ResumeAI-",
    live: "https://resumeai26.netlify.app/",
  },
  {
    title: "Weather Website",
    description: "E-commerce platform with real-time updates",
    image:
      "https://cdn.dribbble.com/userupload/10729463/file/original-b00b3b85cb3f11b53b274fbe71c85e37.png?format=webp&resize=400x300&vertical=center",
    tech: ["Next.js", "TypeScript", "Stripe"],
    github: "https://github.com/shobhit26-09/Weather",
    live: "shobhit26-09.github.io/Weather/",
  },
  {
    title: "ML Based Home Security System",
    description: "ML based home security system",
    image:
      "https://hackster.imgix.net/uploads/attachments/1608419/_IvBBo51EL6.blob?auto=compress&w=900&h=675&fit=min&fm=jpg",
    tech: ["Python", "TensorFlow", "Pytorch"],
    github: "https://github.com/shobhit26-09/ML-based-auth-System",
    live: "#",
  },
  {
    title: "Voice Assistant",
    description: "Voice Assistant to complete daily tasks",
    image:
      "https://cdn.prod.website-files.com/5e305a6cb7083222527a89cc/66e414c27b4818a196ff0c1d_how_to_make_an_ai_voice_assistant_10_steps.webp",
    tech: ["Python", "Pytorch", "API"],
    github: "https://github.com/shobhit26-09/Voice-Assistant",
    live: "#",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }} // Faster, smooth scale effect
                className="rounded-lg overflow-hidden transition-transform duration-200 ease-in-out border border-gray-700 hover:border-gray-400"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center text-white hover:text-purple-400 transition"
                    >
                      <Github size={20} className="mr-2" /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center text-white hover:text-purple-400 transition"
                    >
                      <ExternalLink size={20} className="mr-2" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
