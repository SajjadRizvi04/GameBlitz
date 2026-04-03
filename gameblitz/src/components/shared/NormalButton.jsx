import React from "react";


function NormalButton({ text, onClick}) {
 
  return (

    <button
      onClick={onClick}
      className={`bg-white text-black px-4  h-10 flex justify-center items-center rounded-md 
      hover:bg-gray-100 hover:scale-105 
      transition-all duration-200 text-sm`}
    >
      {text}
    </button>
  );
}

export default NormalButton;