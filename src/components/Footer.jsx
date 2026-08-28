import React from 'react';
import { ArrowUp, Mail, Code2, Heart } from 'lucide-react';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import { profileData } from '../data/profileData';
import { useScrollReveal } from '../utils/useScrollReveal';

export default function Footer() {
  const footerRef = useScrollReveal({ threshold: 0.2 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'rgba(7, 9, 14, 0.95)',
      borderTop: '1px solid transparent',
      padding: '3rem 0 2rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Gradient top border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.4), rgba(192, 132, 252, 0.4), rgba(52, 211, 153, 0.3), transparent)'
      }} />

      <div className="container">
        <div ref={footerRef} className="reveal" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0284c7 0%, #a855f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(56, 189, 248, 0.2)'
            }}>
              <Code2 size={18} />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>
              Abila Khan Keya
            </span>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '500px' }}>
            {profileData.personal.subtitle} • Independent University, Bangladesh
          </p>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href={profileData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="social-icon"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={profileData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile (abila-khan-keya)"
              className="social-icon"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                color: 'var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={`mailto:${profileData.personal.email}`}
              title="Send Email"
              className="social-icon"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                color: 'var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              <Mail size={18} />
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.825rem',
          color: 'var(--text-sub)'
        }}>
          <div>
            © {new Date().getFullYear()} Abila Khan Keya. Built with React 19, Vite & CSS Glassmorphic Design.
          </div>

          <button
            onClick={scrollToTop}
            className="social-icon"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
