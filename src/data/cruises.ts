import duthuyen from '@/assets/duthuyen.webp';
import duthuyen2 from '@/assets/duthuyen2.webp';
import nhahang from '@/assets/nhahang.webp';
import nhahang2 from '@/assets/nhahang2.webp';
import beboi from '@/assets/beboi.webp';
import avtSymphony from '@/assets/avtsympony.webp';
import symphony1 from '@/assets/symphony1.webp';
import symphony2 from '@/assets/symphony2.webp';
import symphony3 from '@/assets/symphony3.webp';
import symphony4 from '@/assets/symphony4.webp';
import avtOctopus from '@/assets/avtoctopus.webp';
import octopus1 from '@/assets/octopus1.webp';
import octopus2 from '@/assets/octopus2.webp';
import octopus3 from '@/assets/octopus3.webp';
import octopus4 from '@/assets/octopus4.webp';
import octopus5 from '@/assets/octopus5.webp';
import octopus6 from '@/assets/octopus6.webp';
import octopus8 from '@/assets/octopus8.webp';
import avtDiamon from '@/assets/avtdiamon.webp';
import diamon1 from '@/assets/diamon1.webp';
import diamon2 from '@/assets/diamon2.webp';
import diamon3 from '@/assets/diamon3.webp';
import diamon4 from '@/assets/diamon4.webp';
import diamon5 from '@/assets/diamon5.webp';
import avtLuna from '@/assets/avtluna.webp';
import luna1 from '@/assets/luna1.webp';
import luna2 from '@/assets/luna2.webp';
import luna3 from '@/assets/luna3.webp';
import luna4 from '@/assets/luna4.webp';
import luna5 from '@/assets/luna5.webp';
import luna6 from '@/assets/luna6.webp';
import avtDolphin from '@/assets/avtdolphin.webp';
import dolphin1 from '@/assets/dolphin1.webp';
import dolphin2 from '@/assets/dolphin2.webp';
import dolphin3 from '@/assets/dolphin3.webp';
import dolphin4 from '@/assets/dolphin4.webp';
import dolphin5 from '@/assets/dolphin5.webp';
import dolphin6 from '@/assets/dolphin6.webp';
import dolphin7 from '@/assets/dolphin7.webp';
import dolphin8 from '@/assets/dolphin8.webp';
import avtLeona from '@/assets/avtleona.webp';
import leona1 from '@/assets/leona1.webp';
import leona2 from '@/assets/leona2.webp';
import leona3 from '@/assets/leona3.webp';
import leona4 from '@/assets/leona4.webp';
import leona5 from '@/assets/leona5.webp';
import leona6 from '@/assets/leona6.webp';
import leona7 from '@/assets/leona7.webp';
import leona8 from '@/assets/leona8.webp';
import leona9 from '@/assets/leona9.webp';
import leona10 from '@/assets/leona10.webp';
import leona11 from '@/assets/leona11.webp';
import leona12 from '@/assets/leona12.webp';
import leona13 from '@/assets/leona13.webp';
import leona14 from '@/assets/leona14.webp';
import avtSaquila from '@/assets/avtsaquila.webp';
import saquila1 from '@/assets/saquila1.webp';
import saquila2 from '@/assets/saquila2.webp';
import saquila3 from '@/assets/saquila3.webp';
import saquila4 from '@/assets/saquila4.webp';
import saquila5 from '@/assets/saquila5.webp';
import saquila6 from '@/assets/saquila6.webp';
import avtParadise from '@/assets/avtparadise.webp';
import paradise1 from '@/assets/paradise1.webp';
import paradise2 from '@/assets/paradise2.webp';
import paradise3 from '@/assets/paradise3.webp';
import paradise4 from '@/assets/paradise4.webp';
import paradise5 from '@/assets/paradise5.webp';
import paradise6 from '@/assets/paradise6.webp';
import paradise7 from '@/assets/paradise7.webp';
import avtAmbassador from '@/assets/avtambrasador.webp';
import ambassador1 from '@/assets/ambrasador1.webp';
import ambassador2 from '@/assets/ambrasador2.webp';
import ambassador3 from '@/assets/ambrasador3.webp';
import ambassador4 from '@/assets/ambrasador4.webp';
import ambassador5 from '@/assets/ambrasador5.webp';
import avtBlackPearl from '@/assets/avtblackpearl.webp';
import blackPearl1 from '@/assets/blackpearl1.webp';
import blackPearl2 from '@/assets/blackpearl2.webp';
import blackPearl3 from '@/assets/blackpear3.webp';
import blackPearl4 from '@/assets/blackpearl4.webp';
import blackPearl5 from '@/assets/blackpearl5.webp';
import blackPearl6 from '@/assets/blackpearl6.webp';

export interface Cruise {
  id: string;
  image: string;
  images?: string[];
  title: string;
  destination: string;
  price: string;
  duration: string;
  description: string;
  rating?: number;
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
  includes: string[];
  excludes: string[];
  notes: string[];
}

type CruiseSeed = {
  id: string;
  title: string;
  price: number;
  image: string;
  images: string[];
  duration: string;
  description: string;
  itinerary?: Cruise['itinerary'];
  includes?: string[];
  excludes?: string[];
  notes?: string[];
};

