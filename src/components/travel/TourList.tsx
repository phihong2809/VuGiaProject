import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
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

  const filtered = activeCategory === 'all' ? tours : tours.filter((t) => t.category === activeCategory);
  const visible = filtered.slice(0, visibleCount);

  return (
    <section id="tours" className="section-padding bg-muted/40">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-sm font-semibold text-emerald-700 shadow-sm">
            <Sparkles className="h-4 w-4" /> Tour nổi bật
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">Chương trình tour đang mở bán</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Giao diện lọc rõ ràng, thông tin giá minh bạch và thao tác đặt tour nhanh hơn trên cả điện thoại lẫn máy tính.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setVisibleCount(4);
              }}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-slate-900 text-white shadow-[0_16px_28px_-18px_rgba(15,23,42,0.85)]'
                  : 'border border-slate-200 bg-white text-foreground hover:border-primary/40 hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white/80 p-8 text-center text-muted-foreground">
            Hiện chưa có tour phù hợp với bộ lọc này.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((tour, i) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <TourCard tour={tour} />
              </motion.div>
            ))}
          </div>
        )}

        {visibleCount < filtered.length && (
          <div className="mt-8 text-center">
            <button onClick={() => setVisibleCount((v) => v + 4)} className="btn-primary rounded-full px-6">
              Xem thêm tour
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TourList;
