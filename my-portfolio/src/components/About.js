/* Name: - Vaibhav Kalia 
    Student ID: - 301385537
    Date: - 2024-09-25
    subject: - Comp229-Web Application Development*/
    
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src="/images/vaibhav.jpg" alt="Vaibhav Kalia" className="animated-image" />
        </div>
        <div className="about-text animated-text">
          <h2>Vaibhav Sharma Kalia</h2>
          <p>
            As a web developer, I am passionate about making cutting-edge, responsive websites. My goal is to create digital experiences that are easy to use and address practical issues, with an emphasis on neat design and effective coding. I'm constantly excited to work on cutting-edge projects and learn new technology.
          </p>
          <p>
            India's Punjab is where I was born and raised. Playing football and cricket, and watching Formula 1 are some of my pastimes. Lewis Hamilton is my hero. I received my diploma from Punjab's Swami Sant Dass Public School in Phagwara. I'm currently enrolled in Centennial College's advanced diploma program in software engineering technology, and I plan to graduate in April 2026.
          </p>
          <a href="/Kalia_Vaibhav.pdf" target="_blank" className="resume-link">View My Resume</a>
        </div>
      </div>
    </div>
  );
};

export default About;
