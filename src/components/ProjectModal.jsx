import React, { useEffect } from 'react';
import { X, ExternalLink, Award, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(5, 7, 12, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '740px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          position: 'relative',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          background: 'rgba(13, 17, 26, 0.95)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Top Header */}
        <div style={{ marginBottom: '1.5rem', paddingRight: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
            <span className="badge badge-purple">{project.category}</span>
            <span className="badge badge-cyan">{project.badge}</span>
          </div>
          <h2 style={{ fontSize: '1.85rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
            {project.title}
          </h2>
          <p style={{ color: 'var(--accent-cyan)', fontSize: '1rem', fontWeight: 600 }}>
            {project.subtitle}
          </p>
        </div>

        {/* Metrics Grid Callout */}
        {project.metrics && project.metrics.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '0.85rem',
            marginBottom: '1.75rem',
            background: 'rgba(56, 189, 248, 0.05)',
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(56, 189, 248, 0.2)'
          }}>
            {project.metrics.map((m, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-heading)' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Description Overview */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.6rem' }}>
            Overview
          </h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            {project.description}
          </p>
        </div>

        {/* Key Features & Architecture Highlights */}
        {project.details && project.details.length > 0 && (
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
              Key Technical Features & Achievements
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {project.details.map((detail, dIdx) => (
                <div key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', background: 'rgba(255, 255, 255, 0.02)', padding: '0.75rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', marginTop: '0.2rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Chips */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
            Technologies & Tools
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.techStack.map((tech, tIdx) => (
              <span key={tIdx} className="badge badge-cyan" style={{ fontSize: '0.8rem' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}
          >
            <GithubIcon size={18} />
            <span>View Source on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
