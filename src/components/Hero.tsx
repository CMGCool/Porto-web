"use client";

import { motion } from "framer-motion";
import Typewriter from "@/components/Typewriter";

const HERO_WORDS = [
    "I'm a fresh graduate Computer Engineering from Universitas Pendidikan Indonesia.",
    "I'm a fullstack developer.",
    "I'm a AI enthusiast.",
    "I'm a problem solver.",
];

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] overflow-hidden">
            <div className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-blob"></div>
            <div className="pointer-events-none absolute top-20 -right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-blob" style={{ animationDelay: "2s" }}></div>

            <div className="group relative p-[2px] rounded-full bg-gradient-to-br from-indigo-400/60 via-cyan-400/40 to-transparent shadow-xl ring-1 ring-white/15 mb-6">
                <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-full bg-white/5">
                    <motion.img
                        src="/pas-foto-edited.png"
                        alt="Profile"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center 60%" }}
                        initial={{ opacity: 0, scale: 1.15 }}
                        animate={{ opacity: 1, scale: 1.05 }}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 1.02 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                </div>
            </div>

            <motion.h2
                className="text-4xl md:text-5xl font-extrabold tracking-tight"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
            >
                Hi, I’m <span className="bg-gradient-to-r from-indigo-300 via-cyan-200 to-indigo-400 bg-clip-text text-transparent">Randi Andhika Djaja</span>
            </motion.h2>

            <motion.p
                className="mt-4 text-indigo-100/80 max-w-md"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
            >
                <Typewriter
                    words={HERO_WORDS}
                    typingSpeed={55}
                    deletingSpeed={35}
                    delayBetween={1100}
                />
            </motion.p>

            <motion.div
                className="mt-8 flex items-center gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
            >
                <a href="#projects" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20 hover:brightness-110 transition">
                    View Projects
                </a>
                <a href="#contact" className="px-5 py-2.5 rounded-full border border-white/15 text-indigo-100/90 hover:bg-white/5 transition">
                    Contact
                </a>
            </motion.div>
        </section>
    );
}