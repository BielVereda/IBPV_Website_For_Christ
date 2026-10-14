import { useState, useEffect, useRef } from 'react';

const ministriesData = [
  {
    id: 'min-instituto',
    title: 'Instituto Pedra Viva',
    bgGradient: 'linear-gradient(135deg, hsl(263,65%,22%) 0%, hsl(263,55%,38%) 100%)',
    bgImage: 'assets/images/ministerios/instituto_pedra_viva.avif',
    logo: 'assets/images/ministerios/logo-instituto.png',
    desc: 'A IBPV fundou o Instituto Pedra Viva e tem ajudado muitas famílias e a comunidade em seu entorno através de ações sociais. São campanhas de doação de roupa, doação de sangue, cursos profissionalizantes e muito mais! Você pode tornar-se um voluntário ou participar das atividades do Instituto Pedra Viva.',
    verseText: '"Não se esqueçam de fazer o bem e de ajudar uns aos outros, porque esses são os sacrifícios que agradam a Deus."',
    verseRef: 'Hebreus 13:16',
    instagram: 'https://www.instagram.com/ibpedraviva/',
    instagramHandle: '@ibpedraviva'
  },
  {
    id: 'min-oracao-foco',
    title: 'Oração em Foco',
    bgGradient: 'linear-gradient(135deg, hsl(230,70%,18%) 0%, hsl(263,65%,32%) 100%)',
    bgImage: 'assets/images/ministerios/oracao_em_foco.avif',
    logo: 'assets/images/ministerios/logo-oracao.png',
    desc: 'Toda terceira sexta-feira do mês, às 20h00, temos nosso culto de oração, o Oração em Foco. Venha interceder pela família, pela nação, pela Igreja!',
    verseText: '"Orai sem cessar."',
    verseRef: '1 Tessalonicenses 5:17',
    instagram: 'https://www.instagram.com/ibpedraviva/',
    instagramHandle: '@ibpedraviva'
  },
  {
    id: 'min-55mais',
    title: 'Encontro 55+',
    bgGradient: 'linear-gradient(135deg, hsl(30,70%,25%) 0%, hsl(263,55%,38%) 100%)',
    bgImage: 'assets/images/ministerios/55+.avif',
    logo: 'assets/images/ministerios/logo-55mais.png',
    desc: 'Acreditamos que todos têm algo a ensinar ou uma experiência de vida para compartilhar, e nada melhor do que fazer parte de uma turma cheia de histórias para aprender mais. Se você tem 55 anos ou mais, participe dos nossos encontros todo 2º sábado do mês, às 15h00, com palestras, momentos de louvor, adoração, oração e testemunhos.',
    verseText: '"As cãs são uma coroa de glória; elas se obtêm por um caminho de justiça."',
    verseRef: 'Provérbios 16:31',
    instagram: 'https://www.instagram.com/ibpedraviva/',
    instagramHandle: '@ibpedraviva'
  },
  {
    id: 'min-casais',
    title: 'Ministério de Casais',
    bgGradient: 'linear-gradient(135deg, hsl(330,60%,22%) 0%, hsl(263,60%,36%) 100%)',
    bgImage: 'assets/images/ministerios/ministerios_de_casais.avif',
    logo: 'assets/images/ministerios/logo-casais.png',
    desc: 'Nossa Igreja possui um diferencial para quem é casado e busca crescer junto na prática da Palavra de Deus: a Escola Bíblica para Casais, sob a liderança do Pr. Dirceu e sua esposa Cleudete, que acontece todos os domingos, às 9h30. Ao longo do ano também temos atividades especiais, como Congresso e Retiro de Casais.',
    verseText: '"Por isso, o homem deixará seu pai e sua mãe e se unirá à sua mulher, tornando-se os dois uma só carne."',
    verseRef: 'Efésios 5:31',
    instagram: 'https://www.instagram.com/ibpedraviva/',
    instagramHandle: '@ibpedraviva'
  },
  {
    id: 'min-mulheres',
    title: 'Momentos com Deus',
    bgGradient: 'linear-gradient(135deg, hsl(300,50%,22%) 0%, hsl(263,58%,38%) 100%)',
    bgImage: 'assets/images/ministerios/momentos_com_deus.avif',
    logo: 'assets/images/ministerios/logo-mulheres.png',
    desc: 'A mulher tem o potencial de transformar o ambiente em que está e as pessoas com quem se relaciona. O Ministério de Mulheres promove a comunhão, o discipulado e a evangelização das mulheres da nossa comunidade. Nossos momentos acontecem toda primeira sexta, às 20h00.',
    verseText: '"Mulher virtuosa, quem a achará? O seu valor muito excede o de rubis."',
    verseRef: 'Provérbios 31:10',
    instagram: 'https://www.instagram.com/ibpedraviva.mulheres/',
    instagramHandle: '@ibpedraviva.mulheres'
  },
  {
    id: 'min-homens',
    title: 'Mentoria dos Homens',
    bgGradient: 'linear-gradient(135deg, hsl(210,70%,18%) 0%, hsl(263,62%,30%) 100%)',
    bgImage: 'assets/images/ministerios/mentoria_de_homens.avif',
    logo: 'assets/images/ministerios/logo-homens.png',
    desc: 'Apoiado em três pilares — o homem e Deus, o homem e a família, e o homem e os negócios — o Ministério de Homens busca auxiliar aquele que é o "cabeça do lar". A Mentoria acontece toda última sexta do mês, às 20h00, com um mentor à frente debatendo assuntos práticos baseados na Palavra de Deus.',
    verseText: '"Sede homens corajosos e fortes. Obedeçam a tudo o que o Senhor, seu Deus, ordenar."',
    verseRef: '1 Reis 2:2-3',
    instagram: 'https://www.instagram.com/ibpedraviva/',
    instagramHandle: '@ibpedraviva'
  },
  {
    id: 'min-jovens',
    title: 'AVIVA Jovem',
    bgGradient: 'linear-gradient(135deg, hsl(270,70%,20%) 0%, hsl(290,60%,42%) 100%)',
    bgImage: 'assets/images/ministerios/aviva_jovem.avif',
    logo: 'assets/images/ministerios/logo-jovens.png',
    desc: 'Está difícil ser sal e luz na faculdade, trabalho ou na turma dos amigos? Não se sinta sozinho! Nosso Ministério de Jovens existe para acolher a cada um com amor, conectá-lo à família de Cristo e ajudá-lo a crescer espiritualmente para lidar com as pressões do dia a dia.',
    verseText: '"Que ninguém te despreze por seres jovem, mas sê exemplo para os crentes."',
    verseRef: '1 Timóteo 4:12',
    instagram: 'https://www.instagram.com/ibpedraviva.jovens/',
    instagramHandle: '@ibpedraviva.jovens'
  },
  {
    id: 'min-teen',
    title: 'Rede Teen',
    bgGradient: 'linear-gradient(135deg, hsl(200,70%,18%) 0%, hsl(263,65%,34%) 100%)',
    bgImage: 'assets/images/ministerios/rede_teen.avif',
    logo: 'assets/images/ministerios/logo-redeteen.png',
    desc: 'Nossos adolescentes (12 a 17 anos) se reúnem todos os domingos, às 11h00. Cada domingo uma atividade diferente, cada atividade um desafio de viver uma vida com Cristo. Além disso, todo primeiro sábado do mês temos nossos cultos especiais!',
    verseText: '"Lembra-te do teu Criador nos dias da tua mocidade."',
    verseRef: 'Eclesiastes 12:1',
    instagram: 'https://www.instagram.com/ibpedraviva.redeteen/',
    instagramHandle: '@ibpedraviva.redeteen'
  },
  {
    id: 'min-boaterra',
    title: 'Projeto Boa Terra',
    bgGradient: 'linear-gradient(135deg, hsl(150,55%,18%) 0%, hsl(200,60%,30%) 100%)',
    bgImage: 'assets/images/ministerios/projeto_boa_terra.avif',
    logo: 'assets/images/ministerios/logo-boaterra.png',
    desc: 'O Projeto Boa Terra acompanha o crescimento espiritual das nossas crianças de 7 meses a 12 anos de idade. A programação é repleta de atividades para os pequenos, sempre com uma linguagem apropriada para cada faixa etária. Acontece durante todos os cultos!',
    verseText: '"Ensina a criança no caminho que deve andar e ainda quando velho não se desviará dele."',
    verseRef: 'Provérbios 22:6',
    instagram: 'https://www.instagram.com/ibpedraviva.infantil/',
    instagramHandle: '@ibpedraviva.infantil'
  },
  {
    id: 'min-discipulado',
    title: 'Discipulado',
    bgGradient: 'linear-gradient(135deg, hsl(263,70%,16%) 0%, hsl(250,60%,35%) 100%)',
    logo: 'assets/images/ministerios/logo-discipulado.png',
    desc: 'O Ministério de Discipulado da IBPV existe para acompanhar membros e novos membros em sua jornada de fé. Aqui você encontrará um ambiente seguro para crescer, aprender e ser envolvido na missão da Igreja, sendo guiado por mentores comprometidos com a Palavra de Deus.',
    verseText: '"Ide, portanto, e fazei discípulos de todas as nações, batizando-os em nome do Pai, do Filho e do Espírito Santo."',
    verseRef: 'Mateus 28:19',
    instagram: 'https://www.instagram.com/ibpedraviva.discipulado/',
    instagramHandle: '@ibpedraviva.discipulado'
  },
  {
    id: 'min-esportes',
    title: 'Atividades Esportivas',
    bgGradient: 'linear-gradient(135deg, hsl(15,70%,22%) 0%, hsl(263,55%,36%) 100%)',
    logo: 'assets/images/ministerios/logo-esportes.png',
    desc: 'A IBPV acredita que o esporte é uma poderosa ferramenta de evangelismo e comunhão. Organizamos eventos e campeonatos de futebol, vôlei e muito mais! Uma maneira divertida de criar laços, fazer amigos e viver a fé fora dos quatro cantos da Igreja.',
    verseText: '"Todo aquele que compete nos jogos se abstém de tudo. Eles fazem isso para obter uma coroa que não dura; mas nós o fazemos para obter uma coroa que durará para sempre."',
    verseRef: '1 Coríntios 9:25',
    instagram: 'https://www.instagram.com/aesportes.ibpv/',
    instagramHandle: '@aesportes.ibpv'
  }
];

