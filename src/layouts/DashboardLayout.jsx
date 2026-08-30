import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Icon from "../components/Icon.jsx";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="app-main">
        <header className="app-topbar">
          <button
            className="app-topbar__burger"
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
          >
            <Icon name="menu" size={22} />
          </button>
          <div className="app-topbar__search">
            <Icon name="search" size={16} />
            <input placeholder="Search quotations, customers…" aria-label="Search" />
          </div>
          <div className="app-topbar__actions">
            <button className="icon-button" aria-label="Notifications">
              <Icon name="bell" size={18} />
            </button>
            <div className="app-topbar__avatar" aria-hidden="true">RJ</div>
          </div>
        </header>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
