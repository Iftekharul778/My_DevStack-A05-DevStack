import logoText from '../assets/logo-text.png';
import hamburgerIcon from '../assets/hamburger.png';
import xmarkIcon from '../assets/xmark.png';
import { useState } from 'react';

interface NavProps {
  techCount: number;
}

export default function Nav({ techCount }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-left">
        <img src={logoText} alt="MyDevStack Logo" className="logo" />
      </div>

      <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
        <img src={isOpen ? xmarkIcon : hamburgerIcon} alt="Toggle Menu" />
      </button>

      <div className={`nav-center ${isOpen ? 'open' : ''}`}>
        <a href="">Home</a>
        <a href="">Technologies</a>
        <a href="">About</a>
      </div>

      <div className="nav-right">
        <button className="btn-signin">Sign In</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </nav>
  );
}