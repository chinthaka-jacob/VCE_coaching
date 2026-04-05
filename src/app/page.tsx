import Link from "next/link";

/* ─── DATA ──────────────────────────────────────────────── */
const services = [
  {
    icon: "📐",
    title: "VCE Mathematical Methods",
    desc: "Functions, calculus, probability, and statistics — tackled with rigour and clarity.",
  },
  {
    icon: "∑",
    title: "VCE Specialist Mathematics",
    desc: "Complex numbers, mechanics, vectors and proofs explained from first principles.",
  },
  {
    icon: "⚛️",
    title: "VCE Physics",
    desc: "Motion, fields, waves, and modern physics — bridging theory to real-world application.",
  },
];

const whyUs = [
  {
    icon: "🎓",
    title: "PhD-Qualified Educators",
    desc: "Both coaches hold doctoral degrees in Physics and Mechanical Engineering from leading universities.",
  },
  {
    icon: "🎯",
    title: "Targeted, Not Generic",
    desc: "We identify exactly where a student is struggling and address those gaps with precision.",
  },
  {
    icon: "🔬",
    title: "Deep Subject Expertise",
    desc: "We go beyond the textbook — our research backgrounds give students an edge in understanding.",
  },
  {
    icon: "📈",
    title: "Proven Results",
    desc: "Students gain confidence, improve SAC scores, and walk into exams well-prepared.",
  },
];

/* ─── PAGE ───────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-800 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Victoria · VCE Specialists
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Expert VCE <span className="text-gold-400">Physics</span> &amp;{" "} 
            Maths Coaching
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            PhD-qualified specialists who understand these subjects deeply, 
            not just the syllabus. We diagnose what's holding you back and fix
            it at the root.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book a Free Consultation
            </Link>
            <Link href="/services" className="btn-outline text-base px-8 py-4 border-white text-white hover:bg-white hover:text-navy-800">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">What We Teach</h2>
            <p className="section-subheading">
              Specialist support for the subjects that demand real depth of understanding.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="card text-center">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-navy-800 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              See Full Details →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Choose Us?</h2>
            <p className="section-subheading">
              We are not a general tutoring service. We are subject specialists.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-semibold text-navy-700 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gold-500 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Ready to unlock your potential?
          </h2>
          <p className="text-navy-800 text-base mb-8">
            Get in touch today for a free initial consultation. Let us understand
            your needs and show you how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-navy-800 hover:bg-navy-700 text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200 shadow-md"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
