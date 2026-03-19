'use client';

import { useTranslations } from 'next-intl';
import {
  Building,
  Droplets,
  Cpu,
  Leaf,
  ArrowRight,
} from 'lucide-react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { SectionHeading } from '@/components/SectionHeading';
import { Link } from '@/i18n/navigation';

export function BusinessSegments() {
  const t = useTranslations('home.business');

  const segments = [
    {
      icon: Cpu,
      title: t('smartUrban.title'),
      description: t('smartUrban.description'),
      color: 'from-tritech-blue to-tritech-navy',
      iconBg: 'bg-tritech-blue/10 text-tritech-blue',
      href: '/engineering#smart-urban',
    },
    {
      icon: Droplets,
      title: t('waterEnv.title'),
      description: t('waterEnv.description'),
      color: 'from-tritech-green to-tritech-teal',
      iconBg: 'bg-tritech-green/10 text-tritech-green',
      href: '/engineering#water-env',
    },
  ];

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        <SectionHeading title={t('title')} />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {segments.map((segment, i) => (
            <AnimateOnScroll key={i} delay={i * 0.15}>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
                {/* Gradient accent line */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${segment.color}`}
                />

                <div className={`mb-6 inline-block rounded-xl p-4 ${segment.iconBg}`}>
                  <segment.icon className="h-8 w-8" />
                </div>

                <h3 className="mb-4 font-heading text-2xl font-bold text-slate-900 dark:text-white">
                  {segment.title}
                </h3>

                <p className="mb-6 text-slate-600 dark:text-slate-400">
                  {segment.description}
                </p>

                <Link
                  href={segment.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-tritech-blue transition-colors hover:text-tritech-blue-600 dark:text-tritech-blue-400"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
