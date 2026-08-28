import React, { useEffect, useState } from 'react';
import { X, Download, Printer, ExternalLink, Check, FileText, Eye, Sparkles, Mail, Phone, MapPin, Award, GraduationCap, Code2, BookOpen, User } from 'lucide-react';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import { profileData } from '../data/profileData';
import { downloadPdfCv } from '../utils/generatePdfCv';

export default function ResumeModal({ onClose }) {
  const [downloaded, setDownloaded] = useState(false);
  const [viewMode, setViewMode] = useState('paper'); // 'paper' or 'dark'

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

  const handleDownload = () => {
    downloadPdfCv();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(5, 7, 12, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '920px',
          height: '94vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          background: '#0d111a',
          border: '1px solid rgba(56, 189, 248, 0.35)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.5rem',
          background: 'rgba(13, 17, 26, 0.98)',
          borderBottom: '1px solid var(--border-color)',
          flexWrap: 'wrap',
          gap: '0.75rem',
          flexShrink: 0
        }}>
          {/* Title & View Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #0284c7 0%, #a855f7 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <FileText size={18} />
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Abila Khan Keya — CV
              </span>
            </div>

            {/* Paper / Dark Mode Toggle */}
            <div style={{ display: 'flex', background: 'rgba(255, 255, 255, 0.06)', padding: '0.2rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
              <button
                onClick={() => setViewMode('paper')}
                style={{
                  background: viewMode === 'paper' ? 'var(--accent-cyan)' : 'transparent',
                  color: viewMode === 'paper' ? '#07090e' : 'var(--text-muted)',
                  border: 'none',
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.775rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                📄 Paper Document
              </button>
              <button
                onClick={() => setViewMode('dark')}
                style={{
                  background: viewMode === 'dark' ? 'var(--accent-purple)' : 'transparent',
                  color: viewMode === 'dark' ? '#ffffff' : 'var(--text-muted)',
                  border: 'none',
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.775rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                🌙 Dark Digital
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={handleDownload}
              className="btn-primary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.825rem', gap: '0.4rem' }}
            >
              {downloaded ? <Check size={15} /> : <Download size={15} />}
              <span>{downloaded ? 'Downloaded!' : 'Download PDF'}</span>
            </button>

            <a
              href="/cv.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.825rem', textDecoration: 'none', gap: '0.35rem' }}
              title="Open full page in new tab"
            >
              <ExternalLink size={14} />
              <span>Full Tab</span>
            </a>

            <button
              onClick={handlePrint}
              className="btn-secondary"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.825rem', gap: '0.35rem' }}
              title="Print document"
            >
              <Printer size={14} />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close CV"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                marginLeft: '0.25rem'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document Viewport */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: viewMode === 'paper' ? '2rem 1.5rem' : '2rem 2.5rem',
          background: viewMode === 'paper' ? '#e2e8f0' : '#0a0d14',
          display: 'flex',
          justifyContent: 'center'
        }}>
          
          {/* ========================================================= */}
          {/* VIEW 1: AUTHENTIC CLEAN PAPER A4 DOCUMENT                 */}
          {/* ========================================================= */}
          {viewMode === 'paper' && (
            <div style={{
              width: '100%',
              maxWidth: '800px',
              background: '#ffffff',
              color: '#0f172a',
              padding: '3rem 3.25rem',
              borderRadius: '6px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              fontFamily: 'Inter, system-ui, sans-serif',
              lineHeight: 1.5
            }}>
              
              {/* Header */}
              <div style={{ borderBottom: '2px solid #0284c7', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <h1 style={{ fontSize: '1.95rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Abila Khan Keya
                  </h1>
                  <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0284c7' }}>
                    Aspiring Software Engineer
                  </span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.825rem', color: '#475569' }}>
                  <span>✉ {profileData.personal.email}</span>
                  <span>📞 {profileData.personal.phone}</span>
                  <span>📍 {profileData.personal.location}</span>
                  <span>🐙 github.com/{profileData.personal.githubUsername}</span>
                  <span>💼 linkedin.com/in/{profileData.personal.linkedinUsername}</span>
                </div>
              </div>

              {/* PROFILE */}
              <div style={{ marginBottom: '1.35rem' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0f172a', borderBottom: '1.5px solid #cbd5e1', paddingBottom: '0.25rem', marginBottom: '0.6rem' }}>
                  PROFILE
                </div>
                <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: 1.6 }}>
                  {profileData.personal.bio}
                </p>
              </div>

              {/* EDUCATION */}
              <div style={{ marginBottom: '1.35rem' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0f172a', borderBottom: '1.5px solid #cbd5e1', paddingBottom: '0.25rem', marginBottom: '0.6rem' }}>
                  EDUCATION
                </div>
                {profileData.education.map((edu, idx) => (
                  <div key={idx} style={{ marginBottom: '0.65rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.875rem', color: '#0f172a' }}>
                      <span>{edu.degree}</span>
                      <span style={{ color: '#64748b', fontWeight: 500, fontSize: '0.825rem' }}>{edu.period}</span>
                    </div>
                    <div style={{ fontSize: '0.825rem', color: '#0284c7', fontWeight: 600 }}>{edu.institution}</div>
                  </div>
                ))}
              </div>

              {/* CERTIFICATIONS */}
              <div style={{ marginBottom: '1.35rem' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0f172a', borderBottom: '1.5px solid #cbd5e1', paddingBottom: '0.25rem', marginBottom: '0.6rem' }}>
                  CERTIFICATIONS
                </div>
                {profileData.certifications.map((c, idx) => (
                  <div key={idx} style={{ fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0f172a' }}>
                      <span>{c.title}</span>
                      <span style={{ color: '#059669', fontWeight: 600, fontSize: '0.825rem' }}>{c.date}</span>
                    </div>
                    <div style={{ fontSize: '0.825rem', color: '#475569' }}>
                      {c.issuer} · <span style={{ color: '#64748b' }}>Cert ID: {c.certId}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* SKILLS */}
              <div style={{ marginBottom: '1.35rem' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0f172a', borderBottom: '1.5px solid #cbd5e1', paddingBottom: '0.25rem', marginBottom: '0.6rem' }}>
                  SKILLS
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.6rem', fontSize: '0.825rem' }}>
                  <div>
                    <strong style={{ color: '#0f172a' }}>Programming Languages:</strong> Python, Java (OOP), JavaScript, PHP (Basic), SQL (SQLite, MySQL)
                  </div>
                  <div>
                    <strong style={{ color: '#0f172a' }}>AI, ML & Computer Vision:</strong> Deep Learning, CNNs, Transfer Learning, Ensemble Methods, Feature Concatenation, OpenCV, NumPy
                  </div>
                  <div>
                    <strong style={{ color: '#0f172a' }}>Backend & Frameworks:</strong> FastAPI, SQLAlchemy, Pydantic, RESTful APIs, JWT Auth, Passlib
                  </div>
                  <div>
                    <strong style={{ color: '#0f172a' }}>Front-End & Desktop UI:</strong> React 19, Vite, HTML5, CSS3, Tkinter, Pygame
                  </div>
                  <div>
                    <strong style={{ color: '#0f172a' }}>DevOps & Tools:</strong> Git, GitHub Actions (CI/CD), Vercel, Render, VS Code, Postman, Lucidchart
                  </div>
                  <div>
                    <strong style={{ color: '#0f172a' }}>Languages:</strong> Bangla (Native), English (Fluent), Korean (1A)
                  </div>
                </div>
              </div>

              {/* PROJECTS */}
              <div style={{ marginBottom: '1.35rem' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0f172a', borderBottom: '1.5px solid #cbd5e1', paddingBottom: '0.25rem', marginBottom: '0.6rem' }}>
                  PROJECTS
                </div>
                {profileData.projects.map((proj, idx) => (
                  <div key={idx} style={{ marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                      <strong style={{ fontSize: '0.875rem', color: '#0f172a' }}>{proj.title}</strong>
                      <span style={{ fontSize: '0.775rem', color: '#64748b', fontStyle: 'italic' }}>{proj.techStack.slice(0, 4).join(', ')}</span>
                    </div>
                    <p style={{ fontSize: '0.825rem', color: '#334155', margin: '0.2rem 0', lineHeight: 1.5 }}>
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* RELEVANT COURSEWORK */}
              <div style={{ marginBottom: '1.35rem' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0f172a', borderBottom: '1.5px solid #cbd5e1', paddingBottom: '0.25rem', marginBottom: '0.6rem' }}>
                  RELEVANT COURSEWORK
                </div>
                <p style={{ fontSize: '0.825rem', color: '#334155' }}>
                  {profileData.coursework.join(' · ')}
                </p>
              </div>

              {/* REFERENCES */}
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0f172a', borderBottom: '1.5px solid #cbd5e1', paddingBottom: '0.25rem', marginBottom: '0.6rem' }}>
                  REFERENCES
                </div>
                <div style={{ fontSize: '0.825rem', color: '#334155' }}>
                  <strong style={{ color: '#0f172a' }}>{profileData.reference.name}</strong>, {profileData.reference.title}<br />
                  {profileData.reference.email} · {profileData.reference.phone}
                </div>
              </div>

            </div>
          )}

          {/* ========================================================= */}
          {/* VIEW 2: SLEEK MODERN DARK DIGITAL CV                      */}
          {/* ========================================================= */}
          {viewMode === 'dark' && (
            <div style={{ width: '100%', maxWidth: '820px', color: 'var(--text-main)', lineHeight: 1.6 }}>
              
              {/* Header */}
              <div style={{ borderBottom: '2px solid var(--accent-cyan)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h1 style={{ fontSize: '2.25rem', color: 'var(--text-main)', margin: 0 }}>
                    {profileData.personal.name}
                  </h1>
                  <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                    {profileData.personal.title}
                  </span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                  <span>✉ {profileData.personal.email}</span>
                  <span>📞 {profileData.personal.phone}</span>
                  <span>📍 {profileData.personal.location}</span>
                  <span>🐙 github.com/{profileData.personal.githubUsername}</span>
                  <span>💼 linkedin.com/in/{profileData.personal.linkedinUsername}</span>
                </div>
              </div>

              {/* Profile */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.75rem' }}>
                  Profile
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.7 }}>
                  {profileData.personal.bio}
                </p>
              </div>

              {/* Education & Certifications Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.75rem' }}>
                    Education
                  </h3>
                  {profileData.education.map((edu, idx) => (
                    <div key={idx} style={{ marginBottom: '1rem' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>{edu.degree}</div>
                      <div style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>{edu.institution}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>{edu.period}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.75rem' }}>
                    Certifications
                  </h3>
                  {profileData.certifications.map((c, idx) => (
                    <div key={idx} style={{ background: 'rgba(52, 211, 153, 0.08)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(52, 211, 153, 0.25)' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>{c.title}</div>
                      <div style={{ color: 'var(--accent-emerald)', fontSize: '0.85rem' }}>{c.issuer} · {c.date}</div>
                      <div style={{ color: 'var(--text-sub)', fontSize: '0.775rem', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>Cert ID: {c.certId}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.75rem' }}>
                  Technical Skills Summary
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', fontSize: '0.875rem' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '0.3rem' }}>Languages & Core:</div>
                    <div style={{ color: 'var(--text-muted)' }}>Python, Java (OOP), JavaScript, PHP, SQL</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontWeight: 700, color: 'var(--accent-purple)', marginBottom: '0.3rem' }}>AI, ML & Vision:</div>
                    <div style={{ color: 'var(--text-muted)' }}>CNNs, Transfer Learning, Ensemble Methods, OpenCV, NumPy</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '0.3rem' }}>Backend & APIs:</div>
                    <div style={{ color: 'var(--text-muted)' }}>FastAPI, SQLAlchemy, Pydantic, RESTful APIs, JWT Auth</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontWeight: 700, color: 'var(--accent-amber)', marginBottom: '0.3rem' }}>Frontend & DevOps:</div>
                    <div style={{ color: 'var(--text-muted)' }}>React 19, Vite, CSS3, Git, GitHub Actions, Vercel, Render</div>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.75rem' }}>
                  Featured Projects (9)
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {profileData.projects.map((proj, idx) => (
                    <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                        <strong style={{ fontSize: '1rem', color: 'var(--text-main)' }}>{proj.title}</strong>
                        <span style={{ fontSize: '0.775rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>{proj.techStack.slice(0, 4).join(' • ')}</span>
                      </div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.3rem', lineHeight: 1.6 }}>
                        {proj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coursework & Reference */}
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-purple)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Relevant Coursework</h4>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>{profileData.coursework.join(', ')}</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-purple)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Academic Reference</h4>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                    <strong style={{ color: 'var(--text-main)' }}>{profileData.reference.name}</strong>, {profileData.reference.title}<br />
                    {profileData.reference.email} · {profileData.reference.phone}
                  </p>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
