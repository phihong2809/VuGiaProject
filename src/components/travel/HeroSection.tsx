import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Users, Star } from 'lucide-react';
import heroImage from '@/assets/hero-halong.jpg';

const stats = [
  { icon: MapPin, value: '50+', label: 'Điểm đến' },
  { icon: Users, value: '12,000+', label: 'Khách hàng' },
  { icon: Star, value: '4.9', label: 'Đánh giá' },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Vịnh Hạ Long" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-secondary font-semibold text-lg mb-4 tracking-wider uppercase">
            VuGiaTravel — Đồng hành cùng bạn
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 ">
            Khám Phá Thế Giới
            <br />
            <span className="text-secondary inline-block mt-3">Trọn Vẹn Niềm Vui</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Hàng trăm tour du lịch trong nước và quốc tế với mức giá tốt nhất. 
            Đặt tour dễ dàng, khởi hành mỗi ngày.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#tours" className="btn-secondary text-lg px-8 py-4">
              Xem tour ngay
            </a>
            <a href="#contact" className="btn-primary text-lg px-8 py-4 border border-primary-foreground/30">
              Tư vấn miễn phí
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-8 md:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</div>
              <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#tours">
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
