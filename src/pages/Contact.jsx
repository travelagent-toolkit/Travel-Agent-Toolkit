import { useState } from "react";
import { Field, Input, Textarea } from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { useToast } from "../context/ToastContext.jsx";

export default function Contact() {
  usePageMeta("Contact", "Get in touch with the Travel Agent Toolkit team.");
  const { showToast } = useToast();
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    showToast("Thanks — we'll get back to you within a day.", "success");
  }

  return (
    <section className="page-hero page-hero--form">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">Contact</span>
          <h1>Questions before you sign up?</h1>
          <p className="page-hero__sub">Tell us a bit about your agency and what you're hoping to speed up — we read every message.</p>
          <ul className="contact-info">
            <li>support@travelagenttoolkit.example</li>
            <li>+91 98765 43210</li>
            <li>Mon–Sat, 10am–7pm IST</li>
          </ul>
        </div>
        <form className="card contact-form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="empty-state">
              <h3>Message sent</h3>
              <p>We've received your message and will reply soon.</p>
            </div>
          ) : (
            <>
              <Field label="Full Name" required id="c-name">
                <Input id="c-name" name="name" required placeholder="Your name" />
              </Field>
              <Field label="Agency Name" id="c-agency">
                <Input id="c-agency" name="agency" placeholder="Your agency (optional)" />
              </Field>
              <Field label="Email" required id="c-email">
                <Input id="c-email" type="email" name="email" required placeholder="you@agency.com" />
              </Field>
              <Field label="Message" required id="c-message">
                <Textarea id="c-message" name="message" rows={4} required placeholder="How can we help?" />
              </Field>
              <Button type="submit" className="w-full">Send Message</Button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
