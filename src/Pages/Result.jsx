
import React, { useEffect } from 'react';
import { saveToLeaderboard } from '../utils/saveToLeaderboard';

const Result = ({ name, score, time }) => {
  useEffect(() => {
    saveToLeaderboard(name, score, time);
  }, [name, score, time]);

  return (
    <div className="result-page">
      <h2>🎉 Quiz Completed!</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Score:</strong> {score}</p>
      <p><strong>Time Taken:</strong> {time} seconds</p>
    </div>
  );
};

export default Result;
