import "./AboutPreview.css";

// EDIT HERE: swap the image URL for a real team/office photo,
// and update the text or stat points whenever you like.
const points = [
  "Experienced Development Team",
  "Multi-Marketplace Expertise",
  "Hands-On Client Management",
  "Technology, Sales & Marketing",
];

function AboutPreview() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-img">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop"
            alt="Team working together at Galoxiq"
          />
        </div>
        <div className="about-content">
          <span className="eyebrow">Who We Are</span>
          <h2>
            A small team with real experience in technology, marketplaces &
            growth.
          </h2>
          <p>
            Galoxiq is built by a focused team bringing together software
            development, marketplace management and marketing experience. We
            combine these skills to help businesses manage their online sales
            and build a stronger digital presence.
          </p>
          <div className="about-points">
            {points.map((point) => (
              <div className="about-point" key={point}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {point}
              </div>
            ))}
          </div>
          {/* <a href="#" className="btn btn-outline">
            More About Us
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
