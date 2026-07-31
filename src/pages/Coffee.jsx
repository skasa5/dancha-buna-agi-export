import "../styles/Coffee.css";
import { Link } from "react-router-dom";
import dryingBeds1 from "../images/origin-drying-station.jpg";
import dryingBeds2 from "../images/cta-coffee.jpg";
import aboutHero from "../images/about-coffee-station.jpg";
import {
  MapPin,
  Coffee as CoffeeIcon,
  Droplets,
  Mountain,
  Award,
  ShieldCheck,
  Package,
  Ship,
} from "lucide-react";
function Coffee() {
  return (
    <div>
      <section className="coffee-hero">
        <div className="coffee-overlay">
          <h1>Our Coffee</h1>
          <p>
            Premium washed Arabica coffee from the Sidama region of Ethiopia.
          </p>
        </div>
      </section>



      <section className="coffee-highlights">
        <div className="highlights-grid">
          <div className="highlight-card">
            <MapPin className="highlight-icon" />
            <h3>Sidama</h3>
            <span>Origin</span>
          </div>

          <div className="highlight-card">
            <CoffeeIcon className="highlight-icon" />
            <h3>Arabica</h3>
            <span>Species</span>
          </div>

          <div className="highlight-card">
            <Droplets className="highlight-icon" />
            <h3>Washed</h3>
            <span>Process</span>
          </div>

          <div className="highlight-card">
            <Mountain className="highlight-icon" />
            <h3>1700–2200 m</h3>
            <span>Altitude</span>
          </div>

          <div className="highlight-card">
            <Award className="highlight-icon" />
            <h3>Grade 1 & 2</h3>
            <span>Export Quality</span>
          </div>
        </div>
      </section>




      <section className="coffee-origin">
        <div className="coffee-grid">
          <div>
            <h2 className="section-title">Origin: Sidama, Ethiopia</h2>
            <p className="section-text">
              Sidama is one of Ethiopia’s most respected coffee-producing
              regions, known for high altitude, fertile soil, consistent
              rainfall, and outstanding Arabica coffee quality.
            </p>

            <p className="section-text">
              Our coffee is sourced through trusted relationships with producers
              and prepared with attention to quality, traceability, and export
              standards.
            </p>
          </div>

          <img src={dryingBeds1} alt="Coffee drying beds" className="coffee-image" />
        </div>
      </section>


      <section className="spec-section">
        <div className="spec-container">
          <div className="gold-line"></div>
          <h2 className="section-title">Export Coffee Specifications</h2>
          <div className="table-wrapper">

            <table className="spec-table">

              <tbody>
                <tr><td><strong>Origin</strong></td><td>Sidama, Ethiopia</td></tr>
                <tr><td><strong>Species</strong></td><td>Arabica</td></tr>
                <tr><td><strong>Variety</strong></td><td>Ethiopian Heirloom Varieties</td></tr>
                <tr><td><strong>Processing</strong></td><td>Fully Washed</td></tr>
                <tr><td><strong>Grade</strong></td><td>G1 & G2</td></tr>
                <tr><td><strong>Screen Size</strong></td><td>14+ / 15+</td></tr>
                <tr><td><strong>Moisture Content</strong></td><td>11.5% – 12%</td></tr>
                <tr><td><strong>Altitude</strong></td><td>1700–2200 m.a.s.l.</td></tr>
                <tr><td><strong>Harvest Season</strong></td><td>October – February</td></tr>
                <tr><td><strong>Cup Profile</strong></td><td>Bright acidity, floral aroma, citrus notes, clean finish</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


      <section className="flavor-section">
        <div className="coffee-grid">
          <img src={dryingBeds2} alt="Coffee processing" className="coffee-image" />
          <div>

            <div className="gold-line"></div>
            <h2 className="section-title">
              Flavor Profile
            </h2>

            <p className="section-text">
              Sidama washed Arabica coffee is known for its clean cup profile,
              bright acidity, floral aroma, citrus notes, and smooth finish.
            </p>

            <ul className="flavor-list">
              <li>Bright acidity</li>
              <li>Floral aroma</li>
              <li>Citrus character</li>
              <li>Clean cup</li>
              <li>Smooth finish</li>
            </ul>
          </div>
        </div>
      </section>



      <section className="quality-section">

        <div className="quality-container">

          <div className="gold-line"></div>

          <h2 className="section-title">
            Quality Assurance
          </h2>

          <div className="quality-grid">

            <div className="quality-card">
              <ShieldCheck className="quality-icon" />
              <h3>Traceable Origin</h3>
              <p>Coffee sourced from Sidama with origin focus.</p>
            </div>

            <div className="quality-card">
              <CoffeeIcon className="quality-icon" />
              <h3>Careful Processing</h3>
              <p>Washed Arabica prepared for export buyers.</p>
            </div>

            <div className="quality-card">
              <Package className="quality-icon" />
              <h3>Sample Support</h3>
              <p>Sample requests can be discussed before orders.</p>
            </div>

            <div className="quality-card">
              <Ship className="quality-icon" />
              <h3>Export Preparation</h3>
              <p>Support for quality and shipment preparation.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="coffee-cta">
        <div className="cta-overlay">
          <div className="gold-line"></div>
          <h2> Ready to Source Premium Ethiopian Coffee?</h2>

          <p>
            We welcome inquiries from coffee importers, roasters, and distributors
            looking for premium washed Arabica coffee from the Sidama region of Ethiopia.
          </p>

        </div>
      </section>
    </div>
  );
}



export default Coffee;