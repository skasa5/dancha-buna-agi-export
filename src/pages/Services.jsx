import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <section style={heroStyle}>
        <h1>Export Services</h1>
        <p>Supporting coffee buyers from sourcing to shipment.</p>
      </section>

      <section style={servicesSection}>
        <h2 style={sectionTitle}>What We Offer</h2>

        <div style={serviceGrid}>
          <div style={serviceCard} className="card-hover">
            <h3>☕ Coffee Sourcing</h3>
            <p>Direct sourcing of premium washed Arabica coffee from Sidama.</p>
          </div>

          <div style={serviceCard} className="card-hover">
            <h3>✅ Quality Inspection</h3>
            <p>Careful selection and quality checks before export preparation.</p>
          </div>

          <div style={serviceCard} className="card-hover">
            <h3>📦 Sample Preparation</h3>
            <p>Support for sample requests before larger purchase decisions.</p>
          </div>

          <div style={serviceCard} className="card-hover">
            <h3>📄 Export Documentation</h3>
            <p>Assistance with export documentation and shipment preparation.</p>
          </div>

          <div style={serviceCard} className="card-hover">
            <h3>🚢 Logistics Coordination</h3>
            <p>Coordination of transport and export processes for buyers.</p>
          </div>

          <div style={serviceCard} className="card-hover">
            <h3>🤝 Buyer Support</h3>
            <p>Clear communication throughout the sourcing and export process.</p>
          </div>
        </div>
      </section>

      <section style={whySection}>
        <h2 style={sectionTitle}>Why Choose Dancha Buna Agi Export?</h2>

        <div style={serviceGrid}>
          <div style={serviceCard} className="card-hover">
            <h3>🌱 Direct Sourcing</h3>
            <p>
              We work closely with coffee producers in Sidama to support
              traceability, quality, and consistency.
            </p>
          </div>

          <div style={serviceCard} className="card-hover">
            <h3>☕ Premium Arabica Coffee</h3>
            <p>
              Carefully selected washed Arabica coffee with the unique character
              of Sidama.
            </p>
          </div>

          <div style={serviceCard} className="card-hover">
            <h3>📄 Export Support</h3>
            <p>
              Support with export documentation, quality preparation, and buyer
              requirements.
            </p>
          </div>

          <div style={serviceCard} className="card-hover">
            <h3>🚢 Reliable Logistics</h3>
            <p>
              Coordination of export shipments and communication throughout the
              sourcing process.
            </p>
          </div>
        </div>
      </section>

      <section style={ctaStyle}>
        <h2>Ready to Discuss Coffee Export?</h2>
        <p>
          Contact Dancha Buna Agi Export to discuss samples, pricing, and export
          requirements.
        </p>

        <Link to="/contact">
          <button style={buttonStyle}>Request a Quote</button>
        </Link>
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

const servicesSection = {
  padding: "90px 20px",
  background: "#ffffff",
};

const sectionTitle = {
  textAlign: "center",
  fontSize: "42px",
  color: "#4b2e1e",
  marginBottom: "50px",
};

const serviceGrid = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
};

const serviceCard = {
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  textAlign: "center",
  transition: "all 0.3s ease",
  cursor: "pointer",
};

const whySection = {
  padding: "100px 20px",
  background: "linear-gradient(135deg, #fff7e6 0%, #eef5ea 100%)",
};

const ctaStyle = {
  background: "#245b1f",
  color: "white",
  textAlign: "center",
  padding: "80px 20px",
};

const buttonStyle = {
  background: "#d4a017",
  color: "white",
  border: "none",
  padding: "15px 30px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
};

export default Services;