import React from "react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me using any of the methods below:</p>

      <div className="contact-card">
        <FaEnvelope className="icon" />
        <span>Email: </span>
        <a href="mailto:bharathyadav.g99@gmail.com">bharathyadav.g99@gmail.com</a>
      </div>

      <div className="contact-card">
        <FaPhoneAlt className="icon" />
        <span>Phone: </span>
        <a href="tel:+919347038048">+91 9347038048</a>
      </div>

      <div className="contact-card">
        <FaGithub className="icon" />
        <span>GitHub: </span>
        <a href="https://github.com/Bharath-9347" target="_blank" rel="noopener noreferrer">
          github.com/Bharath-9347
        </a>
      </div>

      <div className="contact-card">
        <FaLinkedin className="icon" />
        <span>LinkedIn: </span>
        <a
          href="https://www.linkedin.com/in/bharath-golla-002145325/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/bharath-golla-002145325
        </a>
      </div>
    </div>
  );
}

export default Contact;
