'use client';

import { useTranslations } from 'next-intl';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { SectionHeading } from '@/components/SectionHeading';

const orgStructure = {
  parent: { name: 'TRITECH GROUP LIMITED', color: 'bg-tritech-teal' },
  groups: [
    {
      name: 'ADAS GROUP PTE LTD',
      ownership: '100%',
      color: 'bg-tritech-brown',
      children: [
        'Tritech Engineering & Testing (Singapore) Pte Ltd',
        'Tritech Consultants Pte Ltd',
        'Tritech SysEng Pte Ltd',
        'GeoSoft Pte Ltd (60%)',
      ],
    },
    {
      name: 'TRITECH WATER TECHNOLOGIES PTE LTD',
      ownership: '100%',
      color: 'bg-tritech-navy',
      children: [
        'Tritech Vavie (Singapore) Pte Ltd',
        'Tritech EcoFish Farming Pte Ltd',
        'Terra Tritech Engineering (M) Sdn Bhd',
        'PT Tritech Batam Internasional',
      ],
    },
    {
      name: 'TRITECH ENVIRONMENTAL GROUP CO LTD',
      ownership: '46.86%',
      color: 'bg-tritech-green',
      children: [
        'Tritech (Qingdao) Membrane Technologies Co Ltd',
        'Anhui Clean Environment Biotechnology Co Ltd',
        'Tritech Vavie (Qingdao) Health Care Technologies Co Ltd',
        'Beijing Wisetec Technologies Co Ltd',
      ],
    },
  ],
};

const boardMembers = [
  {
    name: 'Mr Aw Eng Hai',
    title: 'Non-Executive Chairman',
    since: 'Chairman since July 2024',
  },
  {
    name: 'Dr Jeffrey Wang',
    title: 'Managing Director & CEO',
    since: 'Founder, CEO since 1998',
  },
  {
    name: 'Mr Ong Eng Keang',
    title: 'Independent Director',
    since: 'Since December 2021',
  },
  {
    name: 'Mr Roger Tan Chade Phang',
    title: 'Independent Director',
    since: 'Since December 2023',
  },
  {
    name: 'Mr Zhou Xinping',
    title: 'Executive Director',
    since: 'Since January 2022',
  },
];

export function OrganizationContent() {
  const t = useTranslations('organization');

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

      {/* Group Structure */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="section-container">
          <SectionHeading title={t('structure')} />

          <div className="mt-12">
            {/* Parent Company */}
            <AnimateOnScroll>
              <div
                className={`mx-auto max-w-lg rounded-xl ${orgStructure.parent.color} p-5 text-center shadow-lg`}
              >
                <h3 className="font-heading text-lg font-bold text-white">
                  {orgStructure.parent.name}
                </h3>
              </div>
            </AnimateOnScroll>

            {/* Connecting lines */}
            <div className="mx-auto h-8 w-px bg-slate-300 dark:bg-slate-700" />

            {/* Subsidiary Groups */}
            <div className="grid gap-8 md:grid-cols-3">
              {orgStructure.groups.map((group, i) => (
                <AnimateOnScroll key={i} delay={i * 0.15}>
                  <div className="flex flex-col">
                    <div
                      className={`rounded-xl ${group.color} p-4 text-center shadow-md`}
                    >
                      <h4 className="text-sm font-bold text-white">
                        {group.name}
                      </h4>
                      <span className="mt-1 inline-block rounded bg-white/20 px-2 py-0.5 text-xs text-white">
                        {group.ownership}
                      </span>
                    </div>

                    <div className="mt-4 space-y-2">
                      {group.children.map((child, j) => (
                        <div
                          key={j}
                          className={`rounded-lg border-l-4 bg-white p-3 shadow-sm dark:bg-slate-800`}
                          style={{
                            borderColor:
                              i === 0
                                ? '#763D03'
                                : i === 1
                                  ? '#25418F'
                                  : '#00AE4D',
                          }}
                        >
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                            {child}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section
        id="board"
        className="section-padding bg-slate-50 dark:bg-slate-900"
      >
        <div className="section-container">
          <SectionHeading title={t('board')} />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((member, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  {/* Headshot placeholder */}
                  <div className="flex h-48 items-center justify-center bg-gradient-to-br from-tritech-blue/10 to-tritech-teal/10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-tritech-blue/20 text-tritech-blue">
                      <span className="font-heading text-2xl font-bold">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-tritech-blue dark:text-tritech-blue-400">
                      {member.title}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">{member.since}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
