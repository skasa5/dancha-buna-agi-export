import "../styles/Contact.css";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Clock3 } from "lucide-react";

function Contact() {
  return (
    <div>
      <section className="contact-hero">
        <div className="contact-overlay">
          <div className="gold-line"></div>
          <h1>Contact Us</h1>

          <p>
            Get in touch with Dancha BunAgi Export to discuss your coffee needs.
          </p>
        </div>
      </section>



      <section className="contact-cards">
        <div className="contact-card">
          <Mail className="contact-icon" />
          <h3>Email</h3>

          <a
            href="mailto:info@danchabuna.com"
            className="contact-link">
            info@danchabuna.com
          </a>
        </div>

        <div className="contact-card">
          <Phone className="contact-icon" />
          <h3>WhatsApp</h3>

          <a
            href="https://wa.me/447412659033"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link">
            +44 7412 659033
          </a>
        </div>

        <div className="contact-card">
          <MapPin className="contact-icon" />
          <h3>Location</h3>
          <p>Hawassa Sidama, Ethiopia</p></div>

        <div className="contact-card">
          <Clock3 className="contact-icon" />
          <h3>Business Hours</h3>

          <p>Monday – Friday<br />9:00 AM – 5:00 PM (EAT)</p></div>
      </section>


      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="gold-line"></div>
          <h2 className="section-title">
            Request a Quote
          </h2>

          <p className="section-text">
            Looking for premium Ethiopian Arabica coffee? Fill out the form below and
            we'll get back to you as soon as possible.
          </p>

          <form className="contact-form">
            <input
              className="form-input"
              type="text"
              placeholder="Full Name" />

            <input
              className="form-input"
              type="text"
              placeholder="Company Name" />

            <input
              className="form-input"
              type="text"
              placeholder="Country" />

            <input
              className="form-input"
              type="email"
              placeholder="Email Address" />

            <input
              className="form-input"
              type="text"
              placeholder="Phone Number" />

            <select className="form-input">
              <option>Coffee Requirement</option>
              <option>Washed Arabica Coffee</option>
              <option>Sample Request</option>
              <option>Export Partnership</option>
            </select>


            <textarea
              className="form-textarea"
              placeholder="Tell us about your coffee requirements..."
            ></textarea>
            <button className="contact-button">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}


export default Contact;