export default function Ministries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef(null);

  const getVisibleCards = () => {
    if (window.matchMedia('(min-width: 1024px)').matches) return 3;
    if (window.matchMedia('(min-width: 768px)').matches) return 2;
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
      if (trackRef.current && trackRef.current.children[0]) {
        setCardWidth(trackRef.current.children[0].getBoundingClientRect().width);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, ministriesData.length - visibleCards);

  // Auto-correct current index if resizing reduces max index
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - visibleCards));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + visibleCards));
  };

  const handleDotClick = (i) => {
    const newIndex = i * visibleCards;
    setCurrentIndex(Math.min(maxIndex, newIndex));
  };

  // Drag logic
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const diffX = startX - e.changedTouches[0].clientX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0 && currentIndex < maxIndex) {
        handleNext();
      } else if (diffX < 0 && currentIndex > 0) {
        handlePrev();
      }
    }
  };

  const numDots = Math.ceil(ministriesData.length / visibleCards);
  let activeDotIndex = Math.floor(currentIndex / visibleCards);
  if (currentIndex === maxIndex && maxIndex > 0) {
    activeDotIndex = numDots - 1;
  }

  // gap = 24px (from style.css)
  const gap = 24;
  const translateX = currentIndex * (cardWidth + gap);

  return (
    <section className="ministerios" id="ministerios" aria-labelledby="ministerios-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Faça parte</span>
          <h2 id="ministerios-heading" className="section-title">Nossos Ministérios</h2>
          <p className="section-desc">
            Na IBPV existe um lugar para cada pessoa em cada fase da vida. Conheça nossas frentes de atuação e venha crescer conosco.
          </p>
        </div>
      </div>

      <div className="carousel-wrapper" aria-label="Carrossel de ministérios">
        <button 
          className="carousel-btn carousel-btn--prev" 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          aria-label="Ministério anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button 
          className="carousel-btn carousel-btn--next" 
          onClick={handleNext} 
          disabled={currentIndex >= maxIndex}
          aria-label="Próximo ministério"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="carousel-track-wrap">
          <div 
            className="carousel-track" 
            ref={trackRef}
            role="list"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {ministriesData.map((min) => (
              <article
                className="ministry-card"
                role="listitem"
                id={min.id}
                key={min.id}
                style={{
                  '--min-bg': min.bgGradient,
                  '--min-bg-image': min.bgImage ? `url(${min.bgImage})` : 'none'
                }}
              >
                <div className="min-overlay"></div>
                <div className="min-content">
                  <div className="min-top">
                    <div className="min-logo-wrap">
                      <img 
                        className="min-logo-img" 
                        src={min.logo} 
                        alt={`Logo ${min.title}`} 
                        onError={(e) => { e.target.style.display = 'none'; }} 
                      />
                    </div>
                    <h3 className="min-title">{min.title}</h3>
                    <p className="min-desc">{min.desc}</p>
                  </div>
                  <div className="min-bottom">
                    <blockquote className="min-verse">
                      <p>{min.verseText}</p>
                      <cite>{min.verseRef}</cite>
                    </blockquote>
                    <div className="min-links">
                      <a href={min.instagram} target="_blank" rel="noopener noreferrer" className="min-social-btn" aria-label={`Instagram ${min.title}`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        {min.instagramHandle}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="carousel-dots" role="tablist" aria-label="Navegar entre ministérios">
          {Array.from({ length: numDots }).map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === activeDotIndex ? 'active' : ''}`}
              role="tab"
              aria-label={`Página ${i + 1}`}
              onClick={() => handleDotClick(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
