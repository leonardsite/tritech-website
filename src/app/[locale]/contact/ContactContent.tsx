'use client';

import { useTranslations } from 'next-intl';
import {
  MapPin,
  Phone,
  Mail,
  Printer,
  Building2,
  Send,
} from 'lucide-react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { SectionHeading } from '@/components/SectionHeading';

export function ContactContent() {
  const t = useTranslations('contact');

  return (
    <>
      {/* Page Header */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-r from-tritech-blue via-tritech-navy to-tritech-blue pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="section-container relative z-10">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
              {t('title')}
            </h1>
            <div className="mt-4 h-1 w-20 rounded-full bg-tritech-teal" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Office Cards */}
            <div className="space-y-6">
              {/* Singapore HQ */}
              <AnimateOnScroll direction="left">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-xl bg-tritech-blue/10 p-3 text-tritech-blue">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                      {t('singapore.title')}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {t('singapore.company')}
                    </p>
                    <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-tritech-teal" />
                      <span>{t('singapore.address')}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <Phone className="h-4 w-4 flex-shrink-0 text-tritech-teal" />
                      <a href="tel:+6568482567" className="hover:text-tritech-blue">
                        {t('singapore.tel')}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <Printer className="h-4 w-4 flex-shrink-0 text-tritech-teal" />
                      <span>{t('singapore.fax')}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <Mail className="h-4 w-4 flex-shrink-0 text-tritech-teal" />
                      <a
                        href="mailto:general@tritech.com.sg"
                        className="hover:text-tritech-blue"
                      >
                        {t('singapore.email')}
                      </a>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div className="mt-6 aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-700">
                    <div className="flex h-full items-center justify-center text-sm text-slate-500">
                      Google Maps - 31 Changi South Ave 2, Singapore
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* China Office */}
              <AnimateOnScroll direction="left" delay={0.15}>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-xl bg-tritech-green/10 p-3 text-tritech-green">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                      {t('china.title')}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {t('china.company')}
                    </p>
                    <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-tritech-teal" />
                      <span>{t('china.address')}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <Phone className="h-4 w-4 flex-shrink-0 text-tritech-teal" />
                      <a href="tel:+8653283189333" className="hover:text-tritech-blue">
                        {t('china.tel')}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <Mail className="h-4 w-4 flex-shrink-0 text-tritech-teal" />
                      <a
                        href="mailto:tritech@tritech.com.sg"
                        className="hover:text-tritech-blue"
                      >
                        {t('china.email')}
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Contact Form */}
            <AnimateOnScroll direction="right" delay={0.1}>
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <h2 className="mb-6 font-heading text-xl font-bold text-slate-900 dark:text-white">
                  {t('form.title')}
                </h2>

                <form className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      {t('form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition-colors focus:border-tritech-blue focus:outline-none focus:ring-2 focus:ring-tritech-blue/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      {t('form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition-colors focus:border-tritech-blue focus:outline-none focus:ring-2 focus:ring-tritech-blue/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      {t('form.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition-colors focus:border-tritech-blue focus:outline-none focus:ring-2 focus:ring-tritech-blue/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      {t('form.message')}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition-colors focus:border-tritech-blue focus:outline-none focus:ring-2 focus:ring-tritech-blue/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full gap-2">
                    <Send className="h-4 w-4" />
                    {t('form.submit')}
                  </button>
                </form>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
