import { Facebook, MessageCircle, Phone } from 'lucide-react';
import logo from '@/assets/logo-vugiatravel.webp';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="VuGiaTravel" className="h-8 w-8" />
            <span className="font-display text-lg font-bold text-primary-foreground">VuGiaTravel</span>
          </div>
          <p className="text-sm leading-relaxed">
            Công ty du lịch uy tín hàng đầu Việt Nam, chuyên tổ chức tour trong nước và quốc tế.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Tour nổi bật</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/tour/halong-2n1d" className="hover:text-secondary transition-colors">Hạ Long</a></li>
            {/* <li><a href="#tours" className="hover:text-secondary transition-colors">Đà Nẵng - Hội An</a></li>
            <li><a href="#tours" className="hover:text-secondary transition-colors">Phú Quốc</a></li>
            <li><a href="#tours" className="hover:text-secondary transition-colors">Bắc Kinh</a></li> */}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Hỗ trợ</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy-policy" className="hover:text-secondary transition-colors">Chính sách bảo mật</a></li>
            <li><a href="/terms-of-service" className="hover:text-secondary transition-colors">Điều khoản sử dụng</a></li>
            <li><a href="/payment-guide" className="hover:text-secondary transition-colors">Hướng dẫn thanh toán</a></li>
            <li><a href="/cancellation-policy" className="hover:text-secondary transition-colors">Chính sách hoàn hủy</a></li>
            <li><a href="#contact" className="hover:text-secondary transition-colors">Liên hệ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Liên hệ</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0968 267 791</div>
            <div>vugiatravel2024@gmail.com</div>
            <div>Căn Ha10-5 Khu Little Việt Nam, Phường Bãi Cháy, Quảng Ninh</div>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61577515502397&sk=directory_communities" className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
             <a href="https://www.tiktok.com/@vugiatravel" className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
              <FaTiktok className="w-4 h-4" />
            </a>
            <a href="https://zalo.me/0968267791" className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-sm">
        © 2024 VuGiaTravel. Tất cả quyền được bảo lưu.
      </div>
    </div>
  </footer>
);

export default Footer;
