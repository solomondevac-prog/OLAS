import '../styles/Graduate.css';

const Graduate = () => {
  return (
    <div className="page-container graduate">
      <section className="graduate-hero">
        <img src="/images/graduate-hero.jpg" alt="Graduate students and mentors — OLAS graduate programs" className="hero-image" loading="lazy" decoding="async" />
        <div className="hero-content">
          <h1>Graduate Programs</h1>
          <p>Supporting Latin American Scientists in Their Academic Journey</p>
        </div>
      </section>

      <section className="graduate-content">
        <div className="programs-section">
          <h2>Graduate Programs</h2>
          <p>Our Graduate School offers a diverse range of master's and doctoral programs designed to prepare leaders and innovators.</p>
        </div>

        <div className="application-section">
          <h2>Application Requirements & Deadlines</h2>
          <p>The Graduate School accepts applications on a rolling basis. We require a bachelor's degree, a statement of purpose, and letters of recommendation.</p>
        </div>
      </section>
    </div>
  );
};

export default Graduate;