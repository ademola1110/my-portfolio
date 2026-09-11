import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />

      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}

export default App;