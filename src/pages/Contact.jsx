function Contact() {
  return (
    <div>
      <section style={heroStyle}>
        <h1>Contact Us</h1>
        <p>Get in touch with Dancha BunAgi Export to discuss your coffee needs.</p>
      </section>

      <section style={contactCardsSection}>
        <div style={contactCard}>📧<h3>Email</h3><p>info@danchabuna.com</p></div>
        <div style={contactCard}>📞<h3>WhatsApp</h3><p>+44 7412 659033</p></div>
        <div style={contactCard}>📍<h3>Origin</h3><p>Sidama, Ethiopia</p></div>
      </section>

      <section style={formSection}>
        <h2>Request a Quote</h2>

        <form style={formStyle}>
          <input style={inputStyle} type="text" placeholder="Full Name" />
          <input style={inputStyle} type="text" placeholder="Company Name" />
          <input style={inputStyle} type="text" placeholder="Country" />
          <input style={inputStyle} type="email" placeholder="Email Address" />
          <input style={inputStyle} type="text" placeholder="Phone Number" />

          <select style={inputStyle}>
            <option>Coffee Requirement</option>
            <option>Washed Arabica Coffee</option>
            <option>Green Coffee Beans</option>
            <option>Sample Request</option>
            <option>Export Partnership</option>
          </select>

          <textarea
            style={textareaStyle}
            placeholder="Tell us about your coffee requirements..."
          />

          <button style={buttonStyle}>Send Enquiry</button>
        </form>
      </section>
    </div>
  );
}

const heroStyle = {
  background: "#4b2e1e",
  color: "white",
  textAlign: "center",
  padding: "120px 20px",
};

const contactCardsSection = {
  display: "flex",
  justifyContent: "center",
  gap: "25px",
  flexWrap: "wrap",
  padding: "60px 20px",
  background: "#f8f8f8",
};

const contactCard = {
  background: "white",
  width: "260px",
  padding: "30px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  fontSize: "18px",
};

const formSection = {
  maxWidth: "800px",
  margin: "70px auto",
  padding: "40px",
  background: "white",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
};

const formStyle = {
  display: "grid",
  gap: "18px",
};

const inputStyle = {
  padding: "15px",
  fontSize: "16px",
  border: "1px solid #ddd",
  borderRadius: "8px",
};

const textareaStyle = {
  ...inputStyle,
  minHeight: "150px",
};

const buttonStyle = {
  background: "#d4a017",
  color: "white",
  border: "none",
  padding: "16px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
};

export default Contact;