import React from "react";

const faqs = [
  {
    question: "Do you accept new patients?",
    answer:
      "Yes, we welcome new patients. Please book an appointment online or call our clinic to schedule your visit.",
  },
  {
    question: "What are your opening hours?",
    answer: "Our clinic is open Monday to Friday, 9:00 AM to 6:00 PM. We are closed on weekends and public holidays.",
  },
  {
    question: "Do you offer emergency dental services?",
    answer:
      "Yes, we provide emergency dental services. If you have a dental emergency, please call us immediately for assistance.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit/debit cards, and most major insurance plans. Please contact us for details regarding your specific insurance coverage.",
  },
  {
    question: "Do you provide dental services for children?",
    answer: "Yes, we offer comprehensive dental care for children and adults, ensuring a comfortable experience for all ages.",
  },
];

const FAQ = () => (
  <div className="container mt-5">
    <h2 className="text-center mb-4">Frequently Asked Questions</h2>
    <p className="text-muted text-center">
      Find answers to common questions about our dental services. For additional queries, feel free to contact us.
    </p>
    <div className="accordion" id="faqAccordion">
      {faqs.map(({ question, answer }, index) => (
        <div className="accordion-item border-0 mb-3" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button fw-bold ${index !== 0 ? "collapsed" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={index === 0}
              aria-controls={`collapse${index}`}
            >
              {question}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-secondary">{answer}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FAQ;
