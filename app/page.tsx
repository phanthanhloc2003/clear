/**
 * Trang chủ – Server Component
 *
 * ĐÂY PHẢI LÀ SERVER COMPONENT (không có "use client").
 * Lý do:
 *  1. Googlebot crawl trang chủ – nếu là Client Component, bot chỉ thấy HTML rỗng.
 *  2. Server Component mới export được `metadata` dạng static cho Next.js.
 *  3. Logic animation/loading được tách vào HomePageClient (Client Component).
 *
 * SEO Order of sections:
 *  1. Header (sticky)
 *  2. Hero (H1 chính + CTA)
 *  3. Services (4 dịch vụ)
 *  4. Process (quy trình 4 bước)
 *  5. Before/After (hình ảnh thực tế)
 *  6. Stats & Why Us (số liệu + lý do chọn)
 *  7. Contact (form đặt lịch)
 *  8. Footer
 */
import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Giặt Sofa Đà Nẵng – CleanPro VN | Giặt Nệm, Ghế Ô Tô Tận Nơi",
  description:
    "Dịch vụ giặt sofa, giặt nệm, vệ sinh ghế ô tô tận nơi tại Đà Nẵng. Công nghệ hơi nước hiện đại, sạch sâu 100%. Hotline: 096 9135 304 – Đặt lịch ngay!",
  alternates: {
    canonical: "https://vesinhsachdanang.vn",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
