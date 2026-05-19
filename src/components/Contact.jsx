import { contactInfo } from '../data';
import '../styles/contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content fade-in">
          <h2>Let's build something practical.</h2>
          <p className="contact-intro">
            I'm interested in roles and projects involving small business websites, CRM workflows, automation, sales operations, real estate operations, customer success, and practical web apps.
          </p>

          <div className="contact-buttons">
            <a href={`mailto:${contactInfo.email}`} className="contact-button">
              Email Me
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="contact-button">
              View GitHub
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-button">
              LinkedIn
            </a>
          </div>

          <div className="contact-links">
            <a href={`mailto:${contactInfo.email}`} className="contact-link">
              {contactInfo.email}
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              {contactInfo.github}
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              {contactInfo.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
