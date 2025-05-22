import React from "react";

const services = [
  {
    id: "cleaning",
    title: "Teeth Cleaning",
    icon: "bi bi-brush",
    shortDesc: "Professional cleaning to keep your teeth healthy and bright.",
    details: `Our expert hygienists use advanced tools to remove plaque, tartar, and stains, helping prevent cavities and gum disease.`,
  },
  {
    id: "cavity",
    title: "Cavity Filling",
    icon: "bi bi-fill-drip",
    shortDesc: "Treatment to restore teeth damaged by decay.",
    details: `We use tooth-colored composite fillings that are durable and blend seamlessly with your natural teeth.`,
  },
  {
    id: "root-canal",
    title: "Root Canal Therapy",
    icon: "bi bi-gear-wide-connected",
    shortDesc: "Effective treatment for infected tooth pulp.",
    details: `This procedure removes infection inside the tooth and saves it from extraction, relieving pain and restoring function.`,
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    icon: "bi bi-brightness-high",
    shortDesc: "Safe and advanced whitening for a dazzling smile.",
    details: `Our whitening treatments brighten your teeth several shades in just one or two sessions, using safe professional methods.`,
  },
  {
    id: "braces",
    title: "Braces",
    icon: "bi bi-braces",
    shortDesc: "Orthodontic solutions to straighten your teeth.",
    details: `We offer traditional and clear braces options tailored to align your teeth for a perfect smile.`,
  },
  {
    id: "implants",
    title: "Dental Implants",
    icon: "bi bi-screwdriver",
    shortDesc: "Permanent replacement for missing teeth.",
    details: `Our implants provide a strong foundation for fixed or removable replacement teeth that look natural.`,
  },
];

const Services = () => (
  <div className="container mt-5">
    <h2 className="mb-4 text-center">Our Dental Services</h2>
    <div className="accordion" id="servicesAccordion">
      {services.map(({ id, title, icon, shortDesc, details }, index) => (
        <div key={id} className="accordion-item">
          <h2 className="accordion-header" id={`heading-${id}`}>
            <button
              className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${id}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse-${id}`}
            >
              <i className={`${icon} me-3`} style={{ fontSize: "1.5rem", color: "#0d6efd" }}></i>
              {title}
            </button>
          </h2>
          <div
            id={`collapse-${id}`}
            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
            aria-labelledby={`heading-${id}`}
            data-bs-parent="#servicesAccordion"
          >
            <div className="accordion-body">
              <p><strong>{shortDesc}</strong></p>
              <p>{details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
