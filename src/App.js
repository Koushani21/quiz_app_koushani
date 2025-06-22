import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import PlayerForm from './Pages/StartQuiz';     
import Quiz from './Pages/Quiz';                
import ScorePage from './Pages/Scores';         
import AboutPage from './Pages/AboutPage';
import NotFound from './Pages/Notfound';
import Leaderboard from './Pages/Leaderboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<PlayerForm />} />       
        <Route path="/quiz/start" element={<Quiz />} />        
        <Route path="/scores" element={<ScorePage />} />       
        <Route path="/leaderboard" element={<Leaderboard />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;