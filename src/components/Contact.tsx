"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-200 to-cyan-200 bg-clip-text text-transparent">Get In Touch</h2>
        <p className="text-indigo-100/80 mb-6">
          Interested in working together? Reach out to me via email or LinkedIn.
        </p>
        <motion.a
          href="mailto:youremail@example.com"
          className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-full shadow-lg shadow-indigo-500/20 hover:brightness-110 transition"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Say Hello
          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-white/90">
            <span className="absolute inset-0 rounded-full bg-white/70 animate-ping"></span>
          </span>
        </motion.a>
      </div>
    </section>
  );
}