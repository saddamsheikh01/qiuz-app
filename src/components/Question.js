import React from 'react';

function Question({ data, onAnswerSelect }) {
  return (
    <div>
      <h2>{data.question}</h2>
      {data.options.map((option, index) => (
        <button key={index} onClick={() => onAnswerSelect(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;
