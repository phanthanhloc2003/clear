/**
 * beforeAfterData.ts
 *
 * Nguồn dữ liệu tập trung cho tất cả cặp ảnh Before & After theo từng dịch vụ.
 *
 * CẤU TRÚC THƯ MỤC ẢNH ĐỀ XUẤT:
 *   public/
 *     before-after/
 *       sofa/
 *         sofa-vai-ban-truoc-1.jpg   ← ảnh thực tế cần thêm
 *         sofa-vai-sach-sau-1.jpg    ← ảnh thực tế cần thêm
 *       nem/
 *       o-to/
 *       ghe-van-phong/
 */

export interface BeforeAfterImagePair {
  id: string;
  label: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforePlaceholderColor?: string;
  afterPlaceholderColor?: string;
  beforeIcon?: string;
  afterIcon?: string;
  beforePlaceholderText?: string;
  afterPlaceholderText?: string;
}

export interface ServiceBeforeAfterData {
  heading: string;
  description: string;
  pairs: BeforeAfterImagePair[];
}

export const sofaBeforeAfter: ServiceBeforeAfterData = {
  heading: "Kết Quả Giặt Sofa Thực Tế",
  description:
    "Hình ảnh sofa trước và sau khi được giặt bởi CleanPro VN tại Đà Nẵng. Hình ảnh trước và sau khi vệ sinh thực tế tại Đà Nẵng.",
  pairs: [
    {
      id: "sofa-vai-1",
      label: "Sofa vải",
      beforeSrc: "/before-after/sofa/sofa-vai-ban-truoc-1.jpg",
      afterSrc: "/before-after/sofa/sofa-vai-sach-sau-1.jpg",
      beforeAlt: "Sofa vải bị ố vàng, có vết bẩn cứng đầu và bụi bẩn tích tụ trước khi giặt tại Đà Nẵng",
      afterAlt: "Sofa vải sạch bóng, màu sắc tươi sáng sau khi được CleanPro VN giặt tại nhà tại Đà Nẵng",
      beforeLabel: "TRƯỚC",
      afterLabel: "SAU",
      beforePlaceholderColor: "linear-gradient(135deg, #78716c 0%, #57534e 40%, #44403c 100%)",
      afterPlaceholderColor: "linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #06b6d4 100%)",
      beforeIcon: "🛋️",
      afterIcon: "✨",
      beforePlaceholderText: "Sofa bẩn, ố vàng",
      afterPlaceholderText: "Sạch bóng, thơm mát",
    },
    {
      id: "sofa-da-1",
      label: "Sofa da",
      beforeSrc: "/before-after/sofa/sofa-da-ban-truoc-1.jpg",
      afterSrc: "/before-after/sofa/sofa-da-sach-sau-1.jpg",
      beforeAlt: "Sofa da bị bong tróc, mất màu và có vết bẩn trên bề mặt da trước khi vệ sinh",
      afterAlt: "Sofa da được phục hồi màu sắc, bóng mịn và sạch sẽ sau khi CleanPro VN vệ sinh và dưỡng da",
      beforeLabel: "TRƯỚC",
      afterLabel: "SAU",
      beforePlaceholderColor: "linear-gradient(135deg, #92400e 0%, #78350f 40%, #6b2c05 100%)",
      afterPlaceholderColor: "linear-gradient(135deg, #047857 0%, #10b981 50%, #34d399 100%)",
      beforeIcon: "🪑",
      afterIcon: "💎",
      beforePlaceholderText: "Da cũ, bong tróc",
      afterPlaceholderText: "Da phục hồi, bóng sáng",
    },
    {
      id: "sofa-goc-l",
      label: "Sofa góc L",
      beforeSrc: "/before-after/sofa/sofa-goc-l-ban-truoc-1.jpg",
      afterSrc: "/before-after/sofa/sofa-goc-l-sach-sau-1.jpg",
      beforeAlt: "Sofa góc L lớn với nhiều vết bẩn, mùi hôi và bụi bẩn tích tụ trong khe góc trước khi giặt",
      afterAlt: "Sofa góc L sạch hoàn toàn kể cả các khe góc khó làm sạch sau khi CleanPro VN giặt chuyên nghiệp",
      beforeLabel: "TRƯỚC",
      afterLabel: "SAU",
      beforePlaceholderColor: "linear-gradient(135deg, #374151 0%, #1f2937 40%, #111827 100%)",
      afterPlaceholderColor: "linear-gradient(135deg, #0369a1 0%, #0ea5e9 50%, #38bdf8 100%)",
      beforeIcon: "🛋️",
      afterIcon: "🏆",
      beforePlaceholderText: "Góc khe nhiều bụi bẩn",
      afterPlaceholderText: "Sạch kể cả khe góc",
    },
  ],
};

