'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Stats() {
  const t = useTranslations('home.stats');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { value: t('years'), label: t('yearsLabel') },
    { value: t('projects'), label: t('projectsLabel') },
    { value: t('staff'), label: t('staffLabel') },
    { value: t('countries'), label: t('countriesLabel') },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-r from-tritech-blue via-tritech-navy to-tritech-blue py-16"
    >
      {/* Background pattern */}
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
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 font-heading text-3xl font-bold text-white md:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white/70 md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
