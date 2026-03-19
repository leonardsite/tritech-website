'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { SectionHeading } from '@/components/SectionHeading';

const galleryItems = [
  {
    title: 'Membrane Water Treatment System',
    description: 'Integrated MBR, UF, and RO water purification systems',
    image: '/images/pic1.jpg',
  },
  {
    title: 'PoraMax Membrane Filter',
    description: 'Industrial membrane for NSF-compliant water treatment',
    image: '/images/pic2.jpg',
  },
  {
    title: 'Water Quality Monitoring',
    description: 'Real-time water quality monitoring buoy system',
    image: '/images/pic3.jpg',
  },
  {
    title: 'Environmental Monitoring',
    description: 'Solar-powered weather and water resource monitoring',
    image: '/images/pic4.jpg',
  },
  {
    title: 'GEOFEA Software',
    description: 'Geotechnical finite element analysis for tunneling and excavation',
    image: '/images/pic7.jpg',
  },
  {
    title: 'Underground Infrastructure',
    description: 'Rock cavern and underground water reservoir projects',
    image: '/images/pic8.jpg',
  },
];

export function Gallery() {
  const t = useTranslations('home.gallery');

  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <div className="section-container">
        <SectionHeading title={t('title')} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
                {/* Image placeholder - replace with actual images */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-tritech-blue/20 to-tritech-green/20">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {item.image}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-tritech-blue/80 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-full items-center justify-center p-6">
                      <p className="text-center text-sm text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
