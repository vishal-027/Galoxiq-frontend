import { useState } from "react";
import "./ContactSection.css";

const OFFICE_ADDRESS =
  "Madhuvan Colony, Karhera near  Mahadev builder,  Ghaziabad, Uttar Pradesh - 201007";

const MAP_QUERY = encodeURIComponent(OFFICE_ADDRESS);
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&z=14&output=embed`;
const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000+",
];

const contactMethods = ["WhatsApp", "Phone Call", "Email"];

function ContactSection() {
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
    contactMethod: "WhatsApp",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form submitted:", form);
    alert("Thanks! We'll get back to you soon.");
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Get In Touch</span>
          <h2>Let’s talk about your business.</h2>
          <p>Tell us what you need, and we’ll get back to you shortly.</p>
        </div>

        <div className="contact-grid">
          {/* LEFT: the inquiry form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name*</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="businessName">Business Name*</label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required
                  value={form.businessName}
                  onChange={handleChange}
                  placeholder="Your business name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone / WhatsApp Number*</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="service">Service Required*</label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Seller Account Management">
                    Seller Account Management
                  </option>
                  <option value="Website Development">
                    Website Development
                  </option>{" "}
                  <option value="Google Biography">Google Biography</option>{" "}
                  <option value="Google Knowledge">Google Knowledge</option>{" "}
                  <option value="Press Release">Press Release</option>
                  <option value="IMDb">IMDb</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option value="">Select a range (optional)</option>
                  {budgetOptions.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell us about your requirement</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="A few lines about what you need..."
              />
            </div>

            <div className="form-group">
              <label>Preferred Contact Method</label>
              <div className="radio-row">
                {contactMethods.map((method) => (
                  <label className="radio-pill" key={method}>
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={form.contactMethod === method}
                      onChange={handleChange}
                    />
                    {method}
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              Send Inquiry
            </button>
          </form>

          {/* RIGHT: office info + map */}
          <div className="contact-info">
            <div className="info-card">
              <h3>Our Office</h3>
              <div className="info-item">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{OFFICE_ADDRESS}</span>
              </div>
              <div className="info-item">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 6 12 13 2 6" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <span>galoxiq@gmail.com</span>
              </div>
              <div className="info-item">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.27a2 2 0 0 1 2.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 92059 39282, +91 87005 84698</span>
              </div>
            </div>

            {/* Plain embedded map, no API key. Clicking anywhere on it
                opens the location in Google Maps in a new tab. */}
            <div className="map-wrap">
              <iframe
                src={MAP_EMBED_URL}
                title="Galoxiq office location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Decorative marker pinned to the map's center point.
                  The embed centers on OFFICE_ADDRESS, so this lines up
                  with the actual location. */}
              <div className="map-marker">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8z" />
                  <circle cx="12" cy="10" r="3" fill="#fff" />
                </svg>
                <span className="pulse" />
              </div>

              <a
                className="map-overlay"
                href={MAP_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open location in Google Maps"
              >
                <span className="map-pill">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  View on Google Maps
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
