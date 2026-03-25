import Navbar from '@/components/travel/Navbar';
import HeroSection from '@/components/travel/HeroSection';
import TourList from '@/components/travel/TourList';
import WhyChoose from '@/components/travel/WhyChoose';
import Reviews from '@/components/travel/Reviews';
import Contact from '@/components/travel/Contact';
import Footer from '@/components/travel/Footer';
import PromoBanner from '@/components/travel/PromoBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <TourList />
      <Reviews />
      <Contact />
      <Footer />
      <PromoBanner />
    </div>
  );
};

export default Index;
