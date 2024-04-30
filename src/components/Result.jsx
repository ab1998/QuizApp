import React from 'react';

export default function Result({ question, userAnswer, resetQuiz }) {
  const correct = userAnswer.filter((a) => a).length;
  return (
    <>
      <div className="result">
        <h2>Result</h2>
        <p>
          You answered {correct} out of {question.length}
        </p>
        <ul>
          {question.map((q, index) => (
            <li key={index} data-correct={userAnswer[index]}>
              {/*data attribute*/}Q{index + 1}. {q.question}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
