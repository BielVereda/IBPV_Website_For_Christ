export default function Baptism() {
  return (
    <section className="baptism" id="batismo" aria-label="Inscrição para Batismo">
      <div className="container">
        <div className="baptism-grid">
          <div className="baptism-content">
            <span className="section-eyebrow">Próxima Turma</span>
            <h2 className="section-title">Inscrição para Batismo</h2>
            <p className="section-desc">
              Dê o próximo passo na sua jornada de fé. O batismo é uma declaração pública do seu compromisso com Cristo.
            </p>

            <div className="baptism-rules">
              <h3 className="rules-title">Requisitos para Participação:</h3>
              <ul className="rules-list">
                <li className="rule-item">
                  <span className="rule-icon">✓</span>
                  <span>Ter <strong>12 anos ou mais</strong></span>
                </li>
                <li className="rule-item">
                  <span className="rule-icon">✓</span>
                  <span>Ter realizado a <strong>classe de membros</strong></span>
                </li>
                <li className="rule-item">
                  <span className="rule-icon">✓</span>
                  <span>Ter uma vida de <strong>testemunho cristão</strong></span>
                </li>
              </ul>
            </div>

            <div className="baptism-cta">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe_EZ7cQDxa1ZPa_6hJ9RHDsQPrYisyuwqmuJsVz9-oBUodJA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-full"
              >
                <img
                  src="assets/images/icons/form.png"
                  alt=""
                  aria-hidden="true"
                  className="btn-form-icon"
                  width="22"
                  height="22"
                  loading="lazy"
                  decoding="async"
                />
                Inscrever-se via Google Forms
              </a>
              <p className="baptism-note">
                As classes acontecem aos domingos a partir da data de início até a data do batismo.
              </p>
            </div>
          </div>

          <div className="baptism-visual">
            <div className="baptism-gallery">
              <img
                src="assets/images/dates/batismo.png"
                alt="Batismo na Igreja"
                className="baptism-main-img"
                loading="lazy"
                decoding="async"
              />
              <div className="baptism-quote">
                <blockquote>
                  <p>
                    "Quem crer e for batizado será salvo"
                  </p>
                  <cite>Marcos 16:16a</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}