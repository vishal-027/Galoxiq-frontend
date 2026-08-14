import './TrustStrip.css'

// EDIT HERE: this is just a list — add, remove, or edit any
// item's icon/title/text without touching anything else.
const items = [
  {
    title: 'Dedicated Support',
    text: 'A real account manager who knows your business, not a ticket queue.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    ),
  },
  {
    title: 'Fast Turnaround',
    text: 'Accounts optimized and websites shipped in days, not months.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Built For Growth',
    text: 'Every decision is measured against one thing: more sales for you.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
]

function TrustStrip() {
  return (
    <section className="section">
      <div className="container">
        <div className="trust-grid">
          {items.map((item) => (
            <div className="trust-card" key={item.title}>
              <div className="icon-circle">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStrip
