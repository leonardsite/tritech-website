'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowDown, TrendingUp } from 'lucide-react';
import { Link } from '@/i18n/navigation';

type HeroProps = {
  videoSrc?: string;
};

export function Hero({ videoSrc }: HeroProps) {
  const t = useTranslations('hero');
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      {videoSrc ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-hero-gradient" />
      )}

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        {/* Animated water-like effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-tritech-blue/30 to-transparent"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              {t('tagline')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            {t('title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 max-w-2xl text-lg text-white/80 md:text-xl"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/about"
              className="btn-primary text-base shadow-lg shadow-tritech-blue/25"
            >
              {t('cta')}
            </Link>
            <Link
              href="/investor-relations"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <TrendingUp className="h-4 w-4" />
              {t('ctaSecondary')}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-6 w-6 text-white/60" />
      </motion.div>
    </section>
  );
}
