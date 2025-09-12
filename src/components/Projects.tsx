"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "LunchPolicy.ID", desc: "Website yang saya gunakan untuk tugas akhir saya" },
  { title: "Todo App", desc: "A simple task manager built with React and TypeScript." },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-indigo-200 to-cyan-200 bg-clip-text text-transparent">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="group relative bg-white/5 border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-xl transition will-change-transform"
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/0 via-cyan-400/0 to-indigo-500/0 opacity-0 group-hover:opacity-20 transition"></div>
              <h3 className="font-semibold text-lg text-white">{p.title}</h3>
              <p className="text-indigo-100/80 mt-2">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}