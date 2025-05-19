export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition ${className}`}
    >
      {children}
    </button>
  );
}
