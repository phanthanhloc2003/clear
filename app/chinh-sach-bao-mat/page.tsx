import type { Metadata } from "next";
import ChinhSachBaoMatClient from "./ChinhSachBaoMatClient";

export const metadata: Metadata = {
  title: "Chính Sách Bảo Mật – Vệ Sinh Sạch Đà Nẵng | Vệ Sinh Nệm, Sofa Đà Nẵng",
  description:
    "Chính sách bảo mật thông tin khách hàng của Vệ Sinh Sạch Đà Nẵng. Chúng tôi cam kết bảo vệ dữ liệu cá nhân của bạn khi sử dụng dịch vụ vệ sinh nệm, sofa tại Đà Nẵng. Hotline: 096 9135 304.",
  alternates: {
    canonical: "https://vesinhsachdanang.vn/chinh-sach-bao-mat",
  },
  openGraph: {
    title: "Chính Sách Bảo Mật – Vệ Sinh Sạch Đà Nẵng",
    description:
      "Cam kết bảo vệ thông tin cá nhân khách hàng khi sử dụng dịch vụ vệ sinh nệm, sofa Vệ Sinh Sạch Đà Nẵng tại Đà Nẵng.",
    url: "https://vesinhsachdanang.vn/chinh-sach-bao-mat",
    type: "website",
    locale: "vi_VN",
    siteName: "Vệ Sinh Sạch Đà Nẵng",
  },
  robots: { index: true, follow: true },
};

export default function ChinhSachBaoMatPage() {
  return <ChinhSachBaoMatClient />;
}
