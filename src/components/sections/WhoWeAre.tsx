'use client';

import { useTranslations } from 'next-intl';
import { Building2, Award, Users, Globe } from 'lucide-react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { SectionHeading } from '@/components/SectionHeading';

export function WhoWeAre() {
  const t = useTranslations('home.whoWeAre');

  const highlights = [
    {
      icon: Building2,
      text: t('founded'),
      color: 'text-tritech-blue bg-tritech-blue/10',
    },
    {
      icon: Award,
      text: t('listed'),
      color: 'text-tritech-green bg-tritech-green/10',
    },
  ];

  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <div className="section-container">
        <SectionHeading title={t('title')} />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <AnimateOnScroll direction="left">
            <div className="space-y-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`rounded-xl p-3 ${item.color}`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.2}>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                {t('description')}
              </p>
              <p className="text-base leading-relaxed text-slate-500 dark:text-slate-500">
                {t('innovation')}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
