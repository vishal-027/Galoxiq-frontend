import './Testimonial.css'

// EDIT HERE: swap in a real client quote, name, and role
// whenever you have one.
function Testimonial() {
  return (
    <section className="section">
      <div className="container testimonial-card">
        <div className="stars">★★★★★</div>
        <blockquote>
          "Galoxiq built our salon's booking site in two weeks and took over
          our Amazon store from day one. Bookings and sales are both up over
          40%."
        </blockquote>
        <div className="testimonial-author">
          <div className="avatar">SR</div>
          <div>
            <strong>Sana Raza</strong>
            <span>Owner, Glow Studio Salon</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
