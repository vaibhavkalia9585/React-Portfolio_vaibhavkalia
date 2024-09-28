/* Name: - Vaibhav Kalia 
    Student ID: - 301385537
    Date: - 2024-09-25
    subject: - Comp229-Web Application Development*/
import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`contact-body ${isLoaded ? 'fade-in' : ''}`}>
      <div className="contact-container">
        <div className="contact-info">
          <p>Email: ivaibhavkalia@gmail.com</p>
          <p>Phone: +1(289)395-2714</p>
        </div>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Your phone number" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;
