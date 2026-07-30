import { MapPin, Coffee, Droplets, Mountain, Award, MessageSquare, FlaskConical, Handshake, PackageCheck, Ship, Sprout, Flower2, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import dryingBeds1 from "../images/drying-beds-1.jpg";
import dryingBeds2 from "../images/drying-beds-2.jpg";
import homeHero from "../images/forest-home-hero.jpg";
import redCoffee from "../images/red-coffee-cherries.jpg";
import washedCoffee from "../images/washed-coffee-drying.jpg";
import naturalCoffee from "../images/natural-coffee-drying.jpg";


import originCherries from "../images/origin-cherries.jpg";
import originSorting from "../images/origin-sorting.jpg";
import originWashing from "../images/origin-washing.jpg";
import originDryingStation from "../images/origin-drying-station.jpg";
import originLandscape from "../images/origin-landscape.jpg";
import originQualityDrying from "../images/origin-quality-drying.jpg";
import bean_1 from "../images/bean_1.jpg";
import ctaCoffee from "../images/cta-coffee.jpg";
/*hero section*/

function Home() {
  return (
    <div>
      <section style={heroStyle}>
        <div style={heroOverlay}>
          <p style={heroSubtitle}>  Premium Ethiopian Arabica Coffee  </p>
          <h1 style={heroTitle}>From Ethiopian Highlands to the  World</h1>
          <h2 style={heroSubtitle}>Direct from Sidama to Global Buyers</h2>
          <p style={heroText}>
            Traceable, export-quality Ethiopian Arabica coffee sourced through
            trusted producer partnerships and prepared for international coffee buyers.
          </p>

          <Link to="/contact">
            <button style={buttonStyle}>Request a Quote</button> </Link>


          <section style={{ padding: "80px 20px", background: "rgba(248, 243, 235, 0)" }}>
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
                <h2 style={{ fontSize: "32px", color: "#d4a017" }}>20+</h2> <p>Years of Coffee Sourcing Experience, </p></div>

              <div>
                <h2 style={{ fontSize: "32px", color: "#d4a017" }}>2025</h2> <p>Export Business Established</p></div>

              <div>
                <h2 style={{ fontSize: "32px", color: "#d4a017" }}>Sidama</h2> <p>Premium Arabica Coffee Origin</p> </div>

              <div>
                <h2 style={{ fontSize: "32px", color: "#d4a017" }}>G1 & G2</h2> <p>Export Quality Coffee Grades</p> </div>
            </div>
          </section>
        </div>
      </section>




      <section style={highlightsSection}>
        <div style={highlightGrid}>
          <div style={highlightCard} className="card-hover">
            <MapPin size={34} color="#C89B3C" strokeWidth={1.8} />
            <h3 style={highlightValue}>Sidama, Ethiopia</h3>
            <p style={highlightLabel}>Origin</p>
          </div>

          <div style={highlightCard} className="card-hover">
            <Coffee size={34} color="#C89B3C" strokeWidth={1.8} />
            <h3 style={highlightValue}>Arabica</h3>
            <p style={highlightLabel}>Coffee Species</p>
          </div>

          <div style={highlightCard} className="card-hover">
            <Droplets size={34} color="#C89B3C" strokeWidth={1.8} />
            <h3 style={highlightValue}>Washed</h3>
            <p style={highlightLabel}>Processing</p>
          </div>

          <div style={highlightCard} className="card-hover">
            <Mountain size={34} color="#C89B3C" strokeWidth={1.8} />
            <h3 style={highlightValue}>1700–2200 m</h3>
            <p style={highlightLabel}>Growing Altitude</p>
          </div>

          <div style={highlightCard} className="card-hover">
            <Award size={34} color="#C89B3C" strokeWidth={1.8} />
            <h3 style={highlightValue}>Grade 1 & Grade 2</h3>
            <p style={highlightLabel}>Export Quality</p>
          </div>

        </div>
      </section>



      <section style={nameSection}>
        <div style={storyBox}>
          <h2 style={sectionTitle}>More Than a Name</h2>
          <p style={brandSubtitle}> Dancha BunAgi </p>
          <p style={nameIntro}>
            Inspired by the language, culture, and coffee heritage of Ethiopia's
            Sidama Highlands.
          </p>
          {/* Dancha */}
          <div style={nameItem}>
            <h3 style={nameTitle}>☕ Dancha<span style={meaningInline}> — "Good" or "Excellent"</span></h3>
            <p style={nameText}>
              In the Sidama language, <strong>Dancha</strong> represents quality,
              excellence, and a positive experience. It reflects the standard we
              strive to achieve in every coffee we export.
            </p>
          </div>
          {/* Buna */}
          <div style={nameItem}>
            <h3 style={nameTitle}>🌿 Buna <span style={meaningInline}> — "coffee"</span></h3>
            <p style={nameText}>
              <strong>Buna</strong> is the Amharic word for coffee, honouring
              Ethiopia's rich coffee heritage as the birthplace of Arabica coffee.
            </p>
          </div>
          {/* Agi */}
          <div style={nameItem}>
            <h3 style={nameTitle}>🍃 Agi<span style={meaningInline}> — "Drink"</span></h3>
            <p style={nameText}>
              In the Sidama language, <strong>Agi</strong> means drink, completing
              the meaning behind our brand.
            </p>
          </div>
          <div style={meaningBox}>
            <div style={goldLine}></div>
            <h2 style={meaningTitle}>
              "Drink Good Coffee"
            </h2>
            <div style={goldLine}></div>
            <p style={meaningText}>
              Together, <strong>Dancha BunAgi</strong> means
              <strong> "Drink Good Coffee."</strong>
              <br /><br />
              More than a name, it reflects our commitment to delivering exceptional
              Ethiopian Arabica coffee while building trusted, long-term partnerships
              with coffee roasters, importers, and wholesalers around the world. </p>
          </div>
        </div>
      </section>


      <section style={originSection}>
        <h2 style={sectionTitle}>Our Coffee Journey at Origin</h2>
        <p style={originIntro}>
          <p style={originIntro}>Every coffee bean follows a carefully managed journey through Ethiopia's Sidama Highlands—from hand harvesting and traditional washed processing to export-ready preparation for international buyers.</p>
        </p>

        <div style={galleryGrid}>
          <div style={journeyCard} className="card-hover">
            <img src={originCherries} alt="Handpicked Coffee Cherries" style={galleryImage} />
            <div style={journeyText}>





              <h3 style={{ fontSize: "22px", color: "#C89B3C", marginBottom: "15px", fontWeight: "600", }}>
                Hand Harvesting</h3>
              <p>Only fully ripe coffee cherries are carefully hand-picked to ensure consistent quality and flavour from the very beginning of the journey.</p>
            </div>
          </div>

          <div style={journeyCard} className="card-hover">
            <img src={originSorting} alt="Careful Manual Sorting" style={galleryImage} />
            <div style={journeyText}>
              <h3 style={{ fontSize: "22px", color: "#C89B3C", marginBottom: "15px", fontWeight: "600", }}>
                Careful Manual Sorting</h3>
              <p> Workers sort coffee carefully to support consistent quality.</p>
            </div>
          </div>

          <div style={journeyCard} className="card-hover">
            <img src={originWashing} alt="Traditional Washed Processing" style={galleryImage} />
            <div style={journeyText}>
              <h3 style={{ fontSize: "22px", color: "#C89B3C", marginBottom: "15px", fontWeight: "600", }}>
                Traditional Washed Processing</h3>
              <p>Traditional washed processing enhances clarity, brightness, and the distinctive flavour profile of Sidama Arabica coffee.</p>
            </div>
          </div>

          <div style={journeyCard} className="card-hover">
            <img src={originDryingStation} alt="Raised Drying Beds" style={galleryImage} />
            <div style={journeyText}>
              <h3 style={{ fontSize: "22px", color: "#C89B3C", marginBottom: "15px", fontWeight: "600", }}>
                Raised Drying Beds</h3>
              <p>Traditional washed processing enhances clarity, brightness, and the distinctive flavour profile of Sidama Arabica coffee.</p>
            </div>
          </div>

          <div style={journeyCard} className="card-hover">
            <img src={originLandscape} alt="Sidama Highlands" style={galleryImage} />
            <div style={journeyText}>
              <h3 style={{ fontSize: "22px", color: "#C89B3C", marginBottom: "15px", fontWeight: "600", }}>
                Sidama Highlands</h3>
              <p>The fertile soils and high elevations of Sidama create the ideal environment for producing exceptional Arabica coffee.</p>
            </div>
          </div>

          <div style={journeyCard} className="card-hover">
            <img src={originQualityDrying} alt="Export Quality Preparation" style={galleryImage} />
            <div style={journeyText}>
              <h3 style={{ fontSize: "22px", color: "#C89B3C", marginBottom: "15px", fontWeight: "600", }}>
                Export Quality Preparation</h3>
              <p>Every lot is inspected, prepared, and packed according to export standards before shipment to customers around the world.</p>
            </div>
          </div>
        </div>
      </section>




      <section style={processSection}>
        <h2 style={sectionTitle}>Our Export Process</h2>

        <div style={processGrid}>
          <div style={processCard} className="card-hover"><>
            <MessageSquare size={42} color="#C89B3C" strokeWidth={1.8} />
            <h3 style={processTitle}>Inquiry</h3>
          </><p>Contact us with your coffee requirements.</p></div>
          <div style={processCard} className="card-hover"><>
            <FlaskConical size={42} color="#C89B3C" strokeWidth={1.8} />
            <h3 style={processTitle}>Sample Request</h3>
          </><p>Samples can be prepared for evaluation.</p></div>
          <div style={processCard} className="card-hover"><>
            <Handshake size={42} color="#C89B3C" strokeWidth={1.8} />
            <h3 style={processTitle}>Order Confirmation</h3>
          </><p>Agree on quality, quantity, and pricing.</p></div>
          <div style={processCard} className="card-hover"><>
            <PackageCheck size={42} color="#C89B3C" strokeWidth={1.8} />
            <h3 style={processTitle}>Preparation</h3>
          </><p>Coffee is prepared to export standards.</p></div>
          <div style={processCard} className="card-hover"><>
            <Ship size={42} color="#C89B3C" strokeWidth={1.8} />
            <h3 style={processTitle}>Shipment</h3>
          </><p>Export documentation and logistics coordination.</p></div>
        </div>
      </section>




      <section>
        <div style={beanContainer}>
          <div style={beanCard} className="card-hover">
            <img src={bean_1} alt="coffee bean" style={beanImage} /></div>
        </div>
      </section>



      <section style={sidamaSection}>
        <h2 style={sectionTitle}>Why Sidama Coffee?</h2>
        <div style={sidamaGrid}>

          <div style={sidamaCard} className="card-hover">
            <Mountain size={42} color="#C89B3C" strokeWidth={1.8} />
            <h3 style={sidamaTitle}>High Altitude</h3>
            <p>Coffee grown between 1700 and 2200 meters above sea level.</p></div>

          <div style={sidamaCard} className="card-hover">
            <Sprout size={42} color="#C89B3C" strokeWidth={1.8} />
            <h3 style={sidamaTitle}> Rich Soil</h3>
            <p>Fertile soil helps create complex flavor profiles.</p></div>

          <div style={sidamaCard} className="card-hover">
            <Flower2 size={42} color="#C89B3C" strokeWidth={1.8} />
            <h3 style={sidamaTitle}> Floral Notes</h3>
            <p>Known for bright acidity, floral aromas, and citrus character.</p></div>

          <div style={sidamaCard} className="card-hover">
            <Globe2 size={42} color="#C89B3C" strokeWidth={1.8} />
            <h3 style={sidamaTitle}> Global Reputation</h3>
            <p>Sidama is one of Ethiopia's respected coffee-producing regions.</p></div>
        </div>
      </section>



      <section style={whySection}>
        <div style={whyContainer}>
          <div>
            <img
              src={originLandscape}
              alt="Sidama Coffee Landscape"
              style={whyImage} /></div>
          <div>
            <h2 style={sectionTitle}>Why Partner with Dancha BunAgi Export</h2>

            <h3 style={whySubtitle}>
              More Than a Supplier — A Trusted Ethiopian Coffee Export Partner
            </h3>

            <p style={paragraph}>
              Dancha BunAgi Export combines more than <strong>20 years of family
                experience</strong> in Ethiopian coffee sourcing with a modern export
              company established in <strong>2025</strong>. Our deep roots in the
              Sidama coffee-growing region allow us to work directly with trusted
              farmers and washing stations, ensuring every shipment reflects the
              quality and authenticity Ethiopia is known for.
            </p>

            <p style={paragraph}>
              We believe exporting coffee is about more than supplying beans.
              It is about building long-term partnerships based on transparency,
              reliability, and consistent quality. Every lot is carefully selected,
              processed, and prepared according to international export standards.
            </p>

            <p style={paragraph}>
              Whether you are a specialty coffee roaster, importer, wholesaler,
              or distributor, our goal is to provide premium Ethiopian Arabica
              coffee together with professional service from inquiry to delivery.
            </p>

            <div style={featureGrid}>

              <div style={featureCard}>
                <Award size={20} color="#C89B3C" /><span>Direct sourcing from Sidama farmers</span></div>

              <div style={featureCard}>
                <Award size={20} color="#C89B3C" /><span>Premium washed Arabica coffee</span></div>

              <div style={featureCard}>
                <Award size={20} color="#C89B3C" /><span>20+ years family experience</span></div>

              <div style={featureCard}>
                <Award size={20} color="#C89B3C" /><span>Export company established in 2025</span></div>

              <div style={featureCard}>
                <Award size={20} color="#C89B3C" /><span>Full traceability</span></div>

              <div style={featureCard}>
                <Award size={20} color="#C89B3C" /><span>Flexible export solutions</span></div>

              <div style={featureCard}>
                <Award size={20} color="#C89B3C" /><span>Reliable logistics support</span></div>

              <div style={featureCard}>
                <Award size={20} color="#C89B3C" /><span>Long-term business partnerships</span></div>
            </div>
          </div>
        </div>
      </section>



      <section style={ctaStyle}>
        <h2 style={ctaTitle}>
          Let's Build Your Coffee Supply Partnership
        </h2><p style={ctaText}>
          Whether you're a specialty coffee roaster, importer, or wholesaler,
          we're ready to help you source premium Ethiopian Arabica coffee
          directly from Sidama.</p>
        <Link to="/contact"><button style={buttonStyle}>Request a Quote</button>
        </Link>
      </section>


      <footer style={footerStyle}>
        <div style={footerGrid}>
          <div>
            <h2 style={footerLogo}>Dancha Buna Agi Export</h2>
            <p>
              Premium washed Arabica coffee from the Sidama region of Ethiopia.
              Connecting origin coffee producers with global buyers.
            </p>
          </div>


          <div>
            <h3 style={footerHeading}>Quick Links</h3>
            <p><Link to="/about" style={footerLink}>About Us</Link></p>
            <p><Link to="/coffee" style={footerLink}>Our Coffee</Link></p>
            <p><Link to="/services" style={footerLink}>Export Services</Link></p>
            <p><Link to="/contact" style={footerLink}>Request a Quote</Link></p>
          </div>

          <div>
            <h3 style={footerHeading}>Contact</h3>
            <p>📧 info@danchabuna.com</p>
            <p>📞 +44 7412 659033</p>
            <p>📞 +251 91 268 6827</p>
          </div>

          <div>
            <h3 style={footerHeading}>Follow Us</h3>
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "15px", }}>

              
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" >
                <img
                  className="social-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  style={{ width: "28px", height: "28px", transition: "0.3s" }}
                />
              </a>

              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
                <img
                  className="social-icon"
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  style={{ width: "28px", height: "28px", transition: "0.3s" }}
                />
              </a>

              <a href="https://wa.me/447412659033" target="_blank" rel="noopener noreferrer">
                <img
                  className="social-icon"
                  src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                  alt="WhatsApp"
                  style={{ width: "28px", height: "28px", transition: "0.3s" }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div style={chatStyle}>
        <div style={chatText}>Chat with us 👋</div>
        <a href="https://wa.me/447412659033" target="_blank" rel="noreferrer" style={chatButton}>💬</a>
      </div>
    </div>
  );
}

