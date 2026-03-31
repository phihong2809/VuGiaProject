import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Nguyễn Thị Hoa',
    avatar: '🌸',
    rating: 5,
    tour: 'Combo Hạ Long 2N1Đ',
    text: 'Chuyến đi rất tuyệt vời! Khách sạn Dragon Legend sạch đẹp, nhân viên nhiệt tình. Bữa tối trên du thuyền Vdream cực chill, rất đáng trải nghiệm.',
  },
  {
    name: 'Trần Văn Minh',
    avatar: '🎯',
    rating: 5,
    tour: 'Combo Hạ Long 2N1Đ',
    text: 'Giá combo quá hợp lý so với dịch vụ nhận được. Phòng đẹp, buffet sáng ổn, tối đi du thuyền nghe nhạc rất thư giãn. Sẽ giới thiệu cho bạn bè.',
  },
  {
    name: 'Lê Phương Anh',
    avatar: '🌺',
    rating: 4,
    tour: 'Combo Hạ Long 2N1Đ',
    text: 'Mình rất thích không khí ở Hạ Long và trải nghiệm ăn tối trên du thuyền. Khách sạn ổn, vị trí thuận tiện. Nếu ở thêm 1 đêm nữa thì quá hoàn hảo.',
  },
  {
    name: 'Phạm Đức Huy',
    avatar: '⭐',
    rating: 5,
    tour: 'Combo Hạ Long 2N1Đ',
    text: 'Một chuyến nghỉ dưỡng ngắn ngày nhưng rất đáng tiền. Cảnh Hạ Long đẹp, dịch vụ chỉn chu, phù hợp cho cặp đôi hoặc gia đình đi thư giãn cuối tuần.',
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const avgRating = (reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length).toFixed(1);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="section-padding bg-muted/40">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">Khách hàng nói gì về VuGiaTravel?</h2>
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="text-3xl font-bold text-foreground">{avgRating}</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-secondary text-secondary" />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground">{reviews.length} phản hồi tiêu biểu từ khách hàng đã trải nghiệm</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-primary">
                <Quote className="h-6 w-6" />
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: reviews[current].rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
            </div>

            <p className="mb-6 text-base italic leading-8 text-foreground md:text-lg">“{reviews[current].text}”</p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-2xl">
                  {reviews[current].avatar}
                </span>
                <div>
                  <div className="font-semibold text-foreground">{reviews[current].name}</div>
                  <div className="text-sm text-muted-foreground">Tour: {reviews[current].tour}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:justify-end">
                <button
                  onClick={prev}
                  aria-label="Xem đánh giá trước"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-foreground transition hover:bg-accent"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Xem đánh giá tiếp theo"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-foreground transition hover:bg-accent"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          <div className="mt-5 flex justify-center gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Chọn đánh giá ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${index === current ? 'w-7 bg-primary' : 'w-2.5 bg-border'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
