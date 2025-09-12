"use client";

import { motion } from "framer-motion";

type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

const experiences: Experience[] = [
  {
    role: "Front-End Developer",
    company: "Freelance",
    period: "2024 — Present",
    points: [
      "Membangun landing page cepat dan responsif dengan Next.js & Tailwind.",
      "Meningkatkan Core Web Vitals (LCP, CLS) hingga 20-30%.",
      "Integrasi animasi halus menggunakan Framer Motion.",
    ],
  },
  {
    role: "UI Developer Intern",
    company: "Company Name",
    period: "2023 — 2024",
    points: [
      "Mengimplementasikan design system ke komponen reusable.",
      "Membuat themeable components dan aksesibilitas dasar (ARIA).",
    ],
  },
];

export default function Experiences() {
  return (
    <section id="experience" className="py-20 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-10 bg-gradient-to-r from-indigo-200 to-cyan-200 bg-clip-text text-transparent">
          Experiences
        </h2>

        <div className="relative">
          <div className="absolute left-[20px] top-0 bottom-0 w-px bg-white/10"></div>

          <ul className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.li
                key={exp.role + exp.company}
                className="relative pl-14"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="absolute left-0 top-1.5 h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 ring-1 ring-white/15 flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-300"></div>
                </div>

                <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 hover:shadow-xl transition">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-white">
                      {exp.role} <span className="text-indigo-100/80">@ {exp.company}</span>
                    </h3>
                    <span className="text-sm text-indigo-100/70">{exp.period}</span>
                  </div>

                  <ul className="mt-3 list-disc pl-5 space-y-1.5 text-indigo-100/80">
                    {exp.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>

                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/0 via-cyan-400/0 to-indigo-500/0 opacity-0 group-hover:opacity-20 transition"></div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}