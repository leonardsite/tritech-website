import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { OrganizationContent } from './OrganizationContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'organization' });
  return { title: t('title') };
}

export default function OrganizationPage() {
  return <OrganizationContent />;
}
