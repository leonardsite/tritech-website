'use client';

import { useTranslations } from 'next-intl';
import {
  Cpu,
  Droplets,
  CheckCircle2,
  Building,
  Monitor,
  Waves,
  FlaskConical,
  Shield,
} from 'lucide-react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { SectionHeading } from '@/components/SectionHeading';

const featuredProjects = [
  {
    title: 'MRT Circle & Downtown Lines',
    description: 'Geotechnical instrumentation and monitoring services for Singapores mass transit expansion.',
    category: 'Infrastructure',
  },
  {
    title: 'Jurong Rock Cavern',
    description: 'Underground rock cavern storage facility at Jurong Island - one of the largest of its kind.',
    category: 'Underground',
  },
  {
    title: 'Jurong Region Line (S$23M)',
    description: 'QP Supervision services for Phase 1 of the Jurong Region Line, awarded by LTA in 2020.',
    category: 'MRT',
  },
  {
    title: 'Reflections at Keppel Bay',
    description: 'Specialist engineering services for the iconic waterfront residential development.',
    category: 'Real Estate',
  },
];

export function EngineeringContent() {
  const t = useTranslations('engineering');

  const smartUrbanItems: string[] = t.raw('smartUrban.items');
  const waterEnvItems: string[] = t.raw('waterEnv.items');

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

      {/* Smart Urban Development */}
      <section
        id="smart-urban"
        className="section-padding bg-white dark:bg-slate-950"
      >
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimateOnScroll direction="left">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-xl bg-tritech-blue/10 p-4 text-tritech-blue">
                  <Cpu className="h-8 w-8" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-slate-900 dark:text-white">
                  {t('smartUrban.title')}
                </h2>
              </div>
              <ul className="space-y-4">
                {smartUrbanItems.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-tritech-blue" />
                    <span className="text-slate-600 dark:text-slate-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Monitor, label: '4D Simulation', color: 'bg-tritech-blue' },
                  { icon: Cpu, label: 'AI Analytics', color: 'bg-tritech-navy' },
                  { icon: Building, label: 'Geotechnical', color: 'bg-tritech-brown' },
                  { icon: Shield, label: 'Monitoring', color: 'bg-tritech-teal' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800"
                  >
                    <div className={`mb-3 rounded-lg ${item.color} p-3 text-white`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Water & Environmental */}
      <section
        id="water-env"
        className="section-padding bg-slate-50 dark:bg-slate-900"
      >
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimateOnScroll direction="left" className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Waves, label: 'Membrane Tech', color: 'bg-tritech-green' },
                  { icon: Droplets, label: 'Water Quality', color: 'bg-tritech-teal' },
                  { icon: FlaskConical, label: 'Desalination', color: 'bg-tritech-navy' },
                  { icon: Shield, label: 'VaVie Products', color: 'bg-tritech-blue' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800"
                  >
                    <div className={`mb-3 rounded-lg ${item.color} p-3 text-white`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={0.2} className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-xl bg-tritech-green/10 p-4 text-tritech-green">
                  <Droplets className="h-8 w-8" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-slate-900 dark:text-white">
                  {t('waterEnv.title')}
                </h2>
              </div>
              <ul className="space-y-4">
                {waterEnvItems.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-tritech-green" />
                    <span className="text-slate-600 dark:text-slate-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="projects"
        className="section-padding bg-white dark:bg-slate-950"
      >
        <div className="section-container">
          <SectionHeading title="Featured Projects" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
                  <span className="mb-3 inline-block rounded-full bg-tritech-blue/10 px-3 py-1 text-xs font-semibold text-tritech-blue dark:bg-tritech-blue/20 dark:text-tritech-blue-400">
                    {project.category}
                  </span>
                  <h3 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
