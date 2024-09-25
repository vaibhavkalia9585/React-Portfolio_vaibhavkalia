/* Name: - Vaibhav Kalia 
    Student ID: - 301385537
    Date: - 2024-09-25
    subject: - Comp229-Web Application Development*/


import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-list">
        <div className="project-item">
          <img 
            src={`${process.env.PUBLIC_URL}/images/weather.jpg`} 
            alt="Project 1" 
            className="project-image" 
          />
          <h2>Weather application</h2>
          <p>I have created a weather application when i was in high school. This weather application provides users with real-time weather updates and forecasts for any location worldwide. It features an intuitive user interface that allows users to search for cities, view current weather conditions, and access a detailed forecast for the coming days. </p>
        </div>
        <div className="project-item">
          <img 
            src={`${process.env.PUBLIC_URL}/images/coffeeApp.jpg`} 
            alt="Project 2" 
            className="project-image" 
          />
          <h2>Coffee Shop mobile application</h2>
          <p>Working as a barista in my pastimes, i tried to help my employers by creating a mobile application that helps them to accept orders online now.</p>
        </div>
        <div className="project-item">
        <img 
            src={`${process.env.PUBLIC_URL}/images/to do list.png`} 
            alt="Project 3" 
            className="project-image" 
          />
          <h2>To-Do list application</h2>
          <p>There are a lot of to do list applications available but i needed somthing that completely understands what i require. I created this application to link it directly to my college time-table and my workplace schedule.
            Any new activity that i add to my time-table or my workplace schedule is automatically added to my to-do list.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
