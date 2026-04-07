import { ShieldCheck, Users, Target, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const values = [
  {
    name: "Innovation First",
    description: "We constantly push the boundaries of what's possible in finance using cutting-edge AI.",
    icon: Zap,
  },
  {
    name: "Uncompromising Security",
    description: "Your data and assets are protected by military-grade encryption and AI-driven threat detection.",
    icon: ShieldCheck,
  },
  {
    name: "Customer Centricity",
    description: "Every AI model we build is designed to make your financial life easier and more prosperous.",
    icon: Users,
  },
  {
    name: "Precision & Accuracy",
    description: "Our predictive models are trained on vast datasets to ensure the highest level of accuracy.",
    icon: Target,
  },
];

const team = [
  {
    name: "Dr. Eleanor Vance",
    role: "Chief Executive Officer",
    imageUrl: "https://picsum.photos/seed/eleanor/300/300",
    bio: "Former Head of AI at a major tech firm, Eleanor brings 15 years of machine learning expertise to banking.",
  },
  {
    name: "Marcus Thorne",
    role: "Chief Financial Officer",
    imageUrl: "https://picsum.photos/seed/marcus/300/300",
    bio: "A veteran of Wall Street, Marcus ensures our AI models align with sound financial principles.",
  },
  {
    name: "Aisha Patel",
    role: "Head of AI Research",
    imageUrl: "https://picsum.photos/seed/aisha/300/300",
    bio: "Leading our team of data scientists to develop the next generation of predictive financial models.",
  },
];

export default function About() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>About Us | All Banks</title>
        <meta name="description" content="Learn about All Banks, our mission to democratize elite financial services through AI, and meet our team of innovators." />
      </Helmet>
      {/* Header */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About All Banks</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            We are on a mission to democratize elite financial services through the power of Artificial Intelligence.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Mission</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              For too long, advanced financial insights and personalized wealth management have been reserved for the ultra-wealthy. At All Banks, we believe everyone deserves access to top-tier financial guidance. By leveraging state-of-the-art Generative, Conversational, and Predictive AI, we are making intelligent banking accessible, intuitive, and secure for all.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Core Values</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              These principles guide every algorithm we write and every service we offer.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 font-semibold text-slate-900">
                  <value.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {value.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Meet the Innovators</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our team combines decades of experience in traditional finance with cutting-edge expertise in artificial intelligence.
            </p>
          </div>
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((person) => (
              <li key={person.name}>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" referrerPolicy="no-referrer" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-900">{person.name}</h3>
                <p className="text-base leading-7 text-blue-600">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-slate-600">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
