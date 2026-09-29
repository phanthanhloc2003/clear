import type { Metadata } from "next";
import GiatNemClient from "./GiatNemClient";

export const metadata: Metadata = {
  title: "Giặt Nệm Đà Nẵng Tận Nơi – CleanPro VN | Khử Khuẩn 99,9%",
  description:
    "Dịch vụ giặt nệm tận nơi tại Đà Nẵng – CleanPro VN. Giặt nệm lò xo, nệm bông, nệm cao su. Diệt mạt giường, khử khuẩn 99,9% bằng hơi nước nóng. Giá từ 200k. Hotline: 096 9135 304.",
  alternates: {
    canonical: "https://vesinhsachdanang.vn/giat-nem-da-nang",
  },
  openGraph: {
    title: "Giặt Nệm Đà Nẵng Tận Nơi – CleanPro VN",
    description:
      "Giặt nệm lò xo, nệm bông, nệm cao su tại nhà Đà Nẵng. Diệt mạt giường, khử khuẩn 99,9%. Hotline: 096 9135 304.",
    url: "https://vesinhsachdanang.vn/giat-nem-da-nang",
    type: "website",
    locale: "vi_VN",
    siteName: "CleanPro VN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dịch vụ giặt nệm tận nơi tại Đà Nẵng – CleanPro VN",
      },
    ],
  },
};

export default function GiatNemPage() {
  return <GiatNemClient />;
}
