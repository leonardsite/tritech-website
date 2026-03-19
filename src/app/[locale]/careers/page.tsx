import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { CareersContent } from './CareersContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'careers' });
  return { title: t('title') };
}

export default function CareersPage() {
  return <CareersContent />;
}
