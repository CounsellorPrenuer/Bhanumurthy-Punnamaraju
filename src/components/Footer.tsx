import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { urlForImage } from '@/lib/sanity.image';
import { SiteSettings } from '@/types/sanity';

interface FooterProps {
  settings: SiteSettings;
}

export default function Footer({ settings }: FooterProps) {
  const logoUrl = settings?.logo?.asset ? urlForImage(settings.logo)?.width(300).url() : '/logo.jpeg';

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Founder', href: '#about-founder' },
    { label: 'Services', href: '#services' },
    { label: 'Mentoria Packages', href: '#mentoria-packages' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact-us' },
  ];

  const email = settings?.contactInfo?.email || 'bpunnamaraju@yahoo.com';
  const phone = settings?.contactInfo?.phone || '+91 9949162220';

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-5">
            <div className="relative h-14 w-52 bg-white/10 rounded-xl p-2 backdrop-blur-xs">
              <Image
                src={logoUrl || '/logo.jpeg'}
                alt={settings?.siteName || 'Gamyasarthi Logo'}
                fill
                className="object-contain object-left px-2"
              />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {settings?.footer?.brandDescription ||
                'Gamyasarthi empowers students and professionals with evidence-based psychometric career mentoring, multi-year roadmaps, and university admission strategies.'}
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={settings?.socialLinks?.linkedin || 'https://linkedin.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-blue-900 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href={settings?.socialLinks?.instagram || 'https://instagram.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-pink-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href={settings?.socialLinks?.twitter || 'https://twitter.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Twitter"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links in strict order */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Mentoria Packages Direct Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Packages
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#mentoria-packages" className="hover:text-amber-400 transition-colors">
                  Grades 8 - 9 Plans
                </Link>
              </li>
              <li>
                <Link href="#mentoria-packages" className="hover:text-amber-400 transition-colors">
                  Grades 10 - 12 Plans
                </Link>
              </li>
              <li>
                <Link href="#mentoria-packages" className="hover:text-amber-400 transition-colors">
                  College Graduates
                </Link>
              </li>
              <li>
                <Link href="#mentoria-packages" className="hover:text-amber-400 transition-colors">
                  Working Professionals
                </Link>
              </li>
              <li>
                <Link href="#mentoria-packages" className="hover:text-amber-400 transition-colors">
                  Custom Add-ons
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Contact Details
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors truncate">
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${phone}`} className="hover:text-white transition-colors">
                  {phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Pan-India Virtual Counseling & In-Person Sessions</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{settings?.footer?.copyright || `© ${new Date().getFullYear()} Gamyasarthi - Bhanumurthy Punnamaraju. All rights reserved.`}</p>
          <div className="flex items-center space-x-6">
            <a href="#home" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#home" className="hover:text-slate-400 transition-colors">Back to top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
