import Icon from "./Icon.jsx";

const ICONS = {
  success: "check-circle",
  error: "x-circle",
  info: "info",
  warning: "alert-circle",
};

export default function Toast({ message, type = "info", onClose }) {
  return (
    <div className={`toast toast--${type}`} role="alert">
      <Icon name={ICONS[type] || "info"} size={18} />
      <span>{message}</span>
      <button className="toast__close" onClick={onClose} aria-label="Dismiss notification">
        <Icon name="close" size={14} />
      </button>
    </div>
  );
}
