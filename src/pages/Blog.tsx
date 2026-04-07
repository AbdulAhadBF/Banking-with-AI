import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const posts = [
  {
    id: 1,
    title: "How Predictive AI is Reshaping Personal Wealth Management",
    excerpt: "Discover how machine learning models are moving beyond simple budgeting to actively forecast market trends and optimize personal portfolios.",
    date: "Apr 07, 2026",
    author: "AI Insights Team",
    category: "Technology",
    imageUrl: "https://picsum.photos/seed/blog1/800/500",
  },
  {
    id: 2,
    title: "The Security Advantage of Agentic Banking",
    excerpt: "While convenience is a major draw, the true power of autonomous banking agents lies in their ability to detect and neutralize threats in milliseconds.",
    date: "Apr 02, 2026",
    author: "Security Desk",
    category: "Security",
    imageUrl: "https://picsum.photos/seed/blog2/800/500",
  },
  {
    id: 3,
    title: "Navigating Interest Rates in 2026: An AI Perspective",
    excerpt: "Our predictive models have analyzed decades of macroeconomic data. Here is what they forecast for interest rates in the coming quarters.",
    date: "Mar 28, 2026",
    author: "Market Analysis AI",
    category: "Markets",
    imageUrl: "https://picsum.photos/seed/blog3/800/500",
  },
];

export default function Blog() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Insights & News | All Banks</title>
        <meta name="description" content="Stay informed with the latest trends in finance, technology, and AI-driven wealth management." />
      </Helmet>
      {/* Header */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Insights & News</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            Stay informed with the latest trends in finance, technology, and AI-driven wealth management.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="w-full">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-slate-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600 hover:bg-blue-100">
                      {post.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-xl font-semibold leading-6 text-slate-900 group-hover:text-slate-600">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="flex items-center gap-2 text-sm leading-6 text-slate-900 font-semibold">
                      <User className="w-4 h-4 text-slate-500" />
                      {post.author}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Subscribe to our newsletter</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Get AI-generated financial tips and market updates delivered straight to your inbox.
            </p>
            <form className="mt-6 flex max-w-md mx-auto gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
