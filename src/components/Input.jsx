export function Field({ label, hint, error, required, children, id }) {
  return (
    <div className={`field ${error ? "field--error" : ""}`}>
      {label && (
        <label htmlFor={id} className="field__label">
          {label} {required && <span className="field__required">*</span>}
        </label>
      )}
      {children}
      {hint && !error && <span className="field__hint">{hint}</span>}
      {error && <span className="field__error">{error}</span>}
    </div>
  );
}

export function Input({ id, prefix, className = "", ...rest }) {
  if (prefix) {
    return (
      <div className={`input-group ${className}`}>
        <span className="input-group__prefix">{prefix}</span>
        <input id={id} className="input" {...rest} />
      </div>
    );
  }
  return <input id={id} className={`input ${className}`} {...rest} />;
}

export function Select({ id, children, className = "", ...rest }) {
  return (
    <select id={id} className={`input select ${className}`} {...rest}>
      {children}
    </select>
  );
}

export function Textarea({ id, className = "", ...rest }) {
  return <textarea id={id} className={`input textarea ${className}`} {...rest} />;
}
