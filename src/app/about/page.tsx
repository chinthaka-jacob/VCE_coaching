import Link from "next/link";

const credentials = [
  { label: "Qualifications", value: "PhD in Quantum Physics · PhD in Mechanical Engineering" },
  { label: "Background", value: "Led by university academics with research and teaching experience at leading institutions in Victoria" },
  { label: "Subjects", value: "VCE Physics, Maths Methods, Specialist Mathematics" },
  { label: "Approach", value: "Targeted gap analysis, first-principles teaching" },
];

const values = [
{
  heading: "We understand where it becomes challenging",
  body: "Having worked extensively in postgraduate research, we recognise exactly where VCE content becomes conceptually demanding. We understand which topics tend to challenge students, and, more importantly, why."
},
{
  heading: "Subject mastery, not just exam preparation",
  body: "Our focus extends beyond improving scores to developing genuine understanding. Students who grasp the underlying ‘why’ perform with greater consistency across SACs, practice exams, and the final assessment."
},
{
  heading: "Personalised to each student",
  body: "Each session begins with careful listening. We assess a student’s current level, identify specific conceptual gaps, and develop a tailored approach, rather than relying on a one-size-fits-all program."
},
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Led by a PhD-qualified mechanical engineer and a PhD-qualified physicist in quantum mechanics, with extensive research and teaching experience across leading universities in Victoria.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <h2 className="section-heading text-left mb-4">
              Specialists, Not Generalists
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Based in Victoria, we bring doctoral-level training in <strong>Physics </strong> 
              and <strong>Mechanical Engineering</strong>, disciplines grounded in the same 
              analytical precision and structured reasoning that underpin VCE Physics and Maths.           </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Unlike a general tutoring agency, we do not teach every subject.
              We teach the subjects we know at the deepest level, so that our
              students receive coaching that is precise, confident, and grounded
              in real expertise.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our approach is built on identifying the <em>specific</em> gap in
              a student's understanding and addressing it directly while saving time,
              reducing frustration, and accelerating progress.
            </p>
          </div>

          {/* Credential Card */}
          <div className="card border-l-4 border-gold-500 bg-gray-50 space-y-4">
            <h3 className="text-lg font-semibold text-navy-800 mb-2">
              Our Credentials at a Glance
            </h3>
            {credentials.map((c) => (
              <div key={c.label} className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-600 mb-0.5">
                  {c.label}
                </span>
                <span className="text-sm text-gray-700">{c.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Teaching Philosophy</h2>
            <p className="section-subheading">
              Three principles that guide every session we deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={v.heading} className="card">
                <div className="w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="text-base font-semibold text-navy-800 mb-2">
                  {v.heading}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-navy-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Want to know if we&apos;re the right fit?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Reach out for a free, no-obligation initial consultation. We&apos;ll
          listen to your situation and tell you honestly how we can help.
        </p>
        <Link href="/contact" className="btn-primary text-base px-8 py-4">
          Get in Touch
        </Link>
      </section>
    </>
  );
}