export const nemBeforeAfter: ServiceBeforeAfterData = {
  heading: "Kết Quả Giặt Nệm Thực Tế",
  description:
    "Hình ảnh nệm ngủ trước và sau khi được CleanPro VN vệ sinh diệt khuẩn tại Đà Nẵng. Mạt giường, vi khuẩn và bụi bẩn được loại bỏ hoàn toàn.",
  pairs: [
    {
      id: "nem-lo-xo-1",
      label: "Nệm lò xo",
      beforeSrc: "/before-after/nem/nem-lo-xo-ban-truoc-1.jpg",
      afterSrc: "/before-after/nem/nem-lo-xo-sach-sau-1.jpg",
      beforeAlt: "Nệm lò xo cũ có vết ố vàng, mảng bẩn và mùi hôi tích tụ trước khi giặt vệ sinh",
      afterAlt: "Nệm lò xo trắng sáng, sạch sẽ, không còn mùi sau khi CleanPro VN vệ sinh diệt khuẩn",
      beforeLabel: "TRƯỚC",
      afterLabel: "SAU",
      beforePlaceholderColor: "linear-gradient(135deg, #92400e 0%, #78350f 40%, #6b2c05 100%)",
      afterPlaceholderColor: "linear-gradient(135deg, #047857 0%, #10b981 50%, #34d399 100%)",
      beforeIcon: "🛏️",
      afterIcon: "🌟",
      beforePlaceholderText: "Nệm cũ, nhiều bụi bẩn",
      afterPlaceholderText: "Trắng sạch, khử mùi",
    },
    {
      id: "nem-bong-1",
      label: "Nệm bông",
      beforeSrc: "/before-after/nem/nem-bong-ban-truoc-1.jpg",
      afterSrc: "/before-after/nem/nem-bong-sach-sau-1.jpg",
      beforeAlt: "Nệm bông bị ố màu, có vết thấm nước và bụi bẩn tích tụ trước khi vệ sinh",
      afterAlt: "Nệm bông được vệ sinh sạch, trắng sáng và khử khuẩn hoàn toàn sau khi CleanPro VN xử lý",
      beforeLabel: "TRƯỚC",
      afterLabel: "SAU",
      beforePlaceholderColor: "linear-gradient(135deg, #78716c 0%, #57534e 40%, #44403c 100%)",
      afterPlaceholderColor: "linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #06b6d4 100%)",
      beforeIcon: "🛏️",
      afterIcon: "☁️",
      beforePlaceholderText: "Ố màu, có vết thấm",
      afterPlaceholderText: "Trắng sạch như mới",
    },
  ],
};

