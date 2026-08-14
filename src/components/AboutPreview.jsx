import './AboutPreview.css'

// EDIT HERE: swap the image URL for a real team/office photo,
// and update the text or stat points whenever you like.
const points = [
  '50+ team members',
  'Pan-India clients',
  'Marketplace certified',
  '3-day avg. response',
]

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
          <h2>Built by people who've actually run stores and shipped sites.</h2>
          <p>
            Galoxiq started because small business owners kept hiring one
            agency for marketplace management and another for their website
            — and neither talked to each other. We fixed that by doing both,
            under one roof.
          </p>
          <div className="about-points">
            {points.map((point) => (
              <div className="about-point" key={point}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {point}
              </div>
            ))}
          </div>
          <a href="#" className="btn btn-outline">More About Us</a>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
