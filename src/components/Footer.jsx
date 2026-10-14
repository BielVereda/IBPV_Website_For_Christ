import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    // WhatsApp float attention pulse
    const waFloat = document.getElementById('whatsapp-float');
    if (waFloat) {
      setTimeout(() => {
        waFloat.style.animation = 'wa-pulse 1.8s ease-in-out 1';
      }, 3500);
    }
  }, []);

  return (
    <>
      <footer className="footer" role="contentinfo">
        <div className="footer-top">
          <div className="container footer-grid">

            <div className="footer-brand">
              <a href="#inicio" className="footer-logo" aria-label="Igreja Batista Pedra Viva">
                <img src="assets/images/icons/logo.png" alt="Logo Igreja Batista Pedra Viva" className="footer-logo-img" loading="lazy" />
                <div className="footer-logo-text">
                  <span className="footer-logo-title">Pedra Viva</span>
                  <span className="footer-logo-sub">Igreja Batista</span>
                </div>
              </a>
              <p className="footer-tagline">Uma Igreja que ama, acolhe &amp; discipula.</p>
              <div className="footer-social" aria-label="Redes sociais">
                <a href="https://www.youtube.com/igrejabatistapedraviva" target="_blank" rel="noopener noreferrer" className="social-link" id="social-youtube" aria-label="Canal no YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
                </a>
                <a href="https://www.instagram.com/ibpedraviva/" target="_blank" rel="noopener noreferrer" className="social-link" id="social-instagram" aria-label="Instagram IBPV">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.facebook.com/ibpedraviva" target="_blank" rel="noopener noreferrer" className="social-link" id="social-facebook" aria-label="Facebook IBPV">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://wa.me/5511950278248" target="_blank" rel="noopener noreferrer" className="social-link" id="social-whatsapp" aria-label="WhatsApp IBPV">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c-5.43 0-9.84 4.41-9.84 9.84 0 1.73.45 3.37 1.25 4.8L2.06 21.94l5.29-1.39a9.78 9.78 0 004.65 1.17c5.43 0 9.84-4.41 9.84-9.84S17.43 2.16 12 2.16zm5.55 13.56c-.23.64-1.28 1.18-1.8 1.25-.49.07-1.12.1-3.23-.77-2.54-1.04-4.18-3.64-4.31-3.81-.13-.17-1.03-1.37-1.03-2.61s.64-1.84.87-2.07c.23-.23.51-.29.68-.29.17 0 .34 0 .49.01.15.01.37-.06.58.45.21.51.73 1.78.8 1.93.06.15.11.33.02.51-.1.17-.15.28-.29.45-.15.15-.31.33-.43.45-.14.13-.29.28-.13.56.16.28.73 1.21 1.57 1.96.86.77 1.78 1.05 2.06 1.18.28.13.45.11.62-.08.17-.2.72-.84.92-1.13.2-.29.39-.24.64-.15.25.1 1.62.77 1.9.9.28.13.47.2.54.31.06.11.06.66-.17 1.3z"/></svg>
                </a>
                <a href="https://linktr.ee/ibpedraviva" target="_blank" rel="noopener noreferrer" className="social-link" id="social-linktree" aria-label="Linktree IBPV">
                  <img src="assets/images/icons/linktree-logo-icon.png" alt="Linktree" width="18" height="18" />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-nav-title">Navegação</h4>
              <div className="footer-nav">
                <ul>
                  <li><a href="#inicio">Home</a></li>
                  <li><a href="#eventos">Eventos</a></li>
                  <li><a href="#sobre">Nossa História</a></li>
                  <li><a href="#ministerios">Ministérios</a></li>
                  <li><a href="#pastores">Pastores</a></li>
                  <li><a href="#cultos">Cultos</a></li>
                  <li><a href="#batismo">Batismo</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-nav-title">Ajuda &amp; Contato</h4>
              <div className="footer-nav">
                <ul>
                  <li><a href="#oracao">Pedido de Oração</a></li>
                  <li><a href="#oferta">Dízimos e Ofertas</a></li>
                  <li><a href="#mykids">App MyKids</a></li>
                  <li><a href="#localizacao">Como Chegar</a></li>
                  <li><a href="https://wa.me/5511950278248" target="_blank" rel="noopener noreferrer">Fale Conosco</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <p>&copy; {new Date().getFullYear()} Igreja Batista Nacional Pedra Viva. Todos os direitos reservados.</p>
            <p className="footer-credit">Desenvolvido com fé e excelência.</p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/5511950278248" target="_blank" rel="noopener noreferrer" className="whatsapp-float" id="whatsapp-float" aria-label="Fale conosco no WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.16c-5.43 0-9.84 4.41-9.84 9.84 0 1.73.45 3.37 1.25 4.8L2.06 21.94l5.29-1.39a9.78 9.78 0 004.65 1.17c5.43 0 9.84-4.41 9.84-9.84S17.43 2.16 12 2.16zm5.55 13.56c-.23.64-1.28 1.18-1.8 1.25-.49.07-1.12.1-3.23-.77-2.54-1.04-4.18-3.64-4.31-3.81-.13-.17-1.03-1.37-1.03-2.61s.64-1.84.87-2.07c.23-.23.51-.29.68-.29.17 0 .34 0 .49.01.15.01.37-.06.58.45.21.51.73 1.78.8 1.93.06.15.11.33.02.51-.1.17-.15.28-.29.45-.15.15-.31.33-.43.45-.14.13-.29.28-.13.56.16.28.73 1.21 1.57 1.96.86.77 1.78 1.05 2.06 1.18.28.13.45.11.62-.08.17-.2.72-.84.92-1.13.2-.29.39-.24.64-.15.25.1 1.62.77 1.9.9.28.13.47.2.54.31.06.11.06.66-.17 1.3z"/>
        </svg>
      </a>
      
      <a href="https://www.instagram.com/ibpedraviva/" target="_blank" rel="noopener noreferrer" className="instagram-float" id="instagram-float" aria-label="Siga a IBPV no Instagram">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wa-pulse {
          0% { box-shadow: 0 4px 20px hsla(142,70%,40%,0.5); }
          40% { box-shadow: 0 0 0 16px hsla(142,70%,40%,0); transform: scale(1.06); }
          100% { box-shadow: 0 4px 20px hsla(142,70%,40%,0.5); }
        }
      ` }} />
    </>
  );
}