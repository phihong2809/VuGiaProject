import heroHaLong from '@/assets/hero-halong.webp';
import mountainHaLong from '@/assets/halong-moutain.webp';
import bridgeHaLong from '@/assets/cau-halong.webp';
import islandHaLong from '@/assets/daohalong.webp';
import sunWheel from '@/assets/vongquaymattroi.webp';
import nhahang1 from '@/assets/nhahang1.webp';
import nhahang2 from '@/assets/nhahang2.webp';
import monan1 from '@/assets/monan1.webp';

export interface HotelSection {
  title: string;
  items: string[];
}

export interface Hotel {
  id: string;
  assetKey: string;
  name: string;
  area: string;
  location: string;
  price: number;
  stars: number;
  rating: number;
  summary: string;
  note: string;
  image: string;
  images: string[];
  highlights: string[];
  sections: HotelSection[];
}

type HotelSeed = Omit<Hotel, 'image' | 'images' | 'note'> & {
  note?: string;
  fallbackImages?: string[];
};

const assetModules = import.meta.glob('../assets/*.{webp,png,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const defaultHotelNote =
  'Lưu ý phòng sẽ có nhiều loại hạng phòng giá khác nhau và có thể phụ thu vào dịp cuối tuần hoặc ngày lễ. Vui lòng liên hệ CSKH để được tư vấn và báo giá chính xác nhất.';

const normalizeAssetKey = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');

const findAsset = (token: string) => {
  const normalizedToken = normalizeAssetKey(token);

  return Object.entries(assetModules).find(([path]) => {
    const fileName = path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? '';
    return normalizeAssetKey(fileName) === normalizedToken;
  })?.[1];
};

const buildHotelImages = (assetKey: string, fallbackImages: string[]) => {
  const avatar = findAsset(`avt${assetKey}`) ?? fallbackImages[0] ?? heroHaLong;
  const detailImages = Array.from({ length: 40 }, (_, index) => findAsset(`${assetKey}${index + 1}`)).filter(
    (image): image is string => Boolean(image),
  );

  return {
    image: avatar,
    images: Array.from(new Set([avatar, ...detailImages, ...fallbackImages])).filter(Boolean),
  };
};

const createHotel = ({ fallbackImages = [heroHaLong, bridgeHaLong, islandHaLong], note = defaultHotelNote, ...hotel }: HotelSeed): Hotel => ({
  ...hotel,
  note,
  ...buildHotelImages(hotel.assetKey, fallbackImages),
});

export const hotels: Hotel[] = [
  createHotel({
    id: 'dragon-legend-hotel',
    assetKey: 'dragon',
    name: 'Khách sạn Dragon Legend 4*',
    area: 'Bãi Cháy, Hạ Long',
    location: 'Tổ 9, khu 9, Phường Bãi Cháy, Hạ Long, Việt Nam',
    price: 870000,
    stars: 4,
    rating: 8.8,
    fallbackImages: [heroHaLong, nhahang1, bridgeHaLong, islandHaLong],
    summary:
      'Dragon Legend Hotel nằm gần khu vực Halong Marine Plaza, cách cáp treo Nữ Hoàng khoảng 4 km. Khách sạn có hồ bơi trong nhà, trung tâm thể dục, quầy bar, nhà hàng và hỗ trợ lễ tân 24 giờ, phù hợp cho kỳ nghỉ gia đình hoặc nhóm bạn tại Bãi Cháy.',
    highlights: [
      'Hồ bơi trong nhà',
      'WiFi miễn phí',
      'Xe đưa đón sân bay',
      'Chỗ đỗ xe miễn phí',
      'Phòng không hút thuốc',
      'Spa & chăm sóc sức khỏe',
      'Lễ tân 24 giờ',
      'Trung tâm thể dục',
      'Nhà hàng',
      'Quầy bar',
    ],
    sections: [
      {
        title: 'Cực kỳ phù hợp cho kỳ lưu trú của bạn',
        items: [
          'Chỗ đỗ xe miễn phí',
          'WiFi miễn phí',
          'Xe đưa đón sân bay',
          'Trung tâm Spa & chăm sóc sức khỏe',
          'Phòng không hút thuốc',
          'Nhà hàng',
          'Dịch vụ phòng',
          'Dịch vụ đỗ xe cho khách',
        ],
      },
      {
        title: 'Hoạt động & ăn uống',
        items: ['Karaoke (phụ phí)', 'Quầy bar', 'Nhà hàng'],
      },
      {
        title: 'Dịch vụ lễ tân & doanh nhân',
        items: [
          'Tủ khóa',
          'Giữ hành lí (phụ phí)',
          'Thu đổi ngoại tệ',
          'Lễ tân 24 giờ',
          'Fax/photocopy (phụ phí)',
          'Tiện nghi tổ chức hội họp/tiệc (phụ phí)',
        ],
      },
      {
        title: 'Tổng quát & an ninh',
        items: [
          'Điều hòa nhiệt độ',
          'Thang máy',
          'Tiện nghi cho khách khuyết tật',
          'Phòng không hút thuốc',
          'Dịch vụ phòng',
          'Bình chữa cháy, CCTV, khóa thẻ và két an toàn',
        ],
      },
      {
        title: 'Chăm sóc sức khỏe',
        items: [
          'Hồ bơi trong nhà miễn phí',
          'Phòng gym',
          'Ghế/ghế dài tắm nắng',
          'Massage',
          'Spa & chăm sóc sức khỏe (phụ phí)',
          'Phòng xông hơi (phụ phí)',
          'Ngôn ngữ: Tiếng Anh, Tiếng Việt',
        ],
      },
    ],
  }),
  createHotel({
    id: 'song-loc-luxury-hotel',
    assetKey: 'songloc',
    name: 'Song Loc Luxury Hotel 4*',
    area: 'Bãi Cháy, Hạ Long',
    location: 'Slot KS 11, Tien Ong Street, Bai Chay, Hạ Long, Việt Nam',
    price: 820000,
    stars: 4,
    rating: 8.4,
    fallbackImages: [mountainHaLong, nhahang2, heroHaLong, bridgeHaLong],
    summary:
      'Song Loc Luxury Hotel có hồ bơi trong nhà, chỗ đỗ xe riêng miễn phí và Wi‑Fi toàn khách sạn. Nơi nghỉ cách Halong Marine Plaza khoảng 800 m, thuận tiện cho khách muốn nghỉ dưỡng, công tác hoặc di chuyển tới cáp treo Nữ Hoàng và cảng Tuần Châu.',
    highlights: [
      'Hồ bơi trong nhà',
      'WiFi miễn phí',
      'Xe đưa đón sân bay',
      'Phòng gia đình',
      'Chỗ đỗ xe miễn phí',
      'Phòng không hút thuốc',
      'Lễ tân 24 giờ',
      'Trung tâm thể dục',
      'Quầy bar',
      'Bữa sáng',
    ],
    sections: [
      {
        title: 'Cực kỳ phù hợp cho kỳ lưu trú của bạn',
        items: [
          'Phòng tắm riêng',
          'Điều hòa không khí',
          'TV màn hình phẳng',
          'Tầm nhìn ra khung cảnh',
          'Phòng gia đình',
          'Xe đưa đón sân bay',
          'Chỗ đỗ xe miễn phí',
          'WiFi miễn phí',
        ],
      },
      {
        title: 'Ngoài trời & tiện ích phòng',
        items: [
          'Bàn ghế ngoài trời',
          'Sân hiên phơi nắng',
          'Tiện nghi BBQ (phụ phí)',
          'Sân vườn',
          'Ấm đun nước điện',
          'Tủ lạnh',
          'Giá treo quần áo và ổ điện gần giường',
        ],
      },
      {
        title: 'Đồ ăn & thức uống',
        items: [
          'Quán cà phê trong khuôn viên',
          'Trái cây, rượu vang/sâm panh (phụ phí)',
          'Bữa sáng tại phòng',
          'Quầy bar',
          'Minibar',
          'Nhà hàng',
        ],
      },
      {
        title: 'Dịch vụ lễ tân & gia đình',
        items: [
          'Nhận/trả phòng riêng và cấp tốc',
          'Giữ hành lí',
          'Bàn bán tour',
          'Thu đổi ngoại tệ',
          'Lễ tân 24 giờ',
          'Xe đẩy, cửa an toàn cho trẻ nhỏ, nắp che ổ cắm điện',
        ],
      },
      {
        title: 'Tổng quát & sức khỏe',
        items: [
          'Dịch vụ đưa đón (phụ phí)',
          'Không gây dị ứng, hệ thống cách âm',
          'Cho thuê xe hơi, bữa trưa đóng hộp',
          'Thang máy, tiện nghi cho người khuyết tật',
          'Hồ bơi trong nhà miễn phí',
          'Trung tâm thể dục và phòng xông hơi',
          'Ngôn ngữ: Tiếng Anh, Tiếng Việt, Tiếng Trung',
        ],
      },
    ],
  }),
  createHotel({
    id: 'muong-thanh-suoi-mo',
    assetKey: 'muongthanh',
    name: 'Mường Thanh Holiday Suối Mơ Hạ Long 4*',
    area: 'Trung tâm Bãi Cháy, Hạ Long',
    location: 'Đường Hạ Long, Phường Bãi Cháy, trung tâm du lịch, Hạ Long',
    price: 1070000,
    stars: 4,
    rating: 8.6,
    fallbackImages: [sunWheel, heroHaLong, mountainHaLong, nhahang1],
    summary:
      'Nằm gần bãi biển Bãi Cháy và chỉ cách cáp treo Nữ Hoàng vài phút đi bộ, Mường Thanh Holiday Suối Mơ Hạ Long có hồ bơi ngoài trời, bể sục, khu vườn và trung tâm thể dục. Đây là lựa chọn thuận tiện cho khách thích nghỉ dưỡng gần trung tâm du lịch.',
    highlights: [
      'Hồ bơi ngoài trời',
      'WiFi miễn phí',
      'Xe đưa đón sân bay',
      'Chỗ đỗ xe miễn phí',
      'Phòng không hút thuốc',
      'Lễ tân 24 giờ',
      'Trung tâm thể dục',
      'Nhà hàng',
      'Quầy bar',
      'Bữa sáng',
    ],
    sections: [
      {
        title: 'Tiện nghi phòng',
        items: [
          'Bồn tắm và phòng tắm riêng',
          'Điều hòa không khí',
          'TV màn hình phẳng',
          'Minibar, tủ lạnh, ấm đun nước',
          'Bàn làm việc và ổ điện gần giường',
          'Ga trải giường và khăn tắm đầy đủ',
        ],
      },
      {
        title: 'Ngoài trời & ăn uống',
        items: [
          'Sân hiên phơi nắng',
          'Sân trong và khu vườn',
          'Quán cà phê trong khuôn viên',
          'Bữa sáng tại phòng',
          'Nhà hàng, quầy bar, thực đơn ăn kiêng theo yêu cầu',
        ],
      },
      {
        title: 'Dịch vụ lễ tân & dọn phòng',
        items: [
          'Có xuất hóa đơn',
          'Giữ hành lí',
          'Thu đổi ngoại tệ',
          'Lễ tân 24 giờ',
          'Dọn phòng hàng ngày',
          'Giặt ủi, giặt khô, dịch vụ ủi (phụ phí)',
        ],
      },
      {
        title: 'An ninh & tổng quát',
        items: [
          'CCTV, báo động an ninh, khóa thẻ, két an toàn',
          'Khu vực xem TV/sảnh chung',
          'Không gây dị ứng, cách âm, thang máy',
          'Tiện nghi cho khách khuyết tật',
          'Dịch vụ đưa đón sân bay (phụ phí)',
          'Phòng không hút thuốc, dịch vụ phòng',
        ],
      },
      {
        title: 'Hồ bơi & chăm sóc sức khỏe',
        items: [
          'Hồ bơi ngoài trời miễn phí, mở cửa quanh năm',
          'Hồ bơi có tầm nhìn, bể ngâm và khu vực nông',
          'Ghế/ghế dài tắm nắng, ô che nắng, hàng rào quanh hồ',
          'Hồ bơi trẻ em',
          'Jacuzzi, massage, spa lounge, ngâm chân',
          'Trung tâm thể dục và phòng xông hơi (phụ phí)',
          'Ngôn ngữ: Tiếng Anh, Tiếng Việt',
        ],
      },
    ],
  }),
  createHotel({
    id: 'mithrin-hotel-halong',
    assetKey: 'mirthrin',
    name: 'Mithrin Hotel Halong 4*',
    area: 'Hoàng Quốc Việt, Hạ Long',
    location: 'Hoang Quoc Viet Road, Hạ Long, Việt Nam',
    price: 820000,
    stars: 4,
    rating: 9.6,
    fallbackImages: [bridgeHaLong, heroHaLong, islandHaLong, nhahang2],
    summary:
      'Mithrin Hotel Halong tọa lạc gần Marina Bay, có hồ bơi ngoài trời, sân hiên, nhà hàng và chỗ đỗ xe riêng miễn phí. Khách sạn 4 sao này phù hợp với khách muốn nghỉ dưỡng nhẹ nhàng, di chuyển tiện tại khu Hùng Thắng – Bãi Cháy.',
    highlights: [
      'Hồ bơi ngoài trời',
      'WiFi miễn phí',
      'Chỗ đỗ xe miễn phí',
      'Phòng không hút thuốc',
      'Lễ tân 24 giờ',
      'Nhà hàng',
      'Dịch vụ phòng',
      'Quầy bar',
      'Bữa sáng',
    ],
    sections: [
      {
        title: 'Cực kỳ phù hợp cho kỳ lưu trú của bạn',
        items: [
          'Bồn tắm và phòng tắm riêng',
          'WiFi miễn phí',
          'Điều hòa không khí',
          'TV màn hình phẳng',
          'Tầm nhìn ra khung cảnh',
          'Nhà hàng và chỗ đỗ xe miễn phí',
        ],
      },
      {
        title: 'Phòng & ăn uống',
        items: [
          'Ấm đun nước điện, giá treo quần áo, bàn làm việc',
          'Truyền hình cáp/vệ tinh, điện thoại, TV',
          'Quầy bar đồ ăn nhẹ, minibar, nhà hàng',
          'Trái cây, rượu vang/sâm panh (phụ phí)',
        ],
      },
      {
        title: 'Dịch vụ lễ tân & dọn phòng',
        items: [
          'Có xuất hóa đơn, tủ khóa',
          'Nhận/trả phòng riêng và cấp tốc',
          'Giữ hành lí, bàn bán tour, thu đổi ngoại tệ',
          'Lễ tân 24 giờ',
          'Dọn phòng hàng ngày, giặt ủi, giặt khô, dịch vụ ủi',
        ],
      },
      {
        title: 'An ninh & tổng quát',
        items: [
          'Bình chữa cháy, CCTV, báo động an ninh, két an toàn',
          'Khu vực cho phép hút thuốc',
          'Điều hòa nhiệt độ',
          'Cấm hút thuốc trong toàn bộ khuôn viên',
          'Phòng cách âm, thang máy, dịch vụ phòng',
        ],
      },
      {
        title: 'Hồ bơi & ngôn ngữ',
        items: [
          'Hồ bơi ngoài trời miễn phí, mở cửa quanh năm',
          'Dành cho mọi độ tuổi',
          'Phòng gym',
          'Ngôn ngữ: Tiếng Anh, Tiếng Việt',
        ],
      },
    ],
  }),
  createHotel({
    id: 'new-era-hotel-spa',
    assetKey: 'era',
    name: 'New Era Hotel & Spa Ha Long 4*',
    area: 'Tiên Ông, Bãi Cháy, Hạ Long',
    location: '15 Đường Tiên Ông, Hạ Long, Việt Nam',
    price: 820000,
    stars: 4,
    rating: 8.0,
    fallbackImages: [nhahang1, sunWheel, heroHaLong, bridgeHaLong],
    summary:
      'New Era Hotel & Spa Ha Long là khách sạn 4 sao nằm gần Bãi Cháy, có hồ bơi trong nhà, phòng gia đình, chỗ đỗ xe miễn phí và nhà hàng. Không gian phù hợp cho nhóm khách đi nghỉ ngắn ngày hoặc gia đình muốn ở gần khu vui chơi biển.',
    highlights: [
      'Hồ bơi trong nhà',
      'WiFi miễn phí',
      'Phòng gia đình',
      'Chỗ đỗ xe miễn phí',
      'Phòng không hút thuốc',
      'Lễ tân 24 giờ',
      'Trung tâm thể dục',
      'Nhà hàng',
      'Dịch vụ phòng',
      'Bữa sáng',
    ],
    sections: [
      {
        title: 'Cực kỳ phù hợp cho kỳ lưu trú của bạn',
        items: [
          'Phòng tắm riêng',
          'Bãi biển',
          'Điều hòa không khí',
          'TV màn hình phẳng',
          'Tầm nhìn ra khung cảnh',
          'Phòng gia đình',
          'WiFi miễn phí',
        ],
      },
      {
        title: 'Phòng nghỉ & hoạt động',
        items: [
          'Khăn tắm, áo choàng tắm, dép, máy sấy tóc',
          'Ấm đun nước điện và giá treo quần áo',
          'Bàn làm việc',
          'TV màn hình phẳng',
          'Hoạt động bãi biển',
        ],
      },
      {
        title: 'Dịch vụ & tổng quát',
        items: [
          'Lễ tân 24 giờ',
          'Dịch vụ báo thức',
          'Dịch vụ phòng',
          'Két an toàn',
          'Điều hòa, hệ thống sưởi',
          'Cấm hút thuốc trong toàn bộ khuôn viên',
          'Phòng gia đình và phòng không hút thuốc',
        ],
      },
      {
        title: 'Hồ bơi & chăm sóc sức khỏe',
        items: [
          'Hồ bơi trong nhà miễn phí, mở cửa quanh năm',
          'Hồ bơi trên sân thượng, hồ bơi có tầm nhìn',
          'Ghế/ghế dài tắm nắng, hàng rào quanh hồ',
          'Phòng gym và trung tâm thể dục',
          'Ngôn ngữ: Tiếng Anh, Tiếng Việt, Tiếng Trung',
        ],
      },
    ],
  }),
  createHotel({
    id: 'danitel-halong',
    assetKey: 'danitel',
    name: 'Danitel Halong 4*',
    area: 'Kỳ Quan 8, Bãi Cháy, Hạ Long',
    location: 'Kỳ Quan 8, Hạ Long, Việt Nam',
    price: 870000,
    stars: 4,
    rating: 8.5,
    fallbackImages: [heroHaLong, nhahang2, bridgeHaLong, monan1],
    summary:
      'Danitel Halong nằm gần Bãi Cháy và có hồ bơi ngoài trời, sân hiên, nhà hàng, quầy bar cùng chỗ đỗ xe riêng miễn phí. Khách sạn phù hợp cho nhóm khách thích vị trí gần biển và vẫn dễ di chuyển tới trung tâm thành phố.',
    highlights: [
      'Hồ bơi ngoài trời',
      'WiFi miễn phí',
      'Phòng gia đình',
      'Chỗ đỗ xe miễn phí',
      'Phòng không hút thuốc',
      'Lễ tân 24 giờ',
      'Nhà hàng',
      'Dịch vụ phòng',
      'Quầy bar',
      'Bữa sáng',
    ],
    sections: [
      {
        title: 'Cực kỳ phù hợp cho kỳ lưu trú của bạn',
        items: [
          'Phòng tắm riêng',
          'Điều hòa không khí',
          'TV màn hình phẳng',
          'Phòng gia đình',
          'Tiện nghi BBQ',
          'Chỗ đỗ xe miễn phí',
          'WiFi miễn phí',
        ],
      },
      {
        title: 'Ngoài trời, hoạt động & ăn uống',
        items: [
          'Sân hiên phơi nắng, bàn ghế ngoài trời, BBQ (phụ phí)',
          'Tour đi bộ, tour đi xe đạp, bữa tối theo chủ đề (phụ phí)',
          'Quầy bar đồ ăn nhẹ, minibar, nhà hàng',
        ],
      },
      {
        title: 'Dịch vụ lễ tân & dọn phòng',
        items: [
          'Có xuất hóa đơn',
          'Giữ hành lí, bàn bán tour, thu đổi ngoại tệ',
          'Lễ tân 24 giờ',
          'Dọn phòng hàng ngày',
          'Dịch vụ ủi và giặt ủi (phụ phí)',
        ],
      },
      {
        title: 'Tổng quát & an ninh',
        items: [
          'Điều hòa nhiệt độ, sàn lát gỗ, thang máy',
          'Phòng gia đình, phòng không hút thuốc, dịch vụ phòng',
          'CCTV, báo động an ninh, khóa thẻ, két an toàn',
        ],
      },
      {
        title: 'Hồ bơi & ngôn ngữ',
        items: [
          'Hồ bơi ngoài trời miễn phí, mở cửa quanh năm',
          'Chỉ dành cho người lớn, hồ bơi vô cực và có tầm nhìn',
          'Ghế/ghế dài tắm nắng, ô che nắng loại to',
          'Ngôn ngữ: Tiếng Anh, Tiếng Việt',
        ],
      },
    ],
  }),
  createHotel({
    id: 'fte-ha-long-hotel',
    assetKey: 'fte',
    name: 'FTE Ha Long Hotel 5*',
    area: 'Đông Hùng Thắng 2, Bãi Cháy, Hạ Long',
    location: 'C117 - C118, lô 10, khu dân cư Du Lịch Đông Hùng Thắng 2, phường Bãi Cháy, Hạ Long',
    price: 1200000,
    stars: 5,
    rating: 8.6,
    fallbackImages: [mountainHaLong, heroHaLong, nhahang1, sunWheel],
    summary:
      'FTE Ha Long Hotel là khách sạn 5 sao tại khu Đông Hùng Thắng với hồ bơi ngoài trời, trung tâm thể dục, phòng chờ chung và dịch vụ đẳng cấp quốc tế. Nơi nghỉ phù hợp cho khách cần trải nghiệm tiện nghi cao cấp, gần Marina Bay và cảng Tuần Châu.',
    highlights: [
      'Hồ bơi ngoài trời',
      'Xe đưa đón sân bay',
      'Phòng gia đình',
      'Chỗ đỗ xe miễn phí',
      'Phòng không hút thuốc',
      'Spa & chăm sóc sức khỏe',
      'Lễ tân 24 giờ',
      'Trung tâm thể dục',
      'Quầy bar',
      'Bữa sáng',
    ],
    sections: [
      {
        title: 'Tiện nghi phòng',
        items: [
          'Phòng tắm riêng, áo choàng tắm, dép, máy sấy tóc',
          'Điều hòa, TV màn hình phẳng, minibar, tủ lạnh',
          'Bàn làm việc, đồng hồ báo thức và giường cực dài',
          'Phòng gia đình, cách âm và không gây dị ứng',
        ],
      },
      {
        title: 'Hoạt động & ăn uống',
        items: [
          'Cho thuê xe đạp, lớp dạy nấu ăn, tour văn hóa địa phương',
          'Giờ vàng, bữa tối theo chủ đề, tour đi bộ/xe đạp',
          'Bida (phụ phí)',
          'Quán cà phê, trái cây, rượu vang/sâm panh, minibar, nhà hàng',
        ],
      },
      {
        title: 'Dịch vụ lễ tân & gia đình',
        items: [
          'Nhận/trả phòng riêng và cấp tốc',
          'Giữ hành lí, bàn bán tour, thu đổi ngoại tệ',
          'Lễ tân 24 giờ',
          'Dịch vụ trông giữ trẻ em (phụ phí)',
          'Dọn phòng hàng ngày, giặt ủi, giặt khô, ủi',
        ],
      },
      {
        title: 'Tổng quát & an ninh',
        items: [
          'Khu vực xem TV/sảnh chung',
          'Cho thuê xe hơi, bữa trưa đóng hộp',
          'Thang máy, tiện nghi cho khách khuyết tật',
          'Dịch vụ phòng, giao nhận đồ tạp hóa (phụ phí)',
          'CCTV, báo động an ninh, khóa thẻ/ổ khóa, két an toàn',
        ],
      },
      {
        title: 'Hồ bơi & chăm sóc sức khỏe',
        items: [
          'Hồ bơi ngoài trời miễn phí, mở cửa quanh năm',
          'Hồ bơi trên sân thượng, hồ bơi vô cực và quầy bar hồ bơi',
          'Spa lounge, ngâm chân, massage toàn thân/cặp đôi (phụ phí)',
          'Phòng xông hơi ướt, phòng gym, trung tâm thể dục',
          'Ngôn ngữ: Tiếng Anh, Tiếng Việt',
        ],
      },
    ],
  }),
  createHotel({
    id: 'muong-thanh-luxury-quang-ninh',
    assetKey: 'muongthanhluxury',
    name: 'Mường Thanh Luxury Quảng Ninh 5*',
    area: 'Ha Long Road, Bãi Cháy, Hạ Long',
    location: 'Ha Long Road, Bai Chay Ward, Hạ Long, Việt Nam',
    price: 1470000,
    stars: 5,
    rating: 8.7,
    fallbackImages: [sunWheel, bridgeHaLong, heroHaLong, monan1],
    summary:
      'Muong Thanh Luxury Quang Ninh Hotel mang phong cách nghỉ dưỡng sang trọng với hồ bơi ngoài trời, trung tâm thể dục, phòng xông hơi và nhiều dịch vụ thư giãn. Khách sạn nằm gần Bãi Cháy, chợ đêm Hạ Long và Marine Plaza, thuận tiện cho nghỉ dưỡng lẫn công tác.',
    highlights: [
      'Hồ bơi ngoài trời',
      'WiFi miễn phí',
      'Phòng gia đình',
      'Chỗ đỗ xe miễn phí',
      'Phòng không hút thuốc',
      'Spa & chăm sóc sức khỏe',
      'Lễ tân 24 giờ',
      'Trung tâm thể dục',
      'Quầy bar',
      'Bữa sáng',
    ],
    sections: [
      {
        title: 'Tiện nghi phòng',
        items: [
          'Bồn tắm, phòng tắm riêng và máy sấy tóc',
          'TV truyền hình cáp màn hình phẳng',
          'Két an toàn cá nhân và minibar',
          'Ấm đun nước điện, tủ lạnh',
          'Nhìn ra hồ bơi hoặc cảnh quan tùy hạng phòng',
        ],
      },
      {
        title: 'Hoạt động & ăn uống',
        items: [
          'Thiết bị tennis, sân tennis (phụ phí)',
          'Câu lạc bộ trẻ em, karaoke (phụ phí), bóng bàn, sòng bạc',
          'Trái cây, rượu vang/sâm panh, thực đơn ăn kiêng theo yêu cầu',
          'Quầy bar, minibar, nhà hàng',
        ],
      },
      {
        title: 'Dịch vụ & tổng quát',
        items: [
          'Giữ hành lí, thu đổi ngoại tệ, lễ tân 24 giờ',
          'Dịch vụ ủi, giặt ủi, bàn ủi quần (phụ phí)',
          'Cho thuê xe hơi, bữa trưa đóng hộp',
          'Phòng gia đình, phòng không hút thuốc, dịch vụ phòng',
          'Tiện nghi cho khách khuyết tật',
        ],
      },
      {
        title: 'Hồ bơi & làm đẹp',
        items: [
          'Hồ bơi ngoài trời miễn phí theo mùa',
          'Phòng gym, spa lounge, tiện nghi spa',
          'Chăm sóc da mặt, trang điểm, làm tóc',
          'Massage và phòng xông hơi (phụ phí)',
          'Ngôn ngữ: Tiếng Anh, Tiếng Việt',
        ],
      },
    ],
  }),
  createHotel({
    id: 'muong-thanh-grand-halong',
    assetKey: 'muongthanhgrand',
    name: 'Mường Thanh Grand Hạ Long 4*',
    area: '20 đường Hạ Long, Bãi Cháy, Hạ Long',
    location: 'Số 20 đường Hạ Long, phường Bãi Cháy, TP. Hạ Long',
    price: 820000,
    stars: 4,
    rating: 8.3,
    fallbackImages: [bridgeHaLong, mountainHaLong, nhahang1, heroHaLong],
    summary:
      'Mường Thanh Grand Hạ Long nằm ven biển với tầm nhìn đẹp ra Vịnh Hạ Long, có Wi‑Fi miễn phí, hồ bơi trong nhà và phòng tập thể hình. Khách sạn phù hợp với du khách muốn nghỉ dưỡng trong khu vực trung tâm Bãi Cháy và dễ dàng di chuyển tới các điểm vui chơi.',
    highlights: [
      'WiFi miễn phí',
      'Xe đưa đón sân bay',
      'Phòng gia đình',
      'Chỗ đỗ xe miễn phí',
      'Phòng không hút thuốc',
      'Lễ tân 24 giờ',
      'Trung tâm thể dục',
      'Nhà hàng',
      'Quầy bar',
      'Bữa sáng',
    ],
    sections: [
      {
        title: 'Cực kỳ phù hợp cho kỳ lưu trú của bạn',
        items: [
          'Bồn tắm và phòng tắm riêng',
          'Điều hòa không khí',
          'TV màn hình phẳng',
          'Phòng gia đình',
          'Xe đưa đón sân bay',
          'WiFi miễn phí',
        ],
      },
      {
        title: 'Ngoài trời & ăn uống',
        items: [
          'Sân hiên phơi nắng',
          'Tiện nghi BBQ (phụ phí)',
          'Sân vườn',
          'Quầy bar và nhà hàng',
        ],
      },
      {
        title: 'Dịch vụ & tổng quát',
        items: [
          'Giữ hành lí, thu đổi ngoại tệ, lễ tân 24 giờ',
          'Dọn phòng hàng ngày, giặt khô, giặt ủi, dịch vụ ủi',
          'Không gây dị ứng, hệ thống cách âm, hệ thống sưởi',
          'Cho thuê xe hơi, bữa trưa đóng hộp',
          'Tiện nghi ủi, xe đưa đón sân bay (phụ phí), dịch vụ phòng',
        ],
      },
      {
        title: 'Chăm sóc sức khỏe',
        items: [
          'Bồn tắm hơi / bể tắm Thổ Nhĩ Kỳ (phụ phí)',
          'Bồn tắm nóng / Jacuzzi (phụ phí)',
          'Trung tâm thể dục',
          'Ngôn ngữ: Tiếng Anh, Tiếng Việt',
        ],
      },
    ],
  }),
  createHotel({
    id: 'central-luxury-halong',
    assetKey: 'centralluxury',
    name: 'Central Luxury Hạ Long Hotel 5*',
    area: 'Hùng Thắng, Bãi Cháy, Hạ Long',
    location: 'Số 01, Lô H29, khu Đa Giác 4, phường Hùng Thắng, TP. Hạ Long, Quảng Ninh',
    price: 1320000,
    stars: 5,
    rating: 8.1,
    fallbackImages: [heroHaLong, islandHaLong, nhahang2, sunWheel],
    summary:
      'Central Luxury Hạ Long Hotel là khách sạn 5 sao tại khu Hùng Thắng với hồ bơi ngoài trời, trung tâm thể dục, sân vườn và dịch vụ đưa đón sân bay. Nơi nghỉ phù hợp cho cả khách du lịch gia đình lẫn khách doanh nhân cần không gian rộng và tiện nghi hiện đại.',
    highlights: [
      'Hồ bơi ngoài trời',
      'WiFi miễn phí',
      'Xe đưa đón sân bay',
      'Chỗ đỗ xe miễn phí',
      'Phòng không hút thuốc',
      'Lễ tân 24 giờ',
      'Trung tâm thể dục',
      '3 nhà hàng',
      'Quầy bar',
      'Bữa sáng',
    ],
    sections: [
      {
        title: 'Tiện nghi phòng',
        items: [
          'Bồn tắm, áo choàng tắm, phòng tắm riêng',
          'Điều hòa, TV màn hình phẳng, minibar, tủ lạnh',
          'Bàn làm việc, ghế sofa, đồng hồ báo thức',
          'Tầm nhìn ra khung cảnh',
        ],
      },
      {
        title: 'Hoạt động & gia đình',
        items: [
          'Biểu diễn/nhạc sống và giải trí buổi tối (phụ phí)',
          'Tour/lớp về văn hóa địa phương, giờ vàng',
          'Nhân viên giải trí, sân chơi trẻ em',
          'Sân tennis (phụ phí)',
          'Cửa an toàn cho trẻ nhỏ, khu vui chơi trong nhà',
        ],
      },
      {
        title: 'Ăn uống & dịch vụ',
        items: [
          'Quán cà phê trong khuôn viên',
          'Bữa sáng tại phòng, quầy bar, minibar, nhà hàng',
          'Giữ hành lí, bàn bán tour, lễ tân 24 giờ',
          'Dọn phòng hàng ngày, giặt ủi, bàn ủi quần',
        ],
      },
      {
        title: 'Tổng quát & sức khỏe',
        items: [
          'Dịch vụ đưa đón (phụ phí)',
          'Cho thuê xe hơi, phòng cách âm, thang máy',
          'Tiện nghi ủi, phòng không hút thuốc, dịch vụ phòng',
          'Hồ bơi ngoài trời miễn phí, mở cửa quanh năm',
          'Hồ bơi trên sân thượng và quầy bar hồ bơi',
          'Phòng gym, spa lounge, phòng xông hơi (phụ phí)',
          'Ngôn ngữ: Tiếng Anh, Tiếng Việt, Tiếng Trung',
        ],
      },
    ],
  }),
  createHotel({
    id: 'wyndham-soleil-halong',
    assetKey: 'wynhamsoleil',
    name: 'Hotel Soleil Ha Long by Wyndham 5*',
    area: 'Bãi Cháy, Hạ Long',
    location: '82 Hạ Long 12A Anh Dao, Bai Chay, Ha Long, Quang Ninh, Hạ Long, Việt Nam',
    price: 1420000,
    stars: 5,
    rating: 8.8,
    fallbackImages: [sunWheel, heroHaLong, bridgeHaLong, nhahang1],
    summary:
      'Hotel Soleil Ha Long, Trademark Collection by Wyndham là khách sạn 5 sao gần Sun World Hạ Long với trung tâm thể dục, nhà hàng, quầy bar và hồ bơi trong nhà. Đây là lựa chọn nổi bật cho khách thích nghỉ dưỡng cao cấp ngay khu vui chơi Bãi Cháy.',
    highlights: [
      'Hồ bơi trong nhà',
      'WiFi miễn phí',
      'Xe đưa đón sân bay',
      'Phòng gia đình',
      'Chỗ đỗ xe',
      'Phòng không hút thuốc',
      'Spa & chăm sóc sức khỏe',
      'Lễ tân 24 giờ',
      'Quầy bar',
      'Bữa sáng rất tốt',
    ],
    sections: [
      {
        title: 'Cực kỳ phù hợp cho kỳ lưu trú của bạn',
        items: [
          'Phòng tắm riêng',
          'WiFi miễn phí',
          'Điều hòa không khí',
          'TV màn hình phẳng',
          'Tầm nhìn ra khung cảnh',
          'Phòng gia đình',
          'Xe đưa đón sân bay',
          'Spa & chăm sóc sức khỏe',
        ],
      },
      {
        title: 'Hoạt động & ăn uống',
        items: [
          'Giờ vàng và bữa tối theo chủ đề (phụ phí)',
          'Quán cà phê trong khuôn viên',
          'Trái cây, rượu vang/sâm panh, bữa ăn trẻ em',
          'Quầy bar đồ ăn nhẹ, minibar, nhà hàng',
        ],
      },
      {
        title: 'Dịch vụ & tổng quát',
        items: [
          'Nhận/trả phòng riêng',
          'Giữ hành lí, bàn bán tour, lễ tân 24 giờ',
          'Dọn phòng hàng ngày, giặt ủi, giặt khô, dịch vụ ủi',
          'Dịch vụ đưa đón (phụ phí), cho thuê xe hơi',
          'Thang máy, tiện nghi cho khách khuyết tật, dịch vụ phòng',
        ],
      },
      {
        title: 'Hồ bơi & chăm sóc sức khỏe',
        items: [
          'Hồ bơi trong nhà miễn phí, mở cửa quanh năm',
          'Hồ bơi nước nóng và mái che hồ bơi',
          'Ghế/ghế dài tắm nắng',
          'Massage toàn thân/chân/cổ/lưng (phụ phí)',
          'Gói spa/chăm sóc sức khỏe, ngâm chân, trung tâm thể dục',
          'Ngôn ngữ: Tiếng Anh',
        ],
      },
    ],
  }),
];
