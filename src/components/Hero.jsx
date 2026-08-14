import './Hero.css'

// EDIT HERE: change the headline, subtext, buttons, or the
// numbers in the stats row.
function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <span className="eyebrow">Seller Growth &amp; Web Development</span>
          <h1>
            Sell more online. <span className="accent">Look better</span> everywhere else.
          </h1>
          <p className="lead">
            Galoxiq manages your Meesho, Amazon &amp; Flipkart seller account —
            and builds fast, modern websites for salons and growing businesses.
            One partner, two ways to grow.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">Explore Services</a>
            <a href="#contact" className="btn btn-outline">Get a Free Consultation</a>
          </div>
          <div className="hero-stats">
            <div><strong>250+</strong><span>Sellers managed</span></div>
            <div><strong>120+</strong><span>Websites launched</span></div>
            <div><strong>4.9/5</strong><span>Client rating</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-top">
              <span></span><span></span><span></span>
            </div>
            <div className="visual-body">
              <div className="visual-row">
                <span>Meesho — Order #4821</span>
                <span className="tag tag-success">Shipped</span>
              </div>
              <div className="visual-row">
                <span>Amazon — Listing Health</span>
                <span className="tag tag-primary">98%</span>
              </div>
              <div className="visual-row">
                <span>Salon Website — Build</span>
                <span className="tag tag-warning">In Progress</span>
              </div>
            </div>
          </div>
          <div className="float-badge b1"><span className="dot"></span> Live sync active</div>
          <div className="float-badge b2">📈 Sales up 40%</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
