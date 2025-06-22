
export const saveToLeaderboard = (name, score, time) => {
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

  const newEntry = {
    name,
    score,
    time,
    date: new Date().toISOString().split('T')[0]
  };

  leaderboard.push(newEntry);
  localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

  
  window.dispatchEvent(new Event('leaderboardUpdated'));
};
