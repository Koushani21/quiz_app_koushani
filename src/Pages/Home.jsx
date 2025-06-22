import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'; 
const Home = () => {
  return (
    <section className="hero animate-fade-in">
      <div className="hero-left animate-slide-in-left">
        <h1 className="hero-title">Interactive Quiz Website</h1>
        <p className="hero-subtitle">Learn-Play-Win</p>
        <p className="hero-desc">Test Your Knowledge, One Question at a Time!.</p>
        <Link to="/quiz" className="cta-button animate-pulse">Start Quiz</Link>
      </div>

      <div className="hero-right animate-zoom-in">
        <img
          src="https://www.shutterstock.com/shutterstock/photos/2052894734/display_1500/stock-vector-quiz-and-question-marks-trivia-night-quiz-symbol-neon-sign-night-online-game-with-questions-2052894734.jpg"
          alt="Quiz Visual"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Home;