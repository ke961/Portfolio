import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profileData';
import { useScrollReveal, useStaggerReveal } from '../utils/useScrollReveal';

export default function Education() {
  const headerRef = useScrollReveal();
  const eduRef = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });
  const certRef = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });
  const courseworkRef = useStaggerReveal({ staggerDelay: 80 });

  return (
    <section id="education" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <GraduationCap size={16} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-gradient-purple">Certifications</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Academic foundation in Computer Science & Engineering paired with industry networking credentials.
          </p>
        </div>

        {/* Top Grid: Education & Certification */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          
          {/* Left Column: Education Timeline */}
          <div ref={eduRef} className="reveal-left">
            <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                  <GraduationCap size={22} />
                </div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)' }}>Higher Education</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {profileData.education.map((edu, idx) => (
                  <div key={idx} style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid rgba(56, 189, 248, 0.3)' }}>
                    <div style={{ position: 'absolute', left: '-7px', top: '0', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)', animation: 'pulseGlow 3s ease-in-out infinite' }} />
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                        {edu.period}
                      </span>
                      <span className={`badge badge-${edu.status === 'In Progress' ? 'purple' : 'cyan'}`} style={{ fontSize: '0.75rem' }}>
                        {edu.status}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.15rem', color: 'var(--text-main)', margin: '0.2rem 0' }}>
                      {edu.degree}
                    </h4>

                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>
                      {edu.institution}
                    </div>

                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Certification Highlight */}
          <div ref={certRef} className="reveal-right">
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(52, 211, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-emerald)' }}>
                    <Award size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)' }}>Industry Certification</h3>
                </div>

                {profileData.certifications.map((cert, cIdx) => (
                  <div key={cIdx} style={{ background: 'rgba(52, 211, 153, 0.05)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(52, 211, 153, 0.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span className="badge badge-emerald">Cisco Networking Academy</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{cert.date}</span>
                    </div>

                    <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', margin: '0.4rem 0' }}>
                      {cert.title}
                    </h4>

                    <div style={{ fontSize: '0.825rem', color: 'var(--text-sub)', fontFamily: 'var(--font-mono)', marginBottom: '1rem', wordBreak: 'break-all' }}>
                      Cert ID: <span style={{ color: 'var(--accent-cyan)' }}>{cert.certId}</span>
                    </div>

                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                      Key Competencies Verified:
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      {cert.skillsCovered.map((sc, sIdx) => (
                        <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          <ShieldCheck size={14} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                          <span>{sc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1.5rem', padding: '0.85rem 1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                Offered by Cisco Networking Academy at Independent University, Bangladesh
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Relevant Coursework Grid */}
        <div className="glass-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', color: 'var(--accent-purple)' }}>
            <BookOpen size={22} />
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)' }}>Relevant Academic Coursework</h3>
          </div>

          <div ref={courseworkRef} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem'
          }}>
            {profileData.coursework.map((course, idx) => (
              <div
                key={idx}
                className="stagger-item"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '0.85rem 1.1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <CheckCircle2 size={16} style={{ color: 'var(--accent-purple)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-main)' }}>
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
