import { CreditCard, Home, TrendingUp, Wallet, Globe, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const products = [
  {
    name: "AI-Optimized Current Account",
    description: "A current account that learns your spending habits, automatically categorizes expenses, and integrates seamlessly with Raast for instant transfers.",
    icon: Wallet,
    features: ["No monthly fees", "Raast instant payments", "Real-time fraud alerts"],
  },
  {
    name: "Shariah-Compliant Savings",
    description: "Maximize your Halal yield. Our AI analyzes Mudarabah pools and automatically shifts your funds to the highest-yielding, Shariah-certified options.",
    icon: Moon,
    features: ["100% Shariah compliant", "Dynamic profit optimization", "Zakat calculation AI"],
  },
  {
    name: "Roshan Digital AI Account",
    description: "Built for overseas Pakistanis. The AI predicts the best forex rates so you know exactly when to send remittances home.",
    icon: Globe,
    features: ["Forex rate predictions", "Zero-fee remittances", "Instant utility bill pay"],
  },
  {
    name: "Smart SME & Agri Loans",
    description: "Fast-track your business or farm growth. Our AI underwrites your application using alternative data in minutes, not weeks.",
    icon: TrendingUp,
    features: ["Instant pre-approval", "AI-driven risk assessment", "Digital SBP compliance"],
  },
];

export default function Products() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Products & Services | All Banks</title>
        <meta name="description" content="Explore our AI-optimized current accounts, Shariah-compliant savings, Roshan Digital Accounts, and Smart SME loans." />
      </Helmet>
      {/* Header */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Products & Services</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            Traditional banking products, supercharged by Artificial Intelligence for the Pakistani market.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
            {products.map((product) => (
              <div key={product.name} className="flex flex-col bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <product.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{product.name}</h3>
                  </div>
                  <p className="text-slate-600 text-lg mb-8">{product.description}</p>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <Link
                      to="/contact"
                      className="block w-full text-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calculator Teaser */}
      <div className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-8 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-white">
              <h2 className="text-3xl font-bold mb-4">Not sure which product is right?</h2>
              <p className="text-blue-100 text-lg mb-8">
                Use our AI-powered recommendation engine. Answer a few simple questions, and our AI will analyze your profile to suggest the perfect mix of accounts and services.
              </p>
              <Link
                to="/demo"
                className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-slate-100 transition-colors"
              >
                Start AI Assessment
              </Link>
            </div>
            <div className="lg:w-1/2 w-full">
               <img
                  src="https://picsum.photos/seed/calculator/600/400"
                  alt="AI Calculator"
                  className="rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
