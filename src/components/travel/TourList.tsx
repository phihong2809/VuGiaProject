import { useState } from 'react';
import { motion } from 'framer-motion';
import { tours } from '@/data/tours';
import TourCard from './TourCard';

const categories = [
  { key: 'all', label: 'Tất cả' },
  { key: 'trong-nuoc', label: '🇻🇳 Trong nước' },
  { key: 'trung-quoc', label: '🇨🇳 Trung Quốc' },
];

const TourList = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(4);

  const filtered = activeCategory === 'all'
    ? tours
    : tours.filter((t) => t.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);

  return (
    <section id="tours" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Chương Trình Tour Nổi Bật
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Đa dạng tour du lịch trong nước và quốc tế, được thiết kế riêng cho mọi nhu cầu
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => { setActiveCategory(cat.key); setVisibleCount(4); }}
              className={`px-5 py-2 rounded-full font-medium transition-all text-sm ${
                activeCategory === cat.key
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-foreground border border-border hover:border-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((tour, i) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TourCard tour={tour} />
            </motion.div>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount((v) => v + 4)}
              className="btn-primary"
            >
              Xem thêm tour
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TourList;
