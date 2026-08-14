import { useState } from "react";

function PlanBanner({ title, icon, plans }) {
  const [index, setIndex] = useState(0);

  const isFirst = index === 0;
  const isLast = index === plans.length - 1;
  const plan = plans[index];

  const goNext = () => {
    if (!isLast) setIndex(index + 1);
  };
  const goPrev = () => {
    if (!isFirst) setIndex(index - 1);
  };

  return (
    <div className="plan-card">
      <div className="plan-card-head">
        <div className="plan-card-icon">{icon}</div>
        <h3>{title}</h3>
      </div>

      <div className="plan-slide">
        {plan.badge && <span className="plan-badge">{plan.badge}</span>}

        <span className="plan-name">{plan.name}</span>

        <div className="plan-price">
          {plan.originalPrice && (
            <span className="original-price">{plan.originalPrice}</span>
          )}
          <span className="amount">{plan.price}</span>
          {plan.period && <span className="period">{plan.period}</span>}
        </div>

        <p className="plan-desc">{plan.desc}</p>

        <ul className="plan-features">
          {plan.features.map((feature) => (
            <li key={feature}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-primary plan-btn">
          Choose {plan.name}
        </a>
      </div>

      <div className="plan-nav">
        <button
          className={`plan-arrow ${isFirst ? "disabled" : ""} ${isLast ? "bounce-left" : ""}`}
          onClick={goPrev}
          disabled={isFirst}
          aria-label="Previous plan"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="plan-dots">
          {plans.map((p, i) => (
            <span
              key={p.name}
              className={`plan-dot ${i === index ? "active" : ""}`}
            />
          ))}
        </div>

        <button
          className={`plan-arrow ${isLast ? "disabled" : ""} ${!isLast ? "bounce-right" : ""}`}
          onClick={goNext}
          disabled={isLast}
          aria-label="Next plan"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PlanBanner;
