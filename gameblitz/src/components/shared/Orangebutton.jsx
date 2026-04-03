

function OrangeButton({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[var(--orange)] text-white px-4 py-1.5 rounded-md 
      hover:bg-[var(--orange-light)] hover:scale-105 
      transition-all duration-200 ${className}`}
    >
      {text}
    </button>
  );
}

export default OrangeButton;