import React from "react";

const About = () => (
  <div className="container mt-5">
    <h2 className="text-center mb-4">About Us</h2>

    {/* Clinic Background */}
    <section className="mb-5">
      <h4 className="text-primary">Clinic Background</h4>
      <p>
        Established in 2010, <strong>Today's Dental Services</strong> has been a trusted provider of quality dental care. 
        We combine the latest technology with a compassionate approach to ensure our patients receive the best treatment 
        possible.
      </p>
    </section>

    {/* Practitioner Details */}
    <section className="mb-5">
      <h4 className="text-primary">Our Practitioners</h4>
      <ul className="list-unstyled">
        <li className="mb-3">
          <strong>Dr. Veera Kumar</strong> - Chief Dentist with 15+ years of experience, specializing in complex dental cases and smile makeovers.
        </li>
        <li className="mb-3">
          <strong>Dr. Anita Sharma</strong> - Orthodontist known for her expertise in braces and invisible aligners, ensuring perfect smiles.
        </li>
        <li className="mb-3">
          <strong>Dr. Raj Patel</strong> - Endodontist with a reputation for painless root canal treatments and restorative dentistry.
        </li>
      </ul>
    </section>

    {/* Mission Statement */}
    <section>
      <h4 className="text-primary">Our Mission</h4>
      <p>
        Our mission is to provide <strong>affordable, high-quality dental care</strong> in a friendly and welcoming environment. 
        At Today's Dental Services, we are committed to ensuring every patient leaves with a healthy and confident smile.
      </p>
    </section>
  </div>
);

export default About;
