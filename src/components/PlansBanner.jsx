import './PlansBanner.css'

// EDIT HERE: change the tier names or the heading text.
const tiers = ['Starter', 'Growth', 'Enterprise']

function PlansBanner() {
  return (
    <section className="section alt" id="plans">
      <div className="container">
        <div className="plans-banner">
          <div>
            <h2>Simple pricing for every stage.</h2>
            <p>From your first Meesho listing to a full company website — there's a plan sized for you.</p>
            <div className="plan-tiers">
              {tiers.map((tier) => (
                <span className="plan-pill" key={tier}>{tier}</span>
              ))}
            </div>
          </div>
          <a href="#" className="btn btn-primary">View Plans</a>
        </div>
      </div>
    </section>
  )
}

export default PlansBanner
