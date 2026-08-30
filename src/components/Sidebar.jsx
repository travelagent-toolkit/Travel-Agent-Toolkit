import { NavLink } from "react-router-dom";
import Icon from "./Icon.jsx";

const ITEMS = [
  { to: "/dashboard", label: "Dashboard", icon: "dashboard", end: true },
  { to: "/tools/quotation", label: "Create Quotation", icon: "file-plus" },
  { to: "/itineraries", label: "Itineraries", icon: "map" },
  { to: "/quotations", label: "Quotations", icon: "file-text" },
  { to: "/customers", label: "Customers", icon: "users" },
  { to: "/tools", label: "Tools", icon: "wrench" },
  { to: "/billing", label: "Billing", icon: "credit-card" },
  { to: "/settings", label: "Settings", icon: "settings" },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className="sidebar-scrim" onClick={onClose} />}
      <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
        <NavLink to="/" className="brand sidebar__brand">
          <span className="brand__mark">T</span>
          <span className="brand__name">Travel Agent Toolkit</span>
        </NavLink>
        <nav className="sidebar__nav">
          {ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `sidebar__link ${isActive ? "sidebar__link--active" : ""}`}
              onClick={onClose}
            >
              <Icon name={item.icon} size={18} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <NavLink to="/login" className="sidebar__link sidebar__logout">
          <Icon name="logout" size={18} />
          <span>Log Out</span>
        </NavLink>
      </aside>
    </>
  );
}
