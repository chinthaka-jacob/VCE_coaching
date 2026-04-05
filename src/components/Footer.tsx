import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-white mb-1">
              VCE Maths &amp; Physics
            </p>
            <p className="text-xs text-gold-400 font-medium tracking-widest uppercase mb-4">
              Specialist Coaching
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              Expert, PhD-qualified university academics delivering high-level coaching for VCE students across Victoria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Kew - 3101, Victoria, Australia</li>
              <li>
                ✉️{" "}
                <a
                  href="mailto:eigen.kew@gmail.com"
                  className="hover:text-gold-400 transition-colors"
                >
                  eigen.kew@gmail.com
                </a>
              </li>
              <li>
                📞{" "}
                <a
                  href="tel:+61 410 118 900"
                  className="hover:text-gold-400 transition-colors"
                >
                  +61 410 118 900
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-10 pt-6 text-center text-xs text-gray-500">
          © {currentYear} VCE Maths &amp; Physics Specialist Coaching. All rights reserved.
          &nbsp;|&nbsp; Kew - 3101, Victoria, Australia
        </div>
      </div>
    </footer>
  );
}
