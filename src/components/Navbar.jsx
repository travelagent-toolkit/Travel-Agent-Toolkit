import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/features", label: "Features" },
  { to: "/tools", label: "Tools" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark">T</span>
          <span className="brand__name">Travel Agent Toolkit</span>
        </NavLink>

        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `navbar__link ${isActive ? "navbar__link--active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <div className="navbar__mobile-cta">
            <Button to="/login" variant="ghost" size="sm">Login</Button>
            <Button to="/register" variant="primary" size="sm">Get Started</Button>
          </div>
        </nav>

        <div className="navbar__actions">
          <Button to="/login" variant="ghost" size="sm">Login</Button>
          <Button to="/register" variant="primary" size="sm">Get Started</Button>
        </div>

        <button
          className="navbar__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}
