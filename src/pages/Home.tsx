import { ArrowRight, BrainCircuit, MessageSquareText, LineChart, Cpu, ShieldCheck, CheckCircle2, Globe, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const features = [
  {
    name: "Urdu & Regional AI Chatbot",
    description: "24/7 virtual assistant that fluently understands English, Roman Urdu, and native Urdu for seamless customer support.",
    icon: MessageSquareText,
  },
  {
    name: "Shariah-Compliant AI",
    description: "AI algorithms designed to ensure all investments and savings recommendations strictly adhere to Islamic banking principles.",
    icon: Moon,
  },
  {
    name: "Roshan Digital & Forex AI",
    description: "Predictive analytics for overseas Pakistanis to track PKR exchange rates and optimize remittance timing.",
    icon: Globe,
  },
  {
    name: "Agentic Raast Automation",
    description: "Automate instant fund transfers, bill payments, and payroll using seamless integration with the Raast payment system.",
    icon: Cpu,
  },
];

const testimonials = [
  {
    body: "The AI insights have completely transformed how I manage my business finances. The Urdu chatbot makes it so easy for my staff to use.",
    author: {
      name: "Ali Raza",
      handle: "SME Owner, Lahore",
      imageUrl: "https://picsum.photos/seed/aliraza/100/100",
    },
  },
  {
    body: "As an overseas Pakistani, the Forex AI helps me decide exactly when to send money to my Roshan Digital Account for the best rate.",
    author: {
      name: "Fatima Tariq",
      handle: "Software Engineer, Dubai",
      imageUrl: "https://picsum.photos/seed/fatima/100/100",
    },
  },
  {
    body: "I only use Islamic banking, and having an AI that understands Shariah compliance gives me complete peace of mind with my investments.",
    author: {
      name: "Usman Ahmed",
      handle: "Corporate Executive, Karachi",
      imageUrl: "https://picsum.photos/seed/usman/100/100",
    },
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>All Banks | Next-Gen AI Banking for Pakistan</title>
        <meta name="description" content="Experience the future of finance in Pakistan. Our AI-driven platform offers Raast integration, Roshan Digital Accounts, and Shariah-compliant wealth management." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BankOrCreditUnion",
              "name": "All Banks",
              "description": "AI-Powered Banking for Pakistan",
              "url": "https://allbanks.ai"
            }
          `}
        </script>
      </Helmet>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-slate-900 pb-16 pt-14 sm:pb-20">
        <img
          src="https://picsum.photos/seed/karachi-skyline/1920/1080?blur=2"
          alt="Modern banking"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#16a34a] to-[#2563eb] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-300 ring-1 ring-white/10 hover:ring-white/20">
                  SBP Compliant & Raast Enabled. <Link to="/ai-solutions" className="font-semibold text-white"><span className="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></Link>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Pakistan's First Truly AI-Powered Bank
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Experience the future of finance. From Shariah-compliant AI investments to seamless Raast automation and Urdu-speaking virtual assistants, we are redefining banking for Pakistan.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/contact"
                  className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
                >
                  Open Account
                </Link>
                <Link to="/demo" className="text-sm font-semibold leading-6 text-white flex items-center gap-1 hover:text-blue-400 transition-colors">
                  Try AI Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* AI Capabilities Section */}
      <div className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Tailored for Pakistan</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Intelligent banking for the modern Pakistani
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our proprietary AI models are trained specifically for the Pakistani market, understanding local languages, Islamic finance rules, and SBP regulations.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600/10">
                      <feature.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link to="/ai-solutions" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500">
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Trust & Security Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Bank with absolute confidence</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Your security is our top priority. Our AI integrates directly with national databases for instant verification and uses military-grade encryption to protect your assets.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-slate-900">
                    <ShieldCheck className="absolute left-1 top-1 h-5 w-5 text-green-500" aria-hidden="true" />
                    SBP & NADRA Integrated.
                  </dt>{" "}
                  <dd className="inline">Fully compliant with State Bank of Pakistan regulations with instant NADRA biometric verification.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-slate-900">
                    <CheckCircle2 className="absolute left-1 top-1 h-5 w-5 text-green-500" aria-hidden="true" />
                    Real-time Fraud Prevention.
                  </dt>{" "}
                  <dd className="inline">AI models that detect anomalous behavior in milliseconds, preventing unauthorized IBFT transfers.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-slate-900">
                    <CheckCircle2 className="absolute left-1 top-1 h-5 w-5 text-green-500" aria-hidden="true" />
                    Shariah Board Certified.
                  </dt>{" "}
                  <dd className="inline">Our Islamic AI models are audited and certified by leading Islamic scholars in Pakistan.</dd>
                </div>
              </dl>
            </div>
            <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none flex justify-center lg:justify-end">
              <img
                src="https://picsum.photos/seed/security-pak/800/600"
                alt="Security dashboard"
                className="w-full max-w-md rounded-2xl shadow-xl ring-1 ring-slate-900/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Trusted by Pakistanis worldwide
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author.handle} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                  <figure className="h-full flex flex-col justify-between">
                    <blockquote className="text-slate-700">
                      <p>{`"${testimonial.body}"`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <img className="h-10 w-10 rounded-full bg-slate-50" src={testimonial.author.imageUrl} alt="" referrerPolicy="no-referrer" />
                      <div>
                        <div className="font-semibold text-slate-900">{testimonial.author.name}</div>
                        <div className="text-slate-600 text-sm">{testimonial.author.handle}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-blue-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to experience the future of banking?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join thousands of Pakistanis who have already upgraded their financial life with All Banks AI.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
              >
                Open an Account
              </Link>
              <Link to="/demo" className="text-sm font-semibold leading-6 text-white hover:text-blue-200 transition-colors">
                Try AI Demo <span aria-hidden="true">→</span>
              </Link>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#3b82f6" />
                  <stop offset={1} stopColor="#1e3a8a" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
