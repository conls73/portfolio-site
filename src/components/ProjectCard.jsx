import '../styles/project-card.css';

export default function ProjectCard({ project, activeFilter, onFilterChange }) {
  return (
    <div className="project-card scale-in">
      <div className="project-preview">
        {project.screenshot && (
          <img
            src={`${import.meta.env.BASE_URL}${project.screenshot.replace(/^\//, '')}`}
            alt={`${project.name} screenshot`}
            className="project-card-image"
          />
        )}
      </div>

      <div className="project-card-content">
        <div className="project-header">
          <h3>{project.name}</h3>
          <span className="project-category">{project.category}</span>
        </div>

        <p className="project-description">{project.description}</p>

        {project.note && (
          <p className="project-note">💡 {project.note}</p>
        )}

        <div className="project-tags">
          {Array.from(new Set([...(project.tags || []), ...(project.tech || [])])).map((item) => (
            <button
              key={item}
              className={`project-tag ${activeFilter === item ? 'active' : ''}`}
              onClick={() => onFilterChange(activeFilter === item ? 'All' : item)}
            >
              {item}
            </button>
          ))}
        </div>

        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">
          View Project →
        </a>
      </div>
    </div>
  );
}
