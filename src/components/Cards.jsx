import React from "react";

export default function Card({ question, answer, isFlipped, onClick }) {
  return (
    <div className="relative w-96 h-56 flex items-center justify-center text-center border border-gray-400 rounded-lg shadow-lg bg-white cursor-pointer"
      onClick={onClick}
    >
      {isFlipped ? (
        <h2 className="text-xl font-bold text-blue-500 p-4">{answer}</h2>
      ) : (
        <h2 className="text-xl font-bold p-4">{question}</h2>
      )}
    </div>
  );
}
