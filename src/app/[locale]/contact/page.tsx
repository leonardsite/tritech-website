import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { ContactContent } from './ContactContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return { title: t('title') };
}

export default function ContactPage() {
  return <ContactContent />;
}