export const gheOToBeforeAfter: ServiceBeforeAfterData = {
  heading: "Kết Quả Vệ Sinh Ghế Ô Tô Thực Tế",
  description:
    "Hình ảnh nội thất ghế ô tô trước và sau khi được CleanPro VN vệ sinh chuyên nghiệp tại Đà Nẵng. Ghế da và ghế vải được phục hồi như mới.",
  pairs: [
    {
      id: "ghe-oto-da-1",
      label: "Ghế da",
      beforeSrc: "/before-after/o-to/ghe-da-oto-ban-truoc-1.jpg",
      afterSrc: "/before-after/o-to/ghe-da-oto-sach-sau-1.jpg",
      beforeAlt: "Ghế da ô tô bị ố vàng, có vết bẩn cứng đầu và da bị mờ màu trước khi vệ sinh",
      afterAlt: "Ghế da ô tô được phục hồi màu sắc, bóng mịn và sạch sẽ sau khi CleanPro VN đánh bóng và dưỡng da",
      beforeLabel: "TRƯỚC",
      afterLabel: "SAU",
      beforePlaceholderColor: "linear-gradient(135deg, #374151 0%, #1f2937 40%, #111827 100%)",
      afterPlaceholderColor: "linear-gradient(135deg, #0369a1 0%, #0ea5e9 50%, #38bdf8 100%)",
      beforeIcon: "🚗",
      afterIcon: "💎",
      beforePlaceholderText: "Ghế bẩn, có mùi",
      afterPlaceholderText: "Sạch sẽ, như mới",
    },
    {
      id: "ghe-oto-vai-1",
      label: "Ghế vải",
      beforeSrc: "/before-after/o-to/ghe-vai-oto-ban-truoc-1.jpg",
      afterSrc: "/before-after/o-to/ghe-vai-oto-sach-sau-1.jpg",
      beforeAlt: "Ghế vải ô tô có vết thức ăn, cà phê và bụi bẩn tích tụ trong các nếp vải trước khi giặt",
      afterAlt: "Ghế vải ô tô sạch hoàn toàn, không còn vết bẩn và mùi sau khi CleanPro VN giặt chuyên sâu",
      beforeLabel: "TRƯỚC",
      afterLabel: "SAU",
      beforePlaceholderColor: "linear-gradient(135deg, #4b5563 0%, #374151 40%, #1f2937 100%)",
      afterPlaceholderColor: "linear-gradient(135deg, #047857 0%, #10b981 50%, #34d399 100%)",
      beforeIcon: "🪑",
      afterIcon: "✨",
      beforePlaceholderText: "Vải bẩn, vết thức ăn",
      afterPlaceholderText: "Sạch sẽ, thơm mát",
    },
    {
      id: "noi-that-oto-1",
      label: "Nội thất tổng thể",
      beforeSrc: "/before-after/o-to/noi-that-oto-ban-truoc-1.jpg",
      afterSrc: "/before-after/o-to/noi-that-oto-sach-sau-1.jpg",
      beforeAlt: "Nội thất ô tô tổng thể gồm ghế, thảm sàn và bảng điều khiển bị bụi bẩn và ố màu trước khi vệ sinh",
      afterAlt: "Nội thất ô tô sạch sẽ toàn bộ, thảm sàn và ghế được vệ sinh khử khuẩn sau khi CleanPro VN xử lý",
      beforeLabel: "TRƯỚC",
      afterLabel: "SAU",
      beforePlaceholderColor: "linear-gradient(135deg, #57534e 0%, #44403c 40%, #292524 100%)",
      afterPlaceholderColor: "linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #06b6d4 100%)",
      beforeIcon: "🚙",
      afterIcon: "🏆",
      beforePlaceholderText: "Nội thất cũ, bụi bẩn",
      afterPlaceholderText: "Sạch toàn bộ nội thất",
    },
  ],
};

