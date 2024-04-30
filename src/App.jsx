import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import question from './constants/question.json';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion((prev) => prev + 1);
    setUserAnswer([...userAnswer, isCorrect]);
  };
  console.log('userAnswer', userAnswer);
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer([]);
  };
  console.log('currentQuestion', currentQuestion);
  return (
    <>
      <h1>World Quiz</h1>
      {currentQuestion < question.length && (
        <Question
          question={question[currentQuestion]}
          answerclick={handleNextQuestion}
        />
      )}
      {currentQuestion === question.length && (
        <Result
          userAnswer={userAnswer}
          question={question}
          resetQuiz={resetQuiz}
        />
      )}
    </>
  );
}

export default App;
