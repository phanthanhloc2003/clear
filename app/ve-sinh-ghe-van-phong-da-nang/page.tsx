import type { Metadata } from "next";
import VeSinhGheVanPhongClient from "./VeSinhGheVanPhongClient";

export const metadata: Metadata = {
  title: "Vệ Sinh Ghế Văn Phòng Đà Nẵng – CleanPro VN | Vệ Sinh Tận Nơi",
  description:
    "Dịch vụ vệ sinh ghế văn phòng, ghế xoay tại doanh nghiệp Đà Nẵng – CleanPro VN. Không gián đoạn hoạt động, vệ sinh hàng loạt tiết kiệm chi phí. Hotline: 096 9135 304.",
  alternates: {
    canonical: "https://vesinhsachdanang.vn/ve-sinh-ghe-van-phong-da-nang",
  },
  openGraph: {
    title: "Vệ Sinh Ghế Văn Phòng Đà Nẵng – CleanPro VN",
    description:
      "Vệ sinh ghế văn phòng, ghế xoay tại doanh nghiệp Đà Nẵng. Không gián đoạn hoạt động, giá hàng loạt ưu đãi. Hotline: 096 9135 304.",
    url: "https://vesinhsachdanang.vn/ve-sinh-ghe-van-phong-da-nang",
    type: "website",
    locale: "vi_VN",
    siteName: "CleanPro VN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dịch vụ vệ sinh ghế văn phòng tại Đà Nẵng – CleanPro VN",
      },
    ],
  },
};

export default function VeSinhGheVanPhongPage() {
  return <VeSinhGheVanPhongClient />;
}
