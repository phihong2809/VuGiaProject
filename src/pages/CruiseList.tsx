import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Check,
  PhoneCall,
  Ship,
  Sparkles,
} from 'lucide-react';
import { cruises } from '@/data/cruises';
import { formatPrice, type Tour } from '@/data/tours';
import TourCard from '@/components/travel/TourCard';
import Navbar from '@/components/travel/Navbar';
import Footer from '@/components/travel/Footer';

const CruiseList = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const convertCruiseToTour = (cruise: (typeof cruises)[number]): Tour => ({
    id: cruise.id,
    name: cruise.title,
    destination: cruise.destination,
    category: 'trong-nuoc',
    price: parseInt(cruise.price.replace(/\D/g, ''), 10) || 0,
    duration: cruise.duration,
    images: cruise.images?.length ? cruise.images : [cruise.image],
    description: cruise.description,
    highlights: cruise.includes.slice(0, 3),
    reviews: 0,
    rating: cruise.rating ?? 5,
    itinerary: cruise.itinerary.map((item) => ({
      day: item.day,
      title: item.title,
      description: item.activities?.join(', ') || '',
    })),
    included: cruise.includes,
  });

  const cruiseTours = cruises.map(convertCruiseToTour);
  const startingPrice = cruiseTours.length > 0 ? Math.min(...cruiseTours.map((tour) => tour.price)) : 0;

  return (
    <>
      <Navbar />
      <div className="pt-20 md:pt-24 min-h-screen bg-gradient-to-b from-sky-50 via-background to-slate-50">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.16),_transparent_35%),radial-gradient(circle_at_left,_rgba(59,130,246,0.12),_transparent_30%)]" />
          <div className="container relative mx-auto px-4 py-10 md:py-14">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div className="rounded-3xl border border-sky-100 bg-white/90 p-6 md:p-8 shadow-xl backdrop-blur-sm">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700 mb-4">
                  <Sparkles className="h-4 w-4" /> Du thuyền nổi bật
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                  Danh sách du thuyền đẹp, giá tốt và dễ đặt chỗ
                </h1>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
                  Tổng hợp các hành trình du thuyền Hạ Long, Cát Bà và Đà Nẵng với lịch trình rõ ràng, giá minh bạch và hỗ trợ tư vấn nhanh như tab tour.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                    <div className="text-sm text-muted-foreground">Giá từ</div>
                    <div className="text-xl font-bold text-primary">{formatPrice(startingPrice)}</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                    <div className="text-sm text-muted-foreground">Hành trình</div>
                    <div className="text-xl font-bold text-foreground">{cruiseTours.length} gói du thuyền</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                    <div className="text-sm text-muted-foreground">Hỗ trợ</div>
                    <div className="text-xl font-bold text-foreground">24/7 nhanh chóng</div>
                  </div>
                </div>
              </div>

              <div className="sticky top-28 rounded-xl border border-border bg-card p-6" style={{ boxShadow: 'var(--shadow-card)' }}>
                <div className="mb-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Giá từ</div>
                  <div className="mt-1 text-3xl font-bold text-primary">{formatPrice(startingPrice)}</div>
                  <div className="text-sm text-muted-foreground">/ người</div>
                </div>

                <ul className="mb-6 space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Khởi hành hàng tuần</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Bảo hiểm du lịch</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Hỗ trợ 24/7</li>
                </ul>

                <a href="/#contact" className="btn-primary mb-3 block w-full text-center">
                  Đặt tour ngay
                </a>

                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Liên hệ tư vấn viên qua Zalo:</p>
                  <div className="space-y-1">
                    <a href="https://zalo.me/0972223394" className="block text-primary hover:underline">Tư vấn viên Tân: 0972 223 394</a>
                    <a href="https://zalo.me/0968267791" className="block text-primary hover:underline">Tư vấn viên Hoài Nam: 0968 267 791</a>
                    <a href="https://zalo.me/0345519505" className="block text-primary hover:underline">Tư vấn viên Hoàng Anh: 0345 519 505</a>
                    <a href="https://zalo.me/0365226085" className="block text-primary hover:underline">Tư vấn viên Thành Dương: 0365 226 085</a>
                    <a href="https://zalo.me/0358006668" className="block text-primary hover:underline">Tư vấn viên Mạnh Cường: 0358 006 668</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Ship,
                title: 'Lịch trình rõ ràng',
                description: 'Có sẵn thông tin hành trình, dịch vụ bao gồm và các lưu ý quan trọng trước khi đặt.',
              },
              {
                icon: BadgeCheck,
                title: 'Giá niêm yết minh bạch',
                description: 'Mức giá hiển thị trực tiếp trên từng tour du thuyền để dễ so sánh và lựa chọn.',
              },
              {
                icon: PhoneCall,
                title: 'Đặt tour nhanh',
                description: 'Chỉ cần để lại thông tin hoặc gọi hotline để được giữ chỗ và hỗ trợ ngay.',
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-14 md:pb-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Danh sách du thuyền đang mở bán
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Chọn gói phù hợp và bấm <strong>Đặt tour</strong> để xem chi tiết hành trình, dịch vụ và thông tin liên hệ đặt chỗ.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cruiseTours.map((tour, i) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <TourCard tour={tour} routePrefix="/cruise" />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CruiseList;
