"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you offer online or in-person sessions?",
    a: "We offer both online (via recordable video call) and in-person sessions in Kew - 3101, Victoria. We'll discuss what suits you best during the initial free 30-minute consultation.",
  },
  {
    q: "How long is a typical session?",
    a: "Sessions are typically 60 or 90 minutes, depending on the topic and student preference. We adjust to what works best.",
  },
  {
    q: "Do you offer packages or one-off sessions?",
    a: "Both. We offer individual sessions as well as block bookings at a discounted rate. We'll tailor an arrangement to your needs.",
  },
  /* {
    q: "Can you help with SAC preparation specifically?",
    a: "Absolutely. SAC preparation is one of our most common requests. We focus on the exact topics and question styles relevant to your upcoming assessment.",
  }*/
];

export default function ContactPage() {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!formspreeId) {
        setError("Contact form is not configured yet. Please email us directly.");
        return;
      }

      // Using Formspree for form handling (free tier available)
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        // Reset submission message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Failed to send message. Please try again or email directly.");
      }
    } catch (err) {
      setError("Network error. Please try again or email directly.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Reach out to book a free initial consultation or to ask any
            questions. We respond within one business day.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-navy-800 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-5 text-sm text-gray-600">
              <div className="flex gap-4 items-start">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-navy-700">Location</p>
                  <p>Kew - 3101, Victoria, Australia</p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Online &amp; in-person sessions available
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-semibold text-navy-700">Email</p>
                  <a
                    href="mailto:eigen.kew@gmail.com"
                    className="hover:text-gold-600 transition-colors"
                  >
                    eigen.kew@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-navy-700">Phone</p>
                  <a
                    href="tel:+61 410 118 900"
                    className="hover:text-gold-600 transition-colors"
                  >
                    +61 410 118 900
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="font-semibold text-navy-700">Availability</p>
                  <p>Weekday evenings &amp; weekends</p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Flexible scheduling to suit VCE students
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="card text-center py-12 border-green-200 bg-green-50">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">
                  Message Received!
                </h3>
                <p className="text-gray-500 text-sm">
                  Thank you for reaching out. We&apos;ll be in touch within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Naughton"
                      className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="alex@email.com"
                      className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+61 4XX XXX XXX"
                      className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">
                      Subject / Area of Interest
                    </label>
                    <select
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option>VCE Mathematical Methods</option>
                      <option>VCE Specialist Mathematics</option>
                      <option>VCE Physics</option>
                      <option>Multiple subjects</option>
                      <option>General enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us briefly what you're finding difficult, and what you're hoping to achieve..."
                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent resize-none"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full text-center py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="card">
                <h3 className="font-semibold text-navy-800 mb-2 text-sm">
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
