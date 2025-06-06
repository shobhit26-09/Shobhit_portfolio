import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ResumeAI",
    description: "AI-powered resume builder and analyzer.",
    image: "https://i.imgur.com/Fz1QhZ9.png",
    tech: ["TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/shobhit26-09/ResumeAI-",
    live: "https://resumeai26.netlify.app/",
  },
  {
    title: "Weather Website",
    description: "Real-time weather updates with a dynamic UI.",
    image: "https://cdn.dribbble.com/userupload/10729463/file/original-b00b3b85cb3f11b53b274fbe71c85e37.png?format=webp&resize=400x300&vertical=center",
    tech: ["Next.js", "TypeScript", "API"],
    github: "https://github.com/shobhit26-09/Weather",
    live: "https://shobhit26-09.github.io/Weather/",
  },
  {
    title: "ML-Based Home Security System",
    description: "Home surveillance using ML-based facial recognition.",
    image: "https://hackster.imgix.net/uploads/attachments/1608419/_IvBBo51EL6.blob?auto=compress&w=900&h=675&fit=min&fm=jpg",
    tech: ["Python", "TensorFlow", "PyTorch"],
    github: "https://github.com/shobhit26-09/ML-based-auth-System",
    live: "#",
  },
  {
    title: "Voice Assistant",
    description: "Python-powered AI assistant to automate daily tasks.",
    image: "https://cdn.prod.website-files.com/5e305a6cb7083222527a89cc/66e414c27b4818a196ff0c1d_how_to_make_an_ai_voice_assistant_10_steps.webp",
    tech: ["Python", "PyTorch", "API"],
    github: "https://github.com/shobhit26-09/Voice-Assistant",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-black text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-bold mb-16 text-white relative inline-block group"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
          <span className="absolute left-0 -bottom-1 h-1 bg-blue-500 w-0 group-hover:w-full transition-all duration-300" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-md hover:shadow-lg transition duration-300 hover:scale-[1.015]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-md mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-blue-500/10 text-sm text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-gray-200 transition text-sm"
                  >
                    <Github size={18} className="mr-2" /> Code
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-gray-200 transition text-sm"
                    >
                      <ExternalLink size={18} className="mr-2" /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
