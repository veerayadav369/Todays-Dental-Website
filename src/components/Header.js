import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" aria-label="Main navigation">
    <div className="container">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src={process.env.PUBLIC_URL + "/assets/logo3.jpg"}
          alt="Today's Dental Logo"
          width="40"
          height="40"
          className="me-2 rounded-circle border border-primary"
          style={{ objectFit: "contain" }}
        />
        <span className="fw-bold text-primary">Today's Dental</span>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {["Home", "About", "Services", "Contact", "FAQ"].map((page) => (
            <li key={page} className="nav-item">
              <Link className="nav-link" to={page === "Home" ? "/" : `/${page.toLowerCase()}`}>
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
