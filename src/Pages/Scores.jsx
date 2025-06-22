import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Scores.css';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, LabelList
} from 'recharts';

const Scores = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const [answerStats, setAnswerStats] = useState([]);
  const [fastest, setFastest] = useState(null);
  const [slowest, setSlowest] = useState(null);
  const [averageTime, setAverageTime] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [leaderboardData, setLeaderboardData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const playerName = localStorage.getItem('playerName') || 'Player';
    const finalScore = parseInt(localStorage.getItem('finalScore')) || 0;
    const answerTimes = JSON.parse(localStorage.getItem('answerTimes')) || [];

    setName(playerName);
    setScore(finalScore);
    setAnswerStats(answerTimes);

    if (answerTimes.length > 0) {
      const sortedByTime = [...answerTimes].sort((a, b) => a.timeTaken - b.timeTaken);
      setFastest(sortedByTime[0]);
      setSlowest(sortedByTime[sortedByTime.length - 1]);

      const total = answerTimes.reduce((sum, q) => sum + (q.timeTaken || 0), 0);
      setTotalTime(total);
      setAverageTime((total / answerTimes.length).toFixed(2));

      let correct = 0;
      let incorrect = 0;
      answerTimes.forEach(q => {
        if (q?.isCorrect === true) correct++;
        else if (q?.isCorrect === false) incorrect++;
      });

      setCorrectCount(correct);
      setWrongCount(incorrect);

      const fullLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

      const currentEntry = {
        name: playerName,
        score: finalScore,
        time: total.toFixed(2),
        date: new Date().toLocaleString()
      };

      fullLeaderboard.push(currentEntry);

      localStorage.setItem('leaderboard', JSON.stringify(fullLeaderboard));

      const sortedLeaderboard = [...fullLeaderboard].sort(
        (a, b) => b.score - a.score || a.time - b.time
      );

      setLeaderboardData(sortedLeaderboard);
    }
  }, []);

  const handlePlayAgain = () => {
    localStorage.removeItem('finalScore');
    localStorage.removeItem('answerTimes');
    navigate('/');
  };

  const getMotivationMessage = () => {
    if (score >= 80) return "🏆 Excellent performance! Keep it up!";
    if (score >= 50) return "👏 Good job! You can aim higher!";
    return "💡 Don’t give up! Keep practicing and you'll improve!";
  };

  return (
    <div className="scores-page">
      <h2>🎉 Well done, {name}!</h2>
      <p>Your final score is:</p>
      <h1>{score} / 100</h1>

      <div className="motivation-box">{getMotivationMessage()}</div>

      <div className="performance-stats">
        <h3>📊 Performance Summary</h3>
        <ul>
          <li><strong>Correct Answers:</strong> {correctCount}</li>
          <li><strong>Wrong Answers:</strong> {wrongCount}</li>
          <li><strong>Total Time Taken:</strong> {totalTime.toFixed(2)}s</li>
          <li><strong>Average Time per Question:</strong> {averageTime}s</li>
          {fastest && (
            <li><strong>Fastest Answered:</strong> "{fastest.question}" in {fastest.timeTaken}s</li>
          )}
          {slowest && (
            <li><strong>Slowest Answered:</strong> "{slowest.question}" in {slowest.timeTaken}s</li>
          )}
        </ul>

        <h4>🕒 Time Taken per Question:</h4>
        <div className="question-times">
          {answerStats.map((q, index) => (
            <div key={index} className="question-time-item">
              <strong>Q{index + 1}:</strong> {q.timeTaken}s – "{q.question}"
            </div>
          ))}
        </div>
      </div>

      <div className="chart-section">
        <h3>📈 Efficiency Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={answerStats.map((q, i) => ({
            name: `Q${i + 1}`,
            time: q.timeTaken
          }))}>
            <XAxis dataKey="name" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Bar dataKey="time" fill="#ffc658">
              <LabelList dataKey="time" position="top" fill="#000" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="leaderboard-section">
        <h3>🏅 Leaderboard</h3>
        {leaderboardData.length > 0 ? (
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
                <th>Time (s)</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{entry.name}</td>
                  <td>{entry.score}</td>
                  <td>{entry.time}</td>
                  <td>{entry.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No leaderboard data yet.</p>
        )}
      </div>

      <button className="play-again-btn" onClick={handlePlayAgain}>
        🔁 Play Again
      </button>
    </div>
  );
};

export default Scores;