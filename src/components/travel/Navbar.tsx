
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Phone, Sparkles, X } from 'lucide-react';
import logo from '@/assets/logo-vugiatravel.webp';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location.pathname, location.hash]);

  const sectionHref = (hash: string) => (location.pathname === '/' ? hash : `/${hash}`);
  const isActivePath = (path: string) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  const navLinkClass = (active = false) =>
    `inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-200 ${
      active
        ? 'bg-slate-900 text-white shadow-[0_12px_28px_-18px_rgba(15,23,42,0.85)]'
        : 'text-slate-700 hover:bg-emerald-50 hover:text-primary'
    }`;

  return (
    <nav className="fixed inset-x-0 top-0 z-[999] px-3 pt-3 md:px-4">
      <div className="container mx-auto">
        <div
          className={`nav-shell flex items-center justify-between gap-3 px-3 py-2.5 md:px-4 ${
            isScrolled
              ? 'border-emerald-100/80 bg-white/92 shadow-[0_20px_45px_-28px_rgba(15,23,42,0.42)]'
              : 'border-white/80 bg-white/84 shadow-[0_16px_38px_-28px_rgba(15,23,42,0.34)]'
          }`}
        >
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3 rounded-full border border-primary/10 bg-white/90 px-2.5 py-1.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-white via-emerald-50 to-cyan-50 ring-2 ring-primary/15 shadow-md md:h-12 md:w-12">
              <img src={logo} alt="VuGiaTravel" className="h-8 w-8 object-contain drop-shadow-sm md:h-9 md:w-9" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-base font-bold tracking-tight text-slate-900 md:text-lg">
                VuGiaTravel
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/80 md:text-[11px]">
                Tour • Du thuyền • Khách sạn
              </span>
            </span>
            <span className="hidden rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 lg:inline-flex">
              CSKH 24/7
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex xl:gap-2">
            <a href={sectionHref('#about')} className={navLinkClass(location.pathname === '/' && location.hash === '#about')}>
              Giới thiệu
            </a>
            <Link to="/" className={navLinkClass(location.pathname === '/' && location.hash === '')}>
              Trang chủ
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={navLinkClass(false)}>
                Danh sách tour
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 top-full z-50 pt-3">
                  <div className="min-w-[240px] rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-[0_22px_45px_-28px_rgba(15,23,42,0.45)] backdrop-blur-2xl">
                    <a
                      href={sectionHref('#tours')}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary"
                    >
                      🇻🇳 Du lịch trong nước
                    </a>
                    <a
                      href={sectionHref('#tours')}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary"
                    >
                      🇨🇳 Du lịch Trung Quốc
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link to="/cruise" className={navLinkClass(isActivePath('/cruise'))}>
              Du thuyền
            </Link>
            <Link to="/hotel" className={navLinkClass(isActivePath('/hotel'))}>
              Khách sạn
            </Link>
            <a href={sectionHref('#reviews')} className={navLinkClass(location.pathname === '/' && location.hash === '#reviews')}>
              Đánh giá
            </a>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button className={navLinkClass(false)}>
                Dịch vụ
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesDropdownOpen && (
                <div className="absolute left-0 top-full z-50 pt-3">
                  <div className="min-w-[240px] rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-[0_22px_45px_-28px_rgba(15,23,42,0.45)] backdrop-blur-2xl">
                    <a
                      href={sectionHref('#contact')}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary"
                    >
                      Visa quốc tế
                    </a>
                    <Link
                      to="/tour/halong-2n1d"
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary"
                    >
                      Vé Sun World
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <a href={sectionHref('#contact')} className="btn-primary ml-2 hidden rounded-full px-4 py-2.5 text-sm lg:inline-flex">
              <Phone className="mr-2 h-4 w-4" /> Đặt ngay
            </a>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-emerald-200 hover:text-primary md:hidden"
            aria-label="Mở menu"
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMobileOpen && (
          <div className="mt-2 overflow-hidden rounded-[24px] border border-white/80 bg-white/95 p-3 shadow-[0_20px_48px_-30px_rgba(15,23,42,0.45)] backdrop-blur-2xl md:hidden">
            <div className="mb-3 flex items-center gap-2 rounded-2xl bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
              <Sparkles className="h-4 w-4" /> Điều hướng nhanh toàn bộ dịch vụ
            </div>

            <div className="grid gap-1">
              <a href={sectionHref('#about')} onClick={() => setIsMobileOpen(false)} className="rounded-xl px-3 py-2.5 font-medium text-foreground transition hover:bg-slate-50">Giới thiệu</a>
              <Link to="/" onClick={() => setIsMobileOpen(false)} className="rounded-xl px-3 py-2.5 font-medium text-foreground transition hover:bg-slate-50">Trang chủ</Link>
              <a href={sectionHref('#tours')} onClick={() => setIsMobileOpen(false)} className="rounded-xl px-3 py-2.5 font-medium text-foreground transition hover:bg-slate-50">🇻🇳 Du lịch trong nước</a>
              <a href={sectionHref('#tours')} onClick={() => setIsMobileOpen(false)} className="rounded-xl px-3 py-2.5 font-medium text-foreground transition hover:bg-slate-50">🇨🇳 Du lịch Trung Quốc</a>
              <Link to="/cruise" onClick={() => setIsMobileOpen(false)} className="rounded-xl px-3 py-2.5 font-medium text-foreground transition hover:bg-slate-50">Du thuyền</Link>
              <Link to="/hotel" onClick={() => setIsMobileOpen(false)} className="rounded-xl px-3 py-2.5 font-medium text-foreground transition hover:bg-slate-50">Khách sạn</Link>
              <a href={sectionHref('#reviews')} onClick={() => setIsMobileOpen(false)} className="rounded-xl px-3 py-2.5 font-medium text-foreground transition hover:bg-slate-50">Đánh giá</a>
              <a href={sectionHref('#contact')} onClick={() => setIsMobileOpen(false)} className="rounded-xl px-3 py-2.5 font-medium text-foreground transition hover:bg-slate-50">Visa quốc tế</a>
              <Link to="/tour/halong-2n1d" onClick={() => setIsMobileOpen(false)} className="rounded-xl px-3 py-2.5 font-medium text-foreground transition hover:bg-slate-50">Vé Sun World</Link>
            </div>

            <div className="mt-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-[1px]">
              <div className="rounded-[15px] bg-white/95 p-3">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Hỗ trợ nhanh</div>
                <p className="mt-1 text-sm text-foreground">Tư vấn tour, du thuyền và khách sạn phù hợp ngân sách.</p>
                <a href={sectionHref('#contact')} onClick={() => setIsMobileOpen(false)} className="btn-primary mt-3 w-full rounded-full text-center">
                  <Phone className="mr-2 h-4 w-4" /> Liên hệ ngay
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
