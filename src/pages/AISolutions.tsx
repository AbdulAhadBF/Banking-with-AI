import { BrainCircuit, MessageSquareText, LineChart, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const solutions = [
  {
    id: "generative",
    name: "Generative AI",
    icon: BrainCircuit,
    description: "Our Generative AI engine creates personalized financial reports, synthesizes market news relevant to your portfolio, and drafts custom financial plans. It turns complex data into easy-to-understand narratives.",
    features: ["Automated Monthly Reports", "Personalized Investment Narratives", "Custom Financial Goal Planning"],
    image: "https://picsum.photos/seed/generative/600/400",
  },
  {
    id: "conversational",
    name: "Conversational AI",
    icon: MessageSquareText,
    description: "Experience zero wait times with our 24/7 virtual assistant. Capable of understanding complex natural language, it can handle account inquiries, dispute resolutions, and guide you through application processes.",
    features: ["24/7 Availability", "Natural Language Understanding", "Seamless Human Handoff"],
    image: "https://picsum.photos/seed/conversational/600/400",
  },
  {
    id: "predictive",
    name: "Analytical & Predictive AI",
    icon: LineChart,
    description: "Stay ahead of the curve. Our predictive models analyze your spending habits and market trends to forecast cash flow issues, recommend budget adjustments, and identify lucrative investment opportunities.",
    features: ["Cash Flow Forecasting", "Risk Analysis & Mitigation", "Personalized Product Recommendations"],
    image: "https://picsum.photos/seed/predictive/600/400",
  },
  {
    id: "agentic",
    name: "Agentic Task-Performing AI",
    icon: Cpu,
    description: "Delegate your financial chores. Our Agentic AI can autonomously execute bill payments, optimize fund transfers between accounts to maximize interest, and rebalance your portfolio based on your risk profile.",
    features: ["Autonomous Bill Pay", "Smart Fund Routing", "Portfolio Rebalancing"],
    image: "https://picsum.photos/seed/agentic/600/400",
  },
];

export default function AISolutions() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>AI Solutions | All Banks</title>
        <meta name="description" content="Discover our suite of artificial intelligence tools: Generative AI, Conversational AI, Predictive Analytics, and Agentic Automation." />
      </Helmet>
      {/* Header */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">AI Solutions</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            Discover how our suite of artificial intelligence tools works tirelessly to optimize your financial life.
          </p>
        </div>
      </div>

      {/* Solutions List */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div key={solution.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <img
                    src={solution.image}
                    alt={solution.name}
                    className="rounded-2xl shadow-xl ring-1 ring-slate-900/10 w-full object-cover aspect-video"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <solution.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">{solution.name}</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-8">{solution.description}</p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/demo"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Request Interactive Demo <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Ready to put AI to work for you?</h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
