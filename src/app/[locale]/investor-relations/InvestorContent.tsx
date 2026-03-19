'use client';

import { useTranslations } from 'next-intl';
import {
  TrendingUp,
  FileText,
  BarChart3,
  Bell,
  Download,
  ExternalLink,
} from 'lucide-react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { SectionHeading } from '@/components/SectionHeading';

const stockInfo = {
  code: '5G9',
  exchange: 'SGX Catalist',
  price: 'SGD 0.008',
  marketCap: 'SGD 15.06M',
  shares: '1.88B',
  yearRange: 'SGD 0.006 - 0.013',
};

const annualReports = [
  { year: '2025', url: '#' },
  { year: '2024', url: '#' },
  { year: '2023', url: '#' },
];

const announcements = [
  {
    date: '29 Jan 2026',
    title: 'Notice of Extraordinary General Meeting',
    type: 'EGM',
  },
  {
    date: '13 Feb 2026',
    title: 'Results of EGM - Debt Conversion Approved',
    type: 'Results',
  },
  {
    date: '23 Feb 2026',
    title: 'Completion of Debt-to-Equity Conversion',
    type: 'Corporate',
  },
];

export function InvestorContent() {
  const t = useTranslations('investor');

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

      {/* Stock Overview */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Stock Card */}
            <AnimateOnScroll className="lg:col-span-1">
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-tritech-blue to-tritech-navy p-8 text-white shadow-xl dark:border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="h-8 w-8" />
                  <div>
                    <div className="text-sm opacity-80">{t('stockCode')}</div>
                    <div className="font-heading text-2xl font-bold">
                      {stockInfo.code}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-sm opacity-70">{t('exchange')}</span>
                    <span className="text-sm font-semibold">
                      {stockInfo.exchange}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-sm opacity-70">Price</span>
                    <span className="text-sm font-semibold">
                      {stockInfo.price}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-sm opacity-70">Market Cap</span>
                    <span className="text-sm font-semibold">
                      {stockInfo.marketCap}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-sm opacity-70">52W Range</span>
                    <span className="text-sm font-semibold">
                      {stockInfo.yearRange}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm opacity-70">Shares</span>
                    <span className="text-sm font-semibold">
                      {stockInfo.shares}
                    </span>
                  </div>
                </div>

                <a
                  href="https://links.sgx.com/1.0.0/corporate-information/2569"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/30"
                >
                  View on SGX
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </AnimateOnScroll>

            {/* Financial Results */}
            <AnimateOnScroll delay={0.15} className="lg:col-span-2">
              <div id="financial">
                <SectionHeading
                  title={t('financial')}
                  centered={false}
                />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { label: 'FY2025 Revenue', value: 'SGD 24.77M', change: '-9.39%' },
                    { label: 'FY2024 Revenue', value: 'SGD 27.33M', change: '-0.77%' },
                    { label: 'FY2023 Revenue', value: 'SGD 27.55M', change: '+0.35%' },
                    { label: 'FY2022 Revenue', value: 'SGD 27.45M', change: '+20.01%' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800"
                    >
                      <div className="text-sm text-slate-500">{item.label}</div>
                      <div className="mt-1 flex items-end gap-2">
                        <span className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                          {item.value}
                        </span>
                        <span
                          className={`text-xs font-semibold ${
                            item.change.startsWith('+')
                              ? 'text-tritech-green'
                              : 'text-red-500'
                          }`}
                        >
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section
        id="annual"
        className="section-padding bg-slate-50 dark:bg-slate-900"
      >
        <div className="section-container">
          <SectionHeading title={t('annual')} />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {annualReports.map((report, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <a
                  href={report.url}
                  className="group flex flex-col items-center rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
                >
                  <FileText className="mb-4 h-12 w-12 text-tritech-blue transition-transform group-hover:scale-110" />
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                    Annual Report {report.year}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-tritech-blue dark:text-tritech-blue-400">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </span>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section
        id="announcements"
        className="section-padding bg-white dark:bg-slate-950"
      >
        <div className="section-container">
          <SectionHeading title={t('announcements')} />

          <div className="mt-12 space-y-4">
            {announcements.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="flex items-center gap-6 rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
                  <div className="flex-shrink-0">
                    <Bell className="h-5 w-5 text-tritech-teal" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-3 text-sm text-slate-500">
                      <time>{item.date}</time>
                      <span className="rounded bg-tritech-blue/10 px-2 py-0.5 text-xs font-medium text-tritech-blue dark:bg-tritech-blue/20 dark:text-tritech-blue-400">
                        {item.type}
                      </span>
                    </div>
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
