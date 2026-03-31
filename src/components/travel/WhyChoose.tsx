import { motion } from 'framer-motion';
import { BadgeDollarSign, Headphones, HeartHandshake, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'An toàn & minh bạch',
    description: 'Thông tin dịch vụ, giá bán và điều kiện đặt được trình bày rõ ràng trước khi chốt.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Giá hợp lý',
    description: 'Luôn ưu tiên phương án phù hợp ngân sách, dễ so sánh và dễ chọn nhanh.',
  },
  {
    icon: HeartHandshake,
    title: 'Tư vấn tận tâm',
    description: 'Đội ngũ hỗ trợ nhiệt tình, bám sát nhu cầu thực tế của từng nhóm khách.',
  },
  {
    icon: Headphones,
    title: 'Hỗ trợ 24/7',
    description: 'Phản hồi nhanh qua hotline, Zalo và các kênh mạng xã hội khi bạn cần.',
  },
];

const WhyChoose = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">Vì sao nên chọn VuGiaTravel?</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Chúng tôi tập trung vào trải nghiệm đặt dịch vụ gọn gàng, rõ thông tin và hỗ trợ nhanh để bạn yên tâm hơn khi lựa chọn.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/30"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent transition-colors group-hover:bg-primary/10">
              <reason.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{reason.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
