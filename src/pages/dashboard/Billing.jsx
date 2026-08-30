import { Card } from "../../components/Cards.jsx";
import Button from "../../components/Button.jsx";
import Icon from "../../components/Icon.jsx";
import usePageMeta from "../../hooks/usePageMeta.js";

const USAGE = [
  { label: "Quotations", used: 24, limit: "Unlimited" },
  { label: "AI Itineraries", used: 41, limit: "Unlimited" },
  { label: "Saved Customers", used: 87, limit: "Unlimited" },
];

const PLANS = [
  { name: "Pro", price: "₹199/month", current: true },
  { name: "Agency", price: "₹499/month", current: false },
];

export default function Billing() {
  usePageMeta("Billing", "Manage your Travel Agent Toolkit plan and usage.");
  return (
    <div className="page-stack">
      <div className="page-head">
        <div>
          <h1>Billing</h1>
          <p>Manage your plan and see how much you're using it.</p>
        </div>
      </div>

      <Card className="billing-current">
        <div>
          <span className="eyebrow">Current Plan</span>
          <h2>Pro — ₹199/month</h2>
          <p>Renews on 1 September 2026</p>
        </div>
        <Button variant="secondary">Manage Plan</Button>
      </Card>

      <Card className="form-section">
        <h3>Usage this month</h3>
        {USAGE.map((u) => (
          <div className="usage-row" key={u.label}>
            <span>{u.label}</span>
            <span className="nums">{u.used} · {u.limit}</span>
          </div>
        ))}
      </Card>

      <Card className="form-section">
        <h3>Upgrade options</h3>
        <div className="upgrade-grid">
          {PLANS.map((p) => (
            <div className="upgrade-option" key={p.name}>
              <div>
                <h4>{p.name}</h4>
                <span className="nums">{p.price}</span>
              </div>
              <Button variant={p.current ? "secondary" : "primary"} disabled={p.current} size="sm">
                {p.current ? "Current Plan" : "Upgrade"}
              </Button>
            </div>
          ))}
        </div>
      </Card>

      <Card className="billing-notice">
        <Icon name="info" size={18} />
        <span>Payment integration will be connected in Phase 3.</span>
      </Card>
    </div>
  );
}
