import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import { ToolCard, PricingCard } from "../components/Cards.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { tools } from "../data/mockData.js";
import { formatINR } from "../utils/format.js";
import { useState } from "react";
import { useToast } from "../context/ToastContext.jsx";

const VALUES = [
  { icon: "clock", title: "Save Time", desc: "Cut quotation prep from hours to minutes." },
  { icon: "file-text", title: "Professional PDFs", desc: "Branded documents your customers trust." },
  { icon: "message-circle", title: "WhatsApp Ready", desc: "Messages formatted for how you actually sell." },
  { icon: "palette", title: "Agency Branding", desc: "Your logo, colours and details, every time." },
  { icon: "sparkles", title: "AI-Powered", desc: "Draft itineraries and messages in one click." },
  { icon: "mouse-pointer-click", title: "Easy to Use", desc: "Built for agents, not engineers." },
];

const STEPS = [
  { title: "Enter Trip Details", desc: "Destination, dates, travellers and preferences — the things you already know." },
  { title: "Generate Professional Content", desc: "Get a polished quotation, itinerary or message, ready to review." },
  { title: "Share With Your Customer", desc: "Send it over WhatsApp or as a PDF, branded with your agency's name." },
];

const PLANS = [
  { name: "Free", price: "₹0", period: "/month", tagline: "Try the essentials, no card required.", features: ["5 quotations / month", "3 AI itineraries / month", "Basic quotation template", "WhatsApp generator", "Currency converter"], cta: "Start Free" },
  { name: "Pro", price: "₹199", period: "/month", tagline: "For agents quoting every day.", features: ["Unlimited quotations", "Unlimited itineraries", "PDF export", "Agency logo & branding", "Saved customers", "WhatsApp sharing"], highlighted: true, cta: "Start Free" },
  { name: "Agency", price: "₹499", period: "/month", tagline: "For growing teams and agencies.", features: ["Everything in Pro", "Customer CRM", "Multiple team members", "Advanced templates", "Supplier management", "Analytics & priority support"], cta: "Start Free" },
];

