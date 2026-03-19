'use client';

import { useTranslations } from 'next-intl';
import { Calendar, ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { SectionHeading } from '@/components/SectionHeading';

const allNews = [
  {
    date: '29 Jan 2026',
    title: 'Notice of Extraordinary General Meeting',
    excerpt:
      'EGM to be held at Tritech Building on 13 February 2026 to discuss debt conversion and transfer of controlling interest to Lee Sui Hee.',
  },
  {
    date: '29 Sep 2020',
    title: 'AI-based Data Analytics System (ADAS) Development',
    excerpt:
      'Tritech develops an AI-based Data Analytics System for both engineering and water-related environmental businesses, leveraging Big Data Analytics.',
  },
  {
    date: '18 Sep 2020',
    title: 'VaVie Clean Wash Sanitize Product Launch',
    excerpt:
      'Maiden foray into the sanitiser and disinfectant industry with the proprietary VaVie CWS product, leveraging water and membrane technology expertise.',
  },
  {
    date: '10 Jun 2020',
    title: 'S$23.0 Million LTA Consultancy Contract',
    excerpt:
      'Tritech Consultants awarded S$23.0 million contract for QP Supervision Services for Jurong Region Line Phase 1 by the Land Transport Authority.',
  },
  {
    date: '29 May 2020',
    title: 'VaVie SACW Passes Coronavirus Efficacy Test',
    excerpt:
      'VaVie Strong Alkaline Cleaning Water kills 99.90% or more of human coronavirus. Included in Singapore NEA Interim List of effective products.',
  },
];

export function NewsContent() {
  const t = useTranslations('news');

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

      {/* News List */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="section-container">
          <div className="mx-auto max-w-3xl space-y-6">
            {allNews.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <article className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
                  <div className="mb-3 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="h-4 w-4" />
                    <time>{item.date}</time>
                  </div>

                  <h2 className="mb-3 font-heading text-xl font-bold text-slate-900 transition-colors group-hover:text-tritech-blue dark:text-white dark:group-hover:text-tritech-blue-400">
                    {item.title}
                  </h2>

                  <p className="mb-4 text-slate-600 dark:text-slate-400">
                    {item.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-tritech-blue dark:text-tritech-blue-400">
                    {t('readMore')}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
