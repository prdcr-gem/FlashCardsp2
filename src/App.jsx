import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";


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

export default function FlashcardsApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSubmit = () => {
    if (userGuess.trim().toLowerCase() === flashcards[currentIndex].answer.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect. Try again!");
    }
    setIsFlipped(true);
  };

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetState();
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      resetState();
    }
  };

  const resetState = () => {
    setUserGuess("");
    setFeedback(null);
    setIsFlipped(false);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <Card className={`w-96 p-6 text-center transition-transform ${isFlipped ? "rotate-y-180" : ""}`}>
        <CardContent>
          <h2 className="text-xl font-bold">
            {isFlipped ? flashcards[currentIndex].answer : flashcards[currentIndex].question}
          </h2>
        </CardContent>
      </Card>

      {!isFlipped && (
        <input
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Your answer"
          className="border p-2 my-4 w-full max-w-xs rounded-md"
        />
      )}

      {feedback && <p className={`mt-2 text-lg font-bold ${feedback === "Correct!" ? "text-green-500" : "text-red-500"}`}>{feedback}</p>}
      
      <div className="flex space-x-4 mt-4">
        <Button onClick={handleBack} disabled={currentIndex === 0}>
          Back
        </Button>
        <Button onClick={handleSubmit} disabled={isFlipped || userGuess === ""}>
          Submit
        </Button>
        <Button onClick={handleNext} disabled={currentIndex === flashcards.length - 1}>
          Next
        </Button>
      </div>
    </div>
  );
}
