import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AiShowcase from './components/AiShowcase';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import { ArrowUp } from 'lucide-react';

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(totalHeight > 0 ? (window.scrollY / totalHeight) : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 900,
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)',
        border: 'none',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 8px 25px rgba(2, 132, 199, 0.4)',
        transition: 'all 0.3s ease',
        animation: 'fadeInScale 0.4s var(--ease-spring) both'
      }}
    >
      <ArrowUp size={22} />
    </button>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeSection]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-main)', position: 'relative' }}>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Ambient Particle Background */}
      <ParticleBackground />

      {/* Sticky Glass Navbar */}
      <Navbar activeSection={activeSection} onSelectSection={setActiveSection} />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 1, minHeight: '70vh' }}>
        {activeSection === 'hero' && <Hero onNavigate={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'ai-showcase' && <AiShowcase />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