export default function Home() {
  usePageMeta("Create Professional Travel Quotations in Minutes", "Travel Agent Toolkit helps Indian travel agents create quotations, itineraries and customer messages faster, with agency branding built in.");
  const { showToast } = useToast();
  const [markup, setMarkup] = useState(20);
  const costPrice = 43000;
  const sellingPrice = Math.round(costPrice * (1 + markup / 100));

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="eyebrow"><Icon name="mountain" size={14} /> Built for Himalayan &amp; pan-India travel agents</span>
            <h1>Create Professional Travel Quotations in Minutes</h1>
            <p className="hero__sub">
              Create quotations, itineraries and customer messages faster with one simple toolkit built specifically for travel agents.
            </p>
            <div className="hero__cta">
              <Button to="/tools/quotation" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>
                Create Free Quotation
              </Button>
              <Button to="/tools" variant="secondary" size="lg">Explore Tools</Button>
            </div>
            <div className="hero__proof">
              <div className="stamp" aria-hidden="true">
                <span>TRUSTED</span>
                <span>BY AGENTS</span>
              </div>
              <p>Used by independent agents across Kashmir, Ladakh, Himachal, Sikkim &amp; Nepal to quote faster and win more trips.</p>
            </div>
          </div>

          <div className="hero__preview" aria-hidden="true">
            <div className="preview-window">
              <div className="preview-window__bar">
                <span /><span /><span />
                <span className="preview-window__title">Dashboard</span>
              </div>
              <div className="preview-window__body">
                <div className="preview-stats">
                  <div className="preview-stat">
                    <span className="preview-stat__label">This month</span>
                    <span className="preview-stat__value nums">24</span>
                    <span className="preview-stat__caption">Quotations</span>
                  </div>
                  <div className="preview-stat preview-stat--accent">
                    <span className="preview-stat__label">Est. sales</span>
                    <span className="preview-stat__value nums">{formatINR(1284000)}</span>
                    <span className="preview-stat__caption">Aug 2026</span>
                  </div>
                </div>
                <div className="preview-list">
                  <div className="preview-list__row">
                    <span>Kashmir Package</span>
                    <span className="badge badge--info">Sent</span>
                  </div>
                  <div className="preview-list__row">
                    <span>Dubai Holiday</span>
                    <span className="badge badge--success">Accepted</span>
                  </div>
                  <div className="preview-list__row">
                    <span>Kerala Family Tour</span>
                    <span className="badge badge--neutral">Draft</span>
                  </div>
                </div>
                <div className="preview-actions">
                  <span>Quick actions</span>
                  <div>
                    <div className="preview-chip"><Icon name="file-plus" size={14} /> New Quotation</div>
                    <div className="preview-chip"><Icon name="map" size={14} /> New Itinerary</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / VALUE */}
      <section className="section section--tight">
        <div className="container">
          <div className="value-grid">
            {VALUES.map((v) => (
              <div className="value-item" key={v.title}>
                <div className="value-item__icon"><Icon name={v.icon} size={20} /></div>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="section" id="tools">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The toolkit</span>
            <h2>Everything a Travel Agent Needs</h2>
            <p>Five focused tools that replace the spreadsheets, Word docs and copy-pasted WhatsApp texts.</p>
          </div>
          <div className="tool-grid">
            {tools.map((t) => (
              <ToolCard key={t.id} tool={t} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>From trip details to a sent quotation</h2>
          </div>
          <div className="steps">
            {STEPS.map((s, i) => (
              <div className="step" key={s.title}>
                <span className="step__index nums">{String(i + 1).padStart(2, "0")}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                {i < STEPS.length - 1 && <span className="step__connector" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTATION PREVIEW */}
      <section className="section">
        <div className="container quote-preview-section">
          <div className="section-head section-head--left">
            <span className="eyebrow">Sample output</span>
            <h2>A quotation that looks like it came from an agency, not a template</h2>
            <p>Live markup calculation, agency branding, and everything your customer needs to say yes.</p>
            <div className="markup-demo">
              <label htmlFor="markup-demo">Markup %</label>
              <input
                id="markup-demo"
                type="range"
                min="0"
                max="40"
                value={markup}
                onChange={(e) => setMarkup(Number(e.target.value))}
              />
              <span className="nums">{markup}%</span>
            </div>
          </div>

          <div className="quotation-doc">
            <div className="quotation-doc__header">
              <div>
                <strong>RJ Holidays</strong>
                <span>Dharamshala, Himachal Pradesh</span>
              </div>
              <div className="stamp stamp--sm" aria-hidden="true"><span>QUOTE</span></div>
            </div>
            <dl className="quotation-doc__grid">
              <div><dt>Customer</dt><dd>Rohan Mehta</dd></div>
              <div><dt>Destination</dt><dd>Kashmir</dd></div>
              <div><dt>Travel Dates</dt><dd>12–17 Sep 2026</dd></div>
              <div><dt>Duration</dt><dd>5N / 6D</dd></div>
              <div><dt>Hotel</dt><dd>Houseboat + Deluxe Hotel</dd></div>
              <div><dt>Transport</dt><dd>Private Innova, AC</dd></div>
              <div><dt>Sightseeing</dt><dd>Gulmarg, Pahalgam, Sonmarg</dd></div>
            </dl>
            <div className="quotation-doc__total">
              <span>Total Package Price</span>
              <span className="nums">{formatINR(sellingPrice)}</span>
            </div>
            <p className="quotation-doc__terms">Terms: 30% advance to confirm booking. Prices subject to availability at the time of confirmation.</p>
            <div className="quotation-doc__actions">
              <Button variant="secondary" size="sm" icon={<Icon name="download" size={16} />} onClick={() => showToast("PDF export will be connected in Phase 2.", "info")}>
                Download PDF
              </Button>
              <Button variant="primary" size="sm" icon={<Icon name="share" size={16} />} onClick={() => showToast("WhatsApp sharing will be connected in Phase 2.", "info")}>
                Share on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Pricing</span>
            <h2>Simple plans that scale with your agency</h2>
          </div>
          <div className="pricing-grid">
            {PLANS.map((p) => (
              <PricingCard key={p.name} plan={p} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container final-cta__inner">
          <h2>Spend Less Time Preparing Quotations.<br />More Time Selling Trips.</h2>
          <Button to="/register" size="lg" variant="onDark">Create Your Free Account</Button>
        </div>
      </section>
    </>
  );
}
