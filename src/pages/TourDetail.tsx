import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Star, Check, Calendar } from 'lucide-react';
import { tours, formatPrice } from '@/data/tours';
import Navbar from '@/components/travel/Navbar';
import Footer from '@/components/travel/Footer';
import Contact from '@/components/travel/Contact';

const TourDetail = () => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="font-display text-2xl font-bold text-foreground">Tour không tìm thấy</h2>
        <Link to="/" className="btn-primary">Về trang chủ</Link>
      </div>
    );
  }

  const hasDiscount = tour.originalPrice && tour.originalPrice > tour.price;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img src={tour.image} alt={tour.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-10">
            <Link to="/" className="inline-flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground mb-4 text-sm">
              <ArrowLeft className="w-4 h-4" /> Quay lại
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-3"
            >
              {tour.name}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {tour.destination}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {tour.duration}</span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-secondary text-secondary" /> {tour.rating} ({tour.reviews} đánh giá)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Giới thiệu</h2>
              <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Điểm nổi bật</h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {tour.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" /> {h}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Lịch trình</h2>
              <div className="space-y-4">
                {tour.itinerary.map((item) => (
                  <div key={item.day} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Ngày {item.day}: {item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Bao gồm</h2>
              <div className="flex flex-wrap gap-2">
                {tour.included.map((item) => (
                  <span key={item} className="bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-sm">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Price sidebar */}
          <div>
            <div className="bg-card rounded-xl p-6 border border-border sticky top-24" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="mb-4">
                <div className="text-3xl font-bold text-primary">{formatPrice(tour.price)}</div>
                {hasDiscount && (
                  <div className="text-muted-foreground line-through">{formatPrice(tour.originalPrice!)}</div>
                )}
                <div className="text-sm text-muted-foreground">/ người</div>
              </div>

              <ul className="space-y-2 mb-6 text-sm text-foreground">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Khởi hành hàng tuần</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Bảo hiểm du lịch</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Hướng dẫn viên chuyên nghiệp</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Hỗ trợ 24/7</li>
              </ul>

              <a href="#contact-detail" className="btn-primary w-full text-center block mb-3">
                Đặt tour ngay
              </a>
              <a href="tel:0968267791" className="btn-secondary w-full text-center block">
                Gọi tư vấn: 0968 267 791
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="contact-detail">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default TourDetail;
