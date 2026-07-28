import { Link } from "react-router-dom";
import dryingBeds1 from "../images/drying-beds-1.jpg";
import dryingBeds2 from "../images/drying-beds-2.jpg";
import aboutHero from "../images/about-coffee-station.jpg";

function Coffee() {
  return (
    <div>
      <section style={heroStyle}>
        <div style={heroOverlay}>
          <h1 style={heroTitle}>Our Coffee</h1>
          <p style={heroText}> Premium washed Arabica coffee from the Sidama region of Ethiopia.
          </p>
        </div>
      </section>

      <section style={highlightsSection}>
        <div style={highlightGrid}>
          <div style={highlightCard} className="card-hover">📍<br />Sidama<br /><span>Origin</span></div>
          <div style={highlightCard} className="card-hover">☕<br />Arabica<br /><span>Species</span></div>
          <div style={highlightCard} className="card-hover">💧<br />Washed<br /><span>Process</span></div>
          <div style={highlightCard} className="card-hover">⛰️<br />1700–2200m<br /><span>Altitude</span></div>
          <div style={highlightCard} className="card-hover">⭐<br />Export Quality<br /><span>Grade</span></div>
        </div>
      </section>

      <section style={originSection}>
        <div style={twoColumn}>
          <div>
            <h2 style={sectionTitle}>Origin: Sidama, Ethiopia</h2>
            <p style={paragraph}>
              Sidama is one of Ethiopia’s most respected coffee-producing
              regions, known for high altitude, fertile soil, consistent
              rainfall, and outstanding Arabica coffee quality.
            </p>

            <p style={paragraph}>
              Our coffee is sourced through trusted relationships with producers
              and prepared with attention to quality, traceability, and export
              standards.
            </p>
          </div>

          <img src={dryingBeds1} alt="Coffee drying beds" style={imageStyle} />
        </div>
      </section>

      <section style={specSection}>
        <h2 style={sectionTitle}>Export Coffee Specifications</h2>

        <div style={tableBox}>
          <table style={tableStyle}>
            <tbody>
  <tr><td style={cellStyle}><strong>Origin</strong></td><td style={cellStyle}>Sidama, Ethiopia</td></tr>
  <tr><td style={cellStyle}><strong>Species</strong></td><td style={cellStyle}>Arabica</td></tr>
  <tr><td style={cellStyle}><strong>Variety</strong></td><td style={cellStyle}>Ethiopian Heirloom Varieties</td></tr>
  <tr><td style={cellStyle}><strong>Processing</strong></td><td style={cellStyle}>Fully Washed</td></tr>
  <tr><td style={cellStyle}><strong>Grade</strong></td><td style={cellStyle}>G1 & G2</td></tr>
  <tr><td style={cellStyle}><strong>Screen Size</strong></td><td style={cellStyle}>14+ / 15+</td></tr>
  <tr><td style={cellStyle}><strong>Moisture Content</strong></td><td style={cellStyle}>11.5% – 12%</td></tr>
  <tr><td style={cellStyle}><strong>Altitude</strong></td><td style={cellStyle}>1700–2200 m.a.s.l.</td></tr>
  <tr><td style={cellStyle}><strong>Harvest Season</strong></td><td style={cellStyle}>October – February</td></tr>
  <tr><td style={cellStyle}><strong>Cup Profile</strong></td><td style={cellStyle}>Bright acidity, floral aroma, citrus notes, clean finish</td></tr>
</tbody>
          </table>
        </div>
      </section>

      <section style={flavorSection}>
        <div style={twoColumn}>
          <img src={dryingBeds2} alt="Coffee processing" style={imageStyle} />

          <div>
            <h2 style={sectionTitle}>Flavor Profile</h2>
            <p style={paragraph}>
              Sidama washed Arabica coffee is known for its clean cup profile,
              bright acidity, floral aroma, citrus notes, and smooth finish.
            </p>

            <ul style={listStyle}>
              <li>Bright acidity</li>
              <li>Floral aroma</li>
              <li>Citrus character</li>
              <li>Clean cup</li>
              <li>Smooth finish</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={qualitySection}>
        <h2 style={sectionTitle}>Quality Assurance</h2>

        <div style={qualityGrid}>
          <div style={qualityCard} className="card-hover">✅<h3>Traceable Origin</h3><p>Coffee sourced from Sidama with origin focus.</p></div>
          <div style={qualityCard} className="card-hover">☕<h3>Careful Processing</h3><p>Washed Arabica prepared for export buyers.</p></div>
          <div style={qualityCard} className="card-hover">📦<h3>Sample Support</h3><p>Sample requests can be discussed before orders.</p></div>
          <div style={qualityCard} className="card-hover">🚢<h3>Export Preparation</h3><p>Support for quality and shipment preparation.</p></div>
        </div>
      </section>

      <section style={ctaStyle}>
        <h2>Interested in Our Coffee?</h2>
        <p>
          Request samples, specifications, or pricing information for premium
          Sidama washed Arabica coffee.
        </p>

        <Link to="/contact">
          <button style={buttonStyle}>Request a Quote</button>
        </Link>
      </section>
    </div>
  );
}

const heroStyle = {
  backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${aboutHero})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "white",
  textAlign: "center",
  padding: "180px 20px",
};
const heroOverlay = {
  background: "rgba(0, 0, 0, 0.45)",
  padding: "70px 40px",
  borderRadius: "15px",
};

const heroTitle = {
  fontSize: "60px",
  marginBottom: "20px",
  
};


const heroText = {
  fontSize: "22px",
  maxWidth: "800px",
  textAlign: "center",
  margin: "0 auto",
  lineHeight: "1.6",
};

const highlightsSection = {
  padding: "50px 20px",
  background: "#f8f8f8",
};

const highlightGrid = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "20px",
};

const highlightCard = {
  background: "white",
  padding: "25px",
  textAlign: "center",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  fontSize: "22px",
  fontWeight: "bold",
  color: "#4b2e1e",
};

const originSection = {
  padding: "90px 20px",
  background: "#ffffff",
};

const twoColumn = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "50px",
  alignItems: "center",
};

const sectionTitle = {
  fontSize: "42px",
  color: "#4b2e1e",
  marginBottom: "30px",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.8",
};

const imageStyle = {
  width: "100%",
  height: "420px",
  objectFit: "cover",
  borderRadius: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
};

const specSection = {
  padding: "90px 20px",
  background: "linear-gradient(135deg, #fff7e6 0%, #eef5ea 100%)",
  textAlign: "center",
};

const tableBox = {
  maxWidth: "800px",
  margin: "0 auto",
  background: "white",
  borderRadius: "15px",
  overflow: "hidden",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  border: "1px solid #eee",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const cellStyle = {
  padding: "18px",
  borderBottom: "1px solid #eee",
  textAlign: "left",
};

const flavorSection = {
  padding: "90px 20px",
  background: "#ffffff",
};

const listStyle = {
  fontSize: "18px",
  lineHeight: "2",
};

const qualitySection = {
  padding: "90px 20px",
  background: "#f8f8f8",
  textAlign: "center",
};

const qualityGrid = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px",
};

const qualityCard = {
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
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

export default Coffee;