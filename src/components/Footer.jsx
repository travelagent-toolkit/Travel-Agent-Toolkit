import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="brand">
            <span className="brand__mark">T</span>
            <span className="brand__name">Travel Agent Toolkit</span>
          </span>
          <p className="footer__tagline">Create. Quote. Sell. Faster.</p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
            <a href="#" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
            <a href="#" aria-label="Twitter"><Icon name="twitter" size={18} /></a>
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Product</h4>
          <Link to="/features">Features</Link>
          <Link to="/tools">Tools</Link>
          <Link to="/pricing">Pricing</Link>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Legal</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Travel Agent Toolkit. Built for Indian travel agencies.</span>
      </div>
    </footer>
  );
}
