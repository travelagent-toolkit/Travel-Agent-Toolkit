import Icon from "../components/Icon.jsx";
import usePageMeta from "../hooks/usePageMeta.js";

export default function About() {
  usePageMeta("About", "Travel Agent Toolkit is built for independent Indian travel agents and small agencies.");
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About us</span>
          <h1>Built with travel agents, not just for them</h1>
          <p className="page-hero__sub">
            We spent time with independent agents across the Himalayas and beyond, watching how quotations actually get made — usually in a rush, on a phone, between customer calls. Travel Agent Toolkit is our answer: the parts of that workflow that can be faster, made faster.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container about-grid">
          <div className="about-block">
            <div className="feature-item__icon"><Icon name="compass" size={22} /></div>
            <h3>Our focus</h3>
            <p>Small and independent travel agencies across Kashmir, Ladakh, Himachal Pradesh, Sikkim, Nepal and beyond — the agents who compete with big platforms using nothing but trust and a good WhatsApp reply.</p>
          </div>
          <div className="about-block">
            <div className="feature-item__icon"><Icon name="star" size={22} /></div>
            <h3>What we believe</h3>
            <p>A good tool should disappear into the work. No jargon, no unnecessary steps — just quotations, itineraries and messages that look like they took an hour, made in minutes.</p>
          </div>
          <div className="about-block">
            <div className="feature-item__icon"><Icon name="shield-check" size={22} /></div>
            <h3>Where we're headed</h3>
            <p>Phase 1 is the toolkit you see today. Phase 2 brings real PDF export and WhatsApp sharing. Phase 3 brings billing, CRM sync and supplier management for growing agencies.</p>
          </div>
        </div>
      </section>
    </>
  );
}
