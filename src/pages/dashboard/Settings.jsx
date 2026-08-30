import { useState } from "react";
import { Card } from "../../components/Cards.jsx";
import { Field, Input } from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
import Icon from "../../components/Icon.jsx";
import usePageMeta from "../../hooks/usePageMeta.js";
import { useToast } from "../../context/ToastContext.jsx";

export default function Settings() {
  usePageMeta("Settings", "Manage your agency profile, branding and preferences.");
  const { showToast } = useToast();
  const [notifs, setNotifs] = useState({ email: true, whatsapp: true, product: false });

  function handleSave(e) {
    e.preventDefault();
    showToast("Settings saved.", "success");
  }

  return (
    <div className="page-stack">
      <div className="page-head">
        <div>
          <h1>Settings</h1>
          <p>Update your agency profile and preferences.</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="page-stack">
        <Card className="form-section">
          <h3>Agency Profile</h3>
          <div className="form-row">
            <Field label="Agency Name" id="s-agency"><Input id="s-agency" defaultValue="RJ Holidays" /></Field>
            <Field label="Phone" id="s-phone"><Input id="s-phone" defaultValue="+91 98765 43210" /></Field>
          </div>
          <div className="form-row">
            <Field label="Email" id="s-email"><Input id="s-email" type="email" defaultValue="info@rjholidays.online" /></Field>
            <Field label="Website" id="s-website"><Input id="s-website" defaultValue="rjholidays.online" /></Field>
          </div>
          <div className="form-row">
            <Field label="Address" id="s-address"><Input id="s-address" defaultValue="Dharamshala, Himachal Pradesh" /></Field>
            <Field label="GSTIN" id="s-gstin"><Input id="s-gstin" placeholder="Optional" /></Field>
          </div>
        </Card>

        <Card className="form-section">
          <h3>Personal Information</h3>
          <div className="form-row">
            <Field label="Full Name" id="s-name"><Input id="s-name" defaultValue="Ranveer Joshi" /></Field>
            <Field label="Role" id="s-role"><Input id="s-role" defaultValue="Owner" /></Field>
          </div>
        </Card>

        <Card className="form-section">
          <h3>Branding</h3>
          <Field label="Agency Logo" id="s-logo">
            <div className="upload-box">
              <Icon name="upload" size={20} />
              <span>Click to upload or drag and drop</span>
            </div>
          </Field>
          <Field label="Primary Color">
            <div className="color-preview">
              <span className="color-swatch" style={{ background: "#8C0031" }} />
              <span className="nums">#8C0031</span>
            </div>
          </Field>
        </Card>

        <Card className="form-section">
          <h3>Notification Preferences</h3>
          <label className="checkbox checkbox--row">
            <input type="checkbox" checked={notifs.email} onChange={(e) => setNotifs((n) => ({ ...n, email: e.target.checked }))} />
            <span>Email me when a quotation is accepted</span>
          </label>
          <label className="checkbox checkbox--row">
            <input type="checkbox" checked={notifs.whatsapp} onChange={(e) => setNotifs((n) => ({ ...n, whatsapp: e.target.checked }))} />
            <span>WhatsApp reminders for follow-ups</span>
          </label>
          <label className="checkbox checkbox--row">
            <input type="checkbox" checked={notifs.product} onChange={(e) => setNotifs((n) => ({ ...n, product: e.target.checked }))} />
            <span>Product updates and tips</span>
          </label>
        </Card>

        <div>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
}
