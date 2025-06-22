
import React, { useEffect, useState } from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = () => {
      const data = JSON.parse(localStorage.getItem('leaderboard')) || [];

      
      const uniqueByName = Object.values(
        data.reduce((acc, curr) => {
          if (!acc[curr.name] || acc[curr.name].score < curr.score) {
            acc[curr.name] = curr;
          }
          return acc;
        }, {})
      );

      const sorted = uniqueByName.sort((a, b) => b.score - a.score || a.time - b.time);
      setLeaderboard(sorted);
    };

    fetchLeaderboard();

    const storageListener = () => fetchLeaderboard();
    const customUpdateListener = () => fetchLeaderboard();

    window.addEventListener('storage', storageListener);
    window.addEventListener('leaderboardUpdated', customUpdateListener);

    return () => {
      window.removeEventListener('storage', storageListener);
      window.removeEventListener('leaderboardUpdated', customUpdateListener);
    };
  }, []);

  const resetLeaderboard = () => {
    localStorage.removeItem('leaderboard');
    setLeaderboard([]);
  };

  return (
    <div className="leaderboard-page">
      <h1>🏅 Leaderboard</h1>
      <p className="leaderboard-description">See who's at the top of the quiz challenge!</p>
      <button onClick={() => window.location.reload()} className="refresh-btn">🔄 Refresh</button>
      <button onClick={resetLeaderboard} className="reset-btn">🧹 Reset Leaderboard</button>

      {leaderboard.length === 0 ? (
        <p className="no-data-message">No leaderboard data yet. Play a quiz to get listed!</p>
      ) : (
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
            {leaderboard.map((entry, index) => {
              const rankClass =
                index === 0 ? 'gold-glow' :
                index === 1 ? 'silver-glow' :
                index === 2 ? 'bronze-glow' : '';
              return (
                <tr key={index} className={`leaderboard-row ${rankClass}`}>
                  <td>{index + 1}</td>
                  <td>
                    {index === 0 && <span className="medal">🥇</span>}
                    {index === 1 && <span className="medal">🥈</span>}
                    {index === 2 && <span className="medal">🥉</span>}
                    {entry.name}
                  </td>
                  <td>{entry.score}</td>
                  <td>{entry.time}</td>
                  <td>{entry.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;
