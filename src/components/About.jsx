export default function About() {
  return (
    <section className="about" id="sobre" aria-labelledby="sobre-heading">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-img-wrap">
            <img src="assets/images/general/ibpv_atualmente.png" alt="Fachada da Igreja Batista Pedra Viva" className="about-img" loading="lazy" />
          </div>
          <div className="about-stat-card">
            <span className="stat-number">1986</span>
            <span className="stat-label">Fundada em</span>
          </div>
        </div>
        <div className="about-content">
          <span className="section-eyebrow">Nossa história</span>
          <h2 id="sobre-heading" className="section-title">
            Somos uma Igreja que <strong>ama</strong>, <strong>acolhe</strong> e <strong>discipula</strong>.
          </h2>
          <div className="about-text">
            <p>
              Em 26 de outubro de 1986, o Pastor Miguel Cernev iniciou, em sua casa, a Igreja Batista Nacional Pedra Viva. Ainda naquele ano, a Igreja se filiou à Convenção Batista Nacional.
            </p>
            <p>
              Os primeiros irmãos e irmãs que se reuniram ali formaram uma pequena família de fé, unida pelo desejo de servir a Deus e compartilhar o amor de Jesus.
            </p>
            <p>
              Com o passar dos anos, a Igreja cresceu, mudou de endereço algumas vezes e viu Deus agir em cada nova etapa. Em 1992, o Pastor Manoel Corrêa Neves assumiu a presidência, servindo com dedicação e amor. Dois anos depois, o Pastor Miguel voltou à liderança, continuando a conduzir a Igreja com fé e perseverança.
            </p>
            <p>
              Em 2001, o Pastor Dimas foi convidado a pastorear a IBPV, com o propósito de reestruturar e fortalecer a Igreja para alcançar ainda mais vidas na comunidade. Desde então, a Pedra Viva tem experimentado um tempo de renovação, crescimento e comunhão.
            </p>
            <p>
              Hoje, a IBPV continua firme em sua missão de ser uma Igreja que acolhe, ensina e compartilha o amor de Cristo. Um lugar onde cada pessoa pode encontrar propósito, servir com alegria e crescer espiritualmente em família.
            </p>
            <p className="about-closing">
              <strong>Você é bem-vindo para fazer parte dessa história!</strong> Uma história escrita com fé, esperança e amor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
