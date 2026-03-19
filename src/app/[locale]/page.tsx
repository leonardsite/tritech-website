import { useTranslations } from 'next-intl';
import { Hero } from '@/components/Hero';
import { WhoWeAre } from '@/components/sections/WhoWeAre';
import { BusinessSegments } from '@/components/sections/BusinessSegments';
import { Innovation } from '@/components/sections/Innovation';
import { Stats } from '@/components/sections/Stats';
import { NewsPreview } from '@/components/sections/NewsPreview';
import { Gallery } from '@/components/sections/Gallery';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Stats />
      <BusinessSegments />
      <Innovation />
      <NewsPreview />
      <Gallery />
    </>
  );
}
