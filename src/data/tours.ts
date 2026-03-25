import tourHaLong from '@/assets/vongquaymattroi.jpg';
import tourSapa from '@/assets/tour-sapa.jpg';
import tourChina from '@/assets/tour-china.jpg';
import tourHoian from '@/assets/tour-hoian.jpg';
import tourDanang from '@/assets/tour-danang.jpg';
import tourShanghai from '@/assets/tour-shanghai.jpg';
import tourPhuquoc from '@/assets/tour-phuquoc.jpg';

export interface Tour {
  id: string;
  name: string;
  destination: string;
  category: 'trong-nuoc' | 'trung-quoc';
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  highlights: string[];
  included: string[];
  itinerary: { day: number; title: string; description: string }[];
}

export const tours: Tour[] = [
{
  id: 'halong-2n1d',
  name: 'Combo Hạ Long 2N1Đ Dragon Legend 4*',
  destination: 'Vịnh Hạ Long, Quảng Ninh',
  category: 'trong-nuoc',
  duration: '2 ngày 1 đêm',
  price: 1500000,
  originalPrice: 1990000,
  rating: 4.9,
  reviews: 465,
  image: tourHaLong,
  description: 'Combo nghỉ dưỡng siêu hời tại Hạ Long với 1 đêm khách sạn Dragon Legend 4*, buffet sáng, bữa tối trên du thuyền Vdream và tiệc âm nhạc cực chill.',
  highlights: [
    'Nghỉ dưỡng khách sạn Dragon Legend Hạ Long 4*',
    'Buffet sáng tại khách sạn',
    'Bữa tối trên du thuyền Vdream',
    'Thưởng thức tiệc âm nhạc trên du thuyền',
    'Sử dụng tiện ích chung tại khách sạn và du thuyền'
  ],
  included: [
    '01 đêm nghỉ tại khách sạn Dragon Legend Hạ Long 4*',
    '01 bữa buffet sáng tại khách sạn',
    '01 bữa tối trên du thuyền Vdream (18h - 21h)',
    'Thưởng thức bữa tiệc âm nhạc trên du thuyền',
    'Sử dụng các tiện ích chung tại khách sạn và du thuyền'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Nhận phòng - Khám phá Hạ Long - Du thuyền Vdream',
      description: 'Đến Hạ Long, nhận phòng khách sạn Dragon Legend 4*. Buổi tối dùng bữa trên du thuyền Vdream từ 18h - 21h và thưởng thức tiệc âm nhạc sôi động.'
    },
    {
      day: 2,
      title: 'Buffet sáng - Tự do nghỉ dưỡng',
      description: 'Thưởng thức buffet sáng tại khách sạn, tự do sử dụng các tiện ích chung và khám phá Hạ Long trước khi trả phòng.'
    }
  ],

},
  // {
  //   id: 'sapa-4n3d',
  //   name: 'Khám Phá Sa Pa - Fansipan',
  //   destination: 'Sa Pa, Lào Cai',
  //   category: 'trong-nuoc',
  //   duration: '4 ngày 3 đêm',
  //   price: 4990000,
  //   originalPrice: 5990000,
  //   rating: 4.8,
  //   reviews: 234,
  //   image: tourSapa,
  //   description: 'Chinh phục đỉnh Fansipan, ngắm ruộng bậc thang tuyệt đẹp và trải nghiệm văn hóa dân tộc vùng cao Tây Bắc.',
  //   highlights: ['Chinh phục Fansipan', 'Ruộng bậc thang Mường Hoa', 'Chợ phiên Bắc Hà', 'Bản Cát Cát'],
  //   included: ['Xe đưa đón', 'Khách sạn 4 sao', 'Bữa ăn theo chương trình', 'Hướng dẫn viên', 'Vé tham quan'],
  //   itinerary: [
  //     { day: 1, title: 'Hà Nội - Sa Pa', description: 'Khởi hành từ Hà Nội, đến Sa Pa chiều, tự do khám phá thị trấn.' },
  //     { day: 2, title: 'Fansipan - Bản Cát Cát', description: 'Chinh phục đỉnh Fansipan bằng cáp treo, chiều thăm bản Cát Cát.' },
  //     { day: 3, title: 'Thung lũng Mường Hoa', description: 'Trek qua ruộng bậc thang, giao lưu văn hóa dân tộc H\'Mông.' },
  //     { day: 4, title: 'Sa Pa - Hà Nội', description: 'Tham quan chợ Sa Pa, mua quà lưu niệm, trở về Hà Nội.' },
  //   ],
  // },
  // {
  //   id: 'bac-kinh-5n4d',
  //   name: 'Bắc Kinh - Vạn Lý Trường Thành',
  //   destination: 'Bắc Kinh, Trung Quốc',
  //   category: 'trung-quoc',
  //   duration: '5 ngày 4 đêm',
  //   price: 12990000,
  //   originalPrice: 15990000,
  //   rating: 4.9,
  //   reviews: 189,
  //   image: tourChina,
  //   description: 'Khám phá Vạn Lý Trường Thành, Tử Cấm Thành và nền văn hóa ngàn năm của Trung Hoa.',
  //   highlights: ['Vạn Lý Trường Thành', 'Tử Cấm Thành', 'Thiên An Môn', 'Di Hòa Viên'],
  //   included: ['Vé máy bay khứ hồi', 'Khách sạn 4 sao', 'Bữa ăn theo CT', 'Visa Trung Quốc', 'Bảo hiểm du lịch'],
  //   itinerary: [
  //     { day: 1, title: 'HCM/HN - Bắc Kinh', description: 'Bay đến Bắc Kinh, nhận phòng khách sạn.' },
  //     { day: 2, title: 'Vạn Lý Trường Thành', description: 'Tham quan kỳ quan thế giới Vạn Lý Trường Thành.' },
  //     { day: 3, title: 'Tử Cấm Thành', description: 'Khám phá Tử Cấm Thành và Quảng trường Thiên An Môn.' },
  //     { day: 4, title: 'Di Hòa Viên - Phố cổ', description: 'Tham quan Di Hòa Viên, đi xích lô phố cổ Hutong.' },
  //     { day: 5, title: 'Bắc Kinh - Về nước', description: 'Mua sắm tại Vương Phủ Tỉnh, bay về Việt Nam.' },
  //   ],
  // },
  // {
  //   id: 'hoian-danang-3n2d',
  //   name: 'Hội An - Đà Nẵng',
  //   destination: 'Đà Nẵng',
  //   category: 'trong-nuoc',
  //   duration: '3 ngày 2 đêm',
  //   price: 3490000,
  //   rating: 4.7,
  //   reviews: 312,
  //   image: tourHoian,
  //   description: 'Dạo phố cổ Hội An lung linh đèn lồng, tắm biển Mỹ Khê và check-in Cầu Vàng Bà Nà Hills.',
  //   highlights: ['Phố cổ Hội An', 'Cầu Vàng Bà Nà Hills', 'Biển Mỹ Khê', 'Ngũ Hành Sơn'],
  //   included: ['Vé máy bay', 'Khách sạn 3 sao', 'Bữa sáng', 'Xe đưa đón sân bay'],
  //   itinerary: [
  //     { day: 1, title: 'Đà Nẵng - Hội An', description: 'Bay đến Đà Nẵng, chiều khám phá phố cổ Hội An.' },
  //     { day: 2, title: 'Bà Nà Hills', description: 'Trọn ngày tại Bà Nà Hills, check-in Cầu Vàng.' },
  //     { day: 3, title: 'Biển Mỹ Khê', description: 'Tắm biển, mua sắm, bay về.' },
  //   ],
  // },
  // {
  //   id: 'danang-hue-4n3d',
  //   name: 'Đà Nẵng - Huế Di Sản',
  //   destination: 'Đà Nẵng, Huế',
  //   category: 'trong-nuoc',
  //   duration: '4 ngày 3 đêm',
  //   price: 5490000,
  //   originalPrice: 6490000,
  //   rating: 4.6,
  //   reviews: 156,
  //   image: tourDanang,
  //   description: 'Hành trình di sản miền Trung với Cố đô Huế, Bà Nà Hills và bãi biển tuyệt đẹp.',
  //   highlights: ['Đại Nội Huế', 'Chùa Thiên Mụ', 'Bà Nà Hills', 'Sông Hương'],
  //   included: ['Vé máy bay', 'Khách sạn 4 sao', 'Bữa ăn theo CT', 'Xe du lịch', 'HDV'],
  //   itinerary: [
  //     { day: 1, title: 'Đà Nẵng', description: 'Bay đến Đà Nẵng, tham quan Ngũ Hành Sơn.' },
  //     { day: 2, title: 'Bà Nà Hills', description: 'Trọn ngày tại Bà Nà Hills.' },
  //     { day: 3, title: 'Huế', description: 'Di chuyển ra Huế, tham quan Đại Nội, Chùa Thiên Mụ.' },
  //     { day: 4, title: 'Huế - Về', description: 'Du thuyền sông Hương, bay về.' },
  //   ],
  // },
  // {
  //   id: 'thuong-hai-6n5d',
  //   name: 'Thượng Hải - Hàng Châu - Tô Châu',
  //   destination: 'Thượng Hải, Trung Quốc',
  //   category: 'trung-quoc',
  //   duration: '6 ngày 5 đêm',
  //   price: 15990000,
  //   originalPrice: 18990000,
  //   rating: 4.8,
  //   reviews: 98,
  //   image: tourShanghai,
  //   description: 'Khám phá Thượng Hải hoa lệ, Tây Hồ thơ mộng và vườn cổ Tô Châu.',
  //   highlights: ['The Bund', 'Tây Hồ', 'Vườn Lưu Viên', 'Disneyland Shanghai'],
  //   included: ['Vé máy bay khứ hồi', 'Khách sạn 5 sao', 'Ăn uống', 'Visa', 'Bảo hiểm'],
  //   itinerary: [
  //     { day: 1, title: 'Việt Nam - Thượng Hải', description: 'Bay đến Thượng Hải.' },
  //     { day: 2, title: 'Thượng Hải', description: 'Tham quan The Bund, Phố Đông, tháp Minh Châu.' },
  //     { day: 3, title: 'Disneyland', description: 'Trọn ngày vui chơi tại Shanghai Disneyland.' },
  //     { day: 4, title: 'Hàng Châu', description: 'Di chuyển đến Hàng Châu, du thuyền Tây Hồ.' },
  //     { day: 5, title: 'Tô Châu', description: 'Tham quan vườn cổ Tô Châu, phố nước cổ.' },
  //     { day: 6, title: 'Về nước', description: 'Bay về Việt Nam.' },
  //   ],
  // },
  // {
  //   id: 'phu-quoc-3n2d',
  //   name: 'Phú Quốc - Đảo Ngọc',
  //   destination: 'Phú Quốc',
  //   category: 'trong-nuoc',
  //   duration: '3 ngày 2 đêm',
  //   price: 3990000,
  //   rating: 4.9,
  //   reviews: 421,
  //   image: tourPhuquoc,
  //   description: 'Nghỉ dưỡng tại đảo ngọc Phú Quốc với biển xanh cát trắng và hải sản tươi ngon.',
  //   highlights: ['Bãi Sao', 'VinWonders', 'Câu cá & lặn biển', 'Sunset Sanato'],
  //   included: ['Vé máy bay', 'Resort 4 sao', 'Bữa ăn', 'Tour 4 đảo', 'Xe đưa đón'],
  //   itinerary: [
  //     { day: 1, title: 'Đến Phú Quốc', description: 'Bay đến Phú Quốc, nhận phòng resort, tắm biển.' },
  //     { day: 2, title: 'Tour 4 đảo', description: 'Lặn ngắm san hô, câu cá, tắm biển các đảo.' },
  //     { day: 3, title: 'VinWonders', description: 'Vui chơi VinWonders, bay về.' },
  //   ],
  // },
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
};
