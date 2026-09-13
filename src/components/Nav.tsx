import { useState } from "react";

import logoText from "../assets/logo-text.png";
import hamburgerIcon from "../assets/hamburger.png";
import xmarkIcon from "../assets/xmark.png";

interface NavProps {
  techCount?: number;
}

export default function Nav({ techCount }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="nav-container">

      <div className="nav-left">
        <img
          src={logoText}
          alt="MyDevStack Logo"
          className="logo"
        />
      </div>

      <button
        type="button"
        className="hamburger-btn"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <img
          src={isOpen ? xmarkIcon : hamburgerIcon}
          alt=""
        />
      </button>

      <div className={`nav-center ${isOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/technologies">Technologies</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="nav-right">
        <button type="button" className="btn-signin">
          Sign In
        </button>

        <button type="button" className="btn-signup">
          Sign Up
        </button>
      </div>
    </nav>
  );
}