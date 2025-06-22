import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlayerForm.css';

const PlayerForm = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    localStorage.setItem('playerName', name);

    
    navigate('/quiz/start');
  };

  return (
    <div className="form-container">
      <h2>Enter Your Name to Start</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit" disabled={!name}>Start Quiz</button>
      </form>
    </div>
  );
};

export default PlayerForm;