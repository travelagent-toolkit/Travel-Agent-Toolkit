import { ToolCard } from "../components/Cards.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { tools } from "../data/mockData.js";

export default function Tools() {
  usePageMeta("Tools", "Browse the Quotation Generator, Itinerary Generator, Package Cost Calculator, WhatsApp Generator and Currency Converter.");
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Tools directory</span>
          <h1>Pick a tool and start in seconds</h1>
          <p className="page-hero__sub">No setup, no templates to configure first — just open a tool and fill in what you already know about the trip.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="tool-grid tool-grid--wide">
            {tools.map((t) => (
              <ToolCard key={t.id} tool={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
