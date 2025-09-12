"use client";

import { motion } from "framer-motion";

type Cert = {
  title: string;
  issuer: string;
  image: string; // lokasi gambar di /public
  url?: string;  // link credential (opsional)
  date?: string; // tahun/bulan (opsional)
};

const certificates: Cert[] = [
  { title: "Front-End Developer", issuer: "Dicoding", image: "/window.svg", url: "https://example.com/credential/fe", date: "2024" },
  { title: "Next.js Fundamentals", issuer: "Vercel", image: "/vercel.svg", url: "https://example.com/credential/next", date: "2025" },
  { title: "React Essentials", issuer: "Meta", image: "/next.svg", url: "https://example.com/credential/react", date: "2024" },
  { title: "Web Accessibility", issuer: "W3C", image: "/globe.svg", url: "https://example.com/credential/a11y", date: "2023" },
];

export default function Certificate() {
  return (
    <section id="certificates" className="py-20 scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-indigo-200 to-cyan-200 bg-clip-text text-transparent">
          Certificates
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {certificates.map((c, i) => (
            <motion.article
              key={c.title}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-5 text-left hover:shadow-xl transition"
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-4">
                <div className="relative shrink-0 h-14 w-14 rounded-xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
                  <img
                    src={c.image}
                    alt={c.issuer}
                    className="h-8 w-8 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-semibold text-white">{c.title}</h3>
                  <p className="text-sm text-indigo-100/80">
                    {c.issuer}{c.date ? ` • ${c.date}` : ""}
                  </p>
                </div>
              </div>

              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-200 hover:text-white transition"
                >
                  View credential
                  <span className="h-1 w-1 rounded-full bg-cyan-300 group-hover:scale-125 transition"></span>
                </a>
              ) : null}

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/0 via-cyan-400/0 to-indigo-500/0 opacity-0 group-hover:opacity-20 transition"></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}