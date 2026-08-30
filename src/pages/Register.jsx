import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Field, Input } from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { useToast } from "../context/ToastContext.jsx";

export default function Register() {
  usePageMeta("Create Account", "Create your free Travel Agent Toolkit account.");
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    const nextErrors = {};
    if (!data.fullName) nextErrors.fullName = "Enter your full name.";
    if (!data.agencyName) nextErrors.agencyName = "Enter your agency name.";
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) nextErrors.email = "Enter a valid email address.";
    if (!data.phone || data.phone.length < 8) nextErrors.phone = "Enter a valid phone number.";
    if (!data.password || data.password.length < 6) nextErrors.password = "Use at least 6 characters.";
    if (data.password !== data.confirmPassword) nextErrors.confirmPassword = "Passwords do not match.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast("Account created — this is a demo signup.", "success");
      navigate("/dashboard");
    }, 900);
  }

  return (
    <section className="auth-page">
      <div className="auth-card card auth-card--wide">
        <div className="stamp stamp--sm" aria-hidden="true"><span>TAT</span></div>
        <h1>Create your free account</h1>
        <p className="auth-card__sub">No card required. Start with 5 quotations a month.</p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <Field label="Full Name" required id="reg-name" error={errors.fullName}>
              <Input id="reg-name" name="fullName" placeholder="Ranveer Joshi" />
            </Field>
            <Field label="Agency Name" required id="reg-agency" error={errors.agencyName}>
              <Input id="reg-agency" name="agencyName" placeholder="RJ Holidays" />
            </Field>
          </div>
          <div className="form-row">
            <Field label="Email" required id="reg-email" error={errors.email}>
              <Input id="reg-email" type="email" name="email" placeholder="you@agency.com" />
            </Field>
            <Field label="Phone" required id="reg-phone" error={errors.phone}>
              <Input id="reg-phone" type="tel" name="phone" placeholder="+91 98765 43210" />
            </Field>
          </div>
          <div className="form-row">
            <Field label="Password" required id="reg-password" error={errors.password}>
              <Input id="reg-password" type="password" name="password" placeholder="••••••••" />
            </Field>
            <Field label="Confirm Password" required id="reg-confirm" error={errors.confirmPassword}>
              <Input id="reg-confirm" type="password" name="confirmPassword" placeholder="••••••••" />
            </Field>
          </div>
          <Button type="submit" className="w-full" loading={loading}>Create Account</Button>
        </form>
        <p className="auth-card__footer">Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    </section>
  );
}
