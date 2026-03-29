import Navbar from '@/components/travel/Navbar';
import HeroSection from '@/components/travel/HeroSection';
import TourList from '@/components/travel/TourList';
import WhyChoose from '@/components/travel/WhyChoose';
import Reviews from '@/components/travel/Reviews';
import Contact from '@/components/travel/Contact';
import Footer from '@/components/travel/Footer';
import PromoBanner from '@/components/travel/PromoBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <section id="about" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-8">Giới thiệu về chúng tôi</h2>
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
            <h3 className="font-semibold text-xl text-foreground mb-6">Thông tin công ty</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <p><strong className="text-foreground">Tên công ty:</strong> CÔNG TY TNHH VŨ GIA TRAVEL</p>
                <p><strong className="text-foreground">Mã số thuế:</strong> 5702201563</p>
                <p><strong className="text-foreground">Địa chỉ Thuế:</strong> Căn Ha10-5 Khu Little Việt Nam, Phường Bãi Cháy, Quảng Ninh</p>
                <p><strong className="text-foreground">Địa chỉ:</strong> Căn Ha10-5 Khu Little Việt Nam, Phường Bãi Cháy, Tỉnh Quảng Ninh, Việt Nam</p>
                <p><strong className="text-foreground">Tình trạng:</strong> Đang hoạt động</p>
              </div>
              <div className="space-y-3">
                <p><strong className="text-foreground">Tên quốc tế:</strong> VU GIA TRAVEL COMPANY LIMITED</p>
                <p><strong className="text-foreground">Tên viết tắt:</strong> VU GIA TRAVEL CO., LTD</p>
                <p><strong className="text-foreground">Người đại diện:</strong> VŨ THÀNH ĐƯƠNG</p>
                <p><strong className="text-foreground">Ngành nghề chính:</strong> Đại lý du lịch</p>
                <p><strong className="text-foreground">Loại hình DN:</strong> Công ty trách nhiệm hữu hạn ngoài NN</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <h4 className="font-semibold text-lg text-foreground mb-4">Doanh nghiệp liên quan</h4>
              <p className="text-sm"><strong className="text-foreground">HỘ KINH DOANH - MOON COFFEE</strong></p>
              <p className="text-sm"><strong className="text-foreground">Điện thoại:</strong> 0365226085</p>
              <p className="text-sm"><strong className="text-foreground">Ngày hoạt động:</strong> 2025-09-19</p>
              <p className="text-sm"><strong className="text-foreground">Quản lý bởi:</strong> Thuế cơ sở 1 tỉnh Quảng Ninh</p>
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
