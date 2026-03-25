import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import logo from '@/assets/logo-vugiatravel.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
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
          <a href="#home" className={`font-medium transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-primary-foreground/90 hover:text-primary-foreground'}`}>
            Trang chủ
          </a>
          <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button className={`font-medium transition-colors flex items-center gap-1 ${isScrolled ? 'text-foreground hover:text-primary' : 'text-primary-foreground/90 hover:text-primary-foreground'}`}>
              Danh sách tour <ChevronDown className="w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-card rounded-lg shadow-lg border border-border p-2 min-w-[200px]">
                <a href="#tours" className="block px-4 py-2 rounded-md text-foreground hover:bg-accent transition-colors">
                  🇻🇳 Du lịch trong nước
                </a>
                <a href="#tours" className="block px-4 py-2 rounded-md text-foreground hover:bg-accent transition-colors">
                  🇨🇳 Du lịch Trung Quốc
                </a>
              </div>
            )}
          </div>
          <a href="#reviews" className={`font-medium transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-primary-foreground/90 hover:text-primary-foreground'}`}>
            Đánh giá
          </a>
          <a href="#contact" className={`font-medium transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-primary-foreground/90 hover:text-primary-foreground'}`}>
            Liên hệ
          </a>
          <a href="#contact" className="btn-primary flex items-center gap-2 text-sm">
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
            <a href="#home" onClick={() => setIsMobileOpen(false)} className="py-2 text-foreground font-medium">Trang chủ</a>
            <a href="#tours" onClick={() => setIsMobileOpen(false)} className="py-2 text-foreground font-medium">🇻🇳 Du lịch trong nước</a>
            <a href="#tours" onClick={() => setIsMobileOpen(false)} className="py-2 text-foreground font-medium">🇨🇳 Du lịch Trung Quốc</a>
            <a href="#reviews" onClick={() => setIsMobileOpen(false)} className="py-2 text-foreground font-medium">Đánh giá</a>
            <a href="#contact" onClick={() => setIsMobileOpen(false)} className="py-2 text-foreground font-medium">Liên hệ</a>
            <a href="#contact" className="btn-primary text-center mt-2">Đặt tour ngay</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
