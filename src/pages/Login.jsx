import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Field, Input } from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { useToast } from "../context/ToastContext.jsx";

export default function Login() {
  usePageMeta("Log In", "Log in to your Travel Agent Toolkit account.");
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const nextErrors = {};
    if (!email || !/\S+@\S+\.\S+/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!password || password.length < 6) nextErrors.password = "Password must be at least 6 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast("Welcome back! This is a demo login.", "success");
      navigate("/dashboard");
    }, 900);
  }

  return (
    <section className="auth-page">
      <div className="auth-card card">
        <div className="stamp stamp--sm" aria-hidden="true"><span>TAT</span></div>
        <h1>Welcome back</h1>
        <p className="auth-card__sub">Log in to manage your quotations and customers.</p>
        <form onSubmit={handleSubmit} noValidate>
          <Field label="Email" required id="login-email" error={errors.email}>
            <Input id="login-email" type="email" name="email" placeholder="you@agency.com" autoComplete="email" />
          </Field>
          <Field label="Password" required id="login-password" error={errors.password}>
            <div className="input-group">
              <input
                id="login-password"
                className="input"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                autoComplete="current-password"
              />
              <button type="button" className="input-group__suffix" onClick={() => setShowPassword((s) => !s)} aria-label={showPassword ? "Hide password" : "Show password"}>
                <Icon name={showPassword ? "eye-off" : "eye"} size={17} />
              </button>
            </div>
          </Field>
          <div className="auth-card__row">
            <label className="checkbox">
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="link-muted">Forgot password?</Link>
          </div>
          <Button type="submit" className="w-full" loading={loading}>Log In</Button>
        </form>
        <p className="auth-card__footer">Don't have an account? <Link to="/register">Create one</Link></p>
      </div>
    </section>
  );
}