export const gheVanPhongBeforeAfter: ServiceBeforeAfterData = {
  heading: "Kết Quả Vệ Sinh Ghế Văn Phòng Thực Tế",
  description:
    "Hình ảnh ghế văn phòng trước và sau khi được CleanPro VN vệ sinh chuyên nghiệp tại Đà Nẵng. Ghế lưới, ghế da và ghế phòng họp đều sạch sẽ như mới.",
  pairs: [
    {
      id: "ghe-luoi-vp-1",
      label: "Ghế lưới",
      beforeSrc: "/before-after/ghe-van-phong/ghe-luoi-ban-truoc-1.jpg",
      afterSrc: "/before-after/ghe-van-phong/ghe-luoi-sach-sau-1.jpg",
      beforeAlt: "Ghế lưới văn phòng bị bụi bẩn bít khe lưới, có vết mồ hôi và ố màu sau thời gian dài sử dụng",
      afterAlt: "Ghế lưới văn phòng sạch sẽ, khe lưới thông thoáng sau khi CleanPro VN hút bụi và khử khuẩn",
      beforeLabel: "TRƯỚC",
      afterLabel: "SAU",
      beforePlaceholderColor: "linear-gradient(135deg, #4b5563 0%, #374151 40%, #1f2937 100%)",
      afterPlaceholderColor: "linear-gradient(135deg, #047857 0%, #10b981 50%, #34d399 100%)",
      beforeIcon: "💺",
      afterIcon: "🏆",
      beforePlaceholderText: "Ghế văn phòng cũ",
      afterPlaceholderText: "Chuyên nghiệp trở lại",
    },
    {
      id: "ghe-da-vp-1",
      label: "Ghế da VP",
      beforeSrc: "/before-after/ghe-van-phong/ghe-da-vp-ban-truoc-1.jpg",
      afterSrc: "/before-after/ghe-van-phong/ghe-da-vp-sach-sau-1.jpg",
      beforeAlt: "Ghế da văn phòng giám đốc bị ố vàng, da mờ màu và có vết bẩn tích tụ trước khi vệ sinh",
      afterAlt: "Ghế da văn phòng được đánh bóng và dưỡng da, trông chuyên nghiệp và sang trọng sau khi CleanPro VN xử lý",
      beforeLabel: "TRƯỚC",
      afterLabel: "SAU",
      beforePlaceholderColor: "linear-gradient(135deg, #92400e 0%, #78350f 40%, #6b2c05 100%)",
      afterPlaceholderColor: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #a78bfa 100%)",
      beforeIcon: "🪑",
      afterIcon: "💎",
      beforePlaceholderText: "Da cũ, mờ màu",
      afterPlaceholderText: "Sang trọng, chuyên nghiệp",
    },
  ],
};

export const beforeAfterDataMap = {
  sofa: sofaBeforeAfter,
  nem: nemBeforeAfter,
  "ghe-o-to": gheOToBeforeAfter,
  "ghe-van-phong": gheVanPhongBeforeAfter,
} as const;

export type ServiceKey = keyof typeof beforeAfterDataMap;

/* ============================================================
   HOMEPAGE – Tổng hợp các dịch vụ nổi bật cho trang chủ
   ============================================================ */
