import { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { toast } from 'sonner';

const quickActions = [
  { icon: Phone, label: 'Gọi hotline', value: '0968 267 791', href: 'tel:0345519525' },
  { icon: MessageCircle, label: 'Nhắn Zalo', value: 'Tư vấn ngay', href: 'https://zalo.me/0345519525', external: true },
  { icon: FaTiktok, label: 'TikTok', value: '@vugiatravel', href: 'https://www.tiktok.com/@vugiatravel', external: true },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'VuGiaTravel',
    href: 'https://www.facebook.com/profile.php?id=61577515502397&sk=directory_communities',
    external: true,
  },
];

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
      window.open('https://zalo.me/0345519525', '_blank');
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">Liên hệ tư vấn</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Chọn cách liên hệ phù hợp hoặc để lại thông tin. Đội ngũ tư vấn sẽ phản hồi nhanh trong thời gian sớm nhất.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)] md:p-7">
              <h3 className="mb-5 text-xl font-semibold text-foreground">Kết nối nhanh với VuGiaTravel</h3>

              <div className="mb-6 grid gap-3 sm:grid-cols-2">
                {quickActions.map(({ icon: Icon, label, value, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                    <div className="font-semibold text-foreground">{value}</div>
                  </a>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Hotline</div>
                    <a href="tel:0345519525" className="font-semibold text-foreground hover:text-primary">0345 519 525</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <a href="mailto:vugiatravell@gmail.com" className="font-semibold text-foreground hover:text-primary">vugiatravell@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Văn phòng</div>
                    <div className="font-semibold leading-relaxed text-foreground">Căn Ha10-5 Khu Little Việt Nam, Phường Bãi Cháy, Tỉnh Quảng Ninh, Việt Nam</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)] md:p-7"
          >
            <div className="mb-5">
              <h3 className="text-xl font-semibold text-foreground">Để lại yêu cầu tư vấn</h3>
              <p className="mt-1 text-sm text-muted-foreground">Sau khi gửi, hệ thống sẽ mở Zalo để bạn trao đổi nhanh hơn với tư vấn viên.</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Họ tên *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border border-border bg-muted px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring"
                />
                <input
                  required
                  placeholder="Số điện thoại *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-xl border border-border bg-muted px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring"
                />
              </div>

              <input
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring"
              />

              <select
                value={form.destination}
                onChange={(e) => setForm({ ...form, destination: e.target.value })}
                className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring"
              >
                <option value="">Chọn điểm đến quan tâm</option>
                <option>Hạ Long</option>
                <option>Du thuyền Hạ Long</option>
                <option>Khách sạn Hạ Long</option>
              </select>

              <textarea
                rows={4}
                placeholder="Lời nhắn của bạn..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-border bg-muted px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring"
              />

              <button type="submit" disabled={sending} className="btn-primary flex w-full items-center justify-center gap-2 rounded-xl">
                <Send className="h-4 w-4" /> {sending ? 'Đang gửi...' : 'Gửi yêu cầu tư vấn'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
