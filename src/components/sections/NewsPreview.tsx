'use client';

import { useTranslations } from 'next-intl';
import { Calendar, ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { SectionHeading } from '@/components/SectionHeading';
import { Link } from '@/i18n/navigation';

// Sample news data based on actual Tritech announcements
const newsItems = [
  {
    date: '29 Jan 2026',
    title: 'Notice of Extraordinary General Meeting',
    excerpt:
      'An EGM will be held at Tritech Building on 13 February 2026 to discuss debt conversion and transfer of controlling interest.',
  },
  {
    date: '29 Sep 2020',
    title: 'AI-based Data Analytics System Development',
    excerpt:
      'Tritech Group develops an AI-based Data Analytics System (ADAS) for engineering and water-related environmental businesses.',
  },
  {
    date: '10 Jun 2020',
    title: 'S$23.0 Million LTA Contract Award',
    excerpt:
      'Tritech Consultants awarded a S$23.0 million consultancy contract by the Land Transport Authority for Jurong Region Line.',
  },
];

export function NewsPreview() {
  const t = useTranslations('home.news');
  const tNews = useTranslations('news');

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        <SectionHeading title={t('title')} />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {newsItems.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
                {/* Color accent based on position */}
                <div
                  className={`h-1 ${
                    i === 0
                      ? 'bg-tritech-blue'
                      : i === 1
                        ? 'bg-tritech-green'
                        : 'bg-tritech-teal'
                  }`}
                />

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="h-4 w-4" />
                    <time>{item.date}</time>
                  </div>

                  <h3 className="mb-3 font-heading text-lg font-bold text-slate-900 transition-colors group-hover:text-tritech-blue dark:text-white dark:group-hover:text-tritech-blue-400">
                    {item.title}
                  </h3>

                  <p className="mb-4 line-clamp-3 text-sm text-slate-600 dark:text-slate-400">
                    {item.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-tritech-blue dark:text-tritech-blue-400">
                    {tNews('readMore')}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-8 text-center">
          <Link href="/news" className="btn-secondary">
            {t('viewAll')}
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
