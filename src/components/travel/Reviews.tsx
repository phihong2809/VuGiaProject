import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Nguyễn Thị Hoa',
    avatar: '🌸',
    rating: 5,
    tour: 'Combo Hạ Long 2N1Đ',
    text: 'Chuyến đi rất tuyệt vời! Khách sạn Dragon Legend sạch đẹp, nhân viên nhiệt tình. Bữa tối trên du thuyền Vdream cực chill, rất đáng trải nghiệm.'
  },
  {
    name: 'Trần Văn Minh',
    avatar: '🎯',
    rating: 5,
    tour: 'Combo Hạ Long 2N1Đ',
    text: 'Giá combo quá hợp lý so với dịch vụ nhận được. Phòng đẹp, buffet sáng ổn, tối đi du thuyền nghe nhạc rất thư giãn. Sẽ giới thiệu cho bạn bè.'
  },
  {
    name: 'Lê Phương Anh',
    avatar: '🌺',
    rating: 4,
    tour: 'Combo Hạ Long 2N1Đ',
    text: 'Mình rất thích không khí ở Hạ Long và trải nghiệm ăn tối trên du thuyền. Khách sạn ổn, vị trí thuận tiện. Nếu ở thêm 1 đêm nữa thì quá hoàn hảo.'
  },
  {
    name: 'Phạm Đức Huy',
    avatar: '⭐',
    rating: 5,
    tour: 'Combo Hạ Long 2N1Đ',
    text: 'Một chuyến nghỉ dưỡng ngắn ngày nhưng rất đáng tiền. Cảnh Hạ Long đẹp, dịch vụ chỉn chu, phù hợp cho cặp đôi hoặc gia đình đi thư giãn cuối tuần.'
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Khách Hàng Nói Gì?
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-3xl font-bold text-foreground">{avgRating}</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground">{reviews.length} đánh giá từ khách hàng</p>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card rounded-xl p-8 text-center border border-border"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <Quote className="w-8 h-8 text-primary/20 mx-auto mb-4" />
            <p className="text-foreground text-lg mb-6 italic">"{reviews[current].text}"</p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl">{reviews[current].avatar}</span>
              <div className="text-left">
                <div className="font-semibold text-foreground">{reviews[current].name}</div>
                <div className="text-sm text-muted-foreground">Tour: {reviews[current].tour}</div>
              </div>
            </div>
          </motion.div>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-accent transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-accent transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-border'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
