import React from "react";

export function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400`}
    >
      {children}
    </button>
  );
}
