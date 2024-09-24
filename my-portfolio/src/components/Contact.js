import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the transition after the component is mounted
    setIsLoaded(true);
  }, []);

  return (
    <div className={`contact-body ${isLoaded ? 'fade-in' : ''}`}>
      <div className="contact-container">
        <div className="contact-info">
          <p>Email: vaibhav@example.com</p>
          <p>Phone: +91-1234567890</p>
        </div>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
