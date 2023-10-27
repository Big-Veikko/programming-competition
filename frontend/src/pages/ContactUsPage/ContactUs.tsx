import React from 'react';
import './ContactUs.scss';
import Navbar from '../../components/navbar/Navbar';

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-page">
      <Navbar/>
      <section className="contact-section">
        <h1>Contact XploreAlumni Association</h1>
        <p>Use this form to send an email to XA</p>

        <form className="contact-form">
          <label className="label" htmlFor="name">Your Name*</label>
          <input type="text" id="name" className="input" required />

          <label className="label" htmlFor="email">Your Email*</label>
          <input type="email" id="email" className="input" required />

          <label className="label" htmlFor="phone">Your Phone Number</label>
          <input type="tel" id="phone" className="input" />



          <button className="send-button">
            Send message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
