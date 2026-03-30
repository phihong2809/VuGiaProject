
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import logo from '@/assets/logo-vugiatravel.webp';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname, location.hash]);

  const sectionHref = (hash: string) => (location.pathname === '/' ? hash : `/${hash}`);
  const navTextClass = 'text-slate-800 hover:text-primary';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[999] border-b transition-all duration-300 ${
      isScrolled
        ? 'border-slate-200/90 bg-white/95 shadow-[0_12px_36px_-18px_rgba(15,23,42,0.35)] backdrop-blur-xl'
        : 'border-white/70 bg-white/88 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.3)] backdrop-blur-xl'
    }`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        <Link
          to="/"
          className="group flex items-center gap-3 rounded-full border border-primary/10 bg-white/95 px-2.5 py-1.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-white via-emerald-50 to-cyan-50 ring-2 ring-primary/15 shadow-md">
            <img src={logo} alt="VuGiaTravel" className="h-8 w-8 object-contain drop-shadow-sm md:h-9 md:w-9" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-wide text-slate-900 md:text-lg">
              VuGiaTravel
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/80 md:text-[11px]">
              Du lịch & Du thuyền
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href={sectionHref('#about')} className={`font-medium transition-colors ${navTextClass}`}>
            Giới thiệu
          </a>
          <Link to="/" className={`font-medium transition-colors ${navTextClass}`}>
            Trang chủ
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className={`flex items-center gap-1 font-medium transition-colors ${navTextClass}`}>
              Danh sách tour <ChevronDown className="h-4 w-4" />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 top-full z-50 pt-2">
                <div className="min-w-[220px] rounded-lg border border-border bg-card p-2 shadow-lg">
                  <a
                    href={sectionHref('#tours')}
                    className="block rounded-md px-4 py-2 text-foreground transition-colors hover:bg-accent"
                  >
                    🇻🇳 Du lịch trong nước
                  </a>
                  <a
                    href={sectionHref('#tours')}
                    className="block rounded-md px-4 py-2 text-foreground transition-colors hover:bg-accent"
                  >
                    🇨🇳 Du lịch Trung Quốc
                  </a>
                </div>
              </div>
            )}
          </div>

          <Link to="/cruise" className={`font-medium transition-colors ${navTextClass}`}>
            Du Thuyền
          </Link>

          <a href={sectionHref('#reviews')} className={`font-medium transition-colors ${navTextClass}`}>
            Đánh giá
          </a>

          <div
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button className={`flex items-center gap-1 font-medium transition-colors ${navTextClass}`}>
              Dịch vụ <ChevronDown className="h-4 w-4" />
            </button>

            {isServicesDropdownOpen && (
              <div className="absolute left-0 top-full z-50 pt-2">
                <div className="min-w-[220px] rounded-lg border border-border bg-card p-2 shadow-lg">
                  <a
                    href={sectionHref('#contact')}
                    className="block rounded-md px-4 py-2 text-foreground transition-colors hover:bg-accent"
                  >
                    Visa quốc tế
                  </a>
                  <Link
                    to="/tour/halong-2n1d"
                    className="block rounded-md px-4 py-2 text-foreground transition-colors hover:bg-accent"
                  >
                    Vé Sun World
                  </Link>
                </div>
              </div>
            )}
          </div>

          <a href={sectionHref('#contact')} className={`font-medium transition-colors ${navTextClass}`}>
            Liên hệ
          </a>
          <a href={sectionHref('#contact')} className="btn-primary flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4" /> Đặt tour ngay
          </a>
        </div>

        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-slate-800 md:hidden">
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-xl md:hidden">
          <div className="container mx-auto flex flex-col gap-3 px-4 py-4">
            <a href={sectionHref('#about')} onClick={() => setIsMobileOpen(false)} className="py-2 font-medium text-foreground">Giới thiệu</a>
            <Link to="/" onClick={() => setIsMobileOpen(false)} className="py-2 font-medium text-foreground">Trang chủ</Link>
            <a href={sectionHref('#tours')} onClick={() => setIsMobileOpen(false)} className="py-2 font-medium text-foreground">🇻🇳 Du lịch trong nước</a>
            <a href={sectionHref('#tours')} onClick={() => setIsMobileOpen(false)} className="py-2 font-medium text-foreground">🇨🇳 Du lịch Trung Quốc</a>
            <Link to="/cruise" onClick={() => setIsMobileOpen(false)} className="py-2 font-medium text-foreground">Du thuyền</Link>
            <a href={sectionHref('#reviews')} onClick={() => setIsMobileOpen(false)} className="py-2 font-medium text-foreground">Đánh giá</a>
            <a href={sectionHref('#contact')} onClick={() => setIsMobileOpen(false)} className="py-2 font-medium text-foreground">Visa quốc tế</a>
            <Link to="/tour/halong-2n1d" onClick={() => setIsMobileOpen(false)} className="py-2 font-medium text-foreground">Vé Sun World</Link>
            <a href={sectionHref('#contact')} onClick={() => setIsMobileOpen(false)} className="py-2 font-medium text-foreground">Liên hệ</a>
            <a href={sectionHref('#contact')} onClick={() => setIsMobileOpen(false)} className="btn-primary mt-2 text-center">Đặt tour ngay</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
