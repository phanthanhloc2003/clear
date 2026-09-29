import type { Metadata } from "next";
import VeSinhGheOToClient from "./VeSinhGheOToClient";

export const metadata: Metadata = {
  title: "Vệ Sinh Ghế Ô Tô Đà Nẵng Tận Nơi – CleanPro VN | Sạch Nội Thất",
  description:
    "Dịch vụ vệ sinh ghế ô tô tận nơi tại Đà Nẵng – CleanPro VN. Làm sạch ghế da, ghế vải, khử mùi nội thất xe. Không cần mang xe đến xưởng. Giá từ 300k. Hotline: 096 9135 304.",
  alternates: {
    canonical: "https://vesinhsachdanang.vn/ve-sinh-ghe-o-to-da-nang",
  },
  openGraph: {
    title: "Vệ Sinh Ghế Ô Tô Đà Nẵng Tận Nơi – CleanPro VN",
    description:
      "Vệ sinh nội thất ghế ô tô tận nơi tại Đà Nẵng. Làm sạch ghế da, ghế vải, khử mùi toàn xe. Hotline: 096 9135 304.",
    url: "https://vesinhsachdanang.vn/ve-sinh-ghe-o-to-da-nang",
    type: "website",
    locale: "vi_VN",
    siteName: "CleanPro VN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dịch vụ vệ sinh ghế ô tô tận nơi tại Đà Nẵng – CleanPro VN",
      },
    ],
  },
};

export default function VeSinhGheOToPage() {
  return <VeSinhGheOToClient />;
}
