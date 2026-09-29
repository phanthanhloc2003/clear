import type { Metadata } from "next";
import GiatSofaClient from "./GiatSofaClient";

/* ─────────────────────────────────────────────────────────
   SEO Metadata – Giặt Sofa Đà Nẵng
   Từ khóa chính : giặt sofa Đà Nẵng, giặt ghế sofa Đà Nẵng
   Từ khóa phụ  : giặt sofa tận nơi, giặt sofa da/nỉ/vải Đà Nẵng,
                  dịch vụ giặt sofa giá rẻ Đà Nẵng
───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Giặt Sofa Đà Nẵng Tận Nơi – CleanPro VN | Sạch Sâu, Giá Tốt",
  description:
    "Dịch vụ giặt sofa tận nơi tại Đà Nẵng – CleanPro VN. Giặt sofa da, sofa nỉ, sofa vải bố. Công nghệ hơi nước nóng, khử khuẩn 99.9%, an toàn cho gia đình. Giá từ 150k. Hotline: 096 9135 304.",
  alternates: {
    canonical: "https://vesinhsachdanang.vn/giat-sofa-da-nang",
  },
  openGraph: {
    title: "Giặt Sofa Đà Nẵng Tận Nơi – CleanPro VN",
    description:
      "Giặt sofa da, nỉ, vải bố tận nơi tại Đà Nẵng. Sạch sâu từng thớ vải, khử khuẩn 99.9%. Hotline: 096 9135 304.",
    url: "https://vesinhsachdanang.vn/giat-sofa-da-nang",
    type: "website",
    locale: "vi_VN",
    siteName: "CleanPro VN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dịch vụ giặt sofa tận nơi tại Đà Nẵng – CleanPro VN",
      },
    ],
  },
};

export default function GiatSofaPage() {
  return <GiatSofaClient />;
}
