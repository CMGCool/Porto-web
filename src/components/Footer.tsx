export default function Footer() {
    return (
      <footer className="py-6 text-center text-indigo-100/70 border-t border-white/10">
        © {new Date().getFullYear()} Randi. All rights reserved.
      </footer>
    );
  }