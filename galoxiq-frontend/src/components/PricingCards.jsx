import PlanCard from "./PlansBanner.jsx";
import "./PricingCards.css";

const sellerPlans = [
  {
    name: "Basic Plan",
    originalPrice: "₹3,999",
    badge: "Launch Offer",
    price: "₹3,499",
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
    name: "Standard",
    badge: "Most Popular",
    originalPrice: "₹9,999",
    price: "₹8,499",
    period: "/3 months",
    desc: "For sellers ready to scale across marketplaces.",
    features: [
      "1 marketplace account",
      "Listing setup (up to 80 SKUs)",
      "Technical issue support",
      "Weekly performance report",
      "Priority support",
    ],
  },

  {
    name: "Scale",
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
    originalPrice: "₹4,499",
    badge: "Launch Offer",
    price: "₹3,999",
    period: "",
    desc: "A clean single site to get your business online fast.",
    features: [
      "Single page + Contact Form Integration",
      "Mobile responsive design",
      "Basic SEO setup",
      "1 round of revisions",
      "8-day delivery",
    ],
  },
  {
    name: "Growth Website",
    originalPrice: "₹9,999",
    price: "₹8,999",
    period: "",
    badge: "Most Popular",
    desc: "A stronger site built to convert visitors into customers.",
    features: [
      "Up to 5 pages",
      "Custom design with Responsive UI",
      "Booking / contact form integration",
      "3 rounds of revisions",
      "18-day delivery",
    ],
  },
  {
    name: "Business Website",
    price: "Custom Pricing",
    period: "",
    desc: "For companies that need more pages, features & polish.",
    features: [
      "Up to 10 pages",
      "Advanced UI & interactions",
      "Blog / CMS integration",
      "5 rounds of revisions",
      "3 months of support",
    ],
  },
];

const bioPlans = [
  {
    name: "Google Biography",
    originalPrice: "₹2,999",
    price: "₹2,499",
    badge: "Limited Offer",
    period: "",
    desc: "Build a professional online profile that showcases your identity and achievements.",
    features: [
      "Professional biography creation",
      "Profile information optimization",
      "Online presence enhancement",
      "Structured profile content",
    ],
  },
  {
    name: "Google Knowledge Panel",
    price: "₹20,000",
    period: "",
    badge: "Premium",
    desc: "Strengthen your online presence and eligibility for a Google Knowledge Panel.",
    features: [
      "Knowledge Panel eligibility assessment",
      "Google entity presence optimization",
      "Online authority building",
      "Profile & information consistency",
    ],
  },
];

const prPlans = [
  {
    name: "Press Release",
    price: "₹999",
    period: "",
    desc: "Get your brand, business or announcement published online.",
    features: [
      "Professional press release content",
      "News & announcement publishing",
      "Online media distribution",
      "Brand information coverage",
    ],
  },
  {
    name: "IMDb Profile",
    price: "₹1,500",
    period: "",
    desc: "Create and strengthen your professional presence on IMDb.",
    features: [
      "IMDb profile setup assistance",
      "Professional profile information",
      "Credits & biography guidance",
      "Profile optimization support",
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
          <PlanCard title="Web Services" icon={webIcon} plans={webPlans} />
          <PlanCard
            title="Google Knowledge & Online Profile"
            icon={webIcon}
            plans={bioPlans}
          />
          <PlanCard
            title="PR & Digital Presence"
            icon={webIcon}
            plans={prPlans}
          />
        </div>
      </div>
    </section>
  );
}

export default PricingCards;
