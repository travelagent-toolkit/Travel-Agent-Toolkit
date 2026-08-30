import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import Button from "./Button.jsx";
import { formatINR, formatNumber } from "../utils/format.js";

export function Card({ children, className = "", as: As = "div", ...rest }) {
  return (
    <As className={`card ${className}`} {...rest}>
      {children}
    </As>
  );
}

export function StatCard({ label, value, icon, format = "number", trend }) {
  const displayValue =
    format === "currency" ? formatINR(value) : formatNumber(value);
  return (
    <Card className="stat-card">
      <div className="stat-card__icon"><Icon name={icon} size={18} /></div>
      <div className="stat-card__body">
        <span className="stat-card__label">{label}</span>
        <span className="stat-card__value nums">{displayValue}</span>
        {trend && <span className="stat-card__trend">{trend}</span>}
      </div>
    </Card>
  );
}

export function ToolCard({ tool }) {
  return (
    <Card className="tool-card">
      <div className="tool-card__icon"><Icon name={tool.icon} size={22} /></div>
      <h3 className="tool-card__title">{tool.name}</h3>
      <p className="tool-card__desc">{tool.description}</p>
      <Button to={tool.path} variant="ghost" size="sm" iconRight={<Icon name="arrow-right" size={16} />}>
        Try Tool
      </Button>
    </Card>
  );
}

export function PricingCard({ plan }) {
  return (
    <Card className={`pricing-card ${plan.highlighted ? "pricing-card--highlighted" : ""}`}>
      {plan.highlighted && <span className="pricing-card__badge">Most popular</span>}
      <h3 className="pricing-card__name">{plan.name}</h3>
      <div className="pricing-card__price">
        <span className="nums">{plan.price}</span>
        {plan.period && <span className="pricing-card__period">{plan.period}</span>}
      </div>
      <p className="pricing-card__tagline">{plan.tagline}</p>
      <ul className="pricing-card__features">
        {plan.features.map((f) => (
          <li key={f}>
            <Icon name="check" size={16} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button to="/register" variant={plan.highlighted ? "primary" : "secondary"} className="pricing-card__cta">
        {plan.cta || "Start Free"}
      </Button>
    </Card>
  );
}

export function StatusBadge({ status }) {
  const map = {
    Draft: "badge--neutral",
    Sent: "badge--info",
    Accepted: "badge--success",
    Expired: "badge--danger",
    Active: "badge--success",
    Lead: "badge--info",
    Inactive: "badge--neutral",
  };
  return <span className={`badge ${map[status] || "badge--neutral"}`}>{status}</span>;
}
