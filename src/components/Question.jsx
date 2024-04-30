import React from 'react';

export default function Question({ question, answerclick }) {
  return (
    <>
      <div className="question">
        <h1>{question?.question}</h1>
        <ul className="options">
          {question?.answerOptions?.map((a) => (
            <li key={a.text}>
              <button onClick={() => answerclick(a.isCorrect)}>{a.text}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
