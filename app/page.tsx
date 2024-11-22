import MainBanner from '@/components/MainBanner';
import FeaturedServices from '@/components/FeaturedServices';
import TestimonialsSection from '@/components/TestimonialsSection';
import HowItWorks from '@/components/HowItWorks';

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <MainBanner />
      <HowItWorks />
      <FeaturedServices />
      <TestimonialsSection />
    </div>
  );
}