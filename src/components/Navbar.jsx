import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Code2, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Navbar({ activeSection = 'hero', onSelectSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'ai-showcase', label: 'AI Simulators', highlight: true },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleSelect = (id) => {
    setMobileMenuOpen(false);
    if (onSelectSection) {
      onSelectSection(id);
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s var(--ease-out-expo)',
        background: scrolled ? 'rgba(7, 9, 14, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.2)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.2)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleSelect('hero'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: 'var(--text-main)',
            fontWeight: 800,
            fontSize: '1.25rem',
            fontFamily: 'var(--font-heading)'
          }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #0284c7 0%, #a855f7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(56, 189, 248, 0.3)',
            transition: 'transform 0.3s var(--ease-spring)',
          }}>
            <Code2 size={20} />
          </div>
          <span>
            Abila<span style={{ color: 'var(--accent-cyan)' }}>.Keya</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '0.35rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleSelect(link.id)}
                style={{
                  background: isActive 
                    ? (link.highlight ? 'rgba(192, 132, 252, 0.15)' : 'rgba(56, 189, 248, 0.12)')
                    : 'transparent',
                  color: isActive 
                    ? (link.highlight ? 'var(--accent-purple)' : 'var(--accent-cyan)') 
                    : 'var(--text-muted)',
                  border: isActive 
                    ? `1px solid ${link.highlight ? 'rgba(192, 132, 252, 0.3)' : 'rgba(56, 189, 248, 0.3)'}` 
                    : '1px solid transparent',
                  padding: '0.45rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s var(--ease-out-expo)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transform: isActive ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                {link.highlight && <Sparkles size={14} style={{ color: 'var(--accent-purple)' }} />}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle mobile menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(13, 17, 26, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-color)',
          padding: mobileMenuOpen ? '1.25rem 1.5rem' : '0 1.5rem',
          maxHeight: mobileMenuOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'all 0.4s var(--ease-out-expo)',
          opacity: mobileMenuOpen ? 1 : 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem'
        }}
      >
        {navLinks.map((link, idx) => (
          <button
            key={link.id}
            onClick={() => handleSelect(link.id)}
            style={{
              background: activeSection === link.id ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
              color: activeSection === link.id ? 'var(--accent-cyan)' : 'var(--text-main)',
              border: 'none',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '1rem',
              textAlign: 'left',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.3s ease',
              transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
              transitionDelay: mobileMenuOpen ? `${idx * 50}ms` : '0ms'
            }}
          >
            <span>{link.label}</span>
            {link.highlight && <Sparkles size={16} style={{ color: 'var(--accent-purple)' }} />}
          </button>
        ))}
      </div>

      {/* Inline styles for responsive navbar */}
      <style>{`
        @media (min-width: 868px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
