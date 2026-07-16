import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Reflection from './components/Reflection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-navy-100 font-sans selection:bg-teal-500 selection:text-navy-950 overflow-x-hidden antialiased">
      {/* Navigation bar */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* About/Story section */}
      <About />

      {/* 6 Assignments Projects Sandbox section */}
      <Projects />

      {/* Reflection & Self-Assessment section */}
      <Reflection />

      {/* Contact and local messaging db section */}
      <Contact />

      {/* Academic credits footer */}
      <Footer />
    </div>
  );
}
