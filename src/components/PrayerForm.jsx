import { useState } from 'react';

const PRAYER_EMAIL = 'ibpv@ibpv.com.br';

export default function PrayerForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', request: '' });
  const [errors, setErrors] = useState({ name: false, request: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: !formData.name.trim(),
      request: !formData.request.trim(),
    };
    setErrors(newErrors);

    if (newErrors.name || newErrors.request) return;

    setIsSubmitting(true);

    const subject = `Pedido de Oração - ${formData.name.trim()}`;
    const body = `Nome: ${formData.name.trim()}
WhatsApp: ${formData.phone || 'Não informado'}

Pedido de Oração:
${formData.request.trim()}`;

    // Abre a tela de novo e-mail do Gmail já preenchida (destinatário, assunto e mensagem).
    // Precisa rodar direto no clique (sem setTimeout), senão o navegador bloqueia a nova aba.
    const gmailUrl =
      'https://mail.google.com/mail/?view=cm&fs=1' +
      `&to=${encodeURIComponent(PRAYER_EMAIL)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const win = window.open(gmailUrl, '_blank');
    if (win) {
      win.opener = null;
    } else {
      // Pop-up bloqueado: abre na mesma aba
      window.location.href = gmailUrl;
    }

    setTimeout(() => {
      setFormData({ name: '', phone: '', request: '' });
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 8000);
    }, 600);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const numbersOnly = value.replace(/\D/g, '');
      let formatted = numbersOnly;

      if (numbersOnly.length > 0) {
        if (numbersOnly.length <= 2) {
          formatted = `(${numbersOnly}`;
        } else if (numbersOnly.length <= 7) {
          formatted = `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2)}`;
        } else {
          formatted = `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2, 7)}-${numbersOnly.slice(7, 11)}`;
        }
      }

      setFormData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handlePhoneKeyDown = (e) => {
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    if (allowedKeys.includes(e.key)) return;

    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <section className="prayer" id="oracao" aria-labelledby="oracao-heading">
      <div className="prayer-bg" aria-hidden="true"></div>
      <div className="container prayer-grid">
        <div className="prayer-content">
          <span className="section-eyebrow section-eyebrow--light">Como podemos ajudar?</span>
          <h2 id="oracao-heading" className="section-title section-title--light">Gostaria de<br />Pedir Oração?</h2>
          <p className="section-desc section-desc--light">
            Nossa equipe de intercessão está pronta para orar por você. Não está sozinho — a Igreja está aqui para te apoiar.
          </p>
          <div className="prayer-promises">
            <div className="promise-item">
              <span className="promise-icon" aria-hidden="true">✓</span>
              <span>Sigilo total garantido</span>
            </div>
            <div className="promise-item">
              <span className="promise-icon" aria-hidden="true">✓</span>
              <span>Respondemos em até 24h</span>
            </div>
            <div className="promise-item">
              <span className="promise-icon" aria-hidden="true">✓</span>
              <span>Equipe de intercessores dedicados</span>
            </div>
          </div>
        </div>
        <div className="prayer-form-wrap">
          <form className="prayer-form" id="prayerForm" noValidate aria-label="Formulário de pedido de oração" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="prayer-name">Seu nome</label>
              <input 
                type="text" 
                id="prayer-name" 
                name="name" 
                placeholder="Como você se chama?" 
                required 
                autoComplete="given-name" 
                value={formData.name}
                onChange={handleChange}
                style={errors.name ? { borderColor: 'hsl(0, 70%, 60%)', boxShadow: '0 0 0 3px hsla(0, 70%, 60%, 0.12)' } : {}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="prayer-phone">WhatsApp (opcional)</label>
              <input
                type="tel"
                id="prayer-phone"
                name="phone"
                placeholder="(11) 99999-9999"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                onKeyDown={handlePhoneKeyDown}
                maxLength={15}
              />
            </div>
            <div className="form-group">
              <label htmlFor="prayer-request">Seu pedido de oração</label>
              <textarea 
                id="prayer-request" 
                name="request" 
                placeholder="Compartilhe o que está em seu coração..." 
                required
                maxLength={1500}
                value={formData.request}
                onChange={handleChange}
                style={errors.request ? { borderColor: 'hsl(0, 70%, 60%)', boxShadow: '0 0 0 3px hsla(0, 70%, 60%, 0.12)' } : {}}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full" id="prayer-submit-btn" disabled={isSubmitting}>
              <span className="btn-text">{isSubmitting ? 'Abrindo o Gmail…' : 'Enviar pedido de oração'}</span>
              <span className="btn-icon" aria-hidden="true">→</span>
            </button>
            {showSuccess && (
              <div className="form-success" id="formSuccess" role="alert" aria-live="polite">
                <span>🙏</span> Abrimos o Gmail com o seu pedido pronto. É só clicar em <strong>Enviar</strong> para concluir!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}