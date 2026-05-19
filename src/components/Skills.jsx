import { skills } from '../data';
import '../styles/skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Skills & Tools</h2>
          <p>Technologies and platforms I work with to bring ideas to life.</p>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={category} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3>{category}</h3>
              <div className="skill-items">
                {skillList.map((skill) => (
                  <span key={skill} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
