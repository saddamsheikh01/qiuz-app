import React, { useState } from 'react';

const questions = [
  { question: "What is the capital of France?", options: ["Paris", "Berlin", "Madrid"], answer: "Paris" },
  { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Mars"], answer: "Jupiter" },
  { question: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Hemingway", "Tolkien"], answer: "Shakespeare" },
  { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2"], answer: "H2O" },
  { question: "What is the capital of Japan?", options: ["Seoul", "Tokyo", "Beijing"], answer: "Tokyo" },
  { question: "What is the currency of the United States?", options: ["Dollar", "Euro", "Yen"], answer: "Dollar" },
  { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci"], answer: "Da Vinci" },
  { question: "What is the smallest country in the world?", options: ["Vatican City", "Monaco", "Malta"], answer: "Vatican City" },
  { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond"], answer: "Diamond" },
  { question: "Which element has the atomic number 1?", options: ["Helium", "Hydrogen", "Oxygen"], answer: "Hydrogen" },
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#f0f4f8');

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
      setBackgroundColor('#c8e6c9'); // Light green for correct answer
    } else {
      setBackgroundColor('#ffccbc'); // Light red for incorrect answer
    }
    
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleBackButtonClick = () => {
    setShowScore(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setBackgroundColor('#f0f4f8'); // Reset to original background color
  };

  return (
    <div className="Quiz" style={{ backgroundColor }}>
      {showScore ? (
        <div className="Quiz-score">
          <h2>Your score: {score} out of {questions.length}</h2>
          <button className="Quiz-back-button" onClick={handleBackButtonClick}>Back to Quiz</button>
        </div>
      ) : (
        <div className="Quiz-question">
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div className="Quiz-options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button 
                key={index} 
                className="Quiz-option" 
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
