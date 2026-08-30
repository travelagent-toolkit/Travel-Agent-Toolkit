import { PricingCard } from "../components/Cards.jsx";
import usePageMeta from "../hooks/usePageMeta.js";

const PLANS = [
  {
    name: "Free", price: "₹0", period: "/month",
    tagline: "Try the essentials, no card required.",
    features: ["5 quotations / month", "3 AI itineraries / month", "Basic quotation template", "WhatsApp generator", "Currency converter"],
  },
  {
    name: "Pro", price: "₹199", period: "/month",
    tagline: "For agents quoting every day.",
    features: ["Unlimited quotations", "Unlimited itineraries", "PDF export", "Agency logo & custom branding", "Saved customers", "Saved quotations", "WhatsApp sharing"],
    highlighted: true,
  },
  {
    name: "Agency", price: "₹499", period: "/month",
    tagline: "For growing teams and multi-agent agencies.",
    features: ["Everything in Pro", "Customer CRM", "Multiple users", "Advanced quotation templates", "Supplier management", "Analytics", "Priority support"],
  },
];

export default function Pricing() {
  usePageMeta("Pricing", "Free, Pro at ₹199/month and Agency at ₹499/month — simple pricing for travel agents of every size.");
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Pricing</span>
          <h1>Plans that grow with your agency</h1>
          <p className="page-hero__sub">Start free. Move to Pro when you're quoting daily. Move to Agency when you're a team.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {PLANS.map((p) => (
              <PricingCard key={p.name} plan={p} />
            ))}
          </div>
          <p className="pricing-note">All prices in INR. Cancel anytime — no long-term contracts.</p>
        </div>
      </section>
    </>
  );
}
