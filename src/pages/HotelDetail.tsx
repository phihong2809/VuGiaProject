import { useState, useEffect, useRef, type MouseEvent, type WheelEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BedDouble, Check, MapPin, Star } from 'lucide-react';
import Navbar from '@/components/travel/Navbar';
import Footer from '@/components/travel/Footer';
import Contact from '@/components/travel/Contact';
import { hotels } from '@/data/hotels';
import { formatPrice } from '@/data/tours';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';

const HotelDetail = () => {
  const { id } = useParams();
  const hotel = hotels.find((item) => item.id === id);

  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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

  const stopDragging = () => {
    setIsGrabbing(false);
  };

  if (!hotel) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h2 className="font-display text-2xl font-bold text-foreground">Khách sạn không tìm thấy</h2>
        <Link to="/hotel" className="btn-primary">Về danh sách khách sạn</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="relative h-[50vh] md:h-[60vh]">
        <img src={hotel.image} alt={hotel.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-10">
            <Link to="/hotel" className="mb-4 inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground">
              <ArrowLeft className="h-4 w-4" /> Quay lại
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3 font-display text-3xl font-bold text-primary-foreground md:text-5xl"
            >
              {hotel.name}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {hotel.area}</span>
              <span className="flex items-center gap-1"><BedDouble className="h-4 w-4" /> {hotel.stars} sao</span>
              <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-secondary text-secondary" /> {hotel.rating}/10</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <Carousel className="w-full" setApi={setEmblaApi}>
                <CarouselContent>
                  {hotel.images.map((image, index) => (
                    <CarouselItem key={`${hotel.id}-${index}`}>
                      <div className="h-64 overflow-hidden rounded-lg md:h-80">
                        <img src={image} alt={`${hotel.name} ${index + 1}`} className="h-full w-full object-cover" />
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
                onMouseUp={stopDragging}
                onMouseLeave={stopDragging}
                className={`hide-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1 ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
              >
                {hotel.images.map((image, index) => (
                  <button
                    key={`${hotel.id}-thumb-${index}`}
                    type="button"
                    onClick={() => onThumbnailClick(index)}
                    className={`h-16 min-w-[96px] flex-shrink-0 overflow-hidden rounded-md border transition-all duration-150 ${
                      index === selectedIndex
                        ? 'border-primary ring-2 ring-primary/50'
                        : 'border-transparent hover:border-slate-300'
                    }`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-bold text-foreground">Giới thiệu</h2>
              <p className="mb-3 text-sm font-medium text-primary">Địa chỉ: {hotel.location}</p>
              <p className="leading-relaxed text-muted-foreground">{hotel.summary}</p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-bold text-foreground">Tiện nghi được ưa chuộng</h2>
              <div className="grid gap-2 sm:grid-cols-2">
                {hotel.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-foreground">
                    <Check className="h-4 w-4 flex-shrink-0 text-primary" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-display text-2xl font-bold text-foreground">Thông tin chi tiết</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {hotel.sections.map((section) => (
                  <div key={section.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className="mb-3 font-semibold text-foreground">{section.title}</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-bold text-foreground">Lưu ý khi đặt phòng</h2>
              <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                {hotel.note}
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-24 rounded-xl border border-border bg-card p-6" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="mb-4">
                <div className="text-3xl font-bold text-primary">{formatPrice(hotel.price)}</div>
                <div className="text-sm text-muted-foreground">/ đêm</div>
              </div>

              <ul className="mb-6 space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Hạng khách sạn {hotel.stars} sao</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Khu vực {hotel.area}</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Hỗ trợ đặt phòng 24/7</li>
              </ul>

              <a href="#contact-detail" className="btn-primary mb-3 block w-full text-center">
                Đặt phòng ngay
              </a>

              <div className="mb-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-muted-foreground">
                <div className="font-medium text-foreground">Địa chỉ</div>
                <div className="mt-1">{hotel.location}</div>
              </div>

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
      </div>

      <div id="contact-detail">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HotelDetail;
