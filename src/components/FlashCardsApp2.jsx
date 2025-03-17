import React, { useState } from "react";
import Card from "./Card"; // Import the missing Card component

const flashcards = [
  { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", answer: "Echo" },
  { question: "The more of me you take, the more you leave behind. What am I?", answer: "Footsteps" },
  { question: "I can be cracked, made, told, and played. What am I?", answer: "A joke" },
  { question: "The more you take away from me, the bigger I get. What am I?", answer: "A hole" },
  { question: "What has to be broken before you can use it?", answer: "An egg" },
  { question: "I have keys but open no locks. I have space but no room. You can enter, but you can't go outside. What am I?", answer: "A keyboard" },
  { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "The letter M" },
  { question: "You see a boat filled with people. It hasn’t sunk, but when you look again you don’t see a single person on the boat. Why?", answer: "All the people were married" },
  { question: "I shave every day, but my beard stays the same. What am I?", answer: "A barber" },
  { question: "The more you use me, the more you leave behind. What am I?", answer: "A trail" }
];

export default function FlashcardsApp2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card
        question={flashcards[currentIndex].question}
        answer={flashcards[currentIndex].answer}
        isFlipped={isFlipped}
        onClick={() => setIsFlipped(!isFlipped)}
      />
      
      <div className="flex space-x-4 mt-6">
        <button onClick={handleBack} disabled={currentIndex === 0} className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50">
          Back
        </button>
        <button onClick={handleNext} disabled={currentIndex === flashcards.length - 1} className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
}
