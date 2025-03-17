import React from "react";

export default function Card({ question, answer, isFlipped, onClick }) {
  return (
    <div className="perspective-1000" onClick={onClick}>
      <div
        className={`relative w-96 h-56 flex items-center justify-center text-center border border-gray-400 rounded-lg shadow-lg transition-transform duration-500 transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of the Card */}
        <div className="absolute w-full h-full flex items-center justify-center bg-white border border-gray-300 rounded-lg p-4 backface-hidden">
          <h2 className="text-xl font-semibold">{question}</h2>
        </div>

        {/* Back of the Card */}
        <div className="absolute w-full h-full flex items-center justify-center bg-blue-500 text-white border border-gray-300 rounded-lg p-4 backface-hidden rotate-y-180">
          <h2 className="text-xl font-semibold">{answer}</h2>
        </div>
      </div>
    </div>
  );
}
