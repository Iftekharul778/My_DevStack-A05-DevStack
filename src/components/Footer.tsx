export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-container">

                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-icon">DS</span>
                            <span className="logo-text">
                                Dev <span className="highlight-red">Stack</span>
                            </span>
                        </div>
                        <p className="footer-desc">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="social-links">
                            <a>GitHub</a>
                            <a>Twitter</a>
                            <a>LinkedIn</a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-column">
                            <h4 className="footer-heading">PRODUCT</h4>
                            <ul>
                                <li><a>Home</a></li>
                                <li><a>Technologies</a></li>
                                <li><a>Projects</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-heading">COMPANY</h4>
                            <ul>
                                <li><a>About</a></li>
                                <li><a>Contact</a></li>
                                <li><a>Careers</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-heading">LEGAL</h4>
                            <ul>
                                <li><a>Privacy Policy</a></li>
                                <li><a>Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>{new Date().getFullYear()} ©DevStack. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a>Privacy</a>
                        <a>Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}