'use client';

import { AnimateOnScroll } from './AnimateOnScroll';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <AnimateOnScroll className={cn(centered && 'text-center', className)}>
      <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      <div
        className={cn(
          'mb-4 h-1 w-16 rounded-full bg-tritech-teal',
          centered && 'mx-auto'
        )}
      />
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </AnimateOnScroll>
  );
}