export const homepageBeforeAfter: ServiceBeforeAfterData = {
  heading: "Trước & Sau Khi Vệ Sinh",
  description:
    "Hình ảnh minh bạch và ấn tượng – kết quả thực tế từ những dịch vụ chúng tôi đã thực hiện.",
  pairs: [
    {
      id: "home-sofa",
      label: "Sofa vải",
      beforeSrc: "/before-after/sofa/sofa-vai-ban-truoc-1.jpg",
      afterSrc: "/before-after/sofa/sofa-vai-sach-sau-1.jpg",
      beforeAlt: "Sofa vải bị ố vàng và bụi bẩn tích tụ trước khi giặt bởi CleanPro VN tại Đà Nẵng",
      afterAlt: "Sofa vải sạch bóng và thơm mát sau khi CleanPro VN giặt tại nhà tại Đà Nẵng",
      beforeLabel: "TRƯỚC",
      afterLabel: "SAU",
      beforePlaceholderColor: "linear-gradient(135deg, #78716c 0%, #57534e 40%, #44403c 100%)",
      afterPlaceholderColor: "linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #06b6d4 100%)",
      beforeIcon: "🛋️",
      afterIcon: "✨",
      beforePlaceholderText: "Sofa bẩn, ố vàng",
      afterPlaceholderText: "Sạch bóng, thơm mát",
    },
    {
      id: "home-nem",
      label: "Nệm ngủ",
      beforeSrc: "/before-after/nem/nem-lo-xo-ban-truoc-1.jpg",
      afterSrc: "/before-after/nem/nem-lo-xo-sach-sau-1.jpg",
      beforeAlt: "Nệm lò xo cũ có vết ố vàng và mùi hôi trước khi giặt vệ sinh tại Đà Nẵng",
      afterAlt: "Nệm lò xo trắng sáng và sạch sẽ sau khi CleanPro VN vệ sinh diệt khuẩn",
      beforeLabel: "TRƯỚC",
      afterLabel: "SAU",
      beforePlaceholderColor: "linear-gradient(135deg, #92400e 0%, #78350f 40%, #6b2c05 100%)",
      afterPlaceholderColor: "linear-gradient(135deg, #047857 0%, #10b981 50%, #34d399 100%)",
      beforeIcon: "🛏️",
      afterIcon: "🌟",
      beforePlaceholderText: "Nệm cũ, nhiều bụi bẩn",
      afterPlaceholderText: "Trắng sạch, khử mùi",
    },
    {
      id: "home-oto",
      label: "Ghế ô tô",
      beforeSrc: "/before-after/o-to/ghe-da-oto-ban-truoc-1.jpg",
      afterSrc: "/before-after/o-to/ghe-da-oto-sach-sau-1.jpg",
      beforeAlt: "Ghế da ô tô bị ố vàng và có mùi trước khi vệ sinh tại Đà Nẵng",
      afterAlt: "Ghế da ô tô sạch sẽ và bóng mịn sau khi CleanPro VN vệ sinh chuyên nghiệp",
      beforeLabel: "TRƯỚC",
      afterLabel: "SAU",
      beforePlaceholderColor: "linear-gradient(135deg, #374151 0%, #1f2937 40%, #111827 100%)",
      afterPlaceholderColor: "linear-gradient(135deg, #0369a1 0%, #0ea5e9 50%, #38bdf8 100%)",
      beforeIcon: "🚗",
      afterIcon: "💎",
      beforePlaceholderText: "Ghế bẩn, có mùi",
      afterPlaceholderText: "Sạch sẽ, như mới",
    },
    {
      id: "home-ghe-vp",
      label: "Ghế VP",
      beforeSrc: "/before-after/ghe-van-phong/ghe-luoi-ban-truoc-1.jpg",
      afterSrc: "/before-after/ghe-van-phong/ghe-luoi-sach-sau-1.jpg",
      beforeAlt: "Ghế văn phòng lưới bị bụi bẩn và ố màu sau thời gian dài sử dụng tại Đà Nẵng",
      afterAlt: "Ghế văn phòng lưới sạch sẽ và chuyên nghiệp sau khi CleanPro VN vệ sinh khử khuẩn",
      beforeLabel: "TRƯỚC",
      afterLabel: "SAU",
      beforePlaceholderColor: "linear-gradient(135deg, #4b5563 0%, #374151 40%, #1f2937 100%)",
      afterPlaceholderColor: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #a78bfa 100%)",
      beforeIcon: "💺",
      afterIcon: "🏆",
      beforePlaceholderText: "Ghế văn phòng cũ",
      afterPlaceholderText: "Chuyên nghiệp trở lại",
    },
  ],
};

/* ============================================================
   HOMEPAGE GRID – 4 dịch vụ hiển thị dạng 2x2 grid
   ============================================================ */
import type { GridItem } from "@/components/ui/BeforeAfterGrid";

