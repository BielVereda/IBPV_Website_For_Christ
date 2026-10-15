export default function Cultos() {
  return (
    <section className="cultos" id="cultos" aria-labelledby="cultos-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Venha nos visitar</span>
          <h2 id="cultos-heading" className="section-title">Nossos Cultos de Domingo</h2>
          <p className="section-desc">Temos cultos durante toda a semana. Venha adorar conosco!</p>
        </div>
        <div className="cultos-grid">

          <article className="culto-card" id="culto-domingo-1">
            <div className="culto-day-badge">DOM</div>
            <div className="culto-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            </div>
            <h3 className="culto-name">1º Culto</h3>
            <p className="culto-time">09h00 - 10h30</p>
            <p className="culto-desc">Culto de adoração e pregação da Palavra</p>
          </article>

          <article className="culto-card culto-card--featured" id="culto-domingo-2">
            <div className="culto-day-badge">DOM</div>
            <div className="culto-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
              </svg>
            </div>
            <h3 className="culto-name">2º Culto</h3>
            <p className="culto-time">11h00 - 12h30</p>
            <p className="culto-desc">Transmitido ao vivo com tradução em Libras</p>
          </article>

          <article className="culto-card" id="culto-domingo-3">
            <div className="culto-day-badge">DOM</div>
            <div className="culto-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </div>
            <h3 className="culto-name">3º Culto</h3>
            <p className="culto-time">17h00 - 18h30</p>
            <p className="culto-desc">Culto de adoração e pregação da Palavra</p>
          </article>

        </div>

        <div className="cultos-youtube">
          <div className="yt-badge" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
            </svg>
          </div>
          <div className="yt-text">
            <strong>Não pode vir presencialmente?</strong>
            <p>Transmitimos o culto das 11h ao vivo pelo YouTube com tradução em Libras!</p>
          </div>
          <a href="https://www.youtube.com/igrejabatistapedraviva" target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="youtube-link-btn">
            <svg className="live-signal" width="32" height="18" viewBox="0 0 32 18" fill="none" aria-hidden="true">
              <path d="M9.34 2.34A9 9 0 0 0 9.34 15.66" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.3">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" begin="0.35s" repeatCount="indefinite" />
              </path>
              <path d="M11.6 5.1A5.2 5.2 0 0 0 11.6 12.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.3">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" begin="0s" repeatCount="indefinite" />
              </path>
              <circle cx="16" cy="9" r="2.6" fill="currentColor">
                <animate attributeName="opacity" values="1;0.35;1" dur="1.6s" repeatCount="indefinite" />
                <animate attributeName="r" values="2.6;2;2.6" dur="1.6s" repeatCount="indefinite" />
              </circle>
              <path d="M20.4 5.1A5.2 5.2 0 0 1 20.4 12.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.3">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" begin="0s" repeatCount="indefinite" />
              </path>
              <path d="M22.66 2.34A9 9 0 0 1 22.66 15.66" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.3">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" begin="0.35s" repeatCount="indefinite" />
              </path>
            </svg>
            Assistir ao vivo
          </a>
        </div>
      </div>
    </section>
  );
}