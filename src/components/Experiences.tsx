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
    role: "IT Staff Internship - Kampus Merdeka Batch 7",
    company: "PT Jasa dan Kepariwistaan Jawa Barat (Perseroda)",
    period: "September 2024 — December 2024",
    points: [
      "Responsible for creating the D'Journey project extranet website, which will serve as a dashboard for partners collaborating with PT. Jaswita Jabar to market their tours through the D'Journey application.",
      "Ensure the extranet website has the appropriate functions and features and functions properly.",
      "Responsible for creating the incoming and outgoing mail features for the board of commissioners on the Memo and Digital Letter websites of PT. Jaswita Jabar.",
      "Ensure the incoming and outgoing mail features on the Memo and Digital Letter websites have the appropriate functions and features and function properly.",
      "Contribute to helpdesk (IT Support) management at PT. Jaswita Jabar and its subsidiaries."
    ],
  },
  {
    role: "IT Staff Internship - Kampus Merdeka Batch 6",
    company: "PT Jasa dan Kepariwistaan Jawa Barat (Perseroda)",
    period: "January 2024 — June 2024",
    points: [
      "Contributed to creating the invoicing feature for the PT Jaswita asset data website.",
      "Responsible for ensuring the functionality of the invoicing feature runs as it should.",
      "Responsible for creating letter drafting menus (generate PDF templates) for the PT Jaswita digital memo website and ensuring the functionality is correct as it should.",
      "Contribute to completing helpdesk at PT Jaswita (IT Support)."
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