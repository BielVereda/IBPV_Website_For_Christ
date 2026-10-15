export default function Anniversary() {
  return (
    <section className="anniversary" id="aniversario" aria-label="Aniversário da Igreja">
      <div className="container">
        <div className="anniversary-content">
          <div className="anniversary-badge">
            <span>Outubro Especial</span>
          </div>
          <h2 className="anniversary-title anniversary-title--logo">
            <img
              src="assets/images/general/logo-40-anos.png"
              alt="Celebrando 40 anos de história"
              className="anniversary-logo"
              loading="lazy"
              decoding="async"
            />
          </h2>
          <p className="anniversary-desc">
            Neste mês de outubro, a Igreja Batista Pedra Viva completa 40 anos de história, fé e amor.
            Quatro décadas servindo a Deus e abençoando vidas. Venha celebrar conosco essa jornada incrível!
          </p>
          <div className="anniversary-actions">
            <a
              href="https://www.instagram.com/p/DdwOwHdkSgQ/?img_index=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="instagram-icon">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Ver no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}