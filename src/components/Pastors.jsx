import { useEffect, useRef, useState } from 'react';

export default function Pastors() {
  const gridRef = useRef(null);
  const [activePage, setActivePage] = useState(0);
  const [pages, setPages] = useState(1);

  // Carrossel no tablet: o CSS faz a rolagem horizontal; aqui só calculamos os pontinhos
  const getStep = () => {
    const grid = gridRef.current;
    const card = grid && grid.children[0];
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(grid).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const update = () => {
      const step = getStep();
      const maxScroll = grid.scrollWidth - grid.clientWidth;
      if (!step || maxScroll <= 2) {
        setPages(1);
        setActivePage(0);
        return;
      }
      const total = Math.round(maxScroll / step) + 1;
      setPages(total);
      setActivePage(Math.min(total - 1, Math.round(grid.scrollLeft / step)));
    };

    update();
    grid.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      grid.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const goToPage = (i) => {
    const grid = gridRef.current;
    if (grid) grid.scrollTo({ left: i * getStep(), behavior: 'smooth' });
  };

  return (
    <section className="pastors" id="pastores" aria-labelledby="pastores-heading">
      <div className="pastors-bg" aria-hidden="true"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow section-eyebrow--light">Liderança</span>
          <h2 id="pastores-heading" className="section-title section-title--light">Pastores IBPV</h2>
          <p className="section-desc section-desc--light">
            Conheça os pastores que servem e lideram nossa comunidade com amor e dedicação.
          </p>
        </div>
        <div className="pastors-grid" ref={gridRef}>

          <article className="pastor-card" id="pastor-dimas">
            <div className="pastor-img-wrap">
              <img src="assets/images/pastores/pastor-dimas.jpg" alt="Pr. Dimas Paulino, Pastor Sênior da IBPV" className="pastor-img" loading="lazy" decoding="async" />
            </div>
            <div className="pastor-info">
              <span className="pastor-role">Pastor Sênior</span>
              <h3 className="pastor-name">Pr. Dimas Paulino</h3>
              <p className="pastor-bio">
                Pastor da IBPV desde 2001, o Pr. Dimas é apaixonado por ver pessoas crescendo em fé e propósito. Antes do ministério, atuou em grandes empresas nas áreas de marketing e gestão, o que hoje guia sua visão de liderança na Igreja. Serve com amor e ministra com simplicidade.
              </p>
            </div>
          </article>

          <article className="pastor-card" id="pastor-luis">
            <div className="pastor-img-wrap">
              <img src="assets/images/pastores/pastor-luis.jpg" alt="Pr. Luís Henrique, Pastor de Ministérios da IBPV" className="pastor-img" loading="lazy" decoding="async" />
            </div>
            <div className="pastor-info">
              <span className="pastor-role">Pastor de Ministérios</span>
              <h3 className="pastor-name">Pr. Luís Henrique</h3>
              <p className="pastor-bio">
                Casado com Cacilda e pai de três filhos, o Pr. Luís é membro da IBPV há mais de duas décadas. Formado em Gestão de Empresas, é frente dos ministérios ao lado do Pr. Bruno. Sempre com um sorriso tranquilo e uma boa conversa, é o tipo de pastor que sabe amar com sabedoria e leveza.
              </p>
            </div>
          </article>

          <article className="pastor-card" id="pastor-hugo">
            <div className="pastor-img-wrap">
              <img src="assets/images/pastores/pastor-hugo.jpg" alt="Pr. Hugo Mello, Pastor de Missionários da IBPV" className="pastor-img" loading="lazy" decoding="async" />
            </div>
            <div className="pastor-info">
              <span className="pastor-role">Pastor de Missionários</span>
              <h3 className="pastor-name">Pr. Hugo Mello</h3>
              <p className="pastor-bio">
                Casado com Vanessa e pai de três filhas, o Pr. Hugo faz parte da IBPV há mais de três anos. Atua com os jovens e adultos, além de cuidar da gestão administrativa e financeira da Igreja. Graduado em Teologia e formado também em Administração, acredita que liderar é servir com dedicação e alegria.
              </p>
            </div>
          </article>

        </div>

        <div className="pastors-dots" role="tablist" aria-label="Navegar entre pastores">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`carousel-dot ${i === activePage ? 'active' : ''}`}
              role="tab"
              aria-label={`Página ${i + 1}`}
              onClick={() => goToPage(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}