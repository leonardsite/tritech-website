'use client';

import { useTranslations } from 'next-intl';
import { Briefcase, Users, GraduationCap, Heart, ArrowRight, Mail } from 'lucide-react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { SectionHeading } from '@/components/SectionHeading';

const benefits = [
  {
    icon: GraduationCap,
    title: 'Professional Development',
    description: 'Continuous learning opportunities and support for professional certifications.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Work alongside highly qualified professionals from NUS and NTU.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible work arrangements and comprehensive employee benefits.',
  },
  {
    icon: Briefcase,
    title: 'Meaningful Projects',
    description: 'Contribute to major national infrastructure and environmental projects.',
  },
];

export function CareersContent() {
  const t = useTranslations('careers');

  return (
    <>
      {/* Page Header */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-r from-tritech-blue via-tritech-navy to-tritech-blue pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="section-container relative z-10">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
              {t('title')}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              {t('subtitle')}
            </p>
            <div className="mt-4 h-1 w-20 rounded-full bg-tritech-teal" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateOnScroll>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                {t('description')}
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900">
        <div className="section-container">
          <SectionHeading title="Why Join Us" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-tritech-blue/10 text-tritech-blue">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-slate-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="section-container">
          <AnimateOnScroll>
            <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-r from-tritech-blue to-tritech-navy p-8 text-center text-white md:p-12">
              <Mail className="mx-auto mb-4 h-10 w-10" />
              <h2 className="font-heading text-2xl font-bold md:text-3xl">
                Interested in Joining?
              </h2>
              <p className="mt-3 text-white/80">
                Send your resume to our HR department and we will get back to you.
              </p>
              <a
                href="mailto:general@tritech.com.sg"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-tritech-blue transition-all hover:bg-white/90"
              >
                general@tritech.com.sg
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
