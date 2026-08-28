import React, { useState } from 'react';
import { User, Cpu, Database, Network, Globe, GraduationCap, CheckCircle2, Award, Mail, Phone, Download, Check } from 'lucide-react';
import { profileData } from '../data/profileData';
import { downloadPdfCv } from '../utils/generatePdfCv';
import { useScrollReveal, useStaggerReveal } from '../utils/useScrollReveal';

export default function About() {
  const [downloaded, setDownloaded] = useState(false);
  const headerRef = useScrollReveal();
  const bioRef = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });
  const academicRef = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });
  const pillarsRef = useStaggerReveal({ staggerDelay: 150 });

  const handleDownload = () => {
    downloadPdfCv();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };
  const pillars = [
    {
      icon: Cpu,
      title: "AI, ML & Computer Vision",
      desc: "Specialized in deep convolutional neural networks (CNNs), transfer learning (Xception, VGG19, ResNet), and ensemble feature fusion achieving up to 99.93% ROC-AUC.",
      color: "var(--accent-purple)"
    },
    {
      icon: Database,
      title: "Full-Stack Web & REST APIs",
      desc: "Architecting high-concurrency FastAPI backends with SQLAlchemy, SQLite/MySQL, Pydantic models, JWT authentication, and interactive React 19 single page interfaces.",
      color: "var(--accent-cyan)"
    },
    {
      icon: Network,
      title: "DevOps & CI/CD Automation",
      desc: "Certified CCNA networking student skilled in configuring automated 4-job GitHub Actions deployment pipelines targeting Vercel (frontend) and Render (backend).",
      color: "var(--accent-emerald)"
    }
  ];

  return (
    <section id="about" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <User size={16} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Engineering Solutions at the Intersection of <span className="text-gradient-purple">AI & Full-Stack</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Passionate about building robust software, evaluating neural network architectures, and deploying seamless production workflows.
          </p>
        </div>

        {/* Top Grid: Narrative Bio & Key Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch',
          marginBottom: '3rem'
        }}>
          {/* Left Bio Card */}
          <div ref={bioRef} className="reveal-left">
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderLeft: '3px solid rgba(56, 189, 248, 0.3)' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>
                  Professional Profile
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {profileData.personal.bio}
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  Currently pursuing a Bachelor of Science in Computer Science & Engineering at <strong>Independent University, Bangladesh</strong>. I thrive on solving real-world challenges—from medical image disease classification to real-time emergency healthcare management systems.
                </p>
              </div>

              {/* Languages Bar */}
              <div style={{ marginTop: '1.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Globe size={16} style={{ color: 'var(--accent-cyan)' }} />
                  <span>Languages Spoken:</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {profileData.skills.spokenLanguages.map((lang, i) => (
                    <span key={i} className="badge badge-cyan" style={{ fontSize: '0.8rem' }}>
                      {lang.name} — <span style={{ opacity: 0.8 }}>{lang.proficiency}</span>
                    </span>
                  ))}
                </div>

                {/* CV Actions Bar */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                  <button
                    onClick={handleDownload}
                    className="btn-primary"
                    style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    {downloaded ? <Check size={16} /> : <Download size={16} />}
                    <span>{downloaded ? 'Downloaded PDF!' : 'Download Official CV'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Reference & Academic Badge */}
          <div ref={academicRef} className="reveal-right">
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderLeft: '3px solid rgba(192, 132, 252, 0.3)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--text-main)' }}>Independent University, Bangladesh</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>B.Sc in Computer Science & Engineering (2022 – Present)</p>
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    Academic Reference
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    {profileData.reference.name}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    {profileData.reference.title}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.825rem', color: 'var(--text-sub)', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Mail size={13} style={{ color: 'var(--accent-cyan)' }} />
                      {profileData.reference.email}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Phone size={13} style={{ color: 'var(--accent-emerald)' }} />
                      {profileData.reference.phone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Certification Highlight */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.25)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)' }}>
                <Award size={24} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                    Cisco CCNA Certified (Aug 2026)
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Cert ID: {profileData.certifications[0].certId.substring(0, 18)}...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid: 3 Pillars */}
        <div ref={pillarsRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div key={idx} className="glass-card stagger-item" style={{ padding: '1.75rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: pillar.color,
                  marginBottom: '1.25rem',
                  transition: 'all 0.3s ease'
                }}>
                  <IconComp size={24} />
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                  {pillar.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
