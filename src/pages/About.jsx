import "../styles/About.css";
import { Link } from "react-router-dom";
import coffeeStation from "../images/drying-beds-1.jpg";
import aboutHero from "../images/about-coffee-station.jpg";
import {
  ShieldCheck,
  Award,
  Leaf,
  Handshake
} from "lucide-react";
import premiumCherries from "../images/premium-cherries.jpg";

const values = [
  {
    icon: <ShieldCheck size={34} />,
    title: "Integrity",
    description:
      "We build lasting relationships through transparency, honesty, and fair business practices with producers and buyers.",
  },
  {
    icon: <Award size={34} />,
    title: "Quality",
    description:
      "Coffee is carefully selected and prepared to meet export-quality standards.",
  },
  {
    icon: <Leaf size={34} />,
    title: "Sustainability",
    description:
      "We value responsible sourcing and long-term support for coffee-producing communities.",
  },
  {
    icon: <Handshake size={34} />,
    title: "Partnership",
    description:
      "We work with buyers as long-term partners and aim to meet their coffee requirements.",
  },
];

function About() {
  return (
    <div>
      <section className="about-hero">
  <div className="about-overlay">
    <h1>About Dancha BunAgi Export</h1>

    <p>
      The story behind Dancha BunAgi Export and our commitment to
      Ethiopian coffee excellence.
    </p>
  </div>
</section>



      <section className="about-section">
        <div className="about-grid">
        <img
  src={coffeeStation}
  alt="Dancha BunAgi Coffee Station"
  className="about-image"
/>

          <div>
            <h2 className="section-title">Our Story</h2>
            <p className="about-text">
              Dancha Buna Agi Export specializes in supplying premium washed
              Arabica coffee from the Sidama region of Ethiopia.
            </p>

            <p className="about-text">
              Through our family-based sourcing network and trusted
              relationships with coffee producers, we provide export-quality
              coffee with traceability to origin.
            </p>

            <p className="about-text">
              Our goal is to connect international coffee roasters, importers,
              and wholesalers with authentic Ethiopian coffee while building
              long-term partnerships based on quality, transparency, and
              reliability.
            </p>
          </div>
        </div>
      </section>




<section className="highlights-section">
  <div className="highlights-grid">
    <div className="highlight-card">
      <h2>20+</h2>
      <p>Years of Coffee Sourcing Experience</p>
    </div>

    <div className="highlight-card">
      <h2>2025</h2>
      <p>Export Business Established</p>
    </div>

    <div className="highlight-card">
      <h2>Sidama</h2>
      <p>Premium Arabica Coffee Origin</p>
    </div>

    <div className="highlight-card">
      <h2>G1 & G2</h2>
      <p>Export Quality Coffee Grades</p>
    </div>
  </div>
</section>




      <section className="mission-section">
  <div className="mission-grid">
    <div className="mission-card">
      <h2 className="section-title">Our Mission</h2>
      <p className="about-text">
        To deliver premium Sidama washed Arabica coffee to international buyers
        while supporting fair sourcing, responsible partnerships, and
        continuous improvement in quality.
      </p>
    </div>

    <div className="mission-card">
      <h2 className="section-title">Our Vision</h2>
      <p className="about-text">
        To become a trusted Ethiopian coffee export partner for specialty
        coffee businesses worldwide, recognized for quality, reliability,
        and direct-origin sourcing.
      </p>
    </div>
  </div>
</section>





      <section className="values-section">
  <h2 className="section-title values-title">
    Our Values
  </h2>
  <div className="values-grid">
    {values.map((value) => (
      <div className="value-card" key={value.title}>
        <div className="value-icon">
          {value.icon}
        </div>
        <h3>{value.title}</h3>
        <p>{value.description}</p>
      </div>
    ))}
  </div>
</section>




      <section className="heritage-section">
  <div className="heritage-content">
    <h2>Ethiopian Coffee Heritage</h2>
    <p>
      Ethiopia is widely known as the birthplace of coffee. The Sidama region,
      located in the southern highlands, is one of Ethiopia's most celebrated
      coffee-growing areas.
    </p>

    <p>
      High altitude, fertile soil, and traditional coffee knowledge help create
      the clean, bright, and distinctive flavor profile associated with Sidama
      washed Arabica coffee.
    </p>
  </div>
</section>
   


   
      <section className="about-cta">
  <div className="cta-overlay">
    <h2>Interested in Working With Us?</h2>

    <p>
      Contact Dancha BunAgi Export to discuss sourcing premium Ethiopian
      coffee directly from origin.
    </p>
  </div>
</section>
    </div>
  );
}



export default About;