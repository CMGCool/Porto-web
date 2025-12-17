"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "LunchPolicy.ID",
    desc: "LunchPolicy.ID is a web-based sentiment analysis platform that monitors public responses to the Indonesian government’s free lunch policy. This system works in real-time, using a BERT deep learning model to analyze public opinions from social media, and presents the results in the form of interactive visualizations as well as automatic classifications.",
    images: ["/LunchPolicy.png", "/Dashboard.png", "/Scraping Setup.png", "/Arsitektur Sistem.png"],
    technologies: ["Python", "Flask", "Bootstrap", "MySQL", "Selenium", "IndoBERT", "Hugging Face"],
    githubUrl: "https://github.com/CMGCool/LuchPolicyID"
  },
  {
    title: "Point of Sales System",
    desc: "A simple point of sales system built CodeIgniter 3, AdminLTE 3, and Bootstrap 5. This system is used to manage the sales of Becuko, a UMKM store in Indonesia.",
    images: ["/becukoPOS.png"],
    technologies: ["CodeIgniter 3", "AdminLTE 3", "Bootstrap 5", "MySQL", "PHP", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/CMGCool/projectPOS"
  },
  {
    title: "Sea Glide Underwater Autonomous Vehicle (UAV)",
    desc: "Seaglide operates as an autonomous underwater buoyancy glider, functioning without a tether or propeller, and consumes minimal energy. Its movement is based on altering pitch and buoyancy, typically achieved by intake or expulsion of water. This shift in buoyancy prompts the glider's ascent or descent in water. Simultaneously, as the glider changes pitch and maneuvers vertically, its wings produce lift, propelling it forward through the water.",
    images: ["/Bouyancy engine.jpg","/seaglide.jpg"],
    technologies: ["Embedded", "Arduino Pro Mini", "C++", "3D Printing"],
    githubUrl: "https://github.com/CMGCool/SeaGlide-UAV"
  },
  {
    title: "Extranet Website for D'Journey Project - Internship Project",
    desc: "This project is part of Djourney, a tourism information portal for West Java Province developed by the Department of Communication and Informatics of Jaswita. I was responsible for developing the extranet website specifically designed for open trip operators. The platform enables operators to sell open trip services through Djourney, featuring service management (create, view, edit, delete), fund withdrawal, customer management, review monitoring, reporting, and a dashboard summarizing key information. Despite limited references and benchmarks, the extranet was successfully developed and became a vital component of the Djourney ecosystem.",
    images: ["/Extranet-djourney.png"],
    technologies: ["CodeIgniter 3", "Bootstrap 5", "MySQL", "PHP", "HTML", "CSS", "JavaScript", "jQuery","Payment Gateway Midtrans"],
    githubUrl: ""
  },
  {
    title: "Invoicing Feature for Asset Data Website - Internship Project",
    desc: "As the name suggests, this feature is used to handle transaction billing for customers who rent Jaswita assets. It generates invoices and sends them via email. In addition, the feature helps organize customers based on the assets they rent as well as the transactions (payments) they make.",
    images: ["/Invoicing.png"],
    technologies: ["CodeIgniter 3", "Bootstrap 5", "MySQL", "PHP", "HTML", "CSS", "JavaScript", "jQuery"],
    githubUrl: ""
  },
  {
    title: "PDF Drafting Feature - Digital Memo Website - Internship Project",
    desc: "This feature is used to generate legal documents such as Lease Agreements, Non-Disclosure Agreements (NDAs), and Memorandums of Understanding (MoUs) on the digital memo website. It was developed to standardize and generalize document templates used across Jaswita.",
    images: ["/PDF Generate1.png","/PDF Generate2.png"],
    technologies: ["CodeIgniter 3", "Bootstrap 5", "MySQL", "PHP", "HTML", "CSS", "JavaScript", "jQuery, PDFmake"],
    githubUrl: ""
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectImageIndex, setProjectImageIndex] = useState<Record<number, number>>({});

  // Calculate total slides (2 cards per slide)
  const totalSlides = Math.ceil(projects.length / 2);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  // Get projects for current slide
  const getCurrentSlideProjects = () => {
    const startIndex = currentIndex * 2;
    return projects.slice(startIndex, startIndex + 2);
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-2xl font-bold mb-10 bg-gradient-to-r from-indigo-200 to-cyan-200 bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <svg className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <svg className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Project Cards Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {getCurrentSlideProjects().map((project, projectIndex) => (
                  <motion.div
                    key={`${currentIndex}-${projectIndex}`}
                    className="group relative bg-white/5 border border-white/10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: projectIndex * 0.1, duration: 0.6 }}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                  >
                    {/* Project Image Carousel */}
                    <div className="relative h-80 overflow-hidden group">
                      <motion.img
                        src={project.images[projectImageIndex[currentIndex * 2 + projectIndex] || 0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        key={`${currentIndex}-${projectIndex}-${projectImageIndex[currentIndex * 2 + projectIndex] || 0}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Image Navigation - hanya tampil jika ada lebih dari 1 gambar */}
                      {project.images.length > 1 && (
                        <>
                          {/* Previous Image Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const projectId = currentIndex * 2 + projectIndex;
                              const currentImgIndex = projectImageIndex[projectId] || 0;
                              setProjectImageIndex({
                                ...projectImageIndex,
                                [projectId]: currentImgIndex === 0 ? project.images.length - 1 : currentImgIndex - 1
                              });
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          
                          {/* Next Image Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const projectId = currentIndex * 2 + projectIndex;
                              const currentImgIndex = projectImageIndex[projectId] || 0;
                              setProjectImageIndex({
                                ...projectImageIndex,
                                [projectId]: (currentImgIndex + 1) % project.images.length
                              });
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                          
                          {/* Image Dots Indicator */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                            {project.images.map((_, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const projectId = currentIndex * 2 + projectIndex;
                                  setProjectImageIndex({
                                    ...projectImageIndex,
                                    [projectId]: imgIndex
                                  });
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                  (projectImageIndex[currentIndex * 2 + projectIndex] || 0) === imgIndex
                                    ? 'bg-white w-6'
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <motion.h3
                        className="font-semibold text-xl text-white mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + projectIndex * 0.1, duration: 0.4 }}
                      >
                        {project.title}
                      </motion.h3>

                      <motion.p
                        className="text-indigo-100/80 mb-4 leading-relaxed text-sm text-justify"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + projectIndex * 0.1, duration: 0.4 }}
                      >
                        {project.desc}
                      </motion.p>

                      {/* Technologies */}
                      <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + projectIndex * 0.1, duration: 0.4 }}
                      >
                        <h4 className="text-xs font-medium text-indigo-200/90 mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-2 py-1 bg-indigo-500/20 text-indigo-200 text-xs rounded-full border border-indigo-400/30 hover:bg-indigo-500/30 transition-colors duration-200"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + projectIndex * 0.1 + techIndex * 0.05, duration: 0.3 }}
                              whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.15 }
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-2 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </motion.div>

                      {/* Action Buttons */}
                      {project.githubUrl && (
                        <motion.div
                          className="flex gap-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + projectIndex * 0.1, duration: 0.4 }}
                        >
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2 border border-white/20 text-indigo-200 text-xs font-medium rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-1.5 pointer-events-auto relative z-10"
                            whileHover={{
                              scale: 1.02,
                              transition: { duration: 0.15 }
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Github
                          </motion.a>
                        </motion.div>
                      )}
                    </div>

                    {/* Hover Effects */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/0 via-cyan-400/0 to-indigo-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <motion.div
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                  }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>

          {/* Slide Counter */}
          <motion.div
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="text-sm text-indigo-200/70">
              {currentIndex + 1} / {totalSlides}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}