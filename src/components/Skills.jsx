import React, { useState } from 'react';
import { Cpu, Server, Layout, Wrench, Search, Code, CheckCircle, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Tech Stack' },
    ...profileData.skills.categories.map(c => ({ id: c.id, label: c.title }))
  ];

  const getFilteredCategories = () => {
    return profileData.skills.categories.map(cat => {
      if (activeTab !== 'all' && cat.id !== activeTab) {
        return null;
      }
      
      const filteredSkills = cat.skills.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredSkills.length === 0) return null;

      return {
        ...cat,
        skills: filteredSkills
      };
    }).filter(Boolean);
  };

  const filteredData = getFilteredCategories();

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Brain': return Cpu;
      case 'Server': return Server;
      case 'Layout': return Layout;
      case 'Wrench': return Wrench;
      default: return Code;
    }
  };

  return (
    <section id="skills" style={{ padding: '5rem 0', position: 'relative', background: 'rgba(13, 17, 26, 0.4)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Cpu size={16} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient-cyan">Engineering Stack</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Comprehensive toolkit spanning Deep Learning architectures, RESTful API design, interactive UI, and DevOps deployment pipelines.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          marginBottom: '3rem'
        }}>
          {/* Search Box */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '480px'
          }}>
            <Search size={18} style={{ position: 'absolute', left: '1.1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search skills (e.g. FastAPI, OpenCV, React, JWT, CNN)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem 1rem 0.8rem 2.8rem',
                background: 'rgba(17, 24, 39, 0.7)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-full)',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(8px)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center'
          }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  background: activeTab === cat.id ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(192, 132, 252, 0.2) 100%)' : 'rgba(255, 255, 255, 0.03)',
                  color: activeTab === cat.id ? 'var(--text-main)' : 'var(--text-muted)',
                  border: activeTab === cat.id ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid var(--border-color)',
                  padding: '0.5rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.875rem',
                  fontWeight: activeTab === cat.id ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.75rem'
        }}>
          {filteredData.map((category) => {
            const IconComp = getIcon(category.icon);
            return (
              <div key={category.id} className="glass-card" style={{ padding: '1.75rem' }}>
                
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}>
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>{category.title}</h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{category.skills.length} core proficiencies</span>
                  </div>
                </div>

                {/* Skill Items list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <span style={{ fontWeight: 600, fontSize: '0.925rem', color: 'var(--text-main)' }}>
                          {skill.name}
                        </span>
                        <span className="badge badge-cyan" style={{ fontSize: '0.725rem', padding: '0.15rem 0.6rem' }}>
                          {skill.tag}
                        </span>
                      </div>

                      {/* Level Progress Bar */}
                      <div style={{
                        width: '100%',
                        height: '6px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderRadius: '3px',
                        overflow: 'hidden'
                      }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, #38bdf8 0%, #c084fc 100%)`,
                            borderRadius: '3px',
                            transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Software Design & Methodology Bar */}
        <div className="glass-card" style={{ marginTop: '3rem', padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', color: 'var(--accent-emerald)' }}>
            <Sparkles size={20} />
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)' }}>Software Analysis & System Design Capabilities</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
            Proven ability to translate complex stakeholder requirements into structured technical specifications and architectural diagrams:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              "Requirement Analysis & SRS Documentation",
              "UML Class & Use Case Diagramming",
              "System Workflow Design & Data Flow Diagrams (DFDs)",
              "Entity-Relationship Diagrams (ERDs) & Database Normalization"
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <CheckCircle size={16} style={{ color: 'var(--accent-emerald)', marginTop: '0.2rem', flexShrink: 0 }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: 1.4 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
