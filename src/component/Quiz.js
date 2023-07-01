import React, { useState } from "react";
import "../styles/Quiz.css";
import questions from "./questions.json";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleQuitQuiz = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      window.location.reload(false);
    }
  };

  return (
    <div className="QuestionBox">
      <div>
        <div className="current-question">
          Question: {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className="question">{currentQuestion.question}</div>
        <div className="all-options">
          {Object.keys(currentQuestion)
            .filter((key) => key.startsWith("option"))
            .map((key) => (
              <button key={key} className="options-button">
                {currentQuestion[key]}
              </button>
            ))}
        </div>
        <div className="quit">
          <button className="settings" onClick={handlePreviousQuestion}>
            Previous
          </button>
          <button className="settings" onClick={handleNextQuestion}>
            Next
          </button>
          <button className="settings" onClick={handleQuitQuiz}>
            Quit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
