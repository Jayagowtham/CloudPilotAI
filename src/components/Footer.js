const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon">
                  <div className="hexagon-pattern">
                    <div className="hex"></div>
                    <div className="hex"></div>
                    <div className="hex"></div>
                  </div>
                </div>
                <span className="logo-text">Voxwave AI</span>
              </div>
              <p className="footer-description">
                Empowering every software team to leverage cloud infrastructure effortlessly.
              </p>
            </div>
  
            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#benefits">Benefits</a>
                <a href="#demo">Demo</a>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <a href="#team">Team</a>
                <a href="#contact">Contact</a>
                <a href="#">About</a>
              </div>
              <div className="link-group">
                <h4>Resources</h4>
                <a href="#">Documentation</a>
                <a href="#">Blog</a>
                <a href="#">Support</a>
              </div>
            </div>
          </div>
  
          <div className="footer-bottom">
            <p>&copy; 2024 Voxwave AI. All rights reserved.</p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
                💼
              </a>
              <a href="#" aria-label="Twitter">
                🐦
              </a>
              <a href="#" aria-label="GitHub">
                💻
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  