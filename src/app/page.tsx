import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";
import Certificate from "../components/Certificate";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BootController from "../components/BootController";
import Taskbar from "../components/Taskbar";
import { WindowManagerProvider } from "../components/WindowManager";

export default function Home() {
  return (
    <WindowManagerProvider>
      {/* Boot screen overlay */}
      <BootController />

      <main className="desktop-bg" style={{ minHeight: "100vh", paddingBottom: 36 }}>
        <Navbar />
        <Hero />
        <Projects />
        <Experiences />
        <Certificate />
        <Contact />
        <Footer />
      </main>

      {/* Win95 taskbar — always on top */}
      <Taskbar />
    </WindowManagerProvider>
  );
}