/*==============hero section============*/

const heroStyle = {
  backgroundImage: `linear-gradient(rgba(20,15,10,0.45), rgba(20,15,10,0.45)), url(${homeHero})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "92vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "white",
  padding: "10px 20px",
};
const heroOverlay = {

  padding: "10px",
  borderRadius: "20px",
  maxWidth: "1500px",
};

const heroTitle = {
  fontSize: "66px",
  fontWeight: "600",
  lineHeight: "1.15",
  color: "#ffffff",
  margin: "15px 0 25px",
  letterSpacing: "-1px",
};

const heroSubtitle = {
  fontSize: "20px",
  color: "#C89B3C",
  textTransform: "uppercase",
  letterSpacing: "3px",
  fontWeight: "600",
  marginBottom: "15px",
};

const heroText = {
  maxWidth: "760px",
  margin: "0 auto 40px",
  fontSize: "20px",
  lineHeight: "1.8",
  color: "#F3F3F3",
  fontWeight: "300",
};

const buttonStyle = {
  background: "linear-gradient(135deg, #C89B3C, #B8860B)",
  color: "#fff",
  border: "none",
  padding: "16px 36px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "17px",
  fontWeight: "600",
  letterSpacing: "0.5px",
  boxShadow: "0 10px 25px rgba(200,155,60,.25)",
  transition: "all .3s ease",
};


/*=========highlight section=======*/

const highlightsSection = {
  padding: "40px 20px 20px",
  background: "#FAF8F4",
};

const highlightGrid = {
  maxWidth: "1300px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "25px",
};

const highlightCard = {
  background: "#ffffff",
  padding: "10px 10px",
  borderRadius: "18px",
  textAlign: "center",
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  transition: "all .35s ease",
  cursor: "pointer",
  border: "1px solid rgba(0,0,0,.05)",
};

const highlightValue = {
  marginTop: "20px",
  marginBottom: "8px",
  color: "#3A2417",
  fontSize: "24px",
  fontWeight: "600",
};

const highlightLabel = {
  color: "#777",
  fontSize: "15px",
  letterSpacing: "0.6px",
  textTransform: "uppercase",
};

/*============= story section ============*/


const brandSubtitle = {
  textAlign: "center",
  color: "#C89B3C",
  fontSize: "28px",
  letterSpacing: "4px",
  marginTop: "-30px",
  marginBottom: "20px",
  textTransform: "uppercase",
};

const nameIntro = {
  maxWidth: "720px",
  margin: "0 auto 60px",
  textAlign: "center",
  color: "#777",
  fontSize: "21px",
  fontStyle: "italic",
  lineHeight: "1.8",
};

const nameItem = {
  maxWidth: "900px",
  margin: "0 auto 55px",
};

const nameTitle = {
  color: "#3A2417",
  fontSize: "36px",
  marginBottom: "15px",
  fontWeight: "600",
};

const nameMeaning = {
  color: "#d4a017",
  fontSize: "26px",
  marginBottom: "10px",
  fontWeight: "700",
};

const nameText = {
  fontSize: "20px",
  color: "#555",
  lineHeight: "2",
  fontWeight: "300",
};

const divider = {
  width: "120px",
  margin: "45px auto",
  borderTop: "2px solid rgba(200,155,60,.4)",
};

const nameSection = {
  padding: "70px 10%",
  background: "linear-gradient(135deg, #faf8f3 0%, #f5efe5 50%, #faf8f3 100%)",
};

const meaningBox = {
  marginTop: "45px",
  textAlign: "center",
};

const goldLine = {
  display: "none",
};

const meaningTitle = {
  fontSize: "40px",
  color: "#4b2e1e",
  fontWeight: "700",
  margin: "15px 0",
};

const meaningText = {
  maxWidth: "820px",
  margin: "0 auto",
  fontSize: "20px",
  color: "#555",
  lineHeight: "1.8",
};

const meaningInline = {
  color: "#d4a017",
  fontSize: "22px",
  fontWeight: "600",
};

const storyBox = {
  maxWidth: "1500px",
  margin: "0 auto",
  background: "#ffffff",
  borderRadius: "24px",
  padding: "30px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
  border: "1px solid #eee",
};

const aboutSection = {
  padding: "100px 20px",
  background: "linear-gradient(135deg, #fff7e6 0%, #f3eadf 50%, #eef5ea 100%)",
};

const aboutBox = {
  maxWidth: "1000px",
  margin: "0 auto",
  background: "rgba(255,255,255,0.9)",
  padding: "55px 65px",
  borderRadius: "25px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const sectionTitle = {
  fontSize: "42px",
  textAlign: "center",
  color: "#4b2e1e",
  marginBottom: "50px",
};

const paragraph = {
  fontSize: "19px",
  lineHeight: "1.9",
  textAlign: "left",
  color: "#333",
  maxWidth: "900px",
  margin: "0 auto",
};

const numbersSection = {
  padding: "0px 0px",
  display: "flex",
  justifyContent: "center",
  gap: "5px",
  flexWrap: "wrap",
  color: "rgb(209, 154, 13)"

};

const numberCard = {
  width: "100px",
  padding: "25px",
  textAlign: "center",
  borderRadius: "15px",
  fontSize: "20px",
  fontWeight: "bold",
  boxShadow: "0 4px 15px rgba(228, 140, 8, 0)",
};

const originSection = {
  padding: "90px 20px",
  background: "#faf6ef",
};

const originGrid = {
  maxWidth: "1200px",
  margin: "40px auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "40px",
  alignItems: "center",
};

const originImage = {
  width: "100%",
  height: "420px",
  objectFit: "cover",
  borderRadius: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
};

const factsCard = {
  padding: "35px",
  background: "rgb(255, 255, 255)",
  borderRadius: "15px",
  boxShadow: "0 10px 25px rgba(189, 178, 178, 0.08)",
};

const smallHeading = {
  color: "#4b2e1e",
  fontSize: "32px",
};

const processSection = {
  background: "#f8f8f8",
  padding: "50px 20px",
};

const processGrid = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "25px",
};

const processCard = {
  background: "white",
  padding: "35px 25px",
  borderRadius: "40px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  textAlign: "center",
  transition: " 0.3s",
  cursor: "pointer",
  minHeight: "180px",
};


const gallerySection = {
  padding: "80px 20px",
  textAlign: "center",
  background: "#ffffff",
};

const galleryGrid = {
  maxWidth: "1500px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "30px",
};

const galleryImage = {
  width: "100%",
  height: "520px",
  objectFit: "cover",
  borderRadius: "18px",
  boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
};

const sidamaSection = {
  padding: "80px 20px",
  background: "#ffffff",
};

const sidamaGrid = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px",
};

const sidamaCard = {
  background: "white",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  textAlign: "center",
  transition: "all 0.3s ease",
  cursor: "pointer",
};


const sidamaTitle = {
  marginTop: "18px",
  marginBottom: "12px",
  fontSize: "24px",
  color: "#3A2417",
  fontWeight: "600",
};



const whySection = {
  background: "#f8f8f8",
  padding: " 0px",
  textAlign: "center",
};

const whyGrid = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
};

const whyCard = {
  width: "280px",
  padding: "25px",
  borderRadius: "12px",
  background: "white",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  cursor: "pointer",
};




const ctaStyle = {
  backgroundImage: `
    linear-gradient(
      rgba(20,20,20,0.60),
      rgba(20,20,20,0.60)
    ),
    url(${ctaCoffee})
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "white",
  textAlign: "center",
  padding: "120px 20px",
};

