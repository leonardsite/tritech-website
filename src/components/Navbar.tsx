'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Link } from '@/i18n/navigation';
import { useRouter } from '@/i18n/navigation';
import { localeNames, type Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';

export function Navbar() {
  const t = useTranslations('nav');
  const tCommon = useTranslations('common');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const navItems = [
    { href: '/', label: t('home') },
    {
      label: t('about'),
      children: [
        { href: '/about', label: t('aboutSub.profile') },
        { href: '/about#philosophy', label: t('aboutSub.philosophy') },
      ],
    },
    {
      label: t('organization'),
      children: [
        { href: '/organization', label: t('orgSub.structure') },
        { href: '/organization#board', label: t('orgSub.board') },
        { href: '/organization#personnel', label: t('orgSub.personnel') },
      ],
    },
    {
      label: t('engineering'),
      children: [
        { href: '/engineering', label: t('engSub.overview') },
        { href: '/engineering#smart-urban', label: t('engSub.smartUrban') },
        { href: '/engineering#water-env', label: t('engSub.waterEnv') },
        { href: '/engineering#projects', label: t('engSub.projects') },
      ],
    },
    {
      label: t('investor'),
      children: [
        { href: '/investor-relations', label: t('investorSub.overview') },
        { href: '/investor-relations#financial', label: t('investorSub.financial') },
        { href: '/investor-relations#annual', label: t('investorSub.annual') },
        { href: '/investor-relations#announcements', label: t('investorSub.announcements') },
      ],
    },
    { href: '/news', label: t('news') },
    { href: '/careers', label: t('careers') },
    { href: '/contact', label: t('contact') },
  ];

  const switchLocale = (locale: Locale) => {
    router.replace(pathname, { locale });
    setIsLangOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass-effect border-b border-slate-200/50 shadow-sm dark:border-slate-700/50'
          : 'bg-transparent'
      )}
    >
      <nav className="section-container">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <div className="h-2 w-16 rounded-sm bg-tritech-green" />
              <div className="mt-0.5 h-2 w-16 rounded-sm bg-tritech-brown" />
            </div>
            <span
              className={cn(
                'font-heading text-lg font-bold transition-colors md:text-xl',
                isScrolled
                  ? 'text-tritech-blue dark:text-tritech-blue-400'
                  : 'text-white dark:text-white'
              )}
            >
              TriTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) =>
              'children' in item && item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      isScrolled
                        ? 'text-slate-700 hover:bg-slate-100 hover:text-tritech-blue dark:text-slate-300 dark:hover:bg-slate-800'
                        : 'text-white/90 hover:text-white'
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-1 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-800"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-lg px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-tritech-blue-50 hover:text-tritech-blue dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-tritech-blue-400"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={'href' in item ? item.href : '/'}
                  className={cn(
                    'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isScrolled
                      ? 'text-slate-700 hover:bg-slate-100 hover:text-tritech-blue dark:text-slate-300 dark:hover:bg-slate-800'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Language Switcher */}
            <div className="relative ml-2">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={cn(
                  'flex items-center gap-1 rounded-lg px-2 py-2 text-sm transition-colors',
                  isScrolled
                    ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                    : 'text-white/80 hover:text-white'
                )}
              >
                <Globe className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute right-0 top-full mt-1 w-40 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-800"
                  >
                    {(Object.entries(localeNames) as [Locale, string][]).map(
                      ([code, name]) => (
                        <button
                          key={code}
                          onClick={() => switchLocale(code)}
                          className="block w-full rounded-lg px-4 py-2 text-left text-sm text-slate-700 transition-colors hover:bg-tritech-blue-50 hover:text-tritech-blue dark:text-slate-300 dark:hover:bg-slate-700"
                        >
                          {name}
                        </button>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={cn(
                  'rounded-lg p-2 transition-colors',
                  isScrolled
                    ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                    : 'text-white/80 hover:text-white'
                )}
                aria-label={theme === 'dark' ? tCommon('lightMode') : tCommon('darkMode')}
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'rounded-lg p-2 lg:hidden',
              isScrolled
                ? 'text-slate-700 dark:text-slate-300'
                : 'text-white'
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-slate-200/50 lg:hidden dark:border-slate-700/50"
            >
              <div className="glass-effect rounded-b-xl py-4">
                {navItems.map((item) =>
                  'children' in item && item.children ? (
                    <div key={item.label}>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                        className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform',
                            openDropdown === item.label && 'rotate-180'
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden bg-slate-50 dark:bg-slate-800/50"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-8 py-2.5 text-sm text-slate-600 hover:text-tritech-blue dark:text-slate-400 dark:hover:text-tritech-blue-400"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={'href' in item ? item.href : '/'}
                      className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-tritech-blue dark:text-slate-300 dark:hover:text-tritech-blue-400"
                    >
                      {item.label}
                    </Link>
                  )
                )}

                {/* Mobile Language & Theme */}
                <div className="mt-4 flex items-center gap-4 border-t border-slate-200 px-4 pt-4 dark:border-slate-700">
                  <div className="flex gap-2">
                    {(Object.entries(localeNames) as [Locale, string][]).map(
                      ([code, name]) => (
                        <button
                          key={code}
                          onClick={() => switchLocale(code)}
                          className="rounded-md px-2 py-1 text-xs text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                        >
                          {code.toUpperCase()}
                        </button>
                      )
                    )}
                  </div>
                  {mounted && (
                    <button
                      onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                      }
                      className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                    >
                      {theme === 'dark' ? (
                        <Sun className="h-4 w-4" />
                      ) : (
                        <Moon className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
