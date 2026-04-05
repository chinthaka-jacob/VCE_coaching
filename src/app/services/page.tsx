import Link from "next/link";

const subjects = [
  {
    id: "methods",
    emoji: "📐",
    title: "VCE Mathematical Methods",
    units: "Units 1–4",
    color: "border-blue-500",
    accentBg: "bg-blue-50",
    overview:
      "Mathematical Methods is the gateway to STEM pathways. It covers functions, algebra, calculus, probability, and statistics — all of which demand both fluency and conceptual understanding.",
    topics: [
      "Functions, relations & graphs",
      "Algebra & arithmetic of functions",
      "Differentiation & applications of derivatives",
      "Integration & applications",
      "Discrete & continuous probability distributions",
      "Sampling & statistical inference",
      /*"Units 1 & 2 - Functions and graphs, Algebra and equations, Introductory calculus and probability",
      "Units 3 & 4 - Differential calculus, Integral calculus, Probability and statistics", */
    ],
    whoFor:
      "Students aiming for STEM degrees, medicine, engineering, or any course with a strong mathematical prerequisite.",
  },
  {
    id: "specialist",
    emoji: "∑",
    title: "VCE Specialist Mathematics",
    units: "Units 1–4",
    color: "border-purple-500",
    accentBg: "bg-purple-50",
    overview:
      "Specialist Mathematics is the most rigorous VCE mathematics subject. It introduces complex analysis, formal proof, mechanics, and multivariable reasoning — requiring a level of abstraction that benefits enormously from expert guidance.",
    topics: [
      "Proof, logic & number systems",
      "Complex numbers & the Argand plane",
      "Vectors in two and three dimensions",
      "Calculus — differential equations & kinematics",
      "Statistical inference",
      "Mechanics",
     /* "Units 1 & 2 - Functions and graphs, Algebra and equations, Introductory calculus and probability",
      "Units 3 & 4 - Differential calculus, Integral calculus, Probability and statistics",*/
    ],
    whoFor:
      "High-achieving students aiming for engineering, pure science, mathematics, or actuarial degrees.",
  },
  {
    id: "physics",
    emoji: "⚛️",
    title: "VCE Physics",
    units: "Units 1–4",
    color: "border-gold-500",
    accentBg: "bg-amber-50",
    overview:
      "VCE Physics bridges foundational classical mechanics with the remarkable ideas of modern physics. A deep understanding of the 'why' — not just the formula — is what separates average from excellent performance.",
    topics: [
      "Unit 1 - Thermal physics, Electric circuits, Light and wave behaviour",
      "Unit 2 - Motion (kinematics and forces), Astrophysics, Nuclear physics, Practical investigation",
      "Unit 3 - Fields and motion, Electric and magnetic fields, Electromagnetic induction",
      "Unit 4 - Relativity, Quantum physics, Extended practical investigation",
      
    ],
    whoFor:
      "Students passionate about science, engineering, medicine, or anyone who wants to truly understand the physical world.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Specialist coaching across three of Victoria&apos;s most demanding
            VCE subjects — delivered by PhD-qualified educators.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                desc: "A free session to understand where you are, what you're struggling with, and what your goals are.",
              },
              {
                step: "2",
                title: "Targeted Plan",
                desc: "We map out the specific topics and skills to address — no time wasted on what you already know.",
              },
              {
                step: "3",
                title: "Focused Sessions",
                desc: "Regular one-on-one coaching sessions, going deep on the concepts and problems that matter most.",
              },
            ].map((item) => (
              <div key={item.step} className="card">
                <div className="text-3xl font-bold text-gold-500 mb-3">{item.step}</div>
                <h3 className="font-semibold text-navy-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Detail Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-14">
          {subjects.map((s) => (
            <div
              key={s.id}
              className={`card border-l-4 ${s.color} ${s.accentBg}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{s.emoji}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                    {s.units}
                  </p>
                  <h2 className="text-2xl font-bold text-navy-800">{s.title}</h2>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">{s.overview}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Topics */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-navy-700 mb-3">
                    Key Topics Covered
                  </h3>
                  <ul className="space-y-2">
                    {s.topics.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-gold-500 font-bold mt-0.5">✓</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who It's For */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-navy-700 mb-3">
                    Who Is This For?
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.whoFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gold-500 text-center">
        <h2 className="text-3xl font-bold text-navy-900 mb-4">
          Not sure which sessions are right for you?
        </h2>
        <p className="text-navy-800 mb-8 max-w-xl mx-auto">
          Contact us for a free initial consultation and we&apos;ll help you
          figure out the best path forward.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-navy-800 hover:bg-navy-700 text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200 shadow-md"
        >
          Book a Free Consultation
        </Link>
      </section>
    </>
  );
}
