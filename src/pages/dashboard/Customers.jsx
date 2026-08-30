import { useMemo, useState } from "react";
import { Card, StatusBadge } from "../../components/Cards.jsx";
import { Select } from "../../components/Input.jsx";
import Modal from "../../components/Modal.jsx";
import { Field, Input } from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
import Icon from "../../components/Icon.jsx";
import usePageMeta from "../../hooks/usePageMeta.js";
import { customers as initialCustomers } from "../../data/mockData.js";
import { formatDate } from "../../utils/format.js";
import { useToast } from "../../context/ToastContext.jsx";

const STATUSES = ["All", "Active", "Lead", "Inactive"];

export default function Customers() {
  usePageMeta("Customers", "Manage your travel agency's customer list.");
  const { showToast } = useToast();
  const [customers, setCustomers] = useState(initialCustomers);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = useMemo(() => {
    return customers.filter((c) => {
      const matchesStatus = status === "All" || c.status === status;
      const term = search.toLowerCase();
      const matchesSearch = !term || c.name.toLowerCase().includes(term) || c.destination.toLowerCase().includes(term);
      return matchesStatus && matchesSearch;
    });
  }, [customers, search, status]);

  function handleAdd(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const newCustomer = {
      id: customers.length + 1,
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      destination: form.get("destination") || "—",
      lastContact: new Date().toISOString().slice(0, 10),
      status: "Lead",
    };
    setCustomers((c) => [newCustomer, ...c]);
    setModalOpen(false);
    showToast("Customer added.", "success");
    e.target.reset();
  }

  return (
    <div className="page-stack">
      <div className="page-head">
        <div>
          <h1>Customers</h1>
          <p>{customers.length} customers on file.</p>
        </div>
        <Button icon={<Icon name="plus" size={16} />} onClick={() => setModalOpen(true)}>Add Customer</Button>
      </div>

      <Card className="filter-bar">
        <div className="input-group filter-bar__search">
          <Icon name="search" size={16} />
          <input placeholder="Search by name or destination" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search customers" />
        </div>
        <Select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Filter by status">
          {STATUSES.map((s) => <option key={s}>{s}</option>)}
        </Select>
      </Card>

      <div className="customer-grid">
        {filtered.length === 0 ? (
          <Card className="empty-state">
            <Icon name="users" size={28} />
            <h3>No customers found</h3>
            <p>Try a different search or add a new customer.</p>
          </Card>
        ) : (
          filtered.map((c) => (
            <Card className="customer-card" key={c.id}>
              <div className="customer-card__head">
                <div className="avatar" aria-hidden="true">{c.name.charAt(0)}</div>
                <div>
                  <h4>{c.name}</h4>
                  <span>{c.destination}</span>
                </div>
                <StatusBadge status={c.status} />
              </div>
              <ul className="customer-card__meta">
                <li><Icon name="message-circle" size={14} /> {c.phone}</li>
                <li>{c.email}</li>
                <li>Last contact: {formatDate(c.lastContact)}</li>
              </ul>
            </Card>
          ))
        )}
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Add Customer">
        <form onSubmit={handleAdd} className="modal-form">
          <Field label="Name" required id="cust-name">
            <Input id="cust-name" name="name" required />
          </Field>
          <Field label="Phone" id="cust-phone">
            <Input id="cust-phone" name="phone" />
          </Field>
          <Field label="Email" id="cust-email">
            <Input id="cust-email" type="email" name="email" />
          </Field>
          <Field label="Destination" id="cust-destination">
            <Input id="cust-destination" name="destination" />
          </Field>
          <div className="modal__form-actions">
            <Button type="button" variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button type="submit">Add Customer</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
