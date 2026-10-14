export default function MapLocation() {
  return (
    <section className="location" id="localizacao" aria-labelledby="localizacao-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Venha nos visitar</span>
          <h2 id="localizacao-heading" className="section-title">Onde Estamos?</h2>
        </div>
        <div className="location-grid">
          <div className="location-info">
            <div className="location-detail" id="location-address">
              <div className="location-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <strong>Endereço</strong>
                <p>Av. Nossa Sra. do Sabará, 3673<br />Vila Emir, São Paulo - SP<br />CEP: 04447-020</p>
              </div>
            </div>
            <div className="location-detail" id="location-phone">
              <div className="location-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012.77 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.09 6.09l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <strong>WhatsApp</strong>
                <p><a href="https://wa.me/5511950278248" target="_blank" rel="noopener noreferrer">(11) 95027-8248</a></p>
              </div>
            </div>
            <div className="location-detail" id="location-links">
              <div className="location-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <strong>Links</strong>
                <p><a href="https://linktr.ee/ibpedraviva" target="_blank" rel="noopener noreferrer">linktr.ee/ibpedraviva</a></p>
              </div>
            </div>
            <a href="https://maps.google.com/?q=Av.+Nossa+Sra.+do+Sabará,+3673+-+Vila+Emir,+São+Paulo+-+SP" target="_blank" rel="noopener noreferrer" className="btn btn-primary maps-btn maps-btn--desktop" id="maps-btn">
              Abrir no Google Maps
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <path d="M15 3h6v6"/>
                <path d="M10 14L21 3"/>
              </svg>
            </a>
          </div>
          <div className="map-wrap" id="map-container">
            <iframe
              title="Localização da Igreja Batista Pedra Viva no Google Maps"
              src="https://maps.google.com/maps?q=Av.%20Nossa%20Sra.%20do%20Sabará,%203673%20-%20Vila%20Emir,%20São%20Paulo,%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <a href="https://maps.google.com/?q=Av.+Nossa+Sra.+do+Sabará,+3673+-+Vila+Emir,+São+Paulo+-+SP" target="_blank" rel="noopener noreferrer" className="btn btn-primary maps-btn maps-btn--mobile" id="maps-btn-mobile">
            Abrir no Google Maps
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <path d="M15 3h6v6"/>
              <path d="M10 14L21 3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}