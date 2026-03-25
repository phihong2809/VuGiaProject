import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Facebook, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', destination: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success('Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.');
      setForm({ name: '', phone: '', email: '', destination: '', message: '' });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Liên Hệ Tư Vấn
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Để lại thông tin, đội ngũ tư vấn sẽ liên hệ bạn trong vòng 30 phút
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Thông tin liên hệ</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Hotline</div>
                  <div className="font-semibold text-foreground">1900 1234</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-semibold text-foreground">info@vugiatravel.vn</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Văn phòng</div>
                  <div className="font-semibold text-foreground">123 Nguyễn Huệ, Q.1, TP.HCM</div>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-foreground mb-3">Theo dõi chúng tôi</h4>
            <div className="flex gap-3">
              {[Facebook, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 border border-border space-y-4"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                placeholder="Họ tên *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="col-span-2 sm:col-span-1 bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none"
              />
              <input
                required
                placeholder="Số điện thoại *"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="col-span-2 sm:col-span-1 bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none"
              />
            </div>
            <input
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none"
            />
            <select
              value={form.destination}
              onChange={(e) => setForm({ ...form, destination: e.target.value })}
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-ring outline-none"
            >
              <option value="">Chọn điểm đến quan tâm</option>
              <option>Sa Pa</option>
              <option>Đà Nẵng - Hội An</option>
              <option>Phú Quốc</option>
              <option>Bắc Kinh</option>
              <option>Thượng Hải</option>
            </select>
            <textarea
              rows={3}
              placeholder="Lời nhắn..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none resize-none"
            />
            <button type="submit" disabled={sending} className="btn-primary w-full flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> {sending ? 'Đang gửi...' : 'Gửi yêu cầu tư vấn'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
