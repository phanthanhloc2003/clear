import type { MetadataRoute } from 'next'

/**
 * Sitemap – chỉ khai báo URL THỰC SỰ TỒN TẠI trên website.
 *
 * ⚠️  QUAN TRỌNG: Không bao giờ khai báo URL 404 vào đây.
 *    Google sẽ phạt điểm crawl budget nếu sitemap dẫn đến trang 404.
 *
 * Khi tạo xong một trang dịch vụ mới, uncomment entry tương ứng bên dưới.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vesinhsachdanang.vn'

  return [
    /* ── Trang chủ ── */
    {
      url: baseUrl,
      lastModified: new Date('2026-09-28'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    /* ── Trang dịch vụ – uncomment khi page đã được tạo ── */
    {
      url: `${baseUrl}/giat-sofa-da-nang`,
      lastModified: new Date('2026-09-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/giat-nem-da-nang`,
      lastModified: new Date('2026-09-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ve-sinh-ghe-o-to-da-nang`,
      lastModified: new Date('2026-09-28'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ve-sinh-ghe-van-phong-da-nang`,
      lastModified: new Date('2026-09-28'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ]
}