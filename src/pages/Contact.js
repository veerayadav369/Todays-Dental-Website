import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Simulate API call
      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input name="name" value={formData.name} onChange={handleChange} type="text" id="name" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input name="email" value={formData.email} onChange={handleChange} type="email" id="email" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input name="subject" value={formData.subject} onChange={handleChange} type="text" id="subject" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} id="message" rows="4" className="form-control" required />
        </div>

        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>

      {status && <div className="alert alert-info">{status}</div>}

      <div>
        <h5>Contact Information</h5>
        <p><strong>Phone:</strong> +91 8106815255</p>
        <p><strong>Email:</strong> jaddu0503@gmail.com</p>
        <p><strong>Address:</strong> 123 Smile Street, Dental City, CA</p>

        <div className="ratio ratio-16x9 mt-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086736048179!2d-122.41941508468154!3d37.77492977975951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814d92e605d7%3A0x71a3f3e5f7e5be2d!2sDental%20Clinic!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
            title="Clinic Location"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
