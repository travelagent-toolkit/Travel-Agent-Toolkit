import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  as,
  to,
  href,
  icon,
  iconRight,
  disabled = false,
  loading = false,
  type = "button",
  className = "",
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = (
    <>
      {loading && <span className="btn__spinner" aria-hidden="true" />}
      {icon && !loading && <span className="btn__icon">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="btn__icon">{iconRight}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-disabled={disabled} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={classes} disabled={disabled || loading} {...rest}>
      {content}
    </button>
  );
}
