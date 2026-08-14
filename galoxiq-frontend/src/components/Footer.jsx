import "./Footer.css";

// EDIT HERE: update contact details, links, or social icons.
function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#" className="logo">
            Galoxiq<span>.</span>
          </a>
          <p>
            Seller account management and web development for businesses that
            want to grow online, without juggling multiple agencies.
          </p>
          <div className="social-row">
            <a href="#" aria-label="Instagram">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter/X">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4l16 16M20 4L4 20" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#plans">Plans</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#services">Seller Management</a>
            </li>
            <li>
              <a href="#services">Web Development</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <div className="contact-item">
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
          <div className="contact-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.27a2 2 0 0 1 2.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+91 87005 84698</span>
          </div>
          <div className="contact-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>
              Madhuvan Colony, Karhera near Mahadev builder, Ghaziabad, Uttar
              Pradesh - 201007
            </span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Galoxiq. All rights reserved.</span>
        <div>
          {/* <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
