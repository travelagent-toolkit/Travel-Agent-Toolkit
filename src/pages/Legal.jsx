import usePageMeta from "../hooks/usePageMeta.js";

export function Privacy() {
  usePageMeta("Privacy Policy", "How Travel Agent Toolkit handles your data.");
  return (
    <section className="section legal-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p>This is a placeholder Privacy Policy for the Phase 1 frontend demo. In a production release, this page will describe what data is collected, how it is stored, and how agents and their customers can request changes or deletion.</p>
      </div>
    </section>
  );
}

export function Terms() {
  usePageMeta("Terms & Conditions", "Terms and conditions for using Travel Agent Toolkit.");
  return (
    <section className="section legal-page">
      <div className="container">
        <h1>Terms &amp; Conditions</h1>
        <p>This is a placeholder Terms &amp; Conditions page for the Phase 1 frontend demo. Final terms covering subscriptions, cancellations and acceptable use will be added before public launch.</p>
      </div>
    </section>
  );
}

export function ForgotPassword() {
  usePageMeta("Forgot Password", "Reset your Travel Agent Toolkit password.");
  return (
    <section className="auth-page">
      <div className="auth-card card">
        <h1>Reset your password</h1>
        <p className="auth-card__sub">Password reset will be available once accounts are connected to a backend in Phase 2. For now, please contact support.</p>
      </div>
    </section>
  );
}

export function NotFound() {
  usePageMeta("Page Not Found", "The page you're looking for doesn't exist.");
  return (
    <section className="section empty-state empty-state--page">
      <h1>404</h1>
      <p>We couldn't find that page.</p>
    </section>
  );
}
