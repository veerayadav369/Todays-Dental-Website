// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="container mt-5 mb-5">

    {/* Hero Section */}
    <section
      className="hero-section text-center p-5 rounded shadow-sm position-relative"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/hero1.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textShadow: "0 0 8px rgba(0,0,0,0.7)",
      }}
      aria-label="Welcome banner with appointment call to action"
    >
      <h1 className="display-4 fw-bold">Welcome to Today's Dental Services</h1>
      <p className="lead mt-3 mb-4">
        Your smile is our priority. Experience top-notch dental care for the whole family.
      </p>
      <Link
        to="/contact"
        className="btn btn-primary btn-lg shadow"
        style={{ transition: "background-color 0.3s ease" }}
      >
        Book an Appointment
      </Link>
    </section>

    {/* Introduction Section */}
    <section className="intro-section mt-5">
      <div className="row align-items-center gy-4">
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">About Our Clinic</h2>
          <p className="fs-5">
            At Today's Dental Services, we provide comprehensive dental care tailored to your needs. Our team ensures every visit is comfortable and stress-free.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + "/assets/EDP.jpg"}
            alt="Experienced dental professionals"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="services-overview mt-5">
      <h3 className="text-center fw-bold mb-4">Our Services</h3>
      <div className="row text-center gy-4">
        {[
          { title: "Teeth Cleaning", image: "/assets/TC.jpg" },
          { title: "Cavity Filling", image: "/assets/CF.jpg" },
          { title: "Root Canal Therapy", image: "/assets/RCT.jpg" },
        ].map((service, idx) => (
          <div key={idx} className="col-md-4">
            <div
              className="card p-3 shadow-sm h-100 service-card"
              role="region"
              aria-label={service.title}
              tabIndex="0"
            >
              <img
                src={process.env.PUBLIC_URL + service.image}
                alt={service.title}
                className="card-img-top rounded"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">{service.title}</h5>
                <p className="card-text text-secondary">
                  Professional {service.title.toLowerCase()} to keep your smile healthy.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Call-to-Action Section */}
    <section
  className="cta-section text-white text-center p-4 rounded mt-5 shadow"
  style={{ backgroundColor: '#186ea0' }}
>
  <h4 className="fw-bold mb-3">Ready for a healthier smile?</h4>
  <p className="mb-4 fs-5">
    Book your appointment today and let our experienced dentists take care of your dental needs.
  </p>
  <Link
    to="/contact"
    className="btn btn-light btn-lg fw-semibold"
    style={{ transition: "background-color 0.3s ease" }}
  >
    Book Appointment
  </Link>
</section>


  </div>
);

export default Home;
