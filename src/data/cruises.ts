import duthuyen from '@/assets/duthuyen.jpg';
import duthuyen2 from '@/assets/duthuyen2.jpg';
import nhahang from '@/assets/nhahang.jpg';
import nhahang2 from '@/assets/nhahang2.jpg';
import beboi from '@/assets/beboi.png';

export interface Cruise {
  id: string;
  image: string;
  images?: string[];
  title: string;
  destination: string;
  price: string;
  duration: string;
  description: string;
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
  includes: string[];
  excludes: string[];
  notes: string[];
}

export const cruises: Cruise[] = [
  {
    id: 'halong-2n1d',
    image: duthuyen,
    images: [duthuyen, duthuyen2, nhahang, nhahang2, beboi],
    title: 'Du Thuyền Hạ Long 2 Ngày 1 Đêm',
    destination: 'Ha Long',
    price: '2.500.000 VND',
    duration: '2 ngày 1 đêm',
    description:
      'Khám phá vẻ đẹp kỳ vĩ của Vịnh Hạ Long với chuyến du thuyền 2 ngày 1 đêm, trải nghiệm những khoảnh khắc đáng nhớ giữa lòng di sản thiên nhiên thế giới.',
    itinerary: [
      {
        day: 1,
        title: 'Hà Nội - Hạ Long - Khám phá Vịnh',
        activities: [
          'Đón khách tại Hà Nội và di chuyển đến Hạ Long.',
          'Làm thủ tục lên du thuyền, nhận phòng và thưởng thức bữa trưa.',
          'Tham quan Hòn Trống Mái, Động Thiên Cung hoặc Hang Sửng Sốt.',
          'Tắm biển hoặc chèo kayak tại khu vực được phép.',
          'Thưởng thức bữa tối trên du thuyền và tham gia các hoạt động giải trí buổi tối.',
        ],
      },
      {
        day: 2,
        title: 'Hạ Long - Về Hà Nội',
        activities: [
          'Đón bình minh trên Vịnh và tập Thái Cực Quyền.',
          'Ăn sáng và tiếp tục tham quan, ngắm cảnh.',
          'Tham gia lớp học nấu ăn hoặc trang trí đồ vật.',
          'Trả phòng, dùng bữa trưa và di chuyển về Hà Nội.',
        ],
      },
    ],
    includes: [
      'Xe đưa đón Hà Nội - Hạ Long - Hà Nội',
      '01 đêm nghỉ trên du thuyền 5 sao',
      'Các bữa ăn theo chương trình',
      'Vé tham quan các điểm đến',
      'Hướng dẫn viên nhiệt tình',
      'Bảo hiểm du lịch',
    ],
    excludes: [
      'Đồ uống cá nhân',
      'Chi phí phát sinh ngoài chương trình',
      'Thuế VAT',
    ],
    notes: [
      'Giá có thể thay đổi tùy thuộc vào thời điểm đặt dịch vụ.',
      'Vui lòng cung cấp danh sách khách để làm thủ tục.',
    ],
  },
  /*
  {
    id: 'halong-3n2d',
    image: duthuyen2,
    title: 'Du Thuyền Hạ Long 3 Ngày 2 Đêm',
    destination: 'Ha Long',
    price: '4.000.000 VND',
    duration: '3 ngày 2 đêm',
    description:
      'Tận hưởng trọn vẹn vẻ đẹp của Vịnh Hạ Long với chuyến du thuyền 3 ngày 2 đêm, khám phá những hòn đảo hoang sơ và hang động kỳ vĩ.',
    itinerary: [
      {
        day: 1,
        title: 'Hà Nội - Hạ Long - Khám phá Vịnh',
        activities: [
          'Đón khách tại Hà Nội và di chuyển đến Hạ Long.',
          'Làm thủ tục lên du thuyền, nhận phòng và thưởng thức bữa trưa.',
          'Tham quan Hòn Trống Mái, Động Thiên Cung hoặc Hang Sửng Sốt.',
          'Tắm biển hoặc chèo kayak tại khu vực được phép.',
          'Thưởng thức bữa tối trên du thuyền và tham gia các hoạt động giải trí buổi tối.',
        ],
      },
      {
        day: 2,
        title: 'Khám phá Vịnh Lan Hạ - Đảo Khỉ',
        activities: [
          'Đón bình minh trên Vịnh và tập Thái Cực Quyền.',
          'Ăn sáng và chuyển sang thuyền nhỏ để khám phá Vịnh Lan Hạ.',
          'Tham quan Làng chài Việt Hải, đi xe đạp khám phá đảo.',
          'Tắm biển tại bãi tắm Vạn Bội hoặc bãi tắm Ba Trái Đào.',
          'Trở lại du thuyền lớn, thưởng thức bữa tối và các hoạt động buổi tối.',
        ],
      },
      {
        day: 3,
        title: 'Hạ Long - Về Hà Nội',
        activities: [
          'Ăn sáng, tham quan hang động cuối cùng.',
          'Làm thủ tục trả phòng và dùng bữa trưa.',
          'Di chuyển về Hà Nội.',
        ],
      },
    ],
    includes: [
      'Xe đưa đón Hà Nội - Hạ Long - Hà Nội',
      '02 đêm nghỉ trên du thuyền 5 sao',
      'Các bữa ăn theo chương trình',
      'Vé tham quan các điểm đến',
      'Hướng dẫn viên nhiệt tình',
      'Bảo hiểm du lịch',
    ],
    excludes: [
      'Đồ uống cá nhân',
      'Chi phí phát sinh ngoài chương trình',
      'Thuế VAT',
    ],
    notes: [
      'Giá có thể thay đổi tùy thuộc vào thời điểm đặt dịch vụ.',
      'Vui lòng cung cấp danh sách khách để làm thủ tục.',
    ],
  },
  */
  {
    id: 'catba-1d',
    image: duthuyen,
    title: 'Du Thuyền Cát Bà 1 Ngày',
    destination: 'Cat Ba',
    price: '1.500.000 VND',
    duration: '1 ngày',
    description:
      'Khám phá Vịnh Lan Hạ và các hòn đảo đẹp của Cát Bà trong chuyến du thuyền 1 ngày đầy thú vị.',
    itinerary: [
      {
        day: 1,
        title: 'Cát Bà - Vịnh Lan Hạ',
        activities: [
          'Đón khách tại Cát Bà và di chuyển ra bến tàu.',
          'Lên du thuyền, khởi hành tham quan Vịnh Lan Hạ.',
          'Chèo kayak qua các hang động và làng chài nổi.',
          'Thưởng thức bữa trưa hải sản trên du thuyền.',
          'Tắm biển tại bãi tắm tự nhiên.',
          'Trở về Cát Bà.',
        ],
      },
    ],
    includes: [
      'Xe đưa đón tại Cát Bà',
      'Tàu du thuyền',
      'Bữa trưa trên tàu',
      'Vé tham quan',
      'Hướng dẫn viên',
      'Bảo hiểm du lịch',
    ],
    excludes: ['Đồ uống cá nhân', 'Chi phí phát sinh'],
    notes: ['Khởi hành hàng ngày.'],
  },
  {
    id: 'danang-river-cruise',
    image: duthuyen2,
    title: 'Du Thuyền Sông Hàn Đà Nẵng',
    destination: 'Da Nang',
    price: '500.000 VND',
    duration: '2 giờ',
    description:
      'Thưởng ngoạn vẻ đẹp lộng lẫy của Đà Nẵng về đêm trên du thuyền Sông Hàn, ngắm nhìn các cây cầu nổi tiếng và màn trình diễn pháo hoa (nếu có).',
    itinerary: [
      {
        day: 1,
        title: 'Du Thuyền Sông Hàn',
        activities: [
          'Đón khách tại bến du thuyền Sông Hàn.',
          'Du thuyền khởi hành, ngắm cảnh cầu Rồng, cầu Sông Hàn, cầu Trần Thị Lý.',
          'Thưởng thức nhạc sống và đồ uống.',
          'Trở về bến.',
        ],
      },
    ],
    includes: ['Vé du thuyền', 'Đồ uống chào mừng', 'Bảo hiểm'],
    excludes: ['Đồ ăn, đồ uống gọi thêm', 'Chi phí cá nhân'],
    notes: ['Khởi hành vào buổi tối hàng ngày.'],
  },
];