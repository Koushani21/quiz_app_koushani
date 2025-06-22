
import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>🎯 About This Quiz App</h1>

      
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ebxI3YHH2PKN2pl0qVph8uwex7A3Qd-HmQ&s" 
        alt="Quiz Illustration"
        className="about-main-image"
      />

      <p>
        Welcome to the React Quiz App! This project was built as part of the 
        <strong> KTJ Web Development Workshop Assignment 3. It was built by KOUSHANI CHANDRA.</strong>
        It's a fun, interactive way to test our knowledge across various topics.
      </p>

      <h2>🛠 Technologies Used</h2>
      <ul>
        <li><strong>ReactJS</strong> – For building a dynamic and interactive UI</li>
        <li><strong>JavaScript</strong> – To handle quiz logic and localStorage</li>
        <li><strong>CSS</strong> – For styling and animations</li>
        <li><strong>LocalStorage</strong> – To save leaderboard scores</li>
      </ul>

      <h2>📚 What I Learned</h2>
      <ul>
        <li>Creating components and managing state in React</li>
        <li>Routing between pages using <code>react-router-dom</code></li>
        <li>Using localStorage to persist data</li>
        <li>Creating interactive UI with animations and effects</li>
        <li>Debugging and breaking down complex UI flows</li>
      </ul>

      <p style={{ marginTop: "2rem" }}>
        Thanks for checking this out! 😊 Hope you had as much fun taking the quiz as I had building it! 
        <strong>Created by Koushani Chandra @2025.Thank You! </strong>
        
      </p>
    </div>
  );
};

export default AboutPage;
