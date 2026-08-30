import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import PublicLayout from "./layouts/PublicLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";

import Home from "./pages/Home.jsx";
import Features from "./pages/Features.jsx";
import Tools from "./pages/Tools.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { Privacy, Terms, ForgotPassword, NotFound } from "./pages/Legal.jsx";

import ToolQuotation from "./pages/tools/ToolQuotation.jsx";
import ToolItinerary from "./pages/tools/ToolItinerary.jsx";
import ToolCalculator from "./pages/tools/ToolCalculator.jsx";
import ToolWhatsapp from "./pages/tools/ToolWhatsapp.jsx";
import ToolCurrency from "./pages/tools/ToolCurrency.jsx";

import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Quotations from "./pages/dashboard/Quotations.jsx";
import Customers from "./pages/dashboard/Customers.jsx";
import Itineraries from "./pages/dashboard/Itineraries.jsx";
import Settings from "./pages/dashboard/Settings.jsx";
import Billing from "./pages/dashboard/Billing.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/quotation" element={<ToolQuotation />} />
          <Route path="/tools/itinerary" element={<ToolItinerary />} />
          <Route path="/tools/calculator" element={<ToolCalculator />} />
          <Route path="/tools/whatsapp" element={<ToolWhatsapp />} />
          <Route path="/tools/currency" element={<ToolCurrency />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quotations" element={<Quotations />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/billing" element={<Billing />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
