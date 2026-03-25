import Navbar from '@/components/travel/Navbar';
import Footer from '@/components/travel/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Điều Khoản Sử Dụng
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-6">
              Chào mừng bạn đến với VuGiaTravel. Bằng việc sử dụng trang web và dịch vụ của chúng tôi, bạn đồng ý tuân thủ các điều khoản và điều kiện sau đây.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Chấp Nhận Điều Khoản</h2>
            <p>
              Bằng việc truy cập và sử dụng trang web VuGiaTravel, bạn chấp nhận và đồng ý bị ràng buộc bởi các điều khoản sử dụng này.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Mô Tả Dịch Vụ</h2>
            <p>
              VuGiaTravel cung cấp dịch vụ đặt tour du lịch trong nước và quốc tế, tư vấn du lịch và các dịch vụ liên quan.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Quyền Và Nghĩa Vụ Của Người Dùng</h2>
            <p>
              Bạn có quyền:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Sử dụng dịch vụ để đặt tour và nhận tư vấn</li>
              <li>Truy cập thông tin chính xác và cập nhật</li>
              <li>Liên hệ hỗ trợ khi cần thiết</li>
            </ul>
            <p>
              Bạn có nghĩa vụ:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cung cấp thông tin chính xác khi đăng ký</li>
              <li>Tuân thủ các quy định pháp luật</li>
              <li>Thanh toán đúng hạn và đầy đủ</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Quyền Và Nghĩa Vụ Của VuGiaTravel</h2>
            <p>
              Chúng tôi cam kết:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cung cấp dịch vụ chất lượng cao</li>
              <li>Bảo vệ thông tin cá nhân của khách hàng</li>
              <li>Hỗ trợ khách hàng kịp thời</li>
              <li>Tuân thủ các quy định pháp luật</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Chính Sách Hủy Tour</h2>
            <p>
              Chính sách hủy tour phụ thuộc vào từng chương trình cụ thể. Thông thường:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Hủy trước 30 ngày: hoàn tiền 100%</li>
              <li>Hủy từ 15-30 ngày: hoàn tiền 50%</li>
              <li>Hủy dưới 15 ngày: không hoàn tiền</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Giới Hạn Trách Nhiệm</h2>
            <p>
              VuGiaTravel không chịu trách nhiệm về các sự cố bất khả kháng như thiên tai, dịch bệnh, hoặc thay đổi chính sách của cơ quan chức năng.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Thay Đổi Điều Khoản</h2>
            <p>
              Chúng tôi có quyền sửa đổi các điều khoản này bất cứ lúc nào. Mọi thay đổi sẽ được thông báo trên trang web.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Liên Hệ</h2>
            <p>
              Nếu bạn có câu hỏi về điều khoản sử dụng, vui lòng liên hệ:
            </p>
            <ul className="list-none">
              <li>Email: info@vugiatravel.vn</li>
              <li>Điện thoại: 0968 267 791</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;