/* Name: - Vaibhav Kalia 
    Student ID: - 301385537
    Date: - 2024-09-25
    subject: - Comp229-Web Application Development*/

import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Vaibhav Kalia</h1>
        <p className="mission-statement">"“Those who cannot renounce attachment to the results of their work are far from the path.” – The Gita"</p>
      </header>

      <div className="skills-and-images">
        <section className="skills-section">
          <h2>My Technical Skills</h2>
          <ul className="skills-list">
            <li>1. JavaScript</li>
            <li>2. React</li>
            <li>3. Node.js</li>
            <li>4. CSS / HTML</li>
            <li>5. Python</li>
            <li>6. Git & GitHub</li>
          </ul>
        </section>

        <div className="images-section">
          <img src={`${process.env.PUBLIC_URL}/images/personal.png`} alt="personal" className="skill-image" />
        </div>
      </div>

      <div className="contact-button-container">
        <a href="/contact" className="contact-button">Contact Me</a>
      </div>
    </div>
  );
};

export default Home;
