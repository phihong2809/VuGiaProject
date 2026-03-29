import { useState, useEffect, useRef, type WheelEvent, type MouseEvent } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Star, Check, Calendar } from 'lucide-react';
import { tours, formatPrice } from '@/data/tours';
import Navbar from '@/components/travel/Navbar';
import Footer from '@/components/travel/Footer';
import Contact from '@/components/travel/Contact';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import sunworldImage from '@/assets/sunworld.png';
import banggiaImage from '@/assets/banggiasunworld.png';
import wowpassImage from '@/assets/wowpass.png';
import captreoImage from '@/assets/captreo.jpg';
import troChoiImage from '@/assets/trochoi.png';
import sunWheelImage from '@/assets/sunwheel.jpg';

const TourDetail = () => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="font-display text-2xl font-bold text-foreground">Tour không tìm thấy</h2>
        <Link to="/" className="btn-primary">Về trang chủ</Link>
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

  const hasDiscount = tour.originalPrice && tour.originalPrice > tour.price;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img src={tour.images[0]} alt={tour.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-10">
            <Link to="/" className="inline-flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground mb-4 text-sm">
              <ArrowLeft className="w-4 h-4" /> Quay lại
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-3"
            >
              {tour.name}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {tour.destination}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {tour.duration}</span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-secondary text-secondary" /> {tour.rating} ({tour.reviews} đánh giá)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
          {/* Tour Images Gallery */}
          <div>
            <Carousel className="w-full" setApi={setEmblaApi}>
              <CarouselContent>
                {tour.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="h-64 overflow-hidden rounded-lg">
                      <img src={image} alt={`${tour.name} ${index + 1}`} className="w-full h-full object-cover" />
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
              {tour.images.map((image, index) => (
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
            <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
          </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Điểm nổi bật</h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {tour.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" /> {h}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-sky-50 to-emerald-50 border border-slate-200 rounded-2xl p-6 shadow-sm"> 
              <h2 className="font-display text-2xl font-bold text-primary mb-4">Sun World Hạ Long - Trải nghiệm đỉnh cao</h2>
              <div className="mb-4 rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                <div className="relative aspect-video">
                  <img src={sunworldImage} alt="Sun World Hạ Long" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <div className="absolute left-4 bottom-4 text-white">
                    <h3 className="text-lg md:text-xl font-semibold drop-shadow">Sun World Hạ Long</h3>
                    <p className="text-xs md:text-sm drop-shadow">Nơi giao thoa giữa thiên nhiên và giải trí đẳng cấp</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">Sau 10 năm hoạt động, Sun World Hạ Long vẫn là điểm hẹn không thể bỏ qua cho mọi hành trình khám phá vịnh di sản. Từ cáp treo Nữ Hoàng dài 2.169m đến Sun Wheel 215m, mỗi khoảnh khắc là sự giao thoa giữa thiên nhiên hùng vĩ và công nghệ hiện đại.</p>
              <p className="text-muted-foreground leading-relaxed mb-3">Đặt chân lên đỉnh Ba Đèo, Sun Wheel cao 215m – một trong những vòng quay lớn nhất châu Á – sẽ đưa bạn chạm tới bầu trời, chiêm ngưỡng toàn cảnh thành phố và vịnh biển từ độ cao choáng ngợp. Với những tín đồ mê cảm giác mạnh, Dragon Park là thiên đường trải nghiệm: từ tàu lượn siêu tốc cho đến những trò chơi xoay, lắc đầy thử thách.
Bước vào năm 2025, Sun World Ha Long tiếp tục nâng cấp các hạng mục an toàn, mở rộng hệ thống dịch vụ ăn uống và tiện ích để mang lại trải nghiệm trọn vẹn hơn. Vị trí lý tưởng chỉ cách trung tâm thành phố Hạ Long 15 phút lái xe càng khiến nơi đây trở thành điểm dừng chân lý tưởng – nơi bạn có thể kết hợp giữa khám phá di sản thiên nhiên và vui chơi giải trí hiện đại trong cùng một ngày.
</p>
              <p className="text-muted-foreground leading-relaxed mb-3">Năm 2025, Sun World nâng cấp an toàn, mở rộng dịch vụ ăn uống và tiện ích, khiến vị trí cách trung tâm 15 phút lái xe càng trở nên lý tưởng để kết hợp khám phá di sản và vui chơi giải trí.</p>
              
              <h3 className="font-semibold text-lg text-foreground mb-2">Bảng giá 2026</h3>
              <div className="mb-4 rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-white">
                <div className="relative aspect-video flex items-center justify-center bg-accent">
                  <img src={banggiaImage} alt="Bảng giá Sun World" className="w-full h-full object-contain" style={{ filter: 'brightness(1) contrast(1.1)' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <div className="absolute left-4 bottom-3 text-white">
                    <p className="text-sm md:text-base font-medium drop-shadow">Giá vé cập nhật 2026</p>
                  </div>
                </div>
              </div>
              Dựa vào bảng giá mới nhất năm 2026, Sun World Hạ Long mang đến nhiều lựa chọn vui chơi đa dạng với mức giá hợp lý cho cả người lớn và trẻ em. 
Vé vào Cáp treo Nữ Hoàng có giá 362.000 VNĐ cho người lớn và 272.000 VNĐ cho trẻ em, áp dụng chung cho cả ngày thường và cuối tuần. 
Công viên Rồng có giá vé 145.000 VNĐ, trong khi vé vào Công viên nước Typhoon sẽ mở cửa lại vào ngày 12/4/2026.
Trẻ em dưới 1m được miễn phí hoàn toàn. Đây là điểm đến lý tưởng cho các gia đình muốn tận hưởng kỳ nghỉ trọn vẹn bên bờ vịnh Hạ Long.

              <h3 className="font-semibold text-lg text-foreground mb-2">WOW Pass</h3>
              <div className="mb-4 rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-white">
                <div className="relative aspect-video flex items-center justify-center bg-accent">
                  <img src={wowpassImage} alt="WOW Pass" className="w-full h-full object-contain" style={{ filter: 'brightness(1) contrast(1.1)' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                  <div className="absolute left-4 bottom-3 text-white">
                    <p className="text-sm md:text-base font-medium drop-shadow">Ưu tiên trải nghiệm không xếp hàng</p>
                  </div>
                </div>
              </div>
              <ul className="space-y-1 text-sm text-foreground mb-1">
                <li>• WOW Pass người lớn: 280.000đ</li>
                <li>• WOW Pass trẻ em: 190.000đ</li>
                <li>• Ưu tiên không xếp hàng (chưa bao gồm vé cổng)</li>
              </ul>
              Wow Pass tại Sun World Hạ Long là lựa chọn lý tưởng cho du khách muốn tối ưu thời gian vui chơi khi đến tham quan vào mùa cao điểm. Đây là dịch vụ nâng cấp đặc biệt, cho phép bạn ưu tiên vào chơi không cần xếp hàng tại các khu trò chơi lớn như Cáp treo Nữ Hoàng và Công viên Rồng. 
Giá nâng cấp Wow Pass hiện là 280.000 VNĐ cho người lớn và 190.000 VNĐ cho trẻ em (áp dụng riêng cho mỗi khu). 
Lưu ý, Wow Pass không bao gồm vé vào cổng, chỉ là dịch vụ bổ sung giúp bạn tiết kiệm thời gian chờ đợi và trải nghiệm trọn vẹn hơn. Với những ai muốn tận hưởng không gian giải trí mà không phải lo chen chúc, đặc biệt là vào cuối tuần hay dịp lễ, Wow Pass chính là “tấm vé ưu tiên” đáng để cân nhắc.

              <p className="text-xs text-muted-foreground">Lưu ý: Giá áp dụng 2026, chưa bao gồm chi phí dịch vụ khác.</p>
            
              <h3 className="font-semibold text-xl text-foreground mb-3">Các hoạt động không thể bỏ qua tại Sun World Ha Long</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Sun World Ha Long không chỉ là nơi chiêm ngưỡng vẻ đẹp thiên nhiên mà còn là thiên đường của những trải nghiệm độc đáo. Từ cảm giác bay bổng trên cáp treo đến nhịp tim đập nhanh với các trò chơi mạo hiểm, mỗi khoảnh khắc đều mang đến những kỷ niệm khó quên.</p>

              <h4 className="font-semibold text-lg text-foreground mb-2">Trải nghiệm cáp treo vượt vịnh</h4>
              <div className="mb-4 rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                <img src={captreoImage} alt="Cáp treo vượt vịnh" className="w-full h-full object-cover" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">Một trong những trải nghiệm không thể bỏ lỡ tại Sun World Hạ Long chính là hành trình cáp treo Cable Car Queen – chiếc cáp treo hai tầng đầu tiên tại Việt Nam. Với 99 cabin hiện đại, tuyến cáp đưa du khách bay qua vịnh biển ở độ cao gần 200m, mở ra tầm nhìn toàn cảnh kỳ vĩ của Hạ Long – nơi những hòn đảo đá vôi nổi lên từ làn nước xanh ngọc tạo thành bức tranh thiên nhiên sống động.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">Mỗi chuyến kéo dài khoảng 15 phút, vừa đủ để bạn thư giãn trong cabin có sàn kính cường lực, chiêm ngưỡng vịnh biển từ góc nhìn "lơ lửng giữa trời" độc đáo. Khoảnh khắc đẹp nhất là từ 15h đến 16h30 – khi hoàng hôn bắt đầu buông, ánh sáng vàng rực phủ lên mặt nước, khiến cảnh vật trở nên mơ màng, đầy mê hoặc.</p>

              <h4 className="font-semibold text-lg text-foreground mb-2">Khám phá Dragon Park với các trò chơi độc đáo</h4>
              <div className="mb-4 rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                <img src={troChoiImage} alt="Dragon Park" className="w-full h-full object-cover" />
              </div>
              <ul className="space-y-2 text-muted-foreground leading-relaxed mb-4">
                <li><strong>Phi Long Thần Tốc</strong> – Tàu lượn siêu tốc dài nhất châu Á, đạt tốc độ 105km/h với ba vòng xoắn nghẹt thở. Trải nghiệm cảm giác "bay" giữa không trung, chỉ dành cho những trái tim dũng cảm!</li>
                <li><strong>Vòng Xoay Tử Thần</strong> – Tháp rơi tự do đưa bạn xoay tròn trên cao rồi bất ngờ lao xuống ở tốc độ chóng mặt. Cảm giác chinh phục nỗi sợ chưa bao giờ mãnh liệt đến thế!</li>
                <li><strong>Tê Giác Cuồng Nộ</strong> – Trò chơi mang hình chiếc sừng tê giác khổng lồ, đưa bạn xoay tròn rồi rơi không trọng lực – mạnh mẽ, dữ dội và cực "đã"!</li>
                <li><strong>Tàu Hải Tặc</strong> – Chiếc tàu lắc lư giữa đại dương giả tưởng, nơi bạn cùng bạn bè hét bung nóc và thử thách độ gan lì qua từng cú xoay nghiêng ấn tượng.</li>
              </ul>

              <h4 className="font-semibold text-lg text-foreground mb-2">Check-in tại các điểm tham quan trong Sun Wheel</h4>
              <div className="mb-4 rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                <img src={sunWheelImage} alt="Sun Wheel" className="w-full h-full object-cover" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">Toạ lạc trên đỉnh Ba Đèo, Sun Wheel là một trong những vòng quay ngắm cảnh cao nhất thế giới – nơi bạn có thể phóng tầm mắt ôm trọn vẻ đẹp ngoạn mục của vịnh Hạ Long từ trên cao.</p>
              <p className="text-muted-foreground leading-relaxed mb-3">Với 64 cabin hiện đại và khả năng phục vụ tới 1.200 khách mỗi giờ, hành trình trên Sun Wheel không chỉ là một chuyến đi, mà là khoảnh khắc tận hưởng trọn vẹn non nước kỳ vĩ. Được thiết kế bởi Sanoyas Hishino Meisho (Nhật Bản) – tập đoàn hàng đầu về vòng quay khổng lồ, cùng đội ngũ chuyên gia Đức, Nhật và Việt Nam, Sun Wheel đảm bảo an toàn tuyệt đối cho trải nghiệm đỉnh cao này.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">Khi đêm xuống, Sun Wheel trở thành ngọn hải đăng ánh sáng rực rỡ giữa lòng Hạ Long – lung linh với hàng vạn bóng đèn LED, tạo nên khung cảnh kỳ ảo khó quên cho bất kỳ ai ghé thăm.</p>

              <h3 className="font-semibold text-xl text-foreground mb-3">Kết luận</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">Bảng giá Sun World Ha Long 2026 mở ra cánh cửa đến với những trải nghiệm đáng nhớ giữa lòng vịnh di sản thế giới. Với mức giá cạnh tranh và đa dạng các gói ưu đãi, đây chính là thời điểm lý tưởng để bạn lên kế hoạch khám phá thiên đường giải trí này.</p>
              <p className="text-muted-foreground leading-relaxed">Hãy đặt vé sớm để tận hưởng những ưu đãi hấp dẫn và trải nghiệm trọn vẹn mọi điều tuyệt vời mà Sun World Ha Long mang lại. Chuyến hành trình khám phá vịnh Hạ Long từ trên cao đang chờ đón bạn!</p>
</div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Lịch trình</h2>
              <div className="space-y-4">
                {tour.itinerary.map((item) => (
                  <div key={item.day} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Ngày {item.day}: {item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Bao gồm</h2>
              <div className="flex flex-wrap gap-2">
                {tour.included.map((item) => (
                  <span key={item} className="bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-sm">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Price sidebar */}
          <div>
            <div className="bg-card rounded-xl p-6 border border-border sticky top-24" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="mb-4">
                <div className="text-3xl font-bold text-primary">{formatPrice(tour.price)}</div>
                {hasDiscount && (
                  <div className="text-muted-foreground line-through">{formatPrice(tour.originalPrice!)}</div>
                )}
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

export default TourDetail;