export const homepageGridItems: GridItem[] = [
  {
    id: "grid-sofa",
    serviceLabel: "Giặt Sofa",
    serviceIcon: "🛋️",
    beforeSrc: "/before-after/sofa/sofa-vai-ban-truoc-1.jpg",
    afterSrc: "/before-after/sofa/sofa-vai-sach-sau-1.jpg",
    beforeAlt: "Sofa vải bẩn, ố vàng, nhiều bụi bẩn tích tụ trước khi giặt tại Đà Nẵng",
    afterAlt: "Sofa vải sạch bóng, trắng sáng sau khi CleanPro VN giặt chuyên nghiệp tại Đà Nẵng",
    beforeColor: "linear-gradient(135deg,#78716c,#44403c)",
    afterColor: "linear-gradient(135deg,#0f766e,#06b6d4)",
    beforeIcon: "🛋️", afterIcon: "✨",
    beforeText: "Sofa bẩn, ố vàng", afterText: "Sạch bóng, thơm mát",
  },
  {
    id: "grid-nem",
    serviceLabel: "Giặt Nệm",
    serviceIcon: "🛏️",
    beforeSrc: "/before-after/nem/nem-lo-xo-ban-truoc-1.jpg",
    afterSrc: "/before-after/nem/nem-lo-xo-sach-sau-1.jpg",
    beforeAlt: "Nệm lò xo cũ có vết ố vàng, mảng bẩn và bụi bẩn tích tụ trước khi vệ sinh tại Đà Nẵng",
    afterAlt: "Nệm lò xo trắng sáng, sạch sẽ sau khi CleanPro VN vệ sinh diệt khuẩn tại Đà Nẵng",
    beforeColor: "linear-gradient(135deg,#92400e,#78350f)",
    afterColor: "linear-gradient(135deg,#047857,#34d399)",
    beforeIcon: "🛏️", afterIcon: "🌟",
    beforeText: "Nệm cũ, nhiều vết bẩn", afterText: "Trắng sạch, khử khuẩn",
  },
  {
    id: "grid-ghe-vp",
    serviceLabel: "Ghế Văn Phòng",
    serviceIcon: "💺",
    beforeSrc: "/before-after/ghe-van-phong/ghe-luoi-ban-truoc-1.jpg",
    afterSrc: "/before-after/ghe-van-phong/ghe-luoi-sach-sau-1.jpg",
    beforeAlt: "Ghế lưới văn phòng bẩn, bụi bít khe lưới, ố màu sau thời gian dài sử dụng",
    afterAlt: "Ghế lưới văn phòng sạch sẽ, khe lưới thông thoáng sau khi CleanPro VN vệ sinh khử khuẩn",
    beforeColor: "linear-gradient(135deg,#374151,#111827)",
    afterColor: "linear-gradient(135deg,#047857,#10b981)",
    beforeIcon: "💺", afterIcon: "🏆",
    beforeText: "Ghế bẩn, bụi bít lưới", afterText: "Sạch sẽ, chuyên nghiệp",
  },
  {
    id: "grid-ghe-oto",
    serviceLabel: "Ghế Ô Tô",
    serviceIcon: "🚗",
    beforeSrc: "/before-after/o-to/ghe-da-oto-ban-truoc-1.jpg",
    afterSrc: "/before-after/o-to/ghe-da-oto-sach-sau-1.jpg",
    beforeAlt: "Ghế da ô tô bị ố vàng, bụi bẩn và mùi hôi tích tụ trước khi vệ sinh tại Đà Nẵng",
    afterAlt: "Ghế da ô tô sạch sẽ, bóng mịn sau khi CleanPro VN vệ sinh và đánh bóng chuyên nghiệp",
    beforeColor: "linear-gradient(135deg,#374151,#1f2937)",
    afterColor: "linear-gradient(135deg,#0369a1,#38bdf8)",
    beforeIcon: "🚗", afterIcon: "💎",
    beforeText: "Ghế bẩn, có mùi", afterText: "Sạch sẽ, bóng mịn",
  },
];
