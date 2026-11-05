'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { urlForImage } from '@/lib/sanity.image';
import { SiteSettings } from '@/types/sanity';

interface NavbarProps {
  settings: SiteSettings;
}

export default function Navbar({ settings }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact ordered navigation items required:
  // Home → About Founder → Services → Mentoria Packages → Testimonials → Contact Us
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Founder', href: '#about-founder' },
    { label: 'Services', href: '#services' },
    { label: 'Mentoria Packages', href: '#mentoria-packages' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact-us' },
  ];

  const logoUrl = settings?.logo?.asset ? urlForImage(settings.logo)?.width(300).url() : '/logo.jpeg';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative h-12 w-44 sm:h-14 sm:w-52">
              <Image
                src={logoUrl || '/logo.jpeg'}
                alt={settings?.siteName || 'Gamyasarthi Logo'}
                fill
                className="object-contain object-left transition-transform group-hover:scale-105 duration-200"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Exact order */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-900 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Primary CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#contact-us"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span>{settings?.primaryCta?.title || 'Book a Session'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-900 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-900"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:text-blue-900 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="#contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-blue-900 text-white font-semibold py-3 rounded-xl shadow-sm"
              >
                <span>{settings?.primaryCta?.title || 'Book a Session'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
