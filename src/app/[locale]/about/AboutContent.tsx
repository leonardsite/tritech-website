'use client';

import { useTranslations } from 'next-intl';
import { Building2, Target, History, Users, Award, Globe } from 'lucide-react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { SectionHeading } from '@/components/SectionHeading';

export function AboutContent() {
  const t = useTranslations('about');

  return (
    <>
      {/* Page Header */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-r from-tritech-blue via-tritech-navy to-tritech-blue pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="section-container relative z-10">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
              {t('title')}
            </h1>
            <div className="mt-4 h-1 w-20 rounded-full bg-tritech-teal" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Corporate Profile */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimateOnScroll direction="left">
              <SectionHeading title={t('profile.title')} centered={false} />
              <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                {t('profile.description')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { icon: Building2, label: 'Est. 1999', sublabel: 'Singapore HQ' },
                  { icon: Award, label: 'SGX Listed', sublabel: 'Since 2008' },
                  { icon: Users, label: '300+ Staff', sublabel: '60% Professional' },
                  { icon: Globe, label: 'Asia-Pacific', sublabel: 'SG, CN, MY' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="rounded-lg bg-tritech-blue/10 p-2 text-tritech-blue dark:bg-tritech-blue/20">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {item.label}
                      </div>
                      <div className="text-xs text-slate-500">{item.sublabel}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-tritech-blue/20 to-tritech-green/20">
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    Tritech Building, Changi South
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        id="philosophy"
        className="section-padding bg-slate-50 dark:bg-slate-900"
      >
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateOnScroll>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-tritech-green/10 text-tritech-green">
                <Target className="h-8 w-8" />
              </div>
              <SectionHeading title={t('philosophy.title')} />
              <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                {t('philosophy.description')}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: 'Innovation',
                    desc: 'Pushing the boundaries of engineering technology',
                    color: 'border-tritech-blue',
                  },
                  {
                    title: 'Excellence',
                    desc: 'Pursuit of quality in everything we do',
                    color: 'border-tritech-green',
                  },
                  {
                    title: 'Integrity',
                    desc: 'Building trust through transparency and ethics',
                    color: 'border-tritech-teal',
                  },
                ].map((value, i) => (
                  <div
                    key={i}
                    className={`rounded-xl border-t-4 bg-white p-6 shadow-sm dark:bg-slate-800 ${value.color}`}
                  >
                    <h3 className="mb-2 font-heading text-lg font-bold text-slate-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
