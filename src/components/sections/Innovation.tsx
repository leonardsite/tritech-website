'use client';

import { useTranslations } from 'next-intl';
import { Database, Wifi, Brain } from 'lucide-react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { SectionHeading } from '@/components/SectionHeading';

export function Innovation() {
  const t = useTranslations('home.innovation');

  const pillars = [
    {
      icon: Database,
      title: 'Big Data',
      description: 'Cloud computing and data analytics for infrastructure monitoring',
      color: 'bg-tritech-blue',
    },
    {
      icon: Wifi,
      title: 'IoT',
      description: 'Internet of Things sensors for real-time environmental monitoring',
      color: 'bg-tritech-teal',
    },
    {
      icon: Brain,
      title: 'AI',
      description: 'Artificial Intelligence for predictive analysis and automation',
      color: 'bg-tritech-green',
    },
  ];

  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <div className="section-container">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="group text-center">
                <div
                  className={`${pillar.color} mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg transition-transform group-hover:scale-110`}
                >
                  <pillar.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {pillar.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
