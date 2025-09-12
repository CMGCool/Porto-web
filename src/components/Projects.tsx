"use client";

import { motion } from "framer-motion";

const projects = [
  { 
    title: "LunchPolicy.ID", 
    desc: "Website yang saya gunakan untuk tugas akhir saya. Platform untuk mengatur kebijakan makan siang di kantor dengan fitur voting dan jadwal otomatis.",
    image: "/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    techLogos: ["/next.svg", "/typescript.svg", "/tailwind.svg", "/prisma.svg", "/postgresql.svg"],
    liveUrl: "https://lunchpolicy.id",
    githubUrl: "https://github.com/username/lunchpolicy"
  },
  { 
    title: "Todo App", 
    desc: "A simple task manager built with React and TypeScript. Features include drag-and-drop, categories, and real-time synchronization.",
    image: "/project2.jpg",
    technologies: ["React", "TypeScript", "Vite", "Zustand", "CSS Modules"],
    techLogos: ["/react.svg", "/typescript.svg", "/vite.svg", "/zustand.svg", "/css.svg"],
    liveUrl: "https://todo-app-demo.vercel.app",
    githubUrl: "https://github.com/username/todo-app"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-indigo-200 to-cyan-200 bg-clip-text text-transparent">Projects</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group relative bg-white/5 border border-white/10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Live Demo Badge */}
                <motion.div 
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                >
                  <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                    Live Demo
                  </span>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3 
                  className="font-semibold text-xl text-white mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-indigo-100/80 mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                >
                  {project.desc}
                </motion.p>

                {/* Technologies */}
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                >
                  <h4 className="text-sm font-medium text-indigo-200/90 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-500/20 text-indigo-200 text-xs rounded-full border border-indigo-400/30 hover:bg-indigo-500/30 transition-colors duration-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 + techIndex * 0.05, duration: 0.3 }}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.15 }
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Tech Logos */}
                  <div className="flex items-center gap-3">
                    {project.techLogos.map((logo, logoIndex) => (
                      <motion.div
                        key={logoIndex}
                        className="w-8 h-8 rounded-lg bg-white/10 p-1.5 flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                        title={project.technologies[logoIndex]}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 + logoIndex * 0.05, duration: 0.3 }}
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.15 }
                        }}
                      >
                        <img
                          src={logo}
                          alt={project.technologies[logoIndex]}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                >
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:brightness-110 transition-all duration-200 flex items-center justify-center gap-2"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.15 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-white/20 text-indigo-200 text-sm font-medium rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.15 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </motion.a>
                </motion.div>
              </div>

              {/* Hover Effects */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/0 via-cyan-400/0 to-indigo-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}