const ctaTitle = {
  fontSize: "52px",
  fontWeight: "600",
  marginBottom: "25px",
  color: "#ffffff",
};

const ctaText = {
  maxWidth: "760px",
  margin: "0 auto 40px",
  fontSize: "21px",
  lineHeight: "1.8",
  color: "#f4f4f4",
};



const originIntro = {
  maxWidth: "850px",
  margin: "0 auto 50px",
  textAlign: "center",
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#555",
};

const journeyGrid = {
  maxWidth: "1300px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
};

const journeyCard = {
  background: "#ffffff",
  borderRadius: "22px",
  overflow: "hidden",
  boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
  transition: "all 0.35s ease",
  border: "1px solid rgba(0,0,0,0.05)",
};

const journeyImage = {
  width: "100%",
  height: "320px",
  objectFit: "cover",
  display: "block",
};

const journeyText = {
  padding: "30px",
  textAlign: "left",
};






const whyChooseGrid = {
  maxWidth: "1200px",
  margin: "40px auto 0",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
};

const whyChooseCard = {
  background: "white",
  padding: "30px ",
  borderRadius: "18px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  textAlign: "center",
  transition: "all 0.3s ease",
};

const whyContainer = {
  maxWidth: "1300px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1.2fr",
  gap: "70px",
  alignItems: "center",
};

