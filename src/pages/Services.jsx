import "../styles/Services.css";
import { Link } from "react-router-dom";
import {
  Coffee as CoffeeIcon,
  ShieldCheck,
  Package,
  FileText,
  Ship,
  Handshake,
  Leaf,
} from "lucide-react";
function Services() {
  return (
    <div>
  <section className="services-hero">
  <div className="services-overlay">
    <div className="gold-line"></div>
    <h1>Export Services</h1>
    <p>
      Supporting coffee buyers from sourcing to shipment.
    </p>
  </div>
</section>


   <section className="services-section">

  <div className="services-container">

    <div className="gold-line"></div>

    <h2 className="section-title">
      What We Offer
    </h2>

    <div className="service-grid">

      <div className="service-card">
        <CoffeeIcon className="service-icon"/>
        <h3>Coffee Sourcing</h3>
        <p>
          Direct sourcing of premium washed Arabica coffee from Sidama.
        </p>
      </div>

      <div className="service-card">
        <ShieldCheck className="service-icon"/>
        <h3>Quality Inspection</h3>
        <p>
          Careful selection and quality checks before export preparation.
        </p>
      </div>

      <div className="service-card">
        <Package className="service-icon"/>
        <h3>Sample Preparation</h3>
        <p>
          Support for sample requests before larger purchase decisions.
        </p>
      </div>

      <div className="service-card">
        <FileText className="service-icon"/>
        <h3>Export Documentation</h3>
        <p>
          Assistance with export documentation and shipment preparation.
        </p>
      </div>

      <div className="service-card">
        <Ship className="service-icon"/>
        <h3>Logistics Coordination</h3>
        <p>
          Coordination of transport and export processes for buyers.
        </p>
      </div>

      <div className="service-card">
        <Handshake className="service-icon"/>
        <h3>Buyer Support</h3>
        <p>
          Clear communication throughout the sourcing and export process.
        </p>
      </div>

    </div>

  </div>

</section>



      <section className="why-section">

  <div className="services-container">

    <div className="gold-line"></div>

    <h2 className="section-title">
      Why Choose Dancha Buna Agi Export?
    </h2>

    <div className="service-grid">

      <div className="service-card">
        <Leaf className="service-icon" />
        <h3>Direct Sourcing</h3>
        <p>
          We work closely with coffee producers in Sidama to support
          traceability, quality, and consistency.
        </p>
      </div>

      <div className="service-card">
        <CoffeeIcon className="service-icon" />
        <h3>Premium Arabica Coffee</h3>
        <p>
          Carefully selected washed Arabica coffee with the unique character
          of Sidama.
        </p>
      </div>

      <div className="service-card">
        <FileText className="service-icon" />
        <h3>Export Support</h3>
        <p>
          Support with export documentation, quality preparation, and buyer
          requirements.
        </p>
      </div>

      <div className="service-card">
        <Ship className="service-icon" />
        <h3>Reliable Logistics</h3>
        <p>
          Coordination of export shipments and communication throughout the
          sourcing process.
        </p>
      </div>

    </div>

  </div>

</section>

     <section className="services-cta">

  <div className="cta-overlay">

    <div className="gold-line"></div>

    <h2>
      Ready to Discuss Coffee Export?
    </h2>

    <p>
      Contact Dancha Buna Agi Export to discuss samples, pricing, and export
      requirements. We look forward to helping you source premium Ethiopian
      Arabica coffee from Sidama.
    </p>


  </div>

</section>
    </div>
  );
}

export default Services;