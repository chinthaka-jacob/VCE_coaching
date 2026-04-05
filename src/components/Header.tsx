"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-navy-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="text-lg font-bold tracking-wide text-white group-hover:text-gold-400 transition-colors">
              VCE Maths &amp; Physics
            </span>
            <span className="text-xs text-gold-400 font-medium tracking-widest uppercase">
              Specialist Coaching
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-gold-400 border-b-2 border-gold-400 pb-1"
                    : "text-gray-200 hover:text-gold-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-sm">
              Book a Session
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-gray-200 hover:text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-navy-700 pb-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-2 py-2 text-sm transition-colors ${
                  pathname === link.href
                    ? "text-gold-400 bg-navy-700 rounded"
                    : "text-gray-200 hover:text-gold-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-2">
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary text-sm w-full text-center block">
                Book a Session
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
