import { useEffect, useRef } from 'react';
import '../styles/hero.css';

export default function Hero() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (!isVisible) return;

      const scrollProgress = 1 - (rect.top / window.innerHeight);
      const yOffset = scrollProgress * 30;
      const scale = 1 - (scrollProgress * 0.02);

      imageRef.current.style.transform = `translateY(${yOffset}px) scale(${scale})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <h1>I build practical websites, apps, and automation tools for service-based businesses.</h1>
          </div>

          <div className="hero-image-container parallax" ref={containerRef}>
            <div className="hero-image-wrapper">
              <img
                ref={imageRef}
                src="/Conley.png"
                alt="Conley Quillen"
                className="hero-image"
              />
              <div className="hero-image-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
