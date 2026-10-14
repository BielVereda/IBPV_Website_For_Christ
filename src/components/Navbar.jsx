import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver for active section
    const sections = document.querySelectorAll('section[id]');
    const sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => sectionObs.observe(s));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionObs.disconnect();
    };
  }, []);

  // Menu em formato de "cartão" no canto: não trava a rolagem da página.
  // Fecha ao tocar fora dele ou ao apertar Esc.
  useEffect(() => {
    if (!isOpen) return;
    const handleOutside = (e) => {
      if (!e.target.closest('#navMenu') && !e.target.closest('#navToggle')) {
        setIsOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('pointerdown', handleOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('pointerdown', handleOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { id: 'inicio', label: 'Home' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'sobre', label: 'Sobre Nós' },
    { id: 'ministerios', label: 'Ministérios' },
    { id: 'pastores', label: 'Pastores' },
    { id: 'cultos', label: 'Nossos Cultos' },
    { id: 'batismo', label: 'Batismo' },
    { id: 'oracao', label: 'Pedido de Oração' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar" role="banner">
      <div className="nav-container">
        <a href="#inicio" className="nav-logo" aria-label="Igreja Batista Pedra Viva - Página inicial" onClick={closeMenu}>
          <img src="assets/images/icons/logo-ibpv-branca.png" alt="Igreja Batista Pedra Viva" className="logo-img logo-img--white" />
          <img src="assets/images/icons/logo-ibpv-roxa.png" alt="" aria-hidden="true" className="logo-img logo-img--purple" />
        </a>

        <button
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          id="navToggle"
          aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={isOpen}
          aria-controls="navMenu"
          onClick={toggleMenu}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        <nav data-lenis-prevent className={`nav-menu ${isOpen ? 'open' : ''}`} id="navMenu" role="navigation" aria-label="Menu principal">
          <ul className="nav-list" role="list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#oferta" className={`nav-link nav-cta ${activeSection === 'oferta' ? 'active' : ''}`} onClick={closeMenu}>
                Dízimos & Oferta
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}