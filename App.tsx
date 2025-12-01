import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds loading screen
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen relative font-sans text-gray-200 selection:bg-cyber-neon selection:text-cyber-black">
      <Background />
      
      {/* Scanline and Vignette overlays are defined in index.html styles for global application */}
      <div className="scanlines" />
      <div className="vignette" />

      <Navbar />

      <main className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 space-y-24 pb-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center border-t border-cyber-gray bg-cyber-black/80 backdrop-blur-sm">
        <p className="font-mono text-cyber-neon/60 text-sm">
          &copy; {new Date().getFullYear()} Òscar García. SYSTEM_STATUS: ONLINE
        </p>
      </footer>
    </div>
  );
};

export default App;