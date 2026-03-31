import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BadgeCheck, BedDouble, Building2, Check, MapPinned, PhoneCall, Sparkles } from 'lucide-react';
import Navbar from '@/components/travel/Navbar';
import Footer from '@/components/travel/Footer';
import TourCard from '@/components/travel/TourCard';
import { hotels } from '@/data/hotels';
import { formatPrice, type Tour } from '@/data/tours';

const HotelList = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const convertHotelToTour = (hotel: (typeof hotels)[number]): Tour => ({
    id: hotel.id,
    name: hotel.name,
    destination: hotel.area,
    category: 'trong-nuoc',
    duration: `${hotel.stars} sao • Nghỉ dưỡng Hạ Long`,
    price: hotel.price,
    images: hotel.images,
    description: hotel.summary,
    highlights: hotel.highlights.slice(0, 4),
    included: hotel.highlights,
    itinerary: hotel.sections.map((section, index) => ({
      day: index + 1,
      title: section.title,
      description: section.items.join(', '),
    })),
    rating: hotel.rating,
    reviews: 0,
  });

  const hotelTours = hotels.map(convertHotelToTour);
  const startingPrice = hotelTours.length > 0 ? Math.min(...hotelTours.map((hotel) => hotel.price)) : 0;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-background to-slate-50 pt-20 md:pt-24">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.16),_transparent_35%),radial-gradient(circle_at_left,_rgba(14,116,144,0.12),_transparent_30%)]" />
          <div className="container relative mx-auto px-4 py-10 md:py-14">
            <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-xl backdrop-blur-sm md:p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                  <Sparkles className="h-4 w-4" /> Khách sạn nổi bật Hạ Long
                </div>
                <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
                  Danh sách khách sạn đẹp, vị trí tốt và dễ đặt phòng
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                  Tổng hợp khách sạn 4–5 sao tại Bãi Cháy, Hùng Thắng và trung tâm Hạ Long với giá minh bạch, thông tin rõ ràng và hỗ trợ tư vấn nhanh.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm text-muted-foreground">Giá từ</div>
                    <div className="text-xl font-bold text-primary">{formatPrice(startingPrice)}</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm text-muted-foreground">Lưu trú</div>
                    <div className="text-xl font-bold text-foreground">{hotelTours.length} khách sạn</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm text-muted-foreground">Phân khúc</div>
                    <div className="text-xl font-bold text-foreground">4–5 sao</div>
                  </div>
                </div>
              </div>

              <div className="sticky top-28 rounded-xl border border-border bg-card p-6" style={{ boxShadow: 'var(--shadow-card)' }}>
                <div className="mb-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Giá từ</div>
                  <div className="mt-1 text-3xl font-bold text-primary">{formatPrice(startingPrice)}</div>
                  <div className="text-sm text-muted-foreground">/ đêm</div>
                </div>

                <ul className="mb-6 space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Nhiều lựa chọn 4–5 sao</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Vị trí đẹp tại Bãi Cháy</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Hỗ trợ đặt phòng nhanh</li>
                </ul>

                <a href="/#contact" className="btn-primary mb-3 block w-full text-center">
                  Đặt phòng ngay
                </a>

                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Liên hệ tư vấn viên qua Zalo:</p>
                  <div className="space-y-1">
                    <a href="https://zalo.me/0972223394" className="block text-primary hover:underline">Tư vấn viên Tân: 0972 223 394</a>
                    <a href="https://zalo.me/0968267791" className="block text-primary hover:underline">Tư vấn viên Hoài Nam: 0968 267 791</a>
                    <a href="https://zalo.me/0345519505" className="block text-primary hover:underline">Tư vấn viên Hoàng Anh: 0345 519 505</a>
                    <a href="https://zalo.me/0389056861" className="block text-primary hover:underline">Tư vấn viên Thọ Nguyễn: 0389 056 861</a>
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
                icon: BedDouble,
                title: 'Nghỉ dưỡng thoải mái',
                description: 'Tổng hợp khách sạn 4–5 sao với nhiều hạng phòng phù hợp gia đình, cặp đôi và khách công tác.',
              },
              {
                icon: BadgeCheck,
                title: 'Thông tin rõ ràng',
                description: 'Có sẵn địa chỉ, mô tả, tiện nghi nổi bật và lưu ý quan trọng trước khi đặt phòng.',
              },
              {
                icon: PhoneCall,
                title: 'Tư vấn nhanh 24/7',
                description: 'Chỉ cần để lại thông tin hoặc nhắn Zalo để được kiểm tra phòng trống và báo giá thực tế.',
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: Building2, label: 'Khu vực', value: 'Bãi Cháy • Hùng Thắng' },
              { icon: MapPinned, label: 'Phù hợp', value: 'Nghỉ dưỡng & công tác' },
              { icon: BedDouble, label: 'Hạng sao', value: '4 sao đến 5 sao' },
              { icon: PhoneCall, label: 'Hỗ trợ', value: 'CSKH & báo giá nhanh' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                  <div className="font-semibold text-foreground">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-14 md:pb-16">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Danh sách khách sạn đang mở bán
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Chọn khách sạn phù hợp và bấm <strong>Đặt phòng</strong> để xem chi tiết mô tả, địa chỉ, tiện nghi và thông tin liên hệ.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hotelTours.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <TourCard tour={hotel} routePrefix="/hotel" ctaLabel="Đặt phòng" />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HotelList;
