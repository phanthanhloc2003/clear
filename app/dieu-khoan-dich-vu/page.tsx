import type { Metadata } from "next";
import DieuKhoanClient from "./DieuKhoanClient";

export const metadata: Metadata = {
  title: "Điều Khoản Dịch Vụ – Vệ Sinh Sạch Đà Nẵng | Vệ Sinh Nệm, Sofa Đà Nẵng",
  description:
    "Điều khoản sử dụng dịch vụ vệ sinh nệm, giặt sofa, ghế ô tô, ghế văn phòng tại Đà Nẵng của Vệ Sinh Sạch Đà Nẵng. Minh bạch, công bằng, bảo vệ quyền lợi khách hàng.",
  alternates: {
    canonical: "https://vesinhsachdanang.vn/dieu-khoan-dich-vu",
  },
  openGraph: {
    title: "Điều Khoản Dịch Vụ – Vệ Sinh Sạch Đà Nẵng",
    description:
      "Điều khoản sử dụng dịch vụ vệ sinh nệm, giặt sofa, ghế ô tô tại Đà Nẵng của Vệ Sinh Sạch Đà Nẵng.",
    url: "https://vesinhsachdanang.vn/dieu-khoan-dich-vu",
    type: "website",
    locale: "vi_VN",
    siteName: "Vệ Sinh Sạch Đà Nẵng",
  },
  robots: { index: true, follow: true },
};

export default function DieuKhoanDichVuPage() {
  return <DieuKhoanClient />;
}
