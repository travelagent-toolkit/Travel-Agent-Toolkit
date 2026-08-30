import { Link } from "react-router-dom";
import { StatCard, Card, StatusBadge } from "../../components/Cards.jsx";
import Icon from "../../components/Icon.jsx";
import Button from "../../components/Button.jsx";
import usePageMeta from "../../hooks/usePageMeta.js";
import { stats, recentQuotations } from "../../data/mockData.js";
import { formatINR, formatDate } from "../../utils/format.js";

const QUICK_ACTIONS = [
  { label: "Create Quotation", icon: "file-plus", to: "/tools/quotation" },
  { label: "Create Itinerary", icon: "map", to: "/tools/itinerary" },
  { label: "Calculate Package", icon: "calculator", to: "/tools/calculator" },
];

export default function Dashboard() {
  usePageMeta("Dashboard", "Your Travel Agent Toolkit dashboard.");
  return (
    <div className="page-stack">
      <div className="page-head">
        <div>
          <h1>Welcome back, Ranveer 👋</h1>
          <p>Here's what's happening with RJ Holidays this month.</p>
        </div>
      </div>

      <div className="quick-actions">
        {QUICK_ACTIONS.map((a) => (
          <Link to={a.to} className="quick-action" key={a.label}>
            <Icon name={a.icon} size={20} />
            <span>{a.label}</span>
          </Link>
        ))}
      </div>

      <div className="stat-grid">
        <StatCard label="Quotations This Month" value={stats.quotationsThisMonth} icon="file-text" />
        <StatCard label="Customers" value={stats.customers} icon="users" />
        <StatCard label="AI Generations" value={stats.aiGenerations} icon="sparkles" />
        <StatCard label="Estimated Sales" value={stats.estimatedSales} icon="trending-up" format="currency" />
      </div>

      <Card className="table-card">
        <div className="table-card__head">
          <h3>Recent Quotations</h3>
          <Button to="/quotations" variant="ghost" size="sm">View all</Button>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Quotation</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentQuotations.map((q) => (
                <tr key={q.id}>
                  <td>
                    <span className="data-table__primary">{q.destination}</span>
                    <span className="data-table__secondary">{q.id}</span>
                  </td>
                  <td>{q.customer}</td>
                  <td>{formatDate(q.date)}</td>
                  <td className="nums">{formatINR(q.amount)}</td>
                  <td><StatusBadge status={q.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
