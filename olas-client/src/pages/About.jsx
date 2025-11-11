import '../styles/About.css';

const About = () => {
  return (
    <div className="page-container about">
      <section className="about-hero">
        <img src="/images/about-hero.jpg" alt="OLAS about — scientists collaborating in the field" className="hero-image" loading="lazy" decoding="async" />
        <div className="hero-content">
          <h1>About OLAS</h1>
          <p>Empowering Latin American Scientists and Fostering Global Collaboration</p>
        </div>
      </section>

      <section className="about-content">
        <div className="mission-section">
          <h2>OLAS Brief History</h2>
          <p>
            In the Academic Year 2010-2011, St. Francis School-Quezon City, through the assistance of St. Francis School-Sta. Ana,
            began to offer programs for Nursery and Kinder within the compound of the Our Lady of the Angels Seminary. The
            following Academic Year 2011-2012, St. Francis School-Quezon City started offering program for Grade I. Then St.
            Francis School-Quezon City began offering Grades II, III, IV, V and VI for the succeeding Academic Years.
          </p>
          <p>
            In Academic Year 2018-2019, the new school building, located at the back of Rieti (Rockville gate) was utilized for the first time.
            In February 18, 2019, Government recognition was granted to Kindergarten and Elementary courses, effective AY 2019-2020.
          </p>
          <p>
            <strong>Our Mission:</strong> To empower every student to achieve personal and academic excellence, become lifelong learners,
            and responsible, compassionate global citizens.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;