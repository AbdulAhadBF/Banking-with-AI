import { Link } from "react-router-dom";
import { Landmark, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg">
                <Landmark className="h-6 w-6 text-blue-900" />
              </div>
              <span className="text-2xl font-bold tracking-tight">All Banks</span>
            </Link>
            <p className="text-sm leading-6 text-slate-300 max-w-xs">
              Futuristic, AI-powered banking for the modern world. Experience intelligent financial solutions tailored to you.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/ai-solutions" className="text-sm leading-6 text-slate-300 hover:text-white">
                      Generative AI
                    </Link>
                  </li>
                  <li>
                    <Link to="/ai-solutions" className="text-sm leading-6 text-slate-300 hover:text-white">
                      Conversational AI
                    </Link>
                  </li>
                  <li>
                    <Link to="/ai-solutions" className="text-sm leading-6 text-slate-300 hover:text-white">
                      Predictive Insights
                    </Link>
                  </li>
                  <li>
                    <Link to="/ai-solutions" className="text-sm leading-6 text-slate-300 hover:text-white">
                      Agentic Automation
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/contact" className="text-sm leading-6 text-slate-300 hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-slate-300 hover:text-white">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-slate-300 hover:text-white">
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/about" className="text-sm leading-6 text-slate-300 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-sm leading-6 text-slate-300 hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-slate-300 hover:text-white">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-slate-300 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-slate-300 hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-slate-300 hover:text-white">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-slate-400">&copy; 2026 All Banks, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
