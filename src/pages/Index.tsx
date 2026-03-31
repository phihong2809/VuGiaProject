import { BadgeCheck, Building2, MapPinned } from 'lucide-react';
import Navbar from '@/components/travel/Navbar';
import HeroSection from '@/components/travel/HeroSection';
import TourList from '@/components/travel/TourList';
import WhyChoose from '@/components/travel/WhyChoose';
import Reviews from '@/components/travel/Reviews';
import Contact from '@/components/travel/Contact';
import Footer from '@/components/travel/Footer';
import PromoBanner from '@/components/travel/PromoBanner';

const companyHighlights = [
  {
    icon: Building2,
    title: 'Doanh nghiệp rõ ràng',
    description: 'Thông tin pháp lý và địa chỉ hoạt động minh bạch, giúp khách yên tâm khi đặt dịch vụ.',
  },
  {
    icon: BadgeCheck,
    title: 'Tư vấn tận tâm',
    description: 'Hỗ trợ nhanh qua điện thoại, Zalo và mạng xã hội với đội ngũ tư vấn địa phương.',
  },
  {
    icon: MapPinned,
    title: 'Am hiểu Hạ Long',
    description: 'Tập trung vào tour, du thuyền và khách sạn tại Hạ Long để tư vấn đúng nhu cầu thực tế.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <section id="about" className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.1),_transparent_24%),radial-gradient(circle_at_left,_rgba(16,185,129,0.08),_transparent_22%)]" />
        <div className="container relative mx-auto px-4">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center rounded-full border border-emerald-200 bg-white/90 px-3 py-1 text-sm font-semibold text-emerald-700 shadow-sm">
              Về VuGiaTravel
            </div>
            <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">Thông tin doanh nghiệp & năng lực phục vụ</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Chúng tôi xây dựng trải nghiệm đặt tour, du thuyền và khách sạn rõ ràng, nhanh gọn và dễ tin cậy hơn cho khách hàng.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[var(--shadow-card)] backdrop-blur-sm md:p-8">
              <h3 className="mb-6 text-xl font-semibold text-foreground">Thông tin công ty</h3>
              <div className="grid gap-6 text-sm md:grid-cols-2">
                <div className="space-y-3 leading-relaxed text-slate-700">
                  <p><strong className="text-foreground">Tên công ty:</strong> CÔNG TY TNHH VŨ GIA TRAVEL</p>
                  <p><strong className="text-foreground">Mã số thuế:</strong> 5702201563</p>
                  <p><strong className="text-foreground">Địa chỉ thuế:</strong> Căn Ha10-5 Khu Little Việt Nam, Phường Bãi Cháy, Quảng Ninh</p>
                  <p><strong className="text-foreground">Địa chỉ:</strong> Căn Ha10-5 Khu Little Việt Nam, Phường Bãi Cháy, Tỉnh Quảng Ninh, Việt Nam</p>
                  <p><strong className="text-foreground">Tình trạng:</strong> Đang hoạt động</p>
                </div>
                <div className="space-y-3 leading-relaxed text-slate-700">
                  <p><strong className="text-foreground">Tên quốc tế:</strong> VU GIA TRAVEL COMPANY LIMITED</p>
                  <p><strong className="text-foreground">Tên viết tắt:</strong> VU GIA TRAVEL CO., LTD</p>
                  <p><strong className="text-foreground">Người đại diện:</strong> VŨ THÀNH ĐƯƠNG</p>
                  <p><strong className="text-foreground">Ngành nghề chính:</strong> Đại lý du lịch</p>
                  <p><strong className="text-foreground">Loại hình DN:</strong> Công ty trách nhiệm hữu hạn ngoài NN</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {companyHighlights.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-[var(--shadow-card)]">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              ))}

              <div className="rounded-2xl border border-sky-200 bg-sky-50/80 p-5 text-sm shadow-sm">
                <h4 className="mb-3 font-semibold text-foreground">Doanh nghiệp liên quan</h4>
                <div className="space-y-2 leading-relaxed text-slate-700">
                  <p><strong className="text-foreground">HỘ KINH DOANH - MOON COFFEE</strong></p>
                  <p><strong className="text-foreground">Điện thoại:</strong> 0365226085</p>
                  <p><strong className="text-foreground">Ngày hoạt động:</strong> 2025-09-19</p>
                  <p><strong className="text-foreground">Quản lý bởi:</strong> Thuế cơ sở 1 tỉnh Quảng Ninh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChoose />
      <TourList />
      <Reviews />
      <Contact />
      <Footer />
      <PromoBanner />
    </div>
  );
};

export default Index;
