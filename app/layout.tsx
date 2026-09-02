import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

/* ---------- Font Loading ---------- */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

/* ---------- SEO Metadata ---------- */
export const metadata: Metadata = {
  title: "CleanPro VN – Giặt Nệm, Sofa, Ghế Ô Tô Chuyên Nghiệp",
  description:
    "Dịch vụ vệ sinh chuyên nghiệp: Giặt nệm, giặt sofa, vệ sinh ghế ô tô và ghế văn phòng tận nơi. Công nghệ hiện đại – An toàn – Cam kết sạch sâu 100%. Hotline: 0909 123 456.",
  keywords: [
    "giặt nệm",
    "giặt sofa",
    "vệ sinh ghế ô tô",
    "ghế văn phòng",
    "dịch vụ vệ sinh",
    "cleanpro",
  ],
  authors: [{ name: "CleanPro VN" }],
  openGraph: {
    title: "CleanPro VN – Không Gian Sạch Sâu, Tươi Mới Mỗi Ngày",
    description:
      "Chuyên gia vệ sinh nệm, sofa, ghế ô tô & ghế văn phòng tận nơi. Công nghệ hiện đại – An toàn – Cam kết sạch sâu.",
    type: "website",
    locale: "vi_VN",
    siteName: "CleanPro VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "CleanPro VN – Dịch Vụ Vệ Sinh Chuyên Nghiệp",
    description:
      "Giặt nệm, sofa, ghế ô tô & ghế văn phòng tận nơi. Cam kết sạch sâu 100%.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'google-site-verification': 'ysIE6ZNj7vMmhOHkJzKwqwuJ1qlE5V01AbTNojLTUgA',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect to Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
