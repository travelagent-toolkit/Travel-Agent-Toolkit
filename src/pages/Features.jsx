import Icon from "../components/Icon.jsx";
import Button from "../components/Button.jsx";
import usePageMeta from "../hooks/usePageMeta.js";

const FEATURES = [
  { icon: "file-text", title: "Branded Quotations", desc: "Add your agency logo, GSTIN and contact details once — every quotation carries your identity from then on." },
  { icon: "map", title: "Instant Itineraries", desc: "Describe the trip and get a clean, day-by-day itinerary you can hand straight to a customer." },
  { icon: "calculator", title: "Live Cost Calculation", desc: "Enter hotel, transport and sightseeing costs and see your margin and selling price update as you type." },
  { icon: "message-circle", title: "WhatsApp Messaging", desc: "Pre-written, editable messages for every stage of the sale — from first enquiry to thank-you note." },
  { icon: "repeat", title: "Multi-Currency Quoting", desc: "Quote confidently for NRI and international customers across ten common currencies." },
  { icon: "shield-check", title: "Built for Trust", desc: "Clean, professional documents that make a small agency look every bit as established as a large one." },
  { icon: "smartphone", title: "Mobile First", desc: "Built to be used from a phone between calls — not a desktop tool you dread opening." },
  { icon: "sparkles", title: "AI Assistance", desc: "AI-drafted itineraries and messages, clearly marked, so you always review before sending." },
];

export default function Features() {
  usePageMeta("Features", "Explore the quotation, itinerary, calculator, WhatsApp and currency tools inside Travel Agent Toolkit.");
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Features</span>
          <h1>Every tool your agency touches for a sale, in one place</h1>
          <p className="page-hero__sub">From the first WhatsApp reply to the final quotation, Travel Agent Toolkit keeps your work looking consistent and professional.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="feature-grid">
            {FEATURES.map((f) => (
              <div className="feature-item" key={f.title}>
                <div className="feature-item__icon"><Icon name={f.icon} size={22} /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--sand">
        <div className="container final-cta__inner" style={{ padding: 0 }}>
          <h2 style={{ fontSize: "1.9rem" }}>Ready to see it on your own trips?</h2>
          <Button to="/tools" size="lg">Explore the Tools</Button>
        </div>
      </section>
    </>
  );
}
