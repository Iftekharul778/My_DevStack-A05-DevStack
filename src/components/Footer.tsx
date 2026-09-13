export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">

          <div className="footer-brand">
            <h3 className="footer-logo">
              Dev<span className="highlight">Stack</span>
            </h3>
            <p className="footer-desc">
              Build, customize, and showcase your ideal technology stack with ease.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-column">
              <h4 className="footer-heading">Navigation</h4>
              <ul>
                <li><a>Technologies</a></li>
                <li><a>Learn More</a></li>
                <li><a>My Stack</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Resources</h4>
              <ul>
                <li><a >React Docs</a></li>
                <li><a >Vite</a></li>
                <li><a >Tailwind CSS</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p> {new Date().getFullYear()} DevStack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}