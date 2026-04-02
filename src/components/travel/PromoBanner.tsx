import { useState } from 'react';
import { Gift, MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const PromoBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-6 md:max-w-sm"
      >
        <div className="relative rounded-2xl border border-slate-200 bg-white/95 p-4 backdrop-blur-xl" style={{ boxShadow: 'var(--shadow-elevated)' }}>
          <button
            onClick={() => setVisible(false)}
            className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition hover:bg-slate-100 hover:text-foreground"
            aria-label="Đóng thông báo"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-start gap-3 pr-6">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-primary">
              <Gift className="h-5 w-5" />
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-foreground">Cần báo giá nhanh?</h4>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                Nhắn Zalo để được tư vấn tour, du thuyền hoặc khách sạn phù hợp ngân sách của bạn.
              </p>
              <a href="https://zalo.me/0345519525" target="_blank" rel="noopener noreferrer" className="btn-primary rounded-full px-4 py-2 text-sm">
                <MessageCircle className="mr-2 h-4 w-4" /> Nhắn Zalo ngay
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromoBanner;
