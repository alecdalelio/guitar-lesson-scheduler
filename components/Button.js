import React from "react";

function Button({ text, onClick }) {
  return (
    <button
      className="bg-sunrise-orange text-white px-4 py-2 rounded-md shadow-md"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
