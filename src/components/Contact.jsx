import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import { profileData } from '../data/profileData';
import confetti from 'canvas-confetti';
import { useScrollReveal } from '../utils/useScrollReveal';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState('Job Opportunity');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const headerRef = useScrollReveal();
  const infoRef = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });
  const formRef = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });

  const topics = ['Job Opportunity', 'AI / Deep Learning', 'Full-Stack Project', 'Networking / Chat'];

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({ particleCount: 50, spread: 80, origin: { y: 0.7 } });
    }, 1000);
  };

  return (
    <section id="contact" style={{ padding: '5rem 0 6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Mail size={16} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient-cyan">Exceptional</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Whether you have an engineering opening, research inquiry, or full-stack project idea, my inbox is always open.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Direct Info Cards & Copy Buttons */}
          <div ref={infoRef} className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Email Card */}
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeft: '3px solid rgba(56, 189, 248, 0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Address</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    {profileData.personal.email}
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(profileData.personal.email, 'email')}
                title="Copy email to clipboard"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  color: copiedField === 'email' ? 'var(--accent-emerald)' : 'var(--text-muted)',
                  padding: '0.5rem',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.8rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {copiedField === 'email' ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeft: '3px solid rgba(52, 211, 153, 0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(52, 211, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-emerald)' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Phone / WhatsApp</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}>
                    {profileData.personal.phone}
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(profileData.personal.phone, 'phone')}
                title="Copy phone to clipboard"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  color: copiedField === 'phone' ? 'var(--accent-emerald)' : 'var(--text-muted)',
                  padding: '0.5rem',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.8rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {copiedField === 'phone' ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location */}
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '3px solid rgba(192, 132, 252, 0.3)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(192, 132, 252, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>
                <MapPin size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Current Location</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  {profileData.personal.location}
                </div>
              </div>
            </div>

            <a
              href={profileData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)' }}>
                  <GithubIcon size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>GitHub Repository</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                    github.com/ke961
                  </div>
                </div>
              </div>
              <Sparkles size={18} style={{ color: 'var(--accent-cyan)' }} />
            </a>

            <a
              href={profileData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                  <LinkedinIcon size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LinkedIn Profile</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                    linkedin.com/in/abila-khan-keya
                  </div>
                </div>
              </div>
              <Sparkles size={18} style={{ color: 'var(--accent-cyan)' }} />
            </a>

          </div>

          {/* Right Column: Contact Form */}
          <div ref={formRef} className="reveal-right">
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageSquare size={20} style={{ color: 'var(--accent-cyan)' }} />
                <span>Send Me a Direct Message</span>
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                Select a topic below and fill in your message.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: 'rgba(52, 211, 153, 0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(52, 211, 153, 0.3)', animation: 'fadeInScale 0.5s var(--ease-spring) both' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--accent-emerald-glow)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                    <Check size={28} />
                  </div>
                  <h4 style={{ fontSize: '1.35rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    Message Sent Successfully!
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Thank you for reaching out, {formData.name}. I will get back to you promptly at {formData.email}.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                    className="btn-secondary"
                    style={{ fontSize: '0.85rem', padding: '0.5rem 1.25rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  {/* Topic selector */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                      Select Topic:
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {topics.map((top) => (
                        <button
                          key={top}
                          type="button"
                          onClick={() => setSelectedTopic(top)}
                          style={{
                            background: selectedTopic === top ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                            color: selectedTopic === top ? 'var(--accent-cyan)' : 'var(--text-muted)',
                            border: selectedTopic === top ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                            padding: '0.35rem 0.8rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.775rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {top}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(5, 7, 12, 0.7)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-main)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(5, 7, 12, 0.7)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-main)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your project, role opportunity, or question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(5, 7, 12, 0.7)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-main)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{ padding: '0.85rem', width: '100%', gap: '0.5rem' }}
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
