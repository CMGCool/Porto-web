import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Certificate from "../components/Certificate";  
import Experiences from "../components/Experiences";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Experiences />
      <Certificate />
      <Contact />
      <Footer />
    </main>
  );
}
