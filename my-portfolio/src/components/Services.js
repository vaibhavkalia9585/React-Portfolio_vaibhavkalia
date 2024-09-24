import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h2>My Services</h2>
      <div className="services-list">
        <div className="service-item">
          <img src={`${process.env.PUBLIC_URL}/images/Wevdev.jpg`} alt="Web Development" />
          <h3>Web Development</h3>
          <p>Building responsive and engaging websites using the latest web technologies.</p>
          <p>Charges: - $500-$3500 depending upon the project size.</p>
        </div>
        <div className="service-item">
          <img src={`${process.env.PUBLIC_URL}/images/Mobiledev.jpg`} alt="Mobile Apps" />
          <h3>Mobile Apps</h3>
          <p>Creating cross-platform mobile applications that provide seamless user experiences.</p>
          <p>Charges: - $3500-$9500 depending upon the project size.</p>
        </div>
        <div className="service-item">
          <img src={`${process.env.PUBLIC_URL}/images/gendev.jpg`} alt="Programming" />
          <h3>General Programming</h3>
          <p>Offering software development and programming services across various languages.</p>
          <p>Charges: - $1500 (fixed charge) </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
