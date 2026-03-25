import { motion } from 'framer-motion';
import { Shield, HeartHandshake, BadgeDollarSign, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'An Toàn & Uy Tín',
    description: 'Được cấp phép hoạt động, bảo hiểm du lịch toàn diện cho mọi chuyến đi.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Giá Tốt Nhất',
    description: 'Cam kết giá cạnh tranh nhất thị trường, hoàn tiền nếu tìm thấy giá rẻ hơn.',
  },
  {
    icon: HeartHandshake,
    title: 'Dịch Vụ Tận Tâm',
    description: 'Đội ngũ hướng dẫn viên chuyên nghiệp, nhiệt tình và giàu kinh nghiệm.',
  },
  {
    icon: Headphones,
    title: 'Hỗ Trợ 24/7',
    description: 'Đường dây nóng hoạt động 24/7, sẵn sàng hỗ trợ bạn mọi lúc mọi nơi.',
  },
];

const WhyChoose = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Tại Sao Chọn VuGiaTravel?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Hơn 10 năm kinh nghiệm phục vụ hàng chục ngàn khách hàng hài lòng
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary/30 transition-all group"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
              <r.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground text-lg mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm">{r.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
