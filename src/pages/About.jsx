import { Link } from "react-router-dom";
import coffeeStation from "../images/drying-beds-1.jpg";
import aboutHero from "../images/about-coffee-station.jpg";
const values = [
  {
    icon: "♡",
    title: "Integrity",
    description:
      "We build lasting relationships through transparency, honesty, and fair business practices with producers and buyers.",
  },
  {
    icon: "◎",
    title: "Quality",
    description:
      "Coffee is carefully selected and prepared to meet export-quality standards.",
  },
  {
    icon: "◉",
    title: "Sustainability",
    description:
      "We value responsible sourcing and long-term support for coffee-producing communities.",
  },
  {
    icon: "👥",
    title: "Partnership",
    description:
      "We work with buyers as long-term partners and aim to meet their coffee requirements.",
  },
];

function About() {
  return (
    <div>
      <section style={heroStyle}>
        <h1 style={{ fontSize: "56px" }}>About Us</h1>
        <p style={{ fontSize: "20px" }}>
          The story behind Dancha BunAgi Export and our commitment to
          Ethiopian coffee excellence.
        </p>
      </section>

      <section style={sectionStyle}>
        <div style={twoColumn}>
        <img
  src={coffeeStation}
  alt="Dancha BunAgi Coffee Station"
  style={imageStyle}
/>

          <div>
            <h2 style={headingStyle}>Our Story</h2>

            <p style={paragraphStyle}>
              Dancha Buna Agi Export specializes in supplying premium washed
              Arabica coffee from the Sidama region of Ethiopia.
            </p>

            <p style={paragraphStyle}>
              Through our family-based sourcing network and trusted
              relationships with coffee producers, we provide export-quality
              coffee with traceability to origin.
            </p>

            <p style={paragraphStyle}>
              Our goal is to connect international coffee roasters, importers,
              and wholesalers with authentic Ethiopian coffee while building
              long-term partnerships based on quality, transparency, and
              reliability.
            </p>
          </div>
        </div>
      </section>

<section style={{ padding: "80px 20px", background: "#f8f3eb" }}>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "30px",
      textAlign: "center",
    }}
  >
    <div>
      <h2 style={{ fontSize: "48px", color: "#d4a017" }}>20+</h2>
      <p>Years of Coffee Sourcing Experience</p>
    </div>

    <div>
      <h2 style={{ fontSize: "48px", color: "#d4a017" }}>2025</h2>
      <p>Export Business Established</p>
    </div>

    <div>
      <h2 style={{ fontSize: "48px", color: "#d4a017" }}>Sidama</h2>
      <p>Premium Arabica Coffee Origin</p>
    </div>

    <div>
      <h2 style={{ fontSize: "48px", color: "#d4a017" }}>G1 & G2</h2>
      <p>Export Quality Coffee Grades</p>
    </div>
  </div>
</section>


      <section style={{ ...sectionStyle, background: "#f8f3eb" }}>
        <div style={missionGrid}>
          <div style={cardStyle}>
            <h2 style={headingStyle}>Our Mission</h2>
            <p style={paragraphStyle}>
              To deliver premium Sidama washed Arabica coffee to international
              buyers while supporting fair sourcing, responsible partnerships,
              and continuous improvement in quality.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={headingStyle}>Our Vision</h2>
            <p style={paragraphStyle}>
              To become a trusted Ethiopian coffee export partner for specialty
              coffee businesses worldwide, recognized for quality, reliability,
              and direct-origin sourcing.
            </p>
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyle, background: "#f8f3eb" }}>
  <h2 style={{ ...headingStyle, textAlign: "center" }}>Our Values</h2>

        <div style={valueGrid}>
          {values.map((value) => (
            <div key={value.title} style={valueCard}>
              <div style={iconCircle}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={heritageStyle}>
        <h2 style={{ fontSize: "40px" }}>Ethiopian Coffee Heritage</h2>

        <p style={heritageParagraph}>
          Ethiopia is widely known as the birthplace of coffee. The Sidama
          region, located in the southern highlands, is one of Ethiopia's most
          celebrated coffee-growing areas.
        </p>

        <p style={heritageParagraph}>
          High altitude, fertile soil, and traditional coffee knowledge help
          create the clean, bright, and distinctive flavor profile associated
          with Sidama washed Arabica coffee.
        </p>
      </section>

      <section style={ctaStyle}>
        <h2>Interested in Working With Us?</h2>
        <p>
          Contact Dancha BunAgi Export to discuss sourcing premium Ethiopian
          coffee directly from origin.
        </p>

        <Link to="/contact">
          <button style={buttonStyle}>Contact Us</button>
        </Link>
      </section>
    </div>
  );
}

const heroStyle = {
  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aboutHero})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "white",
  textAlign: "center",
  padding: "180px 20px",
};

const sectionStyle = {
  padding: "80px 20px",
  background: "#ffffff",
};
const twoColumn = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "40px",
  alignItems: "center",
};

const imageStyle = {
  width: "100%",
  height: "450px",
  objectFit: "cover",
  borderRadius: "15px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
};

const headingStyle = {
  fontSize: "42px",
  color: "#4b2e1e",
  fontWeight: "700",
  lineHeight: "1.2",
  marginBottom: "25px",
};

const paragraphStyle = {
  fontSize: "19px",
  lineHeight: "1.9",
  color: "#555",
  textAlign: "justify",
  marginBottom: "20px",
};
const missionGrid = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
};

const cardStyle = {
  background: "white",
  padding: "35px",
  borderRadius: "15px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
};

const valueGrid = {
  maxWidth: "1200px",
  margin: "50px auto 0",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "30px",
};

const valueCard = {
  textAlign: "center",
  padding: "25px",
};

const iconCircle = {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  background: "#f4ead7",
  color: "#d4a017",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "32px",
  margin: "0 auto 20px",
};

const heritageStyle = {
  background: "#4b2e1e",
  color: "white",
  textAlign: "center",
  padding: "30px 20px",
};

const heritageParagraph = {
  maxWidth: "900px",
  margin: "20px auto",
  fontSize: "18px",
  lineHeight: "1.8",
};

const ctaStyle = {
  background: "#245b1f",
  color: "white",
  textAlign: "center",
  padding: "30px 20px",
};

const buttonStyle = {
  background: "#d4a017",
  color: "white",
  border: "none",
  padding: "15px 30px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "18px",
};

export default About;