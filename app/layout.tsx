import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { LocalBusinessSchema } from "@/components/JsonLd";

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
  /*
   * metadataBase: BẮT BUỘC – không có sẽ khiến URL ảnh OG bị relative,
   * canonical bị sai, và nhiều tag bị broken khi Google đọc.
   */
  metadataBase: new URL('https://vesinhsachdanang.vn'),

  title: {
    // Trang chủ dùng `default`; các trang con override bằng `title` của page.tsx
    default: 'Giặt Sofa Đà Nẵng – CleanPro VN | Giặt Nệm, Ghế Ô Tô Tận Nơi',
    // template áp dụng cho tất cả trang con: title = "[page title] | CleanPro VN"
    template: '%s | CleanPro VN – Vệ Sinh Đà Nẵng',
  },

  description:
    'Dịch vụ giặt sofa, giặt nệm, vệ sinh ghế ô tô tận nơi tại Đà Nẵng. Công nghệ hơi nước hiện đại, sạch sâu 100%. Hotline: 096 9135 304 – Đặt lịch ngay!',

  keywords: [
    'giặt sofa Đà Nẵng',
    'giặt nệm Đà Nẵng',
    'vệ sinh ghế ô tô Đà Nẵng',
    'giặt sofa tận nơi Đà Nẵng',
    'giặt nệm tận nơi Đà Nẵng',
    'dịch vụ vệ sinh Đà Nẵng',
    'CleanPro VN',
    'giặt sofa Ngũ Hành Sơn',
    'vệ sinh ghế văn phòng Đà Nẵng',
    'giặt sofa tại nhà Đà Nẵng',
    'giặt nệm Ngũ Hành Sơn',
    'cleanpro vn đà nẵng',
  ],

  authors: [{ name: 'CleanPro VN', url: 'https://vesinhsachdanang.vn' }],
  creator: 'CleanPro VN',
  publisher: 'CleanPro VN',

  /*
   * canonical: ngăn duplicate content www vs non-www.
   * Các trang con nên override với canonical riêng.
   */
  alternates: {
    canonical: 'https://vesinhsachdanang.vn',
  },

  openGraph: {
    title: 'Giặt Sofa Đà Nẵng – CleanPro VN | Sạch Sâu Tận Nơi',
    description:
      'Giặt sofa, nệm, ghế ô tô tận nơi tại Đà Nẵng. Công nghệ hiện đại – An toàn – Cam kết sạch sâu 100%.',
    type: 'website',
    locale: 'vi_VN',
    url: 'https://vesinhsachdanang.vn',
    siteName: 'CleanPro VN',
    images: [
      {
        url: '/og-image.jpg', // Cần tạo file public/og-image.jpg (1200×630px)
        width: 1200,
        height: 630,
        alt: 'CleanPro VN – Dịch vụ giặt sofa, nệm, ghế ô tô Đà Nẵng',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Giặt Sofa, Nệm, Ghế Ô Tô Tại Đà Nẵng | CleanPro VN',
    description:
      'Dịch vụ vệ sinh tận nơi tại Đà Nẵng. Sạch sâu 100%. Hotline: 096 9135 304',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Google Search Console verification
  verification: {
    google: 'ysIE6ZNj7vMmhOHkJzKwqwuJ1qlE5V01AbTNojLTUgA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        {/*
         * JSON-LD Structured Data – LocalBusiness + CleaningService + FAQPage
         * Inject vào <head> để Google đọc được ở mọi trang, kể cả khi JS chưa load.
         * next/font tự quản lý preconnect Google Fonts, không cần khai báo thủ công.
         */}
        <LocalBusinessSchema />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
