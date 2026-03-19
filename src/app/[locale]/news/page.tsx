import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { NewsContent } from './NewsContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'news' });
  return { title: t('title') };
}

export default function NewsPage() {
  return <NewsContent />;
}
