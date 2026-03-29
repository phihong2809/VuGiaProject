import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cruises } from '@/data/cruises';
import TourCard from '@/components/travel/TourCard';
import Navbar from '@/components/travel/Navbar';
import Footer from '@/components/travel/Footer';

const CruiseList = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Helper function to convert cruise to tour-like format for TourCard
  const convertCruiseToTour = (cruise: any) => ({
    id: cruise.id,
    name: cruise.title,
    destination: cruise.destination,
    price: parseInt(cruise.price.replace(/\D/g, '')) || 0,
    duration: cruise.duration,
    images: cruise.images || [cruise.image],
    description: cruise.description,
    highlights: cruise.includes.slice(0, 3),
    reviews: 0,
    rating: 4.8,
    itinerary: cruise.itinerary.map((item: any) => ({
      day: item.day,
      title: item.title,
      description: item.activities?.join(', ') || ''
    })),
    included: cruise.includes
  });

  const halongCruises = cruises.filter(cruise => cruise.destination === 'Ha Long');
  const catbaCruises = cruises.filter(cruise => cruise.destination === 'Cat Ba');
  const danangCruises = cruises.filter(cruise => cruise.destination === 'Da Nang');

  return (
    <>
      <Navbar />
      <div className="pt-20 md:pt-24 bg-background min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Du Thuyền
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Trải nghiệm những chuyến du thuyền tuyệt vời trên các vịnh biển đẹp nhất Việt Nam
            </p>
          </div>

          {halongCruises.length > 0 && (
            <section id="halong-cruises" className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Du Thuyền Hạ Long</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {halongCruises.map((cruise, i) => (
                  <motion.div
                    key={cruise.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <TourCard 
                      tour={convertCruiseToTour(cruise) as any}
                      routePrefix="/cruise"
                    />
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {catbaCruises.length > 0 && (
            <section id="catba-cruises" className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Du Thuyền Cát Bà</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catbaCruises.map((cruise, i) => (
                  <motion.div
                    key={cruise.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <TourCard 
                      tour={convertCruiseToTour(cruise) as any}
                      routePrefix="/cruise"
                    />
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {danangCruises.length > 0 && (
            <section id="danang-cruises">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Du Thuyền Đà Nẵng</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {danangCruises.map((cruise, i) => (
                  <motion.div
                    key={cruise.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <TourCard 
                      tour={convertCruiseToTour(cruise) as any}
                      routePrefix="/cruise"
                    />
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CruiseList;
