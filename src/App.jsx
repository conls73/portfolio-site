import { useMemo, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Contact from './components/Contact';
import { projects } from './data';
import './styles/global.css';

export default function App() {
  const [showMore, setShowMore] = useState(false);

  const smallBusinessProjects = useMemo(
    () => projects.filter((p) => p.category === 'Small Business'),
    []
  );

  const appProjects = useMemo(
    () => projects.filter((p) => p.category === 'App'),
    []
  );

  const gameProjects = useMemo(
    () => projects.filter((p) => p.category === 'Game'),
    []
  );

  return (
    <>
      <Navigation onExpandProjects={() => setShowMore(true)} />
      <Hero />
      <ProjectGrid projects={projects} title="Featured Work" sectionId="work" />
      
      {!showMore ? (
        <div style={{ textAlign: 'center', padding: '0 0 60px 0' }}>
          <button 
            className="contact-button"
            onClick={() => setShowMore(true)}
          >
            See More Projects
          </button>
        </div>
      ) : (
        <div className="fade-in">
          <ProjectGrid projects={smallBusinessProjects} title="Small Business" sectionId="small-business" />
          <ProjectGrid projects={appProjects} title="Apps" sectionId="apps" />
          <ProjectGrid projects={gameProjects} title="Games" sectionId="games" />
          
          <div style={{ textAlign: 'center', padding: '0 0 60px 0' }}>
            <button 
              className="contact-button"
              onClick={() => setShowMore(false)}
            >
              See Less
            </button>
          </div>
        </div>
      )}
      <Contact />
    </>
  );
}
