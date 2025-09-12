"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experiences" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all ${scrolled ? "backdrop-blur-md/80 bg-white/5 border-b border-white/10" : "bg-transparent"}`}>
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-indigo-300 via-cyan-200 to-indigo-400 bg-clip-text text-transparent">Randi</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="relative text-sm text-indigo-100/90 hover:text-white transition">
                {item.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-cyan-300 transition-all duration-300 group-hover:w-full peer-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group relative z-50"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-indigo-100/90 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-indigo-100/90 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-indigo-100/90 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={closeMobileMenu}
                className="block text-sm text-indigo-100/90 hover:text-white transition py-2 border-b border-white/10 last:border-b-0"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}