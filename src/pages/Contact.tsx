import { Building2, Mail, Phone, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("name"),
      email: formData.get("email"),
      inquiryType: formData.get("inquiry-type"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Contact & Support | All Banks</title>
        <meta name="description" content="Get in touch with All Banks. Schedule an AI demo or speak with a human advisor." />
      </Helmet>
      {/* Header */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contact & Support</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            Whether you need human assistance or want to schedule an AI demo, we're here to help.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Get in touch</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our AI assistant is available 24/7 via the chat icon in the bottom right. For specific inquiries or to speak with a human advisor, please use the contact details below or fill out the form.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-slate-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <Building2 className="h-7 w-6 text-slate-400" aria-hidden="true" />
                </dt>
                <dd>
                  100 Innovation Drive
                  <br />
                  San Francisco, CA 94105
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <Phone className="h-7 w-6 text-slate-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-slate-900" href="tel:+1 (555) 234-5678">
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail className="h-7 w-6 text-slate-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-slate-900" href="mailto:support@allbanks.ai">
                    support@allbanks.ai
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-0">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              {isSuccess ? (
                <div className="rounded-2xl bg-green-50 p-8 text-center border border-green-100">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700">Thank you for reaching out. Your details have been saved to our database and our team will get back to you shortly.</p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-medium text-green-600 hover:text-green-500"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="block text-sm font-semibold leading-6 text-slate-900">
                        Full Name
                      </label>
                      <div className="mt-2.5">
                        <input
                          required
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          required
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="inquiry-type" className="block text-sm font-semibold leading-6 text-slate-900">
                        Inquiry Type
                      </label>
                      <div className="mt-2.5">
                        <select
                          id="inquiry-type"
                          name="inquiry-type"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        >
                          <option>Open an Account</option>
                          <option>Schedule AI Demo</option>
                          <option>General Support</option>
                          <option>Partnership Inquiry</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900">
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          required
                          name="message"
                          id="message"
                          rows={4}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
                  <div className="mt-8 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send message"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
