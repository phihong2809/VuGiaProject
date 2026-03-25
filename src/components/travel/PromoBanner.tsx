import { useState } from 'react';
import { X, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PromoBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50"
      >
        <div className="bg-card rounded-xl border border-border p-5 relative" style={{ boxShadow: 'var(--shadow-elevated)' }}>
          <button
            onClick={() => setVisible(false)}
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--gradient-gold)' }}>
              <Gift className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-1">🔥 Ưu đãi đặc biệt!</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Giảm đến <span className="font-bold text-primary">20%</span> cho tour Trung Quốc khi đặt trước 30/04. Số lượng có hạn!
              </p>
              <a href="#tours" onClick={() => setVisible(false)} className="btn-primary text-sm px-4 py-2 inline-block">
                Xem ngay
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromoBanner;
