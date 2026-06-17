"use client";

import { useState } from "react";
import WinWindow from "@/components/WinWindow";

const contactMethods = [
  { name: "Email",    icon: "/email-pixelated.png",                                           href: "https://mail.google.com/mail/?view=cm&fs=1&to=randidjaja7@gmail.com", desc: "randidjaja7@gmail.com", external: false },
  { name: "WhatsApp", icon: "/wa-pixelated.png",                                           href: "https://wa.me/6289678328080",                                          desc: "+62 896-7832-8080",     external: true  },
  { name: "LinkedIn", icon: "/linkedin_pixel_logo_icon_181925.webp",        href: "https://linkedin.com/in/randiandhikadjaja",                            desc: "randiandhikadjaja",     external: true  },
  { name: "GitHub",   icon: "/github-pixelated.png",                        href: "https://github.com/CMGcool",                                           desc: "CMGcool",               external: true  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const subject = encodeURIComponent(formData.subject || "Message from Portfolio");
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:randidjaja7@gmail.com?subject=${subject}&body=${body}`;
      setSubmitted("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitted("error");
    }
  };

  return (
    <section id="contact" className="desktop-bg" style={{ padding: "24px 16px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>

        {/* Contact methods */}
        <WinWindow id="contact-info" title="Contact Information" icon="">
          <div
            className="win-body"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 8 }}
          >
            {contactMethods.map((m) => (
              <a key={m.name} href={m.href} target={m.external ? "_blank" : "_self"} rel={m.external ? "noopener noreferrer" : ""} style={{ textDecoration: "none" }}>
                <div
                  className="bevel-out"
                  style={{ backgroundColor: "var(--win-silver)", padding: "8px 10px", cursor: "default", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, textAlign: "center" }}
                  onMouseDown={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--bevel-darkest) var(--bevel-light) var(--bevel-light) var(--bevel-darkest)"; }}
                  onMouseUp={(e) => { (e.currentTarget as HTMLElement).style.borderColor = ""; }}
                >
                  {m.icon.startsWith("/") ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.icon}
                      alt={m.name}
                      style={{ width: 24, height: 24, objectFit: "contain", imageRendering: "pixelated" }}
                    />
                  ) : (
                    <span style={{ fontSize: 24, lineHeight: 1 }}>{m.icon}</span>
                  )}
                  <span style={{ fontFamily: "var(--font-system)", fontWeight: 700, fontSize: 12 }}>{m.name}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--win-dark-gray)", wordBreak: "break-all" }}>{m.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </WinWindow>

        {/* Contact form */}
        <WinWindow id="contact-form" title="Send a Message" icon="">
          <div className="win-body">
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                <div>
                  <label htmlFor="name" style={{ fontFamily: "var(--font-system)", fontSize: 12, display: "block", marginBottom: 2 }}>Name:</label>
                  <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="win-input" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" style={{ fontFamily: "var(--font-system)", fontSize: 12, display: "block", marginBottom: 2 }}>Email:</label>
                  <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="win-input" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" style={{ fontFamily: "var(--font-system)", fontSize: 12, display: "block", marginBottom: 2 }}>Subject:</label>
                <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} className="win-input" placeholder="What's this about?" />
              </div>

              <div>
                <label htmlFor="message" style={{ fontFamily: "var(--font-system)", fontSize: 12, display: "block", marginBottom: 2 }}>Message:</label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="win-input" style={{ resize: "vertical" }} placeholder="Tell me about your project or just say hello..." />
              </div>

              <hr className="win-separator" />

              <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <button type="submit" className="win-btn win-btn--primary"> Send Message</button>
                <button type="button" className="win-btn" onClick={() => setFormData({ name: "", email: "", subject: "", message: "" })}> Clear</button>

                {submitted === "success" && (
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#005000", padding: "2px 6px", border: "1px solid #005000", backgroundColor: "#e0ffe0" }}>
                    ✔ Email client opened.
                  </span>
                )}
                {submitted === "error" && (
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, padding: "2px 6px", border: "1px solid var(--win-black)", backgroundColor: "#ffe0e0" }}>
                    ✘ Error. Please try again.
                  </span>
                )}
              </div>
            </form>
          </div>
        </WinWindow>
      </div>
    </section>
  );
}