const defaultIncludes = [
  'Du thuyền 5 sao sang trọng',
  'Đồ uống chào mừng',
  'Không gian check-in toàn cảnh vịnh',
  'Âm nhạc / giải trí theo lịch tàu',
  'Bảo hiểm du lịch',
];

const defaultExcludes = [
  'Xe đưa đón ngoài chương trình',
  'Đồ uống gọi thêm',
  'Chi phí cá nhân và VAT',
];

const defaultNotes = [
  'Vé thường có 2 mức giá riêng cho day tour và dinner.',
  'Cuối tuần hoặc ngày lễ có thể phụ thu, vui lòng liên hệ CSKH để nhận báo giá chính xác nhất.',
];

const formatVnd = (price: number) => `${new Intl.NumberFormat('vi-VN').format(price)} VND`;

const createCruise = ({
  id,
  title,
  price,
  image,
  images,
  duration,
  description,
  itinerary,
  includes,
  excludes,
  notes,
}: CruiseSeed): Cruise => ({
  id,
  title,
  image,
  images,
  destination: 'Hạ Long',
  price: formatVnd(price),
  duration,
  description,
  rating: 5,
  itinerary: itinerary ?? [
    {
      day: 1,
      title: `Trải nghiệm ${title}`,
      activities: [
        'Đón khách tại cảng tàu quốc tế Hạ Long và làm thủ tục lên tàu.',
        'Thưởng thức hành trình ngắm vịnh, chụp ảnh check-in và thư giãn trên boong.',
        'Dùng bữa theo lịch trình của tàu và tận hưởng không gian giải trí sang trọng.',
      ],
    },
  ],
  includes: includes ?? defaultIncludes,
  excludes: excludes ?? defaultExcludes,
  notes: notes ?? defaultNotes,
});

