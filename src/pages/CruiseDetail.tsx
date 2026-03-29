import { useState, useEffect, useRef, type WheelEvent, type MouseEvent } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Star, Check, Calendar } from 'lucide-react';
import { cruises } from '@/data/cruises';
import Navbar from '@/components/travel/Navbar';
import Footer from '@/components/travel/Footer';
import Contact from '@/components/travel/Contact';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';

const CruiseDetail = () => {
  const { id } = useParams();
  const cruise = cruises.find((c) => c.id === id);

  if (!cruise) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="font-display text-2xl font-bold text-foreground">Du thuyền không tìm thấy</h2>
        <Link to="/cruise" className="btn-primary">Về danh sách du thuyền</Link>
      </div>
    );
  }

  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const syncSelected = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    syncSelected();
    emblaApi.on('select', syncSelected);
    emblaApi.on('reInit', syncSelected);

    return () => {
      emblaApi.off('select', syncSelected);
      emblaApi.off('reInit', syncSelected);
    };
  }, [emblaApi]);

  const onThumbnailClick = (index: number) => {
    setSelectedIndex(index);
    emblaApi?.scrollTo(index);
  };

  const onThumbnailsWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (thumbnailsRef.current) {
      thumbnailsRef.current.scrollLeft += event.deltaY;
    }
  };

  const onMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setIsGrabbing(true);
    if (thumbnailsRef.current) {
      setDragStartX(event.clientX);
      setScrollStart(thumbnailsRef.current.scrollLeft);
    }
  };

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isGrabbing || !thumbnailsRef.current) return;
    const x = event.clientX;
    const walk = x - dragStartX;
    thumbnailsRef.current.scrollLeft = scrollStart - walk;
  };

  const onMouseUp = () => {
    setIsGrabbing(false);
  };

  const onMouseLeave = () => {
    setIsGrabbing(false);
  };

  const formatPrice = (price: string) => {
    return price;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img src={cruise.image} alt={cruise.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-10">
            <Link to="/cruise" className="inline-flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground mb-4 text-sm">
              <ArrowLeft className="w-4 h-4" /> Quay lại
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-3"
            >
              {cruise.title}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {cruise.destination}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {cruise.duration}</span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-secondary text-secondary" /> 4.8 (95 đánh giá)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Cruise Images Gallery */}
            <div>
              <Carousel className="w-full" setApi={setEmblaApi}>
                <CarouselContent>
                  {(cruise.images || [cruise.image]).map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="h-64 overflow-hidden rounded-lg">
                        <img src={image} alt={`${cruise.title} ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div
                ref={thumbnailsRef}
                onWheel={onThumbnailsWheel}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
                className={`mt-3 flex overflow-x-auto gap-2 pb-1 hide-scrollbar ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
              >
                {(cruise.images || [cruise.image]).map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => onThumbnailClick(index)}
                    className={`min-w-[96px] h-16 flex-shrink-0 overflow-hidden rounded-md border transition-all duration-150 ${
                      index === selectedIndex
                        ? 'border-primary ring-2 ring-primary/50'
                        : 'border-transparent hover:border-slate-300'
                    }`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Giới thiệu</h2>
              <p className="text-muted-foreground leading-relaxed">{cruise.description}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Bao gồm</h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {cruise.includes.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Lịch trình</h2>
              <div className="space-y-4">
                {cruise.itinerary.map((item) => (
                  <div key={item.day} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Ngày {item.day}: {item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.activities?.join(' • ') || ''}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price sidebar */}
          <div>
            <div className="bg-card rounded-xl p-6 border border-border sticky top-24" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="mb-4">
                <div className="text-3xl font-bold text-primary">{cruise.price}</div>
                <div className="text-sm text-muted-foreground">/ người</div>
              </div>

              <ul className="space-y-2 mb-6 text-sm text-foreground">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Khởi hành hàng tuần</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Bảo hiểm du lịch</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Hỗ trợ 24/7</li>
              </ul>

              <a href="#contact-detail" className="btn-primary w-full text-center block mb-3">
                Đặt tour ngay
              </a>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">Liên hệ tư vấn viên qua Zalo:</p>
                <div className="space-y-1">
                  <a href="https://zalo.me/0972223394" className="block text-primary hover:underline">Tư vấn viên Tân: 0972 223 394</a>
                  <a href="https://zalo.me/0968267791" className="block text-primary hover:underline">Tư vấn viên Hoài Nam: 0968 267 791</a>
                  <a href="https://zalo.me/0345519505" className="block text-primary hover:underline">Tư vấn viên Hoàng Anh: 0345 519 505</a>
                  <a href="https://zalo.me/0365226085" className="block text-primary hover:underline">Tư vấn viên Thành Đương: 0365 226 085</a>
                  <a href="https://zalo.me/0358006668" className="block text-primary hover:underline">Tư vấn viên Mạnh Cường: 0358 006 668</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact-detail">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default CruiseDetail;
