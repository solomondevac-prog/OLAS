import '../styles/Research.css';

const Research = () => {
  return (
    <div className="page-container research">
      <section className="research-hero">
        <img src="/images/research-hero.jpg" alt="Researchers in the field — OLAS research initiatives" className="hero-image" loading="lazy" decoding="async" />
        <div className="hero-content">
          <h1>Research Initiatives</h1>
          <p>Advancing Scientific Discovery in Latin America</p>
        </div>
      </section>

      <section className="research-content">
        <div className="featured-research">
          <h2>Featured Projects</h2>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-image placeholder"></div>
              <div className="research-info">
                <h3>Climate Change Impact Studies</h3>
                <p>Investigating the effects of climate change on Latin American ecosystems</p>
                <a href="#" className="learn-more">Learn More →</a>
              </div>
            </div>
            <div className="research-card">
              <div className="research-image placeholder"></div>
              <div className="research-info">
                <h3>Biodiversity Conservation</h3>
                <p>Preserving and studying unique species in the Amazon rainforest</p>
                <a href="#" className="learn-more">Learn More →</a>
              </div>
            </div>
            <div className="research-card">
              <div className="research-image placeholder"></div>
              <div className="research-info">
                <h3>Sustainable Agriculture</h3>
                <p>Developing innovative farming techniques for arid regions</p>
                <a href="#" className="learn-more">Learn More →</a>
              </div>
            </div>
          </div>
        </div>

        <div className="research-areas">
          <h2>Research Areas</h2>
          <div className="areas-grid">
            <div className="area-card">
              <h3>Environmental Science</h3>
              <ul>
                <li>Climate Change Studies</li>
                <li>Biodiversity Research</li>
                <li>Conservation Biology</li>
                <li>Environmental Impact Assessment</li>
              </ul>
            </div>
            <div className="area-card">
              <h3>Biotechnology</h3>
              <ul>
                <li>Genetic Engineering</li>
                <li>Molecular Biology</li>
                <li>Agricultural Biotechnology</li>
                <li>Pharmaceutical Research</li>
              </ul>
            </div>
            <div className="area-card">
              <h3>Public Health</h3>
              <ul>
                <li>Epidemiology</li>
                <li>Tropical Diseases</li>
                <li>Healthcare Systems</li>
                <li>Community Health</li>
              </ul>
            </div>
            <div className="area-card">
              <h3>Sustainable Development</h3>
              <ul>
                <li>Renewable Energy</li>
                <li>Urban Planning</li>
                <li>Water Management</li>
                <li>Waste Reduction</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="collaboration">
          <h2>Research Collaboration</h2>
          <div className="collaboration-content">
            <div className="collab-info">
              <h3>Partner With Us</h3>
              <p>
                We actively seek collaborations with universities, research institutions,
                and scientists worldwide. Our network includes leading institutions
                across Latin America and beyond.
              </p>
              <button className="contact-btn">Contact Research Office</button>
            </div>
            <div className="partner-logos">
              {/* Add partner institution logos here */}
              <div className="logo placeholder"></div>
              <div className="logo placeholder"></div>
              <div className="logo placeholder"></div>
              <div className="logo placeholder"></div>
            </div>
          </div>
        </div>

        <div className="publications">
          <h2>Recent Publications</h2>
          <div className="publications-list">
            <div className="publication">
              <h4>Title of Research Paper 1</h4>
              <p className="authors">Authors: Rodriguez, M., Santos, C., et al.</p>
              <p className="journal">Journal of Environmental Science, 2025</p>
            </div>
            <div className="publication">
              <h4>Title of Research Paper 2</h4>
              <p className="authors">Authors: Martinez, A., Lopez, J., et al.</p>
              <p className="journal">Biodiversity Conservation Journal, 2025</p>
            </div>
            <div className="publication">
              <h4>Title of Research Paper 3</h4>
              <p className="authors">Authors: Garcia, R., Hernandez, L., et al.</p>
              <p className="journal">Sustainable Agriculture Review, 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;