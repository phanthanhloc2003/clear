import type { Metadata } from "next";
import ChinhSachHoanTienClient from "./ChinhSachHoanTienClient";

export const metadata: Metadata = {
  title: "Chính Sách Hoàn Tiền – CleanPro VN | Vệ Sinh Nệm, Sofa Đà Nẵng",
  description:
    "Chính sách hoàn tiền và bảo đảm chất lượng dịch vụ vệ sinh nệm, giặt sofa tại CleanPro VN Đà Nẵng. Cam kết hoàn tiền 100% nếu không đạt yêu cầu. Hotline: 096 9135 304.",
  alternates: {
    canonical: "https://vesinhsachdanang.vn/chinh-sach-hoan-tien",
  },
  openGraph: {
    title: "Chính Sách Hoàn Tiền – CleanPro VN",
    description:
      "Cam kết chất lượng dịch vụ. Hoàn tiền 100% nếu không đạt yêu cầu vệ sinh nệm, sofa tại Đà Nẵng.",
    url: "https://vesinhsachdanang.vn/chinh-sach-hoan-tien",
    type: "website",
    locale: "vi_VN",
    siteName: "CleanPro VN",
  },
  robots: { index: true, follow: true },
};

export default function ChinhSachHoanTienPage() {
  return <ChinhSachHoanTienClient />;
}
