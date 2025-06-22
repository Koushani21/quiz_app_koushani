import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions'; 
import './Quiz.css'; 

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [questionSet, setQuestionSet] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [answerTimes, setAnswerTimes] = useState([]);
  const [startTime, setStartTime] = useState(Date.now());

  const navigate = useNavigate();

  useEffect(() => {
    const category = localStorage.getItem('quizCategory') || 'general';
    const level = localStorage.getItem('quizDifficulty') || 'easy';
    const quizData = questions[category]?.[level] || [];

    setQuestionSet(quizData);
  }, []);

  
  useEffect(() => {
    if (!showAnswer && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showAnswer) {
      handleAnswer(null); 
    }
  }, [timeLeft, showAnswer]);

  const handleAnswer = (option) => {
    if (showAnswer) return;

    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    const currentQ = questionSet[current];
    const correctAnswer = currentQ?.answer;
    const isCorrect = option === correctAnswer;

    if (isCorrect) setScore(prev => prev + 10);

    const answerRecord = {
      question: currentQ.question,
      selectedAnswer: option,
      correctAnswer: correctAnswer,
      isCorrect: isCorrect,
      timeTaken: timeTaken
    };

    const updatedAnswers = [...answerTimes, answerRecord];
    setAnswerTimes(updatedAnswers);
    setSelectedOption(option);
    setShowAnswer(true);

    setTimeout(() => {
      const next = current + 1;
      if (next < questionSet.length) {
        setCurrent(next);
        setSelectedOption(null);
        setShowAnswer(false);
        setTimeLeft(15);
        setStartTime(Date.now());
      } else {
        // Quiz finished: Save final score and answer details
        localStorage.setItem('finalScore', isCorrect ? score + 10 : score);
        localStorage.setItem('answerTimes', JSON.stringify(updatedAnswers));
        navigate('/scores');
      }
    }, 2000);
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelectedOption(null);
      setShowAnswer(false);
      setTimeLeft(15);
      setStartTime(Date.now());
    }
  };

  if (questionSet.length === 0) {
    return <p>Loading questions...</p>;
  }

  const currentQuestion = questionSet[current];
  const correctAnswer = currentQuestion?.answer;

  return (
    <div className="quiz-page">
      <div className="quiz-box">
        <div className="quiz-header">
          <h3>Question {current + 1} of {questionSet.length}</h3>
          <div className="timer">⏳ Time Left: {timeLeft}s</div>
        </div>

        <h2 className="question">{currentQuestion.question}</h2>

        <div className="options">
          {currentQuestion.options.map((opt, idx) => {
            let className = 'option';
            if (showAnswer) {
              if (opt === correctAnswer) className += ' correct';
              else if (opt === selectedOption) className += ' incorrect';
            }
            return (
              <button
                key={idx}
                className={className}
                onClick={() => handleAnswer(opt)}
                disabled={showAnswer}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {!showAnswer && current > 0 && (
          <button className="back-button" onClick={handleBack}>
            ⬅ Back to Previous
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;