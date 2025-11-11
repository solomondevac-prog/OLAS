import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>OLAS</h3>
          <p>Our Lady of the Angels Seminary</p>
          <p>Seminary Road, Bagbag, Novaliches
Quezon City</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/graduate">Graduate</a></li>
            <li><a href="/volunteer">Volunteer</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li>Email: info@olas.org</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Science Ave</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} OLAS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;