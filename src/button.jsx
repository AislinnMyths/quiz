export default function Button({ onClick, children, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-mint-dark text-dark font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-200 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
