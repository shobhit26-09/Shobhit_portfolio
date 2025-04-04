import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ResumeAI",
    description: "AI-powered resume builder and analyzer",
    image: "https://i.imgur.com/Fz1QhZ9.png",
    tech: ["TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/shobhit26-09/ResumeAI-",
    live: "https://resumeai26.netlify.app/",
  },
  {
    title: "Weather Website",
    description: "Real-time weather updates with dynamic UI",
    image: "https://cdn.dribbble.com/userupload/10729463/file/original-b00b3b85cb3f11b53b274fbe71c85e37.png?format=webp&resize=400x300&vertical=center",
    tech: ["Next.js", "TypeScript", "API"],
    github: "https://github.com/shobhit26-09/Weather",
    live: "https://shobhit26-09.github.io/Weather/",
  },
  {
    title: "ML-Based Home Security System",
    description: "Machine learning-based home security system",
    image: "https://hackster.imgix.net/uploads/attachments/1608419/_IvBBo51EL6.blob?auto=compress&w=900&h=675&fit=min&fm=jpg",
    tech: ["Python", "TensorFlow", "PyTorch"],
    github: "https://github.com/shobhit26-09/ML-based-auth-System",
    live: "#",
  },
  {
    title: "Voice Assistant",
    description: "AI-based Voice Assistant to automate tasks",
    image: "https://cdn.prod.website-files.com/5e305a6cb7083222527a89cc/66e414c27b4818a196ff0c1d_how_to_make_an_ai_voice_assistant_10_steps.webp",
    tech: ["Python", "PyTorch", "API"],
    github: "https://github.com/shobhit26-09/Voice-Assistant",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="flex flex-col space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="flex flex-row bg-[#121212] rounded-xl border border-gray-700 shadow-lg overflow-hidden w-full hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image on the Left */}
              <div className="w-[40%]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover rounded-l-xl"
                />
              </div>

              {/* Content on the Right */}
              <div className="p-6 flex flex-col justify-between w-[60%]">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition text-gray-300"
                  >
                    <Github size={20} className="mr-2" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-2 rounded-lg text-white shadow-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-transform hover:scale-105"
                  >
                    <ExternalLink size={20} className="mr-2" /> Live Preview →
                  </a>
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
