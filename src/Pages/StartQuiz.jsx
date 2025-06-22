import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartQuiz.css';

const StartQuiz = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !category || !difficulty) {
      setErrorMessage('⚠ All fields must be filled.');
      return;
    }

    
    localStorage.setItem('playerName', name);
    localStorage.setItem('quizCategory', category);
    localStorage.setItem('quizDifficulty', difficulty);

    navigate('/quiz/start');
  };

  return (
    <div className={`startquiz-wrapper ${animate ? 'slide-in' : ''}`}>
      <div className="startquiz-box">
        <h2>Customize Your Quiz</h2>

        <form onSubmit={handleSubmit} className="startquiz-form" noValidate>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrorMessage('');
            }}
          />

          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setErrorMessage('');
            }}
          >
            <option value="">Select Category</option>
            <option value="general">General Knowledge</option>
            <option value="science">Science</option>
            <option value="math">Math</option>
          </select>

          <select
            value={difficulty}
            onChange={(e) => {
              setDifficulty(e.target.value);
              setErrorMessage('');
            }}
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          {errorMessage && <div className="error-msg">{errorMessage}</div>}

          <button
            type="submit"
            disabled={!name.trim() || !category || !difficulty}
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default StartQuiz;