export const cruises: Cruise[] = [
  createCruise({
    id: 'v-dream-cruise',
    title: 'V-Dream Cruise',
    price: 740000,
    image: duthuyen,
    images: [duthuyen, duthuyen2, nhahang, nhahang2, beboi],
    duration: 'Day tour / Dinner',
    description:
      'V-Dream là dòng du thuyền tham quan vịnh Hạ Long trong ngày đạt tiêu chuẩn 5 sao, hạ thủy tháng 7/2023 với sức chứa 99 hành khách. Du thuyền được thiết kế 3 tầng tinh tế gồm nhà hàng buffet sang trọng, khu bể sục ngoài trời và sundeck rộng mở để thư giãn, ngắm trọn vẻ đẹp của di sản Vịnh Hạ Long.',
    includes: [
      'Sức chứa 99 khách, thiết kế 03 tầng hiện đại',
      'Nhà hàng buffet sang trọng trên tàu',
      'Bể sục Jacuzzi thư giãn ngoài trời',
      'Sundeck tắm nắng và ngắm hoàng hôn',
      'Phù hợp cho day tour và dinner cruise',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Lịch trình Day Tour V-Dream',
        activities: [
          '11:30 – 12:00: Đến cảng, check-in và lên du thuyền V-Dream sang trọng.',
          '12:00 – 12:30: Khởi hành khám phá Vịnh Hạ Long – Di sản Thiên nhiên Thế giới do UNESCO công nhận.',
          '12:30 – 13:45: Thưởng thức buffet trưa trên tàu, ngắm cảnh vịnh hùng vĩ.',
          '14:45 – 15:30: Tham quan Hang Sửng Sốt – một trong những hang động đẹp nhất Hạ Long.',
          '15:30 – 15:45: Chèo kayak hoặc đi thuyền tre thăm Hang Luồn.',
          '16:00 – 16:45: Ghé đảo Titop để tắm biển hoặc leo lên đỉnh đảo ngắm toàn cảnh vịnh.',
          '17:00: Tự do tắm nắng, ngâm Jacuzzi, đọc sách và thưởng thức Sunset Party với trà, cà phê, trái cây, bánh ngọt.',
          '18:15 – 18:30: Tàu quay về cảng, kết thúc hành trình.',
        ],
      },
      {
        day: 2,
        title: 'Lịch trình Dinner V-Dream',
        activities: [
          '18:00: Du khách check-in và di chuyển lên tàu.',
          '18:45: Thưởng thức tiệc trà chiều nhẹ, ngắm hoàng hôn và toàn cảnh thành phố Hạ Long về đêm.',
          '19:15: Thưởng thức buffet hơn 30 món Á – Âu do đầu bếp V-Dream thực hiện.',
          '20:30: Tham gia chương trình giải trí với nhạc sống, DJ và dancer chuyên nghiệp.',
          '21:30: Du thuyền cập bến, kết thúc hành trình.',
        ],
      },
    ],
    notes: [
      'Lịch trình chỉ mang tính tham khảo, thời gian thực tế có thể thay đổi theo thời tiết và giao thông trên vịnh.',
      'Vé có 2 mức giá riêng cho day tour và dinner; cuối tuần hoặc ngày lễ có thể phụ thu.',
      'Vui lòng liên hệ CSKH để được tư vấn mức giá chính xác theo thời điểm đặt.',
    ],
  }),
  createCruise({
    id: 'symphony-cruise',
    title: 'Symphony Cruise',
    price: 940000,
    image: avtSymphony,
    images: [symphony1, symphony2, symphony3, symphony4],
    duration: 'Day tour / Dinner',
    description:
      'Symphony Cruise được hạ thủy năm 2024, dài khoảng 44m với 3 boong tàu rộng lớn và sức chứa khoảng 200 khách. Du thuyền gây ấn tượng với 2 bể sục Jacuzzi, sân khấu LED hiện đại, sky bar sôi động và còn có 4 phòng nghỉ theo giờ cho khách có nhu cầu thư giãn riêng tư.',
    includes: [
      '02 bể sục Jacuzzi ở tầng 2 và 3',
      'Sân khấu màn hình LED hiện đại',
      'Sky Bar sang trọng, âm nhạc sôi động',
      '04 phòng nghỉ theo giờ',
      'Không gian check-in đẹp giữa vịnh Hạ Long',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Lịch trình Day Tour Symphony',
        activities: [
          '09:45 – 10:00: Check-in tại cảng tàu Quốc tế Hạ Long và lên du thuyền.',
          '10:00 – 11:30: Tàu di chuyển, du khách ngắm cảnh các mỏm đá độc đáo trên vịnh di sản.',
          '11:30 – 12:30: Ghé thăm Hang Sửng Sốt với cảnh quan kỳ vĩ và huyền ảo.',
          '12:30 – 13:45: Thưởng thức bữa trưa thịnh soạn với thực đơn đa dạng.',
          '13:45 – 14:30: Tham quan Hang Luồn bằng thuyền thúng hoặc chèo kayak.',
          '14:30 – 15:15: Ghé đảo Titop để nghỉ ngơi hoặc tắm biển.',
          '15:15 – 17:00: Tham gia Sunset Party trên tàu.',
          '17:00: Trở về cảng tàu quốc tế Hạ Long.',
        ],
      },
      {
        day: 2,
        title: 'Lịch trình Dinner Symphony',
        activities: [
          '17:30 – 17:45: Đón khách tại cảng tàu, chụp ảnh lưu niệm trước khi lên tàu.',
          '18:00: Du thuyền rời cảng, bắt đầu hành trình khám phá Hạ Long về đêm.',
          '18:30: Ngắm hoàng hôn, chụp ảnh check-in trên boong tàu.',
          '18:45 – 20:00: Thưởng thức buffet Á – Âu trong không gian sang trọng.',
          '20:15 – 21:45: Hòa mình vào karaoke, DJ, khiêu vũ và ngắm cảnh Hạ Long về đêm.',
          '21:45 – 22:00: Kết thúc hành trình và cập bến.',
        ],
      },
    ],
    notes: [
      'Vé được chia thành 2 loại day tour và dinner; có thể phụ thu vào cuối tuần hoặc ngày lễ.',
      'Quý khách nên liên hệ CSKH trước để được báo giá và thông tin hạng vé chính xác.',
    ],
  }),
  createCruise({
    id: 'sea-octopus-cruise',
    title: 'Sea Octopus Cruise',
    price: 970000,
    image: avtOctopus,
    images: [octopus1, octopus2, octopus3, octopus4, octopus5, octopus6, octopus8],
    duration: 'Day tour / Dinner',
    description:
      'Sea Octopus là du thuyền ẩm thực và tham quan nổi bật trên Vịnh Hạ Long, nơi du khách vừa dạo chơi miền di sản vừa tận hưởng không gian nhà hàng sang trọng với đội ngũ phục vụ chuyên nghiệp. Tàu có 2 nhà hàng lớn, các phòng ăn VIP riêng, biểu diễn violin – guitar trên boong và DJ Party sôi động sau bữa tối.',
    includes: [
      '02 nhà hàng sang trọng: Sea Breeze và Bayside Delight',
      'Phòng ăn VIP: Daydream, Lagoon, LimeStone',
      'Biểu diễn violin và guitar trên boong tàu',
      'DJ Party tại tầng 3 sau bữa tối',
      'Phù hợp gia đình, nhóm bạn, cặp đôi và khách đoàn',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Lịch trình Day Tour Sea Octopus',
        activities: [
          '08:45 – 09:10: Đón khách tại cảng quốc tế Hạ Long, giới thiệu tàu, lưu ý an toàn và bảo vệ môi trường.',
          '09:10 – 10:30: Tàu di chuyển trong vịnh, du khách ngắm cảnh thiên nhiên hùng vĩ.',
          '10:30 – 11:30: Tham quan Hang Sửng Sốt.',
          'Sau khi rời hang: Có thể chọn khám phá Hang Luồn bằng thuyền nan/kayak hoặc trải nghiệm cano riêng trên vịnh.',
          '12:30 – 13:45: Thưởng thức bữa trưa Á – Âu tại nhà hàng khi tàu đi qua nhiều điểm nổi tiếng của vịnh.',
          '13:45 – 14:30: Ghé đảo Titov để tắm biển hoặc trekking ngắm toàn cảnh Hạ Long.',
          '14:30 – 15:45: Tàu trở về bờ, du khách tiếp tục ngắm cảnh vịnh trên đường về.',
          '16:00: Du thuyền cập bến và kết thúc hành trình.',
        ],
      },
      {
        day: 2,
        title: 'Lịch trình Dinner Sea Octopus',
        activities: [
          '17:00: Đón khách lên du thuyền tại cảng tàu quốc tế Hạ Long.',
          '17:45: Chương trình chào mừng với trống hội, nước uống và trái cây.',
          '18:00: Tàu khởi hành, du khách ngắm thành phố Hạ Long về đêm qua cầu Bãi Cháy, vòng quay mặt trời, núi Bài Thơ, bảo tàng Quảng Ninh, cung Cá Heo.',
          '18:30: Thưởng thức canapé nhẹ và âm nhạc violin, guitar lãng mạn.',
          '19:15: Dùng bữa tối với thực đơn Âu – Á và các món bạch tuộc đặc trưng trên tàu.',
          '20:15: Tự do nghe nhạc, tham gia chương trình “Khoe giọng vàng - Vui hát vang” hoặc DJ party tại The Echo Bar & Lounge tầng 3.',
          '22:00: Du thuyền cập bến, kết thúc chuyến trải nghiệm.',
        ],
      },
    ],
    notes: [
      'Vé có 2 mức giá riêng cho day tour và dinner; cuối tuần hoặc ngày lễ có thể phụ thu.',
      'Hoạt động kayak, thuyền nan hoặc cano riêng có thể chưa bao gồm trong giá vé và thanh toán riêng.',
      'Liên hệ CSKH để biết rõ chi phí và lựa chọn phù hợp trước khi đặt.',
    ],
  }),
  createCruise({
    id: 'diamon-cruise',
    title: 'Diamond Cruise',
    price: 720000,
    image: avtDiamon,
    images: [diamon1, diamon2, diamon3, diamon4, diamon5],
    duration: 'Day tour / Dinner',
    description:
      'Diamond Hạ Long Cruise ra mắt vào tháng 6/2023, dài 39m và rộng 9,2m với sức chứa khoảng 100 du khách. Tàu được thiết kế trang nhã, nhiều cửa kính lớn để thu trọn vẻ đẹp Vịnh Hạ Long, đi kèm nhà hàng sang trọng, boong tắm nắng và bể sục Jacuzzi ngoài trời.',
    includes: [
      'Thiết kế cửa kính lớn, tầm nhìn rộng ra vịnh',
      'Boong tắm nắng độc đáo',
      'Nhà hàng sang trọng sức chứa 100 khách',
      'Bể sục Jacuzzi ngoài trời',
      'Không gian vui chơi, giải trí tiện nghi',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Lịch trình Day Tour Diamond',
        activities: [
          '11:30 – 11:45: Lên du thuyền, nhận phòng và thưởng thức đồ uống chào mừng.',
          '12:00 – 13:00: Tàu khởi hành từ Cảng Quốc tế Hạ Long, du khách ngắm các đảo đá vôi nổi tiếng và dùng buffet trưa hải sản – Việt – quốc tế.',
          '13:30: Khám phá Hang Sửng Sốt – hang động lớn và đẹp tại Vịnh Hạ Long.',
          '14:30: Ghé đảo Titop để bơi, nghỉ ngơi hoặc leo núi ngắm vịnh từ trên cao.',
          '15:30: Chèo kayak hoặc đi thuyền tre tại Hang Luồn.',
          '16:30: Du thuyền quay trở lại cảng quốc tế Hạ Long.',
        ],
      },
      {
        day: 2,
        title: 'Lịch trình Dinner Diamond',
        activities: [
          '18:00: Du khách check-in và lên du thuyền.',
          '18:30: Tàu bắt đầu hành trình ngắm vẻ đẹp lung linh của thành phố Hạ Long về đêm.',
          '19:00: Thưởng thức bữa tối sang trọng với thực đơn Á – Âu hấp dẫn.',
          '20:00: Tham gia nhạc sống, biểu diễn nghệ thuật và giao lưu thư giãn trên tàu.',
          '21:30: Tàu cập bến, kết thúc hành trình.',
        ],
      },
    ],
    notes: [
      'Vé day tour và dinner được tách riêng; cuối tuần hoặc ngày lễ có thể có phụ thu.',
      'Nên liên hệ CSKH để được báo giá và khung giờ vận hành chính xác trước khi đặt.',
    ],
  }),
  createCruise({
    id: 'luna-halong-cruise',
    title: 'Luna Halong Cruise',
    price: 920000,
    image: avtLuna,
    images: [luna1, luna2, luna3, luna4, luna5, luna6],
    duration: 'Day tour / Dinner',
    description:
      'Luna Halong Cruise là du thuyền 5 sao nổi bật với không gian sang trọng, buffet chất lượng và chương trình giải trí sôi động trên sundeck. Đây là lựa chọn phù hợp cho khách muốn kết hợp tham quan vịnh, thư giãn và dùng bữa trong không gian đẳng cấp.',
    includes: [
      'Buffet trên du thuyền 5 sao',
      'Chương trình giải trí và nhạc sống tại sundeck',
      'Hành trình tham quan Hang Sửng Sốt, Titop, Hang Luồn',
      'Phù hợp cho cặp đôi, gia đình và khách đoàn',
      'Có lựa chọn day tour và dinner cruise',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Lịch trình Day Tour Luna',
        activities: [
          '08:30: Check-in tại Cảng tàu khách quốc tế Hạ Long và lên du thuyền.',
          '09:00: Tàu khởi hành, thưởng thức bữa sáng nhẹ tại nhà hàng trên tàu.',
          '10:30: Tham quan Hang Sửng Sốt.',
          '11:30: Ghé đảo Titop để tắm biển hoặc leo núi ngắm toàn cảnh vịnh.',
          '12:30: Thưởng thức buffet trưa trên du thuyền.',
          '14:00: Khám phá Hang Luồn bằng kayak hoặc đò nan.',
          '15:00: Thưởng thức chương trình giải trí / nhạc sống tại sundeck.',
          '16:30: Du thuyền cập bến, kết thúc hành trình.',
        ],
      },
      {
        day: 2,
        title: 'Lịch trình Dinner Luna',
        activities: [
          '17:30: Check-in tại Cảng tàu khách quốc tế Hạ Long và lên du thuyền.',
          '18:00: Tàu bắt đầu hành trình tham quan thành phố Hạ Long về đêm.',
          '19:00: Thưởng thức buffet tối, ngắm toàn cảnh Bãi Cháy và thành phố về đêm.',
          '20:00: Tham gia chương trình giải trí buổi tối, nhạc sống và show pháo hoa tại sundeck.',
          '21:00: Du thuyền cập bến, kết thúc hành trình.',
        ],
      },
    ],
    notes: [
      'Luna thường có 2 mức giá riêng cho day tour và dinner; có thể phụ thu cuối tuần / lễ.',
      'Lịch trình day tour có thể điều chỉnh theo mùa hoặc hạng vé; khi làm poster nên ghi rõ là “lịch trình tham khảo”.',
    ],
  }),
  createCruise({
    id: 'dolphin-cruise',
    title: 'Dolphin Cruise',
    price: 1120000,
    image: avtDolphin,
    images: [dolphin1, dolphin2, dolphin3, dolphin4, dolphin5, dolphin6, dolphin7, dolphin8],
    duration: 'Day tour / Dinner',
    description:
      'Dolphin Halong Beach Club được định hướng như một siêu tổ hợp giải trí và nghỉ dưỡng nổi trên mặt nước Vịnh Hạ Long, lấy cảm hứng từ hình ảnh chú cá heo thanh thoát. Du thuyền có kiến trúc hiện đại, tông trắng tinh khôi, chiều dài gần 100m với 5 tầng tiện ích và sức chứa lớn, hứa hẹn mang đến trải nghiệm cao cấp và sôi động.',
    includes: [
      'Thiết kế cảm hứng cá heo hiện đại',
      'Không gian lớn nhiều tầng tiện ích',
      'Buffet Á – Âu và chương trình giải trí buổi tối',
      'Lounge check-in và khu thư giãn sang trọng',
      'Phù hợp khách thích trải nghiệm cao cấp trên vịnh',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Lịch trình Day Tour Dolphin',
        activities: [
          '09:30 – 10:30: Đón khách tại Cảng tàu khách quốc tế Hạ Long, làm thủ tục check-in.',
          '10:30 – 11:00: Di chuyển ra du thuyền bằng xe điện và bắt đầu hành trình.',
          '11:00 – 12:30: Thưởng thức đồ uống chào mừng, nghe hướng dẫn an toàn và dùng bữa trưa trên tàu.',
          '12:30 – 14:00: Tham quan Hang Sửng Sốt.',
          '14:00 – 15:15: Tiếp tục hành trình ngắm vịnh.',
          '15:15 – 16:00: Trải nghiệm hoạt động thư giãn và ngắm cảnh trên tàu.',
          '17:30: Du thuyền trở về cảng, kết thúc tour.',
        ],
      },
      {
        day: 2,
        title: 'Lịch trình Dinner Dolphin',
        activities: [
          '17:30 – 18:00: Đón khách tại cảng, check-in lounge và dùng đồ uống chào mừng.',
          '18:00 – 18:30: Du thuyền rời cảng, du khách ngắm thành phố Hạ Long về đêm.',
          '18:30 – 19:15: Thưởng thức tiệc canapé lúc hoàng hôn hoặc thư giãn trên tàu.',
          '19:15 – 20:15: Dùng buffet tối phong cách Á – Âu.',
          '20:15 – 22:00: Thưởng thức nhạc sống và chương trình giải trí buổi tối.',
          '22:00 – 22:15: Tàu trở về cảng, kết thúc hành trình.',
        ],
      },
    ],
    notes: [
      'Vé day tour và dinner được tính riêng; cuối tuần hoặc ngày lễ có thể phụ thu.',
      'Lịch trình dinner hiện mang tính tham khảo theo nguồn bán tour; vui lòng liên hệ CSKH để cập nhật lịch chính xác.',
    ],
  }),
  createCruise({
    id: 'leona-cruise',
    title: 'Leona Cruise',
    price: 770000,
    image: avtLeona,
    images: [leona1, leona2, leona3, leona4, leona5, leona6, leona7, leona8, leona9, leona10, leona11, leona12, leona13, leona14],
    duration: 'Day tour / Dinner',
    description:
      'Leona Cruise Hạ Long thuộc hệ thống du thuyền cao cấp, ra mắt ngày 08/08/2025 và khởi hành hàng ngày từ Cảng Quốc tế Hạ Long. Tàu có thiết kế chuẩn 5 sao, kết hợp nét đẹp truyền thống Việt Nam với phong cách phương Tây hiện đại, cùng không gian rộng rãi, tiện nghi và bể sục Jacuzzi ngoài trời.',
    includes: [
      'Thiết kế 5 sao giao thoa Á – Âu',
      'Bể sục Jacuzzi ngoài trời',
      'Không gian phù hợp cặp đôi, gia đình và đoàn lớn',
      'Nhà hàng 5 sao với thực đơn Á – Âu',
      'Chương trình âm thanh, ánh sáng và pháo hoa',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Lịch trình Day Tour Leona',
        activities: [
          '09:00: Du khách có mặt tại Cảng tàu khách quốc tế Hạ Long, làm thủ tục check-in.',
          '09:30: Thưởng thức đồ uống chào mừng và bắt đầu hành trình khám phá vịnh.',
          '11:15: Tham quan Hang Sửng Sốt.',
          '12:00: Dùng bữa trưa tại nhà hàng 5 sao trên du thuyền.',
          '13:30: Khám phá Hang Luồn bằng kayak hoặc đò nan.',
          '14:15: Ghé đảo Titop để tắm biển hoặc leo núi ngắm toàn cảnh vịnh.',
          '15:30: Thưởng thức tiệc trà chiều, nghe nhạc và thư giãn trên đường về bến.',
          '16:30: Du thuyền cập bến, kết thúc hành trình.',
        ],
      },
      {
        day: 2,
        title: 'Lịch trình Dinner Leona',
        activities: [
          '18:00: Du khách làm thủ tục lên tàu tại Cảng tàu Quốc tế Hạ Long.',
          '18:30: Du ngoạn dọc bờ vịnh, ngắm thành phố Hạ Long về đêm, cầu Bãi Cháy, vòng quay mặt trời, núi Bài Thơ.',
          '19:00: Thưởng thức bữa tối Á – Âu kết hợp hải sản Hạ Long trên tàu Leona.',
          '20:00: Tham gia tiệc âm thanh, ánh sáng và chương trình biểu diễn.',
          '20:30: Thưởng thức màn trình diễn pháo hoa nghệ thuật trên du thuyền.',
          '21:00 – 21:30: Du thuyền trở về bến, kết thúc hải trình.',
        ],
      },
    ],
    notes: [
      'Vé Leona có 2 mức giá day tour và dinner; cuối tuần hoặc ngày lễ có thể phụ thu.',
      'Vui lòng liên hệ CSKH để được tư vấn mức giá và vị trí bàn phù hợp.',
    ],
  }),
  createCruise({
    id: 'saquila-cruise',
    title: 'Saquila Cruise',
    price: 870000,
    image: avtSaquila,
    images: [saquila1, saquila2, saquila3, saquila4, saquila5, saquila6],
    duration: 'Day tour / Dinner',
    description:
      'Saquila Cruise mang đến hành trình đầy cảm hứng trên Vịnh Hạ Long, nơi du khách vừa tận hưởng thiên nhiên kỳ vĩ vừa khám phá những trải nghiệm văn hóa đặc sắc. Với thiết kế hiện đại, dịch vụ đẳng cấp và hoạt động nghệ thuật đa dạng, du thuyền trở thành không gian thư giãn và tận hưởng trọn vẹn từng khoảnh khắc trên vịnh di sản.',
    includes: [
      'Hành trình văn hóa “Voyage of Culture” đặc sắc',
      'Fine dining tại nhà hàng Mondo',
      'Trà Việt và âm nhạc nghệ thuật trên tàu',
      'Biểu diễn “The Bay Harmony” buổi tối',
      'Có lựa chọn day tour và yacht dining',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Lịch trình Day Tour Saquila',
        activities: [
          '08:30 – 09:00: Check-in tại Cảng tàu khách quốc tế Hạ Long, lên du thuyền và dùng đồ uống chào mừng.',
          '09:00 – 10:30: Tàu rời cảng, du khách ngắm cảnh vịnh trên đường đến khu tham quan.',
          '10:30 – 12:30: Lựa chọn khám phá làng chài Vung Viêng và không gian “Art of Wonder”, hoặc đi Thiên Cảnh Sơn tham quan hang động và bãi cát.',
          '12:30: Dùng bữa trưa semi-buffet trên du thuyền.',
          'Trong hành trình: Trải nghiệm trà Việt và chương trình âm nhạc nghệ thuật trên tàu.',
          '15:30: Trở lại cảng, kết thúc chuyến đi.',
        ],
      },
      {
        day: 2,
        title: 'Lịch trình Dinner Saquila',
        activities: [
          '17:30 – 18:00: Check-in tại Cảng tàu khách quốc tế Hạ Long.',
          '18:00: Lên tàu, thưởng thức đồ uống chào mừng và canapé khi du thuyền rời cảng.',
          '18:30 – 19:00: Ngắm Hạ Long về đêm dọc bờ Hòn Gai qua cầu Bãi Cháy, núi Bài Thơ, quảng trường, vòng quay Mặt Trời, bảo tàng Quảng Ninh và cung Cá Heo.',
          '19:00: Dùng bữa tối fine dining tại nhà hàng Mondo.',
          '20:45: Thưởng thức chương trình nghệ thuật “The Bay Harmony”.',
          '22:00: Du thuyền quay về cảng, kết thúc hành trình.',
        ],
      },
    ],
    notes: [
      'Vé được chia thành 2 mức giá day tour và dinner; ngày lễ hoặc cuối tuần có thể có phụ thu.',
      'Liên hệ CSKH để nhận báo giá chính xác và cập nhật lịch tàu mới nhất.',
    ],
  }),
  createCruise({
    id: 'paradise-cruise',
    title: 'Paradise Elegance Cruise',
    price: 970000,
    image: avtParadise,
    images: [paradise1, paradise2, paradise3, paradise4, paradise5, paradise6, paradise7],
    duration: 'Day tour / Dinner',
    description:
      'Paradise Elegance thuộc tập đoàn Paradise Việt Nam – thương hiệu hàng đầu về du thuyền chất lượng tại Hạ Long. Du thuyền 5 sao sở hữu thiết kế hiện đại, thanh lịch, kết hợp phong cách đương đại và nét Việt Nam, với 31 cabin cùng ban công riêng hướng ra vịnh, mang đến trải nghiệm nghỉ dưỡng và dùng bữa sang trọng.',
    includes: [
      '31 cabin với nhiều hạng phòng cao cấp',
      'Thiết kế hiện đại, thanh lịch chuẩn 5 sao',
      'Ban công riêng hướng vịnh ở từng cabin',
      'Show “Choreography of Light” và nhạc acoustic',
      'Có DJ, ban nhạc quốc tế và không gian giải trí đa tầng',
    ],
    itinerary: [
      {
        day: 1,
        title: 'DAY TOUR – Paradise Explorer',
        activities: [
          '09:00: Check-in tại cảng Tuần Châu.',
          '09:30: Du thuyền khởi hành, ngắm các đảo biểu tượng như Đỉnh Hương và Trống Mái.',
          '10:00 – 10:30: Thưởng thức trà, cà phê và bánh nhẹ trên tàu.',
          '11:00 – 12:00: Tham quan Hang Sửng Sốt.',
          '12:15 – 13:30: Dùng bữa trưa trên du thuyền.',
          '14:00 – 15:00: Tham quan đảo Titop, leo núi hoặc tắm biển.',
          '15:30: Tiệc canapé và thư giãn trên tàu.',
          '16:45 – 17:00: Thanh toán, tận hưởng những phút cuối trước khi tàu về bến.',
        ],
      },
      {
        day: 2,
        title: 'DINNER – Paradise Delight',
        activities: [
          '18:00: Lên tàu, thưởng thức canapé, đồ uống chào mừng và nhạc acoustic.',
          '18:30: Du thuyền bắt đầu hành trình ngắm cảnh ven bờ Hạ Long.',
          '18:45: Thưởng thức buffet Âu – Á, nhạc sống và show “Choreography of Light”.',
          'Trong hành trình: Có DJ tại main deck, chiếu phim ở tầng 2 và ban nhạc quốc tế tại sundeck.',
          '21:30: Du thuyền trở về cảng quốc tế Hạ Long.',
          '22:00: Khách có thể tiếp tục sử dụng một số dịch vụ trên tàu trước khi rời bến.',
        ],
      },
    ],
    notes: [
      'Paradise có 2 mức giá day tour và dinner; cuối tuần hoặc dịp lễ thường có phụ thu.',
      'Liên hệ CSKH để cập nhật tình trạng chỗ và hạng dịch vụ phù hợp.',
    ],
  }),
  createCruise({
    id: 'ambassador-cruise',
    title: 'Ambassador Cruise',
    price: 920000,
    image: avtAmbassador,
    images: [ambassador1, ambassador2, ambassador3, ambassador4, ambassador5],
    duration: 'Day tour / Dinner',
    description:
      'Ambassador Cruise là một trong những du thuyền ngủ đêm sang trọng bậc nhất, hoạt động từ năm 2018 và nổi bật với 46 cabin, sundeck 360 độ, bể sục Jacuzzi và nhiều tiện nghi đẳng cấp 5 sao. Bên cạnh hành trình nghỉ đêm, Ambassador còn khai thác day cruise và dinner cruise cho du khách muốn khám phá Hạ Long trong thời gian ngắn.',
    includes: [
      '46 cabin sang trọng cùng tiện nghi cao cấp',
      'Sundeck 360 độ và bể sục Jacuzzi',
      'Ẩm thực cao cấp và nhạc sống trên tàu',
      'Hành trình tham quan Hang Sửng Sốt, Titop, Hang Luồn',
      'Có cả day cruise và dinner cruise',
    ],
    itinerary: [
      {
        day: 1,
        title: 'DAY TOUR – Ambassador Day Cruise',
        activities: [
          '08:00: Check-in tại Ambassador’s Lounge, Cảng tàu khách quốc tế Hạ Long.',
          '09:00: Thưởng thức bữa sáng nhẹ khi du thuyền bắt đầu hành trình qua vịnh Hạ Long và Bái Tử Long.',
          '10:30: Tham quan Hang Sửng Sốt.',
          '11:30: Ghé đảo Titop để tắm biển hoặc leo núi ngắm toàn cảnh vịnh.',
          '12:00: Thưởng thức bữa trưa cao cấp tại nhà hàng trên tàu.',
          '13:30: Khám phá Hang Luồn bằng kayak hoặc đò nan.',
          '14:20: Thưởng thức tiệc trà chiều.',
          '15:00: Nghe nhạc sống trên sundeck (tùy điều kiện thời tiết).',
          '16:00: Du thuyền cập bến, kết thúc hành trình.',
        ],
      },
      {
        day: 2,
        title: 'DINNER – Ambassador Dinner Cruise',
        activities: [
          '17:30: Check-in và di chuyển lên du thuyền tại Cảng tàu khách quốc tế Hạ Long.',
          '18:30: Tàu bắt đầu hải trình dọc bờ vịnh, ngắm ánh đèn thành phố Hạ Long và cầu Bãi Cháy về đêm.',
          '19:00: Thưởng thức tiệc tối buffet quốc tế trên du thuyền.',
          'Trong hành trình: Có chương trình giải trí buổi tối trên tàu.',
          '21:30: Du thuyền cập bến, kết thúc hành trình.',
        ],
      },
    ],
    notes: [
      'Ambassador có 2 mức giá riêng cho day tour và dinner; cuối tuần hoặc lễ có thể phụ thu.',
      'Nên liên hệ CSKH sớm để giữ chỗ đẹp và cập nhật chính sách giá theo ngày khởi hành.',
    ],
  }),
  createCruise({
    id: 'black-pearl-cruise',
    title: 'Black Pearl Cruise',
    price: 770000,
    image: avtBlackPearl,
    images: [blackPearl1, blackPearl2, blackPearl3, blackPearl4, blackPearl5, blackPearl6],
    duration: 'Day tour / Dinner',
    description:
      'Black Pearl là tuyến du thuyền 5 sao trong ngày mang phong cách sang trọng và phiêu lưu trên Vịnh Hạ Long. Với sức chứa 99 hành khách, Black Pearl đem đến trải nghiệm gần gũi nhưng vẫn đẳng cấp, giúp du khách vừa thưởng ngoạn di sản UNESCO vừa tận hưởng dịch vụ tiện nghi trên tàu.',
    includes: [
      'Sức chứa 99 khách, không gian ấm cúng',
      'Buffet trưa / tối trên du thuyền',
      'Sundeck thư giãn và tiệc trà chiều',
      'Jacuzzi, check-in ngắm hoàng hôn',
      'Có lựa chọn day tour và dinner cruise',
    ],
    itinerary: [
      {
        day: 1,
        title: 'DAY TOUR – Black Pearl Cruise',
        activities: [
          '11:30 – 12:00: Có mặt tại cảng và làm thủ tục lên tàu.',
          '12:00 – 12:30: Du thuyền bắt đầu hành trình khám phá vịnh Hạ Long.',
          '12:30 – 13:45: Thưởng thức bữa trưa trên tàu, ngắm các đảo đá và hòn Gà Chọi.',
          '14:00 – 14:45: Tham quan Hang Sửng Sốt.',
          '15:00 – 15:30: Chèo kayak hoặc đi đò nan tại Hang Luồn.',
          '16:00 – 16:45: Tham quan đảo Titop, tắm biển hoặc leo núi ngắm toàn cảnh vịnh.',
          '17:00: Thư giãn trên sundeck, jacuzzi và tham gia Sunset Party / tiệc trà chiều.',
          '18:15 – 18:30: Tàu trở về cảng, kết thúc hành trình.',
        ],
      },
      {
        day: 2,
        title: 'DINNER – Black Pearl Cruise',
        activities: [
          '17:30 – 18:00: Check-in và lên du thuyền.',
          '18:00 – 18:30: Du thuyền khởi hành, ngắm thành phố Hạ Long về đêm.',
          '19:00: Thưởng thức buffet tối trên tàu.',
          '20:00: Thư giãn, chụp ảnh và tham gia chương trình giải trí.',
          '21:30 – 22:00: Du thuyền cập bến, kết thúc hành trình.',
        ],
      },
    ],
    notes: [
      'Black Pearl có 2 mức giá riêng cho day tour và dinner; cuối tuần hoặc ngày lễ thường có phụ thu.',
      'Vui lòng liên hệ CSKH để được tư vấn giá và lịch khởi hành chi tiết trước khi đặt.',
    ],
  }),
];