import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, MapPin, ShieldCheck, Star, Users } from 'lucide-react';
import heroImage from '@/assets/hero-halong.webp';

const stats = [
  { icon: MapPin, value: '50+', label: 'Điểm đến nổi bật' },
  { icon: Users, value: '12,000+', label: 'Khách hàng tin chọn' },
  { icon: Star, value: '4.9/5', label: 'Đánh giá hài lòng' },
];

const quickPoints = ['Tư vấn địa phương', 'Giá minh bạch', 'Hỗ trợ nhanh 24/7'];

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Vịnh Hạ Long" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-12">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-md"
          >
            <ShieldCheck className="h-4 w-4 text-secondary" /> VuGiaTravel • Tour • Du thuyền • Khách sạn
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-5 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl"
          >
            Khám phá Hạ Long
            <br />
            <span className="mt-2 inline-block text-secondary">trọn gói, dễ đặt, hỗ trợ nhanh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mb-6 max-w-3xl text-base text-primary-foreground/85 md:text-xl"
          >
            Từ tour nghỉ dưỡng, du thuyền đến khách sạn 4–5 sao, mọi thông tin đều được trình bày rõ ràng để bạn chọn nhanh và đặt dễ hơn.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-8 flex flex-wrap justify-center gap-2"
          >
            {quickPoints.map((item) => (
              <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white/90 backdrop-blur-sm">
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <a href="#tours" className="btn-secondary text-base md:text-lg px-7 py-3.5">
              Xem tour ngay <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#contact" className="rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/16 md:text-lg">
              Tư vấn miễn phí
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="grid gap-3 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-md">
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-secondary" />
                <div className="text-2xl font-bold text-primary-foreground md:text-3xl">{stat.value}</div>
                <div className="text-sm text-primary-foreground/75">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#tours" aria-label="Cuộn xuống danh sách tour">
          <ChevronDown className="h-8 w-8 text-primary-foreground/70" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
