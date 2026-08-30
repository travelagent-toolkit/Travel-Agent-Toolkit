import { useMemo, useState } from "react";
import { Card, StatusBadge } from "../../components/Cards.jsx";
import { Input, Select } from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
import Icon from "../../components/Icon.jsx";
import usePageMeta from "../../hooks/usePageMeta.js";
import { quotations } from "../../data/mockData.js";
import { formatINR, formatDate } from "../../utils/format.js";

const STATUSES = ["All", "Draft", "Sent", "Accepted", "Expired"];

export default function Quotations() {
  usePageMeta("Quotations", "All your travel quotations in one place.");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => {
    return quotations.filter((q) => {
      const matchesStatus = status === "All" || q.status === status;
      const term = search.toLowerCase();
      const matchesSearch =
        !term ||
        q.customer.toLowerCase().includes(term) ||
        q.destination.toLowerCase().includes(term) ||
        q.id.toLowerCase().includes(term);
      return matchesStatus && matchesSearch;
    });
  }, [search, status]);

  return (
    <div className="page-stack">
      <div className="page-head">
        <div>
          <h1>Quotations</h1>
          <p>{quotations.length} quotations created so far.</p>
        </div>
        <Button to="/tools/quotation" icon={<Icon name="plus" size={16} />}>Create Quotation</Button>
      </div>

      <Card className="filter-bar">
        <div className="input-group filter-bar__search">
          <Icon name="search" size={16} />
          <input placeholder="Search by customer, destination or ID" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search quotations" />
        </div>
        <Select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Filter by status">
          {STATUSES.map((s) => <option key={s}>{s}</option>)}
        </Select>
      </Card>

      <Card className="table-card">
        {filtered.length === 0 ? (
          <div className="empty-state">
            <Icon name="file-text" size={28} />
            <h3>No quotations match your search</h3>
            <p>Try a different keyword or clear the status filter.</p>
          </div>
        ) : (
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Quotation ID</th>
                  <th>Customer</th>
                  <th>Destination</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th aria-label="Actions" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((q) => (
                  <tr key={q.id}>
                    <td className="nums">{q.id}</td>
                    <td>{q.customer}</td>
                    <td>{q.destination}</td>
                    <td>{formatDate(q.date)}</td>
                    <td className="nums">{formatINR(q.amount)}</td>
                    <td><StatusBadge status={q.status} /></td>
                    <td>
                      <div className="row-actions">
                        <button className="icon-button" aria-label={`Edit ${q.id}`}><Icon name="edit" size={16} /></button>
                        <button className="icon-button" aria-label={`Share ${q.id}`}><Icon name="share" size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
