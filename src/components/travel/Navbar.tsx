
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import logo from '@/assets/logo-vugiatravel.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCruiseDropdownOpen, setIsCruiseDropdownOpen] = useState(false); // New state for Cruise dropdown

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="VuGiaTravel" className="h-10 w-10" />
          <span className={`font-display text-xl font-bold ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
            VuGiaTravel
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#about" className={`font-medium transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-primary-foreground/90 hover:text-primary-foreground'}`}>
            Giới thiệu
          </a>
          <Link to="/" className={`font-medium transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-primary-foreground/90 hover:text-primary-foreground'}`}>
            Trang chủ
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`font-medium transition-colors flex items-center gap-1 ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground/90 hover:text-primary-foreground'
              }`}
            >
              Danh sách tour <ChevronDown className="w-4 h-4" />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="bg-card rounded-lg shadow-lg border border-border p-2 min-w-[220px]">
                  <a
                    href="#tours"
                    className="block px-4 py-2 rounded-md text-foreground hover:bg-accent transition-colors"
                  >
                    🇻🇳 Du lịch trong nước
                  </a>
                  <a
                    href="#tours"
                    className="block px-4 py-2 rounded-md text-foreground hover:bg-accent transition-colors"
                  >
                    🇨🇳 Du lịch Trung Quốc
                  </a>
                </div>
              </div>
            )}
          </div>
          {/* Cruise Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsCruiseDropdownOpen(true)}
            onMouseLeave={() => setIsCruiseDropdownOpen(false)}
          >
            <button
              className={`font-medium transition-colors flex items-center gap-1 ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground/90 hover:text-primary-foreground'
              }`}
            >
              Du Thuyền <ChevronDown className="w-4 h-4" />
            </button>

            {isCruiseDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="bg-card rounded-lg shadow-lg border border-border p-2 min-w-[220px]">
                  <a
                    href="/cruise#halong-cruises"
                    className="block px-4 py-2 rounded-md text-foreground hover:bg-accent transition-colors"
                  >
                    Hạ Long
                  </a>
                  <a
                    href="/cruise#catba-cruises"
                    className="block px-4 py-2 rounded-md text-foreground hover:bg-accent transition-colors"
                  >
                    Cát Bà
                  </a>
                  <a
                    href="/cruise#danang-cruises"
                    className="block px-4 py-2 rounded-md text-foreground hover:bg-accent transition-colors"
                  >
                    Đà Nẵng
                  </a>
                </div>
              </div>
            )}
          </div>
          <a href="/#reviews" className={`font-medium transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-primary-foreground/90 hover:text-primary-foreground'}`}>
            Đánh giá
          </a>
          <div
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button
              className={`font-medium transition-colors flex items-center gap-1 ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground/90 hover:text-primary-foreground'
              }`}
            >
              Dịch vụ <ChevronDown className="w-4 h-4" />
            </button>

            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="bg-card rounded-lg shadow-lg border border-border p-2 min-w-[220px]">
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-md text-foreground hover:bg-accent transition-colors"
                  >
                    Visa quốc tế
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-md text-foreground hover:bg-accent transition-colors"
                  >
                    Vé Sun world
                  </a>
                </div>
              </div>
            )}
          </div>
          <a href="/#contact" className={`font-medium transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-primary-foreground/90 hover:text-primary-foreground'}`}>
            Liên hệ
          </a>
          <a href="/#contact" className="btn-primary flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4" /> Đặt tour ngay
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden glass-effect border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <a href="/#about" onClick={() => setIsMobileOpen(false)} className="py-2 text-foreground font-medium">Giới thiệu</a>
            <Link to="/" onClick={() => setIsMobileOpen(false)} className="py-2 text-foreground font-medium">Trang chủ</Link>
            <a href="/#tours" onClick={() => setIsMobileOpen(false)} className="py-2 text-foreground font-medium">🇻🇳 Du lịch trong nước</a>
            <a href="/#tours" onClick={() => setIsMobileOpen(false)} className="py-2 text-foreground font-medium">🇨🇳 Du lịch Trung Quốc</a>
            <a href="/#tours" onClick={() => setIsMobileOpen(false)} className="py-2 text-foreground font-medium">Du thuyền</a> {/* New mobile link for Cruise */}
            <a href="/#reviews" onClick={() => setIsMobileOpen(false)} className="py-2 text-foreground font-medium">Đánh giá</a>
            <Link to="/visa" onClick={() => setIsMobileOpen(false)} className="py-2 text-foreground font-medium">Visa quốc tế</Link>
            <Link to="/sunworld" onClick={() => setIsMobileOpen(false)} className="py-2 text-foreground font-medium">Vé Sun world</Link>
            <a href="/#contact" onClick={() => setIsMobileOpen(false)} className="py-2 text-foreground font-medium">Liên hệ</a>
            <a href="/#contact" onClick={() => setIsMobileOpen(false)} className="btn-primary text-center mt-2">Dặt tour ngay</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
