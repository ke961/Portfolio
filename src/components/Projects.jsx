import React, { useState } from 'react';
import { FolderGit2, Search, ExternalLink, ArrowRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { profileData } from '../data/profileData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = ['All', 'AI & Deep Learning', 'Full-Stack Web', 'Desktop & Automation'];

  const filteredProjects = profileData.projects.filter((project) => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <FolderGit2 size={16} />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient-purple">Engineering Projects</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            From multi-branch Deep Learning ensemble neural architectures to production full-stack web platforms with automated CI/CD pipelines.
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
            maxWidth: '520px'
          }}>
            <Search size={18} style={{ position: 'absolute', left: '1.1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search projects by tech (e.g., FastAPI, CNN, React, OpenCV, SQLite)..."
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
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  background: activeFilter === filter ? 'linear-gradient(135deg, rgba(192, 132, 252, 0.25) 0%, rgba(56, 189, 248, 0.25) 100%)' : 'rgba(255, 255, 255, 0.03)',
                  color: activeFilter === filter ? 'var(--text-main)' : 'var(--text-muted)',
                  border: activeFilter === filter ? '1px solid rgba(192, 132, 252, 0.4)' : '1px solid var(--border-color)',
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.875rem',
                  fontWeight: activeFilter === filter ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              {/* Top Meta info */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span className={`badge badge-${project.accentColor || 'cyan'}`}>
                    {project.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {project.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                
                <p style={{ color: 'var(--accent-cyan)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
                  {project.subtitle}
                </p>

                {/* Metrics Highlight Pills */}
                {project.metrics && project.metrics.length > 0 && (
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.25rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)'
                  }}>
                    {project.metrics.slice(0, 3).map((m, idx) => (
                      <div key={idx} style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                        <strong style={{ color: 'var(--text-main)' }}>{m.value}</strong> {m.label}
                      </div>
                    ))}
                  </div>
                )}

                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {project.description}
                </p>
              </div>

              {/* Bottom Tech & CTA */}
              <div>
                {/* Tech Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.techStack.slice(0, 5).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'var(--text-muted)',
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-sub)', alignSelf: 'center' }}>
                      +{project.techStack.length - 5} more
                    </span>
                  )}
                </div>

                {/* Card Actions */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent-cyan)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <span>View Technical Details</span>
                    <ArrowRight size={16} />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Source on GitHub"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      textDecoration: 'none'
                    }}
                  >
                    <GithubIcon size={16} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal display when selected */}
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}

      </div>
    </section>
  );
}
