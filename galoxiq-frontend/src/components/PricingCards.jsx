import PlanCard from "./PlansBanner.jsx";
import "./PricingCards.css";

const sellerPlans = [
  {
    name: "Starter",
    originalPrice: "₹3,000",
    price: "₹2,500",
    period: "/month",
    desc: "Perfect for new sellers getting started on one marketplace.",
    features: [
      "1 marketplace account",
      "Listing setup (up to 25 SKUs)",
      "Order & return handling",
      "Monthly performance report",
    ],
  },
  {
    name: "Growth",
    price: "₹6,000",
    period: "/month",
    desc: "For sellers ready to scale across marketplaces.",
    features: [
      "Up to 3 marketplace accounts",
      "Listing setup (up to 100 SKUs)",
      "Ads management",
      "Weekly performance report",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    price: "₹10,000",
    period: "/month",
    desc: "For established sellers pushing for higher volume.",
    features: [
      "Unlimited marketplace accounts",
      "Unlimited SKU management",
      "Advanced ads & promotions strategy",
      "Dedicated account manager",
      "Bi-weekly strategy calls",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    period: "",
    desc: "Tailored operations for high-volume sellers & brands.",
    features: [
      "Custom account structure",
      "Multi-brand management",
      "Dedicated growth team",
      "Custom reporting & SLAs",
    ],
  },
];

const webPlans = [
  {
    name: "Starter Website",
    originalPrice: "₹9,999",
    price: "₹8,999",
    period: "",
    desc: "A clean single site to get your business online fast.",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Basic SEO setup",
      "1 round of revisions",
      "8-day delivery",
    ],
  },
  {
    name: "Business Website",
    originalPrice: "₹24,999",
    price: "₹19,999",
    period: "",
    badge: "Most Popular",
    desc: "A stronger site built to convert visitors into customers.",
    features: [
      "Up to 10 pages",
      "Custom design (not a template)",
      "Booking / contact form integration",
      "3 rounds of revisions",
      "18-day delivery",
    ],
  },
  {
    name: "Growth Website",
    price: "Custom Pricing",
    period: "",
    desc: "For companies that need more pages, features & polish.",
    features: [
      "Up to 20 pages",
      "Advanced animations & interactions",
      "Blog / CMS integration",
      "5 rounds of revisions",
      "3 months of support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    period: "",
    desc: "Large-scale sites built to your exact specification.",
    features: [
      "Unlimited pages",
      "Custom features & integrations",
      "Dedicated project manager",
      "Ongoing maintenance plan",
    ],
  },
];

const sellerIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const webIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="14" rx="2" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

function PricingCards() {
  return (
    <section className="section alt" id="plans">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2>Plans built for your business.</h2>
          <p>
            Choose the service and plan that fits your needs today — upgrade as
            your business grows.
          </p>
        </div>

        <div className="pricing-grid">
          <PlanCard
            title="Seller Account Management"
            icon={sellerIcon}
            plans={sellerPlans}
          />
          <PlanCard
            title="Website Development"
            icon={webIcon}
            plans={webPlans}
          />
        </div>
      </div>
    </section>
  );
}

export default PricingCards;
