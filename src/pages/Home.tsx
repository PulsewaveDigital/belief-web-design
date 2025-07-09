import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import LeadershipSection from '@/components/home/LeadershipSection';
import ProgramsPreview from '@/components/home/ProgramsPreview';
import FinanceSection from '@/components/home/FinanceSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <LeadershipSection />
      <ProgramsPreview />
      <FinanceSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;