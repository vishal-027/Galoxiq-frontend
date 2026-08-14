import './Services.css'

// EDIT HERE: each service is one object below — change title,
// description, or the bullet list points freely.
const services = [
  {
    num: 'SERVICE 01',
    title: 'Seller Account Management',
    desc: 'We run your day-to-day seller operations on Meesho, Amazon, Flipkart and more, so your store stays healthy and your sales keep climbing.',
    points: [
      'Account setup & optimization',
      'Listing & catalog management',
      'Order, returns & rating management',
      'Ads & sales growth strategy',
    ],
    linkText: 'Get started with seller management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4" />
        <path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    num: 'SERVICE 02',
    title: 'Web Development',
    desc: 'We design and build fast, modern websites for salons, growing businesses and established companies that need a strong online presence.',
    points: [
      'Custom website design & build',
      'Salon & service booking sites',
      'Business & corporate websites',
      'Ongoing support & maintenance',
    ],
    linkText: 'Get started with web development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="14" rx="2" /><line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
]

function Services() {
  return (
    <section className="section alt" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Do</span>
          <h2>Two services. One goal: your growth.</h2>
          <p>Whether you sell on marketplaces, need a website, or both — Galoxiq handles it end to end.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-num">{service.num}</div>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="desc">{service.desc}</p>
              <ul className="service-list">
                {service.points.map((point) => (
                  <li key={point}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-link">
                {service.linkText}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
