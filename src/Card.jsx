import React from "react";

export default function Card({ question, answer, isFlipped, onClick }) {
  return (
    <div
      className="relative w-96 h-56 flex items-center justify-center text-center border border-gray-300 rounded-lg shadow-lg bg-white cursor-pointer transform transition-transform"
      onClick={onClick}
    >
      <div className={`absolute w-full h-full flex items-center justify-center transition-transform duration-500 ${isFlipped ? "rotate-y-180" : ""}`}>
        <h2 className="text-xl font-bold p-4">
          {isFlipped ? answer : question}
        </h2>
      </div>
    </div>
  );
}
