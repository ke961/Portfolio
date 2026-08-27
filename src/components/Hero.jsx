import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, Sparkles, Terminal, Download, MapPin, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import { profileData } from '../data/profileData';

export default function Hero({ onOpenResume }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = profileData.personal.typingTitles;

  useEffect(() => {
    const fullText = titles[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setCurrentText(
          fullText.substring(0, isDeleting ? currentText.length - 1 : currentText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, titles]);

  return (
    <section id="hero" style={{ paddingTop: '8.5rem', paddingBottom: '4.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background Glow Orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '5%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(192, 132, 252, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column - Headline & Details */}
          <div>
            {/* Status Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 0.9rem', borderRadius: 'var(--radius-full)', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.3)', marginBottom: '1.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)', boxShadow: '0 0 10px var(--accent-emerald)' }} className="animate-pulse-glow" />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                Open for Software Engineering & AI Roles
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--text-main)' }}>
              Hi, I'm <span className="text-gradient-cyan">{profileData.personal.name}</span>
            </h1>

            {/* Dynamic Typing Title */}
            <div style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.85rem)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              color: 'var(--text-muted)',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              minHeight: '2.5rem'
            }}>
              <span>I build</span>
              <span style={{ color: 'var(--accent-purple)', textDecoration: 'underline decoration-cyan decoration-2' }}>
                {currentText}
              </span>
              <span style={{ color: 'var(--accent-cyan)', animation: 'pulseGlow 1s infinite' }}>|</span>
            </div>

            {/* Bio excerpt */}
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', maxWidth: '620px', marginBottom: '2rem', leading: 1.6 }}>
              CSE Student at Independent University, Bangladesh specializing in <strong>Deep Learning & Computer Vision</strong>, 
              building high-performance <strong>FastAPI backends</strong> and responsive <strong>React frontends</strong> with automated CI/CD workflows.
            </p>

            {/* Quick Location & Social Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <MapPin size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>Uttarkhan, Dhaka, Bangladesh</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <ShieldCheck size={16} style={{ color: 'var(--accent-emerald)' }} />
                <span>CCNA Network Certified</span>
              </div>
              <a
                href={profileData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--accent-cyan)',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  background: 'rgba(56, 189, 248, 0.08)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  transition: 'all 0.2s ease'
                }}
              >
                <LinkedinIcon size={14} />
                <span>in/abila-khan-keya</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href="#projects" className="btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#ai-showcase" className="btn-secondary" style={{ borderColor: 'rgba(192, 132, 252, 0.4)', color: 'var(--accent-purple)' }}>
                <Brain size={18} />
                <span>AI Simulators</span>
              </a>

              <button onClick={onOpenResume} className="btn-secondary">
                <Download size={17} style={{ color: 'var(--accent-cyan)' }} />
                <span>CV / Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column - Sleek Interactive Code / Card Showcase */}
          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
              
              {/* Card Top Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                    ensemble_model.py
                  </span>
                </div>
                <span className="badge badge-purple">95.45% Accuracy</span>
              </div>

              <pre style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.775rem',
                lineHeight: 1.65,
                color: '#e5e7eb',
                background: 'rgba(5, 7, 12, 0.7)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                overflowX: 'hidden',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                marginBottom: '1.25rem'
              }}>
<code><span style={{ color: '#c084fc' }}>import</span> tensorflow <span style={{ color: '#c084fc' }}>as</span> tf
<span style={{ color: '#c084fc' }}>from</span> fastapi <span style={{ color: '#c084fc' }}>import</span> FastAPI

<span style={{ color: '#9ca3af' }}># Deep Neural Ensemble Fusion Model</span>
<span style={{ color: '#38bdf8' }}>class</span> <span style={{ color: '#34d399' }}>LeafEnsemblePredictor</span>:
    <span style={{ color: '#c084fc' }}>def</span> <span style={{ color: '#60a5fa' }}>__init__</span>(self):
        self.xception = tf.keras.models.load(<span style={{ color: '#fbbf24' }}>"xception_branch.h5"</span>)
        self.resnet = tf.keras.models.load(<span style={{ color: '#fbbf24' }}>"resnet152v2_branch.h5"</span>)
        self.vgg19 = tf.keras.models.load(<span style={{ color: '#fbbf24' }}>"vgg19_branch.h5"</span>)
    
    <span style={{ color: '#c084fc' }}>def</span> <span style={{ color: '#60a5fa' }}>predict_leaf</span>(self, image_tensor):
        f1 = self.xception(image_tensor)
        f2 = self.resnet(image_tensor)
        f3 = self.vgg19(image_tensor)
        fused = tf.concat([f1, f2, f3], axis=-1)
        <span style={{ color: '#c084fc' }}>return</span> self.classifier(fused)  <span style={{ color: '#34d399' }}># 99.93% ROC-AUC</span></code>
              </pre>

              {/* Highlights Chips */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>7,080</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Images Evaluated (15 Classes)</div>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>4-Job CI/CD</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>GitHub Actions to Vercel/Render</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div style={{
          marginTop: '4rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem'
        }}>
          {profileData.personal.stats.map((stat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: idx % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)', fontFamily: 'var(--font-heading)' }}>
                {stat.value}
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
