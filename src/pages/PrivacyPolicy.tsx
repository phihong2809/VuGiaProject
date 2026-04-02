import Navbar from '@/components/travel/Navbar';
import Footer from '@/components/travel/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            CHÍNH SÁCH BẢO MẬT THÔNG TIN KHÁCH HÀNG
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-6">
              Tại Vugiatravel.vn, việc bảo vệ dữ liệu cá nhân của khách hàng luôn được xem là trách nhiệm quan trọng. Chính sách bảo mật này giúp Quý khách hiểu rõ cách chúng tôi thu thập, sử dụng cũng như bảo vệ thông tin trong quá trình sử dụng dịch vụ.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Thông tin được thu thập</h2>
            <p className="mb-4">
              Trong quá trình đăng ký và sử dụng dịch vụ, chúng tôi có thể thu thập một số thông tin cần thiết như:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Thông tin cá nhân: họ tên, số điện thoại, email và các phương thức liên hệ.</li>
              <li>Thông tin liên quan đến dịch vụ: chương trình tour, đặt phòng khách sạn, vé xe, vé du thuyền, thời gian khởi hành.</li>
              <li>Thông tin thanh toán phục vụ cho việc xác nhận đặt dịch vụ (không lưu trữ mã CVV của thẻ thanh toán).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Mục đích sử dụng thông tin</h2>
            <p className="mb-4">
              Các dữ liệu thu thập được sử dụng nhằm:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Xử lý và xác nhận các dịch vụ du lịch mà khách hàng đăng ký.</li>
              <li>Hỗ trợ chăm sóc khách hàng, giải đáp thắc mắc khi cần thiết.</li>
              <li>Gửi thông tin về chương trình ưu đãi, khuyến mại nếu khách hàng đồng ý nhận thông báo.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Phạm vi sử dụng và chia sẻ</h2>
            <p className="mb-4">
              Thông tin khách hàng chỉ được sử dụng trong phạm vi phục vụ dịch vụ du lịch và có thể được cung cấp cho các đối tác liên quan trực tiếp như:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Khách sạn</li>
              <li>Du thuyền</li>
              <li>Nhà xe</li>
              <li>Hãng hàng không</li>
            </ul>
            <p>
              Chúng tôi cam kết không kinh doanh, trao đổi hoặc cung cấp thông tin khách hàng cho bên thứ ba ngoài mục đích phục vụ dịch vụ đã đăng ký.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Thời gian lưu trữ thông tin</h2>
            <p>
              Dữ liệu khách hàng sẽ được lưu giữ trong suốt quá trình cung cấp dịch vụ và có thể được lưu trữ tối đa 05 năm sau khi kết thúc giao dịch nhằm phục vụ việc tra cứu, hỗ trợ hoặc giải quyết khiếu nại khi cần.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Quyền của khách hàng</h2>
            <p className="mb-4">
              Khách hàng khi sử dụng dịch vụ tại Vugiatravel.vn có các quyền sau:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Được bảo vệ thông tin cá nhân thông qua hệ thống bảo mật nhiều lớp (máy chủ riêng, SSL, xác thực bảo mật…).</li>
              <li>Có quyền yêu cầu xem thông tin cá nhân đang được lưu trữ.</li>
              <li>Có thể yêu cầu chỉnh sửa, cập nhật khi thông tin có thay đổi.</li>
              <li>Có quyền yêu cầu xóa dữ liệu hoặc ngừng nhận liên hệ quảng bá (trừ trường hợp pháp luật yêu cầu lưu trữ).</li>
              <li>Được quyền từ chối nhận các thông tin tiếp thị hoặc khuyến mại.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Thông tin liên hệ</h2>
            <div className="bg-muted p-6 rounded-lg">
              <p className="font-semibold text-lg mb-2">CÔNG TY TNHH VŨ GIA TRAVEL</p>
              <ul className="list-none space-y-1">
                <li><strong>Hotline:</strong> 0968 267 791</li>
                <li><strong>Email:</strong> vugiatravell@gmail.com</li>
                <li><strong>Website:</strong> www.vugiatravel.vn</li>
                <li><strong>Địa chỉ:</strong> HA10-5, Khu Little Bãi Cháy, Hạ Long, Quảng Ninh, Việt Nam</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;