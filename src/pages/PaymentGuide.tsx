import Navbar from '@/components/travel/Navbar';
import Footer from '@/components/travel/Footer';

const PaymentGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Hướng Dẫn Thanh Toán
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-6">
              VuGiaTravel cung cấp nhiều phương thức thanh toán tiện lợi và an toàn. Hãy làm theo hướng dẫn dưới đây để hoàn tất giao dịch.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Phương Thức Thanh Toán</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Thanh toán trực tuyến</h3>
                <p>Chấp nhận các thẻ tín dụng/thẻ ghi nợ Visa, Mastercard, JCB và thanh toán qua ví điện tử Momo, ZaloPay, ViettelPay.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Chuyển khoản ngân hàng</h3>
                <p>Chuyển khoản trực tiếp vào tài khoản của VuGiaTravel. Thông tin tài khoản sẽ được cung cấp sau khi xác nhận đặt tour.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Thanh toán tại văn phòng</h3>
                <p>Thanh toán bằng tiền mặt hoặc thẻ tại văn phòng VuGiaTravel.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Thanh toán khi nhận tour</h3>
                <p>Thanh toán trực tiếp cho hướng dẫn viên khi bắt đầu tour (chỉ áp dụng cho một số chương trình).</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Quy Trình Thanh Toán</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li>Đặt tour và nhận thông tin thanh toán từ VuGiaTravel</li>
              <li>Chọn phương thức thanh toán phù hợp</li>
              <li>Thực hiện thanh toán theo hướng dẫn</li>
              <li>Nhận xác nhận thanh toán thành công</li>
              <li>Nhận voucher và thông tin tour</li>
            </ol>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Chính Sách Đặt Cọc</h2>
            <p>
              Để xác nhận đặt tour, khách hàng cần thanh toán đặt cọc theo quy định:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Tour trong nước: 30% giá tour</li>
              <li>Tour quốc tế: 50% giá tour</li>
              <li>Tour cao cấp: 70% giá tour</li>
            </ul>
            <p>Số tiền còn lại thanh toán trước ngày khởi hành 7-10 ngày.</p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Hoàn Tiền</h2>
            <p>
              Trường hợp hủy tour, việc hoàn tiền được thực hiện theo chính sách hủy tour. Thời gian hoàn tiền: 7-15 ngày làm việc kể từ ngày nhận yêu cầu.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Bảo Mật Thanh Toán</h2>
            <p>
              Tất cả giao dịch thanh toán đều được mã hóa và bảo mật. Chúng tôi sử dụng các cổng thanh toán uy tín và tuân thủ các tiêu chuẩn bảo mật quốc tế.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Lưu Ý Quan Trọng</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Vui lòng kiểm tra kỹ thông tin trước khi thanh toán</li>
              <li>Giữ lại biên lai thanh toán để đối chiếu</li>
              <li>Liên hệ ngay nếu có vấn đề về thanh toán</li>
              <li>Thanh toán đúng hạn để đảm bảo quyền lợi</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Thông Tin Tài Khoản Ngân Hàng</h2>
            <div className="bg-muted p-4 rounded-lg">
              <p><strong>Ngân hàng:</strong> Vietcombank</p>
              <p><strong>Chủ tài khoản:</strong> VU GIA TRAVEL COMPANY LIMITED</p>
              <p><strong>Số tài khoản:</strong> 1234567890</p>
              <p><strong>Chi nhánh:</strong> Hà Nội</p>
              <p><strong>Nội dung chuyển khoản:</strong> [Mã tour] - [Họ tên khách hàng]</p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Hỗ Trợ</h2>
            <p>
              Nếu bạn gặp khó khăn trong việc thanh toán, vui lòng liên hệ đội ngũ hỗ trợ của chúng tôi:
            </p>
            <ul className="list-none">
              <li>Email: info@vugiatravel.vn</li>
              <li>Điện thoại: 0345 519 525</li>
              <li>Zalo: <a href="https://zalo.me/0345519525" className="text-primary hover:underline">0345 519 525</a></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentGuide;