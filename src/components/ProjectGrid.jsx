import { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import '../styles/project-grid.css';

export default function ProjectGrid({ projects, title, sectionId }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const allFilters = useMemo(() => {
    const filters = new Set(['All']);
    projects.forEach((project) => {
      if (project.tags) project.tags.forEach((tag) => filters.add(tag));
      if (project.tech) project.tech.forEach((tech) => filters.add(tech));
    });
    return Array.from(filters);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => {
      const hasTag = project.tags && project.tags.includes(activeFilter);
      const hasTech = project.tech && project.tech.includes(activeFilter);
      return hasTag || hasTech;
    });
  }, [projects, activeFilter]);

  return (
    <section id={sectionId} className="projects-section">
      <div className="container">
        <div className="section-header fade-in">
          <h2>{title}</h2>
        </div>

        <div className="filters fade-in">
          {allFilters.map((filter) => (
            <button
              key={filter}
              className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(activeFilter === filter && filter !== 'All' ? 'All' : filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            ))
          ) : (
            <p className="no-projects">No projects found in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
}
