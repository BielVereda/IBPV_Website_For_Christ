export default function MyKids() {
  return (
    <section className="mykids" id="mykids" aria-label="App MyKids">
      <div className="container">
        <div className="mykids-content">
          <div className="mykids-info">
            <span className="section-eyebrow">Projeto Boa Terra</span>
            <h2 className="section-title">Baixe o aplicativo</h2>
            <p className="section-desc">
              Para gerenciar as crianças que participam das aulas na salinha do Projeto Boa Terra, utilizamos o aplicativo <strong>MyKids</strong>.
            </p>
            <p className="mykids-lead">Com ele, você pode:</p>

            <ul className="mykids-features">
              <li className="feature-item">
                <span>Realizar o check-in rápido dos seus filhos</span>
              </li>
              <li className="feature-item">
                <span>Receber notificações importantes sobre as aulas</span>
              </li>
              <li className="feature-item">
                <span>Acessar o cronograma de atividades</span>
              </li>
              <li className="feature-item">
                <span>Gerenciar informações dos seus filhos</span>
              </li>
            </ul>

            <div className="mykids-cta">
              <a
                href="https://play.google.com/store/apps/details?id=br.com.gileade.kidsfamilia&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="google-play-icon">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Baixar no Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}