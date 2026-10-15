import { useState, useEffect, useRef } from 'react';

export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  );
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ active: false, startX: 0, startY: 0, locked: false });

  const events = [
    {
      id: 1,
      title: 'Classe de Batismo',
      badge: '01 de Novembro',
      badgeType: 'upcoming',
      image: 'assets/images/dates/classe_de_batismo.jpg',
      description: 'Classe Adultos: às 17h (Prédio Novas Gerações). Adolescentes: às 9h (na Sede).',
      date: '01/11/2026',
      time: '09:00 / 17:00',
      instagram: 'https://www.instagram.com/p/DeRyGJHDTT7/',
    },
    {
      id: 2,
      title: 'Congresso Infantil',
      badge: '17 de Outubro',
      badgeType: 'upcoming',
      image: 'assets/images/dates/festa_dia_das_criancas_1.jpg',
      description: '"A vida com Jesus é Doce!" - Um culto especial + uma festa preparada para toda a família. Sábado às 14h na Igreja Batista Pedra Viva.',
      date: '17/10/2026',
      time: '14:00',
      instagram: 'https://www.instagram.com/p/DdsJ-A4EVMd/?img_index=1',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  // Detecta celular (<768px)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Passagem automática só no desktop/tablet; no celular só pelo toque
  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Swipe com o dedo (celular)
  const handlePointerDown = (e) => {
    if (e.pointerType === 'mouse') return;
    dragRef.current = { active: true, startX: e.clientX, startY: e.clientY, locked: false };
  };

  const handlePointerMove = (e) => {
    const d = dragRef.current;
    if (!d.active) return;
    const dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;

    if (!d.locked) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      if (Math.abs(dy) > Math.abs(dx)) {
        d.active = false; // era rolagem vertical da página
        return;
      }
      d.locked = true;
      setIsDragging(true);
      e.currentTarget.setPointerCapture?.(e.pointerId);
    }

    const atStart = currentIndex === 0 && dx > 0;
    const atEnd = currentIndex === events.length - 1 && dx < 0;
    setDragX(atStart || atEnd ? dx * 0.3 : dx);
  };

  const endDrag = (e, cancelled = false) => {
    const d = dragRef.current;
    if (!d.active) return;
    const wasLocked = d.locked;
    dragRef.current = { active: false, startX: 0, startY: 0, locked: false };
    if (!wasLocked) return;

    const dx = e.clientX - d.startX;
    setIsDragging(false);
    setDragX(0);
    if (cancelled) return;

    const threshold = 60;
    if (dx < -threshold && currentIndex < events.length - 1) setCurrentIndex(currentIndex + 1);
    else if (dx > threshold && currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <section className="events" id="eventos" aria-label="Eventos da Igreja">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Calendário</span>
          <h2 className="section-title">Agenda IBPV</h2>
          <p className="section-desc">
            Fique por dentro dos próximos eventos e celebrações da nossa igreja
          </p>
        </div>

        <div className="events-carousel">
          {!isMobile && (
          <button
            className="carousel-btn carousel-btn--prev"
            onClick={prevSlide}
            aria-label="Evento anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          )}

          <div className="events-track-wrap">
            <div
              className={`events-track ${isDragging ? 'dragging' : ''}`}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={(e) => endDrag(e)}
              onPointerCancel={(e) => endDrag(e, true)}
              style={{ transform: `translateX(calc(-${currentIndex * 100}% + ${dragX}px))` }}
            >
              {events.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-content">
                    <div className="event-info">
                      <div className={`event-badge ${event.badgeType}`}>
                        {event.badge}
                      </div>
                      <h3 className="event-title">{event.title}</h3>
                      <p className="event-desc">{event.description}</p>
                      {event.date && (
                        <div className="event-meta">
                          <span className="event-date">📅 {event.date}</span>
                          <span className="event-time">⏰ {event.time}</span>
                        </div>
                      )}
                      {event.instagram && (
                        <a
                          href={event.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="event-instagram-btn"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          Ver no Instagram
                        </a>
                      )}
                    </div>
                    <div className="event-image">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="event-img"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!isMobile && (
          <button
            className="carousel-btn carousel-btn--next"
            onClick={nextSlide}
            aria-label="Próximo evento"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
          )}
        </div>

        <div className="carousel-dots">
          {events.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para evento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}