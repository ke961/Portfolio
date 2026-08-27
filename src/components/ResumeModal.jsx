import React, { useEffect } from 'react';
import { X, Download, Printer, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, FileText } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { profileData } from '../data/profileData';

export default function ResumeModal({ onClose }) {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(5, 7, 12, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '2.5rem',
          position: 'relative',
          background: '#0f1420',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileText size={22} style={{ color: 'var(--accent-cyan)' }} />
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)' }}>Curriculum Vitae — Abila Khan Keya</h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={handlePrint}
              className="btn-primary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
            >
              <Printer size={16} />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div style={{ color: 'var(--text-main)', fontFamily: 'var(--font-sans)', lineHeight: 1.6 }}>
          
          {/* Header */}
          <div style={{ borderBottom: '2px solid var(--accent-cyan)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '2.25rem', color: 'var(--text-main)', margin: 0 }}>
              {profileData.personal.name}
            </h1>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '0.75rem' }}>
              {profileData.personal.title}
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              <span>✉ {profileData.personal.email}</span>
              <span>📞 {profileData.personal.phone}</span>
              <span>📍 {profileData.personal.location}</span>
              <span>🔗 github.com/ke961</span>
              <span>💼 linkedin.com/in/abila-khan-keya</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem' }}>
              Profile
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              {profileData.personal.bio}
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem' }}>
              Education
            </h3>
            {profileData.education.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.95rem' }}>
                  <span>{edu.degree}</span>
                  <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{edu.period}</span>
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{edu.institution}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem' }}>
              Certifications
            </h3>
            {profileData.certifications.map((c, idx) => (
              <div key={idx} style={{ fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                  <span>{c.title}</span>
                  <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>{c.date}</span>
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>{c.issuer}</div>
                <div style={{ fontSize: '0.775rem', color: 'var(--text-sub)', fontFamily: 'var(--font-mono)' }}>Cert ID: {c.certId}</div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem' }}>
              Skills Summary
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.85rem', fontSize: '0.85rem' }}>
              <div>
                <strong style={{ color: 'var(--accent-cyan)' }}>Programming:</strong> Python, Java (OOP), JavaScript, PHP, SQL (SQLite, MySQL)
              </div>
              <div>
                <strong style={{ color: 'var(--accent-cyan)' }}>AI & Vision:</strong> Deep Learning, CNNs, Transfer Learning, Ensemble Methods, OpenCV, NumPy
              </div>
              <div>
                <strong style={{ color: 'var(--accent-cyan)' }}>Backend & APIs:</strong> FastAPI, SQLAlchemy, Pydantic, RESTful APIs, JWT Auth
              </div>
              <div>
                <strong style={{ color: 'var(--accent-cyan)' }}>Frontend & Tools:</strong> React 19, Vite, HTML5, CSS3, Tkinter, Git, GitHub Actions, Vercel
              </div>
            </div>
          </div>

          {/* Projects Breakdown */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem' }}>
              Key Projects
            </h3>
            {profileData.projects.map((proj, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.925rem' }}>
                  <span>{proj.title}</span>
                  <span style={{ fontSize: '0.775rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{proj.techStack.slice(0, 4).join(', ')}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  {proj.description}
                </div>
              </div>
            ))}
          </div>

          {/* Reference */}
          <div>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem' }}>
              Academic Reference
            </h3>
            <div style={{ fontSize: '0.875rem' }}>
              <strong>{profileData.reference.name}</strong>, {profileData.reference.title}
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Email: {profileData.reference.email} | Tel: {profileData.reference.phone}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
