'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tContact = useTranslations('contact');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 dark:border-slate-800 dark:bg-slate-950">
      {/* Main Footer */}
      <div className="section-container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex flex-col">
                <div className="h-2 w-12 rounded-sm bg-tritech-green" />
                <div className="mt-0.5 h-2 w-12 rounded-sm bg-tritech-brown" />
              </div>
              <span className="font-heading text-lg font-bold text-white">
                TriTech
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              {t('description')}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="rounded bg-tritech-blue/20 px-2 py-0.5 font-mono text-tritech-blue-400">
                SGX: 5G9
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/about', label: tNav('about') },
                { href: '/organization', label: tNav('organization') },
                { href: '/news', label: tNav('news') },
                { href: '/careers', label: tNav('careers') },
                { href: '/contact', label: tNav('contact') },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-tritech-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t('services')}
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/engineering', label: tNav('engineering') },
                { href: '/investor-relations', label: tNav('investor') },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-tritech-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.geosoft.sg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-tritech-teal"
                >
                  GeoFEA Software
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tritechwater.com.sg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-tritech-teal"
                >
                  Tritech Water
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t('connect')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-tritech-teal" />
                <span>{tContact('singapore.address')}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="h-4 w-4 flex-shrink-0 text-tritech-teal" />
                <a href="tel:+6568482567" className="hover:text-white">
                  {tContact('singapore.tel')}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="h-4 w-4 flex-shrink-0 text-tritech-teal" />
                <a
                  href="mailto:general@tritech.com.sg"
                  className="hover:text-white"
                >
                  {tContact('singapore.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="section-container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} {t('copyright')}
          </p>
          <div className="flex gap-6">
            <Link
              href="/about"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              {t('privacy')}
            </Link>
            <Link
              href="/about"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              {t('disclaimer')}
            </Link>
            <Link
              href="/about"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              {t('sitemap')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
