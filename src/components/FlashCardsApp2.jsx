import React, { useState } from "react";
import "./FlashCardsApp2.css";

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

const FlashCardsApp2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);
  
  const checkAnswer = () => {
    const correctAnswer = flashcards[currentIndex].answer.toLowerCase();
    const guess = userGuess.toLowerCase();
    const isCorrect = guess === correctAnswer || correctAnswer.includes(guess) || guess.includes(correctAnswer);
    
    if (isCorrect) {
      setFeedback("✅ Correct!");
      setStreak(streak + 1);
      if (streak + 1 > longestStreak) setLongestStreak(streak + 1);
    } else {
      setFeedback("❌ Incorrect. Try again!");
      setStreak(0);
    }
    setShowAnswer(true);
  };

  const handleNextClick = () => {
    let newIndex = (currentIndex + 1) % flashcards.length;
    setCurrentIndex(newIndex);
    resetState();
  };

  const handlePreviousClick = () => {
    const newIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    setCurrentIndex(newIndex);
    resetState();
  };

  const shuffleCards = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentIndex);
    setCurrentIndex(newIndex);
    resetState();
  };

  const markAsMastered = () => {
    setMasteredCards([...masteredCards, flashcards[currentIndex]]);
    setCurrentIndex((currentIndex + 1) % flashcards.length);
    resetState();
  };

  const resetState = () => {
    setShowAnswer(false);
    setUserGuess("");
    setFeedback(null);
  };

  return (
    <div className="flashcard-container">
      <h1>Brain Teaser🧠</h1>
      <p className="app-description" style={{ padding: "10px 20px", textAlign: "center", maxWidth: "600px" }}>
        Hope this would be a fun way to test your brain! Enter your answer and see if you get it right!
      </p>
      <p>Brain Teaser Time!🧠</p>
      
      <div className="flashcard" onClick={() => setShowAnswer(!showAnswer)}>
        <div className="flashcard-inner">
          <div className="flashcard-front">{flashcards[currentIndex].question}</div>
          {showAnswer && <div className="flashcard-back">{flashcards[currentIndex].answer}</div>}
        </div>
      </div>

      <input
        type="text"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        placeholder="Enter your answer"
      />
      <button onClick={checkAnswer}>Submit</button>
      {feedback && <p className="feedback">{feedback}</p>}

      <div className="buttons-container">
        <button className="previous-button" onClick={handlePreviousClick}>Previous</button>
        <button className="next-button" onClick={handleNextClick}>Next</button>
        <button className="shuffle-button" onClick={shuffleCards}>Shuffle</button>
        <button className="master-button" onClick={markAsMastered}>Mastered</button>
      </div>

      <p>Current Streak: {streak} | Longest Streak: {longestStreak}</p>
      <p>Mastered Cards: {masteredCards.length}</p>
    </div>
  );
};

export default FlashCardsApp2;
