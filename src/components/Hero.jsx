import { useEffect, useState } from 'react';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setOffsetY(window.scrollY * 0.25);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="inicio" aria-label="Seção inicial">
      <div className="hero-bg">
        <img
          src="assets/images/general/hero.jpg"
          alt="Congregação da Igreja Batista Pedra Viva adorando"
          className="hero-img"
          loading="eager"
          style={{ transform: `translateY(${offsetY}px)` }}
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content container">
        <div className="hero-badge">
          <span className="badge-dot" aria-hidden="true"></span>
          Bem-vindo à IBPV
        </div>
        <h1 className="hero-title">
          Uma Igreja que<br />
          <em>ama</em>, <em>acolhe</em><br />
          &amp; <em>discipula</em>.
        </h1>
        <p className="hero-subtitle">
          Venha fazer parte dessa história. Uma história escrita com fé, esperança e amor.
        </p>
        <div className="hero-actions">
          <a href="#cultos" className="btn btn-ghost" id="hero-cultos">Ver horários de culto</a>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span className="scroll-label">Rolar para baixo</span>
          <div className="scroll-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
