import { useState } from 'react';

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M11 5V3.5A1.5 1.5 0 009.5 2h-6A1.5 1.5 0 002 3.5v6A1.5 1.5 0 003.5 11H5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const copyFallback = () => {
      const ta = document.createElement('textarea');
      ta.value = value;
      ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).catch(copyFallback);
    } else {
      copyFallback();
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      className={`copy-btn ${copied ? 'copied' : ''}`}
      onClick={handleCopy}
      aria-label={`Copiar ${label}`}
    >
      {copied ? '✓ Copiado!' : <><CopyIcon /> Copiar</>}
    </button>
  );
}

export default function Donation() {
  const pixKey = '67.831.370/0001-41';
  const agencia = '0137';
  const conta = '60.564-8';

  return (
    <section className="oferta" id="oferta" aria-labelledby="oferta-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Contribua</span>
          <h2 id="oferta-heading" className="section-title">Dízimos &amp; Ofertas</h2>
          <p className="section-desc">
            Sua contribuição faz parte do crescimento do Reino de Deus. Cada oferta é uma semente plantada com fé.
          </p>
        </div>
        <div className="oferta-grid">

          <div className="oferta-card" id="oferta-pix">
            <div className="oferta-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                <rect width="48" height="48" rx="12" fill="#5B21B6"/>
                <path d="M16 16L24 24L16 32" stroke="#F5C842" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 16L32 24L24 32" stroke="#F5C842" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>PIX</h3>
            <p>Chave PIX (CNPJ)</p>
            <div className="oferta-key" id="pix-key">
              <code>{pixKey}</code>
              <CopyButton value={pixKey} label="chave PIX" />
            </div>
            <p className="oferta-detail">Igreja Batista Nacional Pedra Viva</p>
          </div>

          <div className="oferta-card oferta-card--featured" id="oferta-banco">
            <div className="oferta-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                <rect width="48" height="48" rx="12" fill="#F5C842"/>
                <path d="M10 34h28M12 30V20M20 30V20M28 30V20M36 30V20M24 10l14 10H10l14-10z" stroke="#5B21B6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Transferência Bancária</h3>
            <p>Banco Itaú</p>
            <div className="bank-details" id="bank-details">
              <div className="bank-row">
                <span>Agência</span>
                <div className="bank-row-value">
                  <strong>{agencia}</strong>
                  <CopyButton value={agencia} label="agência" />
                </div>
              </div>
              <div className="bank-row">
                <span>Conta</span>
                <div className="bank-row-value">
                  <strong>{conta}</strong>
                  <CopyButton value={conta} label="conta" />
                </div>
              </div>
            </div>
            <p className="oferta-detail">Igreja Batista Nacional Pedra Viva</p>
          </div>

          <div className="oferta-card" id="oferta-presencial">
            <div className="oferta-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                <rect width="48" height="48" rx="12" fill="#5B21B6"/>
                <path d="M24 14C20.686 14 18 16.686 18 20c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6z" stroke="#F5C842" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="24" cy="20" r="2" stroke="#F5C842" strokeWidth="2.5"/>
              </svg>
            </div>
            <h3>Presencialmente</h3>
            <p>Traga sua oferta ao culto</p>
            <p className="oferta-detail">Os dízimos e ofertas são recebidos em todos os nossos cultos semanais. Venha adorar a Deus e contribuir com nossa missão!</p>
          </div>

        </div>
      </div>
    </section>
  );
}
