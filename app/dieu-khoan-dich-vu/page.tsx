import type { Metadata } from "next";
import DieuKhoanClient from "./DieuKhoanClient";

export const metadata: Metadata = {
  title: "Điều Khoản Dịch Vụ – CleanPro VN | Vệ Sinh Nệm, Sofa Đà Nẵng",
  description:
    "Điều khoản sử dụng dịch vụ vệ sinh nệm, giặt sofa, ghế ô tô, ghế văn phòng tại Đà Nẵng của CleanPro VN. Minh bạch, công bằng, bảo vệ quyền lợi khách hàng.",
  alternates: {
    canonical: "https://vesinhsachdanang.vn/dieu-khoan-dich-vu",
  },
  openGraph: {
    title: "Điều Khoản Dịch Vụ – CleanPro VN",
    description:
      "Điều khoản sử dụng dịch vụ vệ sinh nệm, giặt sofa, ghế ô tô tại Đà Nẵng của CleanPro VN.",
    url: "https://vesinhsachdanang.vn/dieu-khoan-dich-vu",
    type: "website",
    locale: "vi_VN",
    siteName: "CleanPro VN",
  },
  robots: { index: true, follow: true },
};

export default function DieuKhoanDichVuPage() {
  return <DieuKhoanClient />;
}
