import Navbar from '@/components/travel/Navbar';
import Footer from '@/components/travel/Footer';

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Chính Sách Hoàn Hủy Và Thay Đổi Dịch Vụ
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Quy định chung</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Chính sách hoàn/hủy áp dụng cho toàn bộ các dịch vụ do Vũ Gia Travel (Vugiatravel.vn) cung cấp bao gồm: tour du lịch, dịch vụ lưu trú, combo du lịch và các phương tiện vận chuyển.</li>
              <li>Trong trường hợp các nhà cung cấp dịch vụ (khách sạn, du thuyền, hãng xe, hãng hàng không…) có quy định riêng, điều khoản của đối tác sẽ được ưu tiên áp dụng.</li>
              <li>Mọi yêu cầu thay đổi, hủy hoặc hoàn dịch vụ cần được thông báo qua email, Zalo, tin nhắn hoặc văn bản và chỉ được xem là hợp lệ khi Vũ Gia Travel xác nhận.</li>
              <li>Thời gian tính phí hoàn/hủy được căn cứ theo thời điểm bắt đầu sử dụng dịch vụ hoặc giờ khởi hành.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Đối với tour du lịch (tour ghép, landtour)</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">Ngày thường</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Hủy trước 15 ngày trở lên: hoàn 100% giá trị dịch vụ (có thể trừ phí xử lý nếu phát sinh).</li>
              <li>Hủy trong khoảng 8 – 14 ngày trước ngày khởi hành: phí hủy 30%.</li>
              <li>Hủy trong khoảng 4 – 7 ngày: phí hủy 50%.</li>
              <li>Hủy trong vòng 3 ngày trước ngày khởi hành hoặc không tham gia tour: phí hủy 100%.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2">Lễ, Tết và giai đoạn cao điểm</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Khách hàng cần thanh toán 100% chi phí dịch vụ ngay khi đặt.</li>
              <li>Không hỗ trợ hoàn hủy.</li>
              <li>Có thể xem xét đổi lịch 01 lần nếu điều kiện dịch vụ cho phép.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Dịch vụ lưu trú (khách sạn, villa, du thuyền)</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">Ngày thường</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Hủy trước 10 ngày so với ngày nhận phòng: hoàn 100%.</li>
              <li>Hủy từ 7 – 9 ngày: tính phí 30%.</li>
              <li>Hủy từ 4 – 6 ngày: tính phí 50%.</li>
              <li>Hủy trong vòng 3 ngày hoặc không đến nhận phòng: tính phí 100%.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2">Cuối tuần và mùa cao điểm</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Hủy trước 14 ngày: hoàn 100%.</li>
              <li>Hủy từ 7 – 13 ngày: tính phí 50%.</li>
              <li>Hủy trong vòng 6 ngày: tính phí 100%.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2">Lễ, Tết</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Thanh toán 100% chi phí dịch vụ khi đặt.</li>
              <li>Không áp dụng hoàn/hủy.</li>
            </ul>
            <p><em>Lưu ý: Mỗi khách sạn, villa hoặc du thuyền có thể áp dụng điều kiện riêng theo quy định của họ.</em></p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Combo du lịch (xe + lưu trú/du thuyền)</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Các gói combo không áp dụng hoàn hủy.</li>
              <li>Có thể hỗ trợ đổi lịch 01 lần trong những trường hợp đặc biệt như: ốm đau, thiên tai, dịch bệnh hoặc các yếu tố bất khả kháng.</li>
              <li>Việc thay đổi phụ thuộc vào tình trạng dịch vụ tại thời điểm yêu cầu và có thể phát sinh chi phí nếu giá mới cao hơn.</li>
              <li>Trường hợp không sử dụng dịch vụ (No-show) sẽ tính phí 100%.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Dịch vụ vận chuyển</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">Xe khách / xe hợp đồng (Limousine, Interbus…)</h3>
            <p><strong>Ngày thường và cuối tuần</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>Hủy hoặc đổi trong vòng 24 giờ trước giờ khởi hành: phí 100%.</li>
              <li>Hủy trước 24 giờ: không tính phí.</li>
            </ul>

            <p><strong>Dịp Lễ, Tết</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>Hủy hoặc đổi trong vòng 72 giờ trước giờ khởi hành: phí 100%.</li>
              <li>Hủy trước 72 giờ: không tính phí.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2">Vé máy bay và vé tàu</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Áp dụng theo quy định của từng hãng vận chuyển.</li>
              <li>Một số loại vé khuyến mại hoặc vé giá rẻ có thể không hỗ trợ hoàn, hủy hoặc đổi.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Trường hợp bất khả kháng</h2>
            <p>Khi xảy ra các tình huống ngoài tầm kiểm soát như thiên tai, dịch bệnh, hoặc quyết định từ cơ quan quản lý nhà nước, Vũ Gia Travel sẽ phối hợp với đối tác cung cấp dịch vụ để:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Hỗ trợ khách hàng đổi lịch sử dụng dịch vụ.</li>
              <li>Hoặc hoàn phí theo mức thỏa thuận với đối tác.</li>
              <li>Hai bên cùng trao đổi và giải quyết trên tinh thần hợp tác theo quy định pháp luật.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Quy trình xử lý hoàn/hủy</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Khách hàng gửi yêu cầu hủy hoặc thay đổi dịch vụ qua điện thoại, email hoặc Zalo.</li>
              <li>Vũ Gia Travel tiến hành kiểm tra và xác nhận với đối tác cung cấp dịch vụ.</li>
              <li>Thông báo kết quả cho khách hàng trong khoảng 24 – 48 giờ.</li>
              <li>Nếu có hoàn tiền, thời gian xử lý dự kiến 7 – 15 ngày làm việc thông qua chuyển khoản.</li>
              <li>Khiếu nại liên quan đến hoàn/hủy dịch vụ được tiếp nhận trong vòng 90 ngày kể từ khi kết thúc dịch vụ.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Chương trình khuyến mại hoặc giá ưu đãi</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Những booking thuộc chương trình flash sale, khuyến mại đặc biệt hoặc giá ưu đãi từ đối tác sẽ không áp dụng hoàn/hủy.</li>
              <li>Việc thay đổi lịch (nếu được hỗ trợ) sẽ căn cứ vào điều kiện của đối tác tại thời điểm xử lý và có thể phát sinh chi phí.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Thay đổi hoặc chuyển nhượng người sử dụng dịch vụ</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Khách hàng có thể đề nghị đổi tên hoặc chuyển quyền sử dụng dịch vụ cho người khác nếu đối tác cho phép và vẫn còn trong thời hạn điều chỉnh dịch vụ.</li>
              <li>Khách hàng sẽ chịu các chi phí phát sinh như: phí đổi tên, chênh lệch giá hoặc phí dịch vụ từ đối tác (nếu có).</li>
              <li>Một số dịch vụ, đặc biệt là vé máy bay, có thể không cho phép đổi tên theo quy định của hãng.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Hiệu lực áp dụng</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Chính sách này có hiệu lực kể từ ngày được công bố và áp dụng cho tất cả khách hàng sử dụng dịch vụ của Vũ Gia Travel – Vugiatravel.vn.</li>
              <li>Trong trường hợp có thay đổi từ quy định pháp luật hoặc điều khoản từ đối tác, chúng tôi sẽ cập nhật lại nội dung để phù hợp với thực tế.</li>
              <li>Các điều kiện và mức phí hoàn/hủy được áp dụng theo thông báo chính thức tại thời điểm khách hàng đặt dịch vụ.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CancellationPolicy;