const whyImage = {
  width: "100%",
  height: "650px",
  objectFit: "cover",
  borderRadius: "20px",
  boxShadow: "0 20px 45px rgba(0,0,0,0.18)",
};

const whySubtitle = {
  color: "#b07a12",
  fontSize: "24px",
  marginBottom: "25px",
};

const featureGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(220px, 1fr))",
  gap: "18px",
  marginTop: "40px",
};

const featureCard = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
  background: "#ffffff",
  padding: "10px 18px",
  borderRadius: "10px",
  border: "1px solid rgba(0,0,0,0.05)",
  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
  fontSize: "15px",
  color: "#3A2417",
  fontWeight: "500",
};

const beanCard = {
  width: "100%",
  maxWidth: "1400px",
  background: "white",
  borderRadius: "18px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
};

const beanContainer = {
  display: "flex",
  justifyContent: "center",
  margin: "20px auto",
};

const beanImage = {
  width: "100%",
  height: "350px",
  objectFit: "cover",
  display: "block",
};

const aboutText = {
  maxWidth: "1100px",
  margin: "40px auto",
  fontSize: "1.2rem",
  lineHeight: "2",
  color: "#444",
  textAlign: "justify",
};







const processTitle = {
  marginTop: "18px",
  fontSize: "22px",
  fontWeight: "600",
  color: "#3A2417",
  marginBottom: "12px",
};

  


const footerLogo = {
  color: "#C89B3C",
  fontSize: "32px",
  fontWeight: "600",
  marginBottom: "20px",
};

const footerHeading = {
  color: "#C89B3C",
  fontSize: "26px",
  marginBottom: "20px",
  fontWeight: "600",
};

const footerStyle = {
  background: "linear-gradient(to bottom, rgba(36,22,15,0.95), #24160F)",
  color: "#F5F1EB",
  padding: "80px 50px 35px",
  borderTop: "2px solid #C89B3C",
};
const footerGrid = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr 1fr",
  gap: "80px",
  maxWidth: "1200px",
  margin: "0 auto",
  alignItems: "start",
};

const chatStyle = {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  zIndex: "1000",
};

const chatText = {
  background: "white",
  padding: "12px 20px",
  borderRadius: "15px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
};

const chatButton = {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  background: "#25D366",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "28px",
  textDecoration: "none",
};

const footerLink = {
  color: "white",
  textDecoration: "none",
  transition: "0.3s",
};
const footerIcon = {
  color: "white",
  textDecoration: "none",
  fontSize: "28px",
  transition: "0.3s",
};





export default Home;