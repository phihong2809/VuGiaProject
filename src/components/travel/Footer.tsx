import { Facebook, Mail, MessageCircle, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { FaTiktok } from 'react-icons/fa';
import logo from '@/assets/logo-vugiatravel.webp';

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  const sectionHref = (hash: string) => (location.pathname === '/' ? hash : `/${hash}`);

  return (
    <footer className="mt-10 bg-slate-950 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={logo} alt="VuGiaTravel" className="h-10 w-10 rounded-full bg-white p-1" />
              <div>
                <div className="font-display text-lg font-bold text-white">VuGiaTravel</div>
                <div className="text-xs uppercase tracking-[0.22em] text-emerald-300">Tour • Du thuyền • Khách sạn</div>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-300">
              Dịch vụ tư vấn và đặt tour tại Hạ Long với giao diện dễ dùng, thông tin rõ ràng và hỗ trợ nhanh qua nhiều kênh.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Khám phá nhanh</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/" className="transition hover:text-emerald-300">Trang chủ</Link></li>
              <li><Link to="/tour/halong-2n1d" className="transition hover:text-emerald-300">Tour Hạ Long</Link></li>
              <li><Link to="/cruise" className="transition hover:text-emerald-300">Du thuyền</Link></li>
              <li><Link to="/hotel" className="transition hover:text-emerald-300">Khách sạn</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/privacy-policy" className="transition hover:text-emerald-300">Chính sách bảo mật</Link></li>
              <li><Link to="/terms-of-service" className="transition hover:text-emerald-300">Điều khoản sử dụng</Link></li>
              <li><Link to="/payment-guide" className="transition hover:text-emerald-300">Hướng dẫn thanh toán</Link></li>
              <li><Link to="/cancellation-policy" className="transition hover:text-emerald-300">Chính sách hoàn hủy</Link></li>
              <li><a href={sectionHref('#contact')} className="transition hover:text-emerald-300">Liên hệ tư vấn</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Liên hệ</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <a href="tel:0968267791" className="flex items-center gap-2 transition hover:text-emerald-300">
                <Phone className="h-4 w-4" /> 0968 267 791
              </a>
              <a href="mailto:vugiatravel2024@gmail.com" className="flex items-center gap-2 transition hover:text-emerald-300">
                <Mail className="h-4 w-4" /> vugiatravel2024@gmail.com
              </a>
              <div>Căn Ha10-5 Khu Little Việt Nam, Phường Bãi Cháy, Quảng Ninh</div>
            </div>

            <div className="mt-4 flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61577515502397&sk=directory_communities" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition hover:bg-emerald-500 hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.tiktok.com/@vugiatravel" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition hover:bg-emerald-500 hover:text-white">
                <FaTiktok className="h-4 w-4" />
              </a>
              <a href="https://zalo.me/0968267791" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition hover:bg-emerald-500 hover:text-white">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-sm text-slate-400">
          © {currentYear} VuGiaTravel. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
