import React from "react";

function NormalButton({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-white text-black px-4 py-1.5 rounded-md 
      hover:bg-gray-100 hover:scale-105 
      transition-all duration-200 ${className}`}
    >
      {text}
    </button>
  );
}

export default NormalButton;