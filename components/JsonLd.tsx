/**
 * JSON-LD Structured Data – CleanPro VN
 *
 * Bao gồm:
 *  - LocalBusiness + CleaningService (cho Local Pack)
 *  - FAQPage (cho rich snippets câu hỏi thường gặp)
 *  - WebSite (cho sitelinks search box)
 *
 * Chèn vào <head> qua app/layout.tsx để Google đọc được ở mọi trang.
 */
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      /* ── 1. LocalBusiness + CleaningService ── */
      {
        '@type': ['LocalBusiness', 'CleaningService'],
        '@id': 'https://vesinhsachdanang.vn/#business',
        name: 'CleanPro VN – Vệ Sinh Sạch Đà Nẵng',
        alternateName: 'CleanPro VN',
        url: 'https://vesinhsachdanang.vn',
        telephone: '+84969135304',
        email: 'conghaupham147@gmail.com',
        image: {
          '@type': 'ImageObject',
          url: 'https://vesinhsachdanang.vn/og-image.jpg',
          width: 1200,
          height: 630,
        },
        logo: {
          '@type': 'ImageObject',
          url: 'https://vesinhsachdanang.vn/logo.png',
        },
        description:
          'Dịch vụ giặt sofa, giặt nệm, vệ sinh ghế ô tô và ghế văn phòng tận nơi tại Đà Nẵng. Công nghệ hơi nước hiện đại, khử khuẩn 99.9%, an toàn cho gia đình.',
        priceRange: '₫₫',
        currenciesAccepted: 'VND',
        paymentAccepted: 'Cash, Bank Transfer',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Lô 03 Võ Chí Công',
          addressLocality: 'Ngũ Hành Sơn',
          addressRegion: 'Đà Nẵng',
          postalCode: '550000',
          addressCountry: 'VN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 16.0471,
          longitude: 108.2485,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '07:00',
            closes: '20:00',
          },
        ],
        areaServed: [
          { '@type': 'City', name: 'Đà Nẵng' },
          { '@type': 'AdministrativeArea', name: 'Ngũ Hành Sơn' },
          { '@type': 'AdministrativeArea', name: 'Hải Châu' },
          { '@type': 'AdministrativeArea', name: 'Thanh Khê' },
          { '@type': 'AdministrativeArea', name: 'Liên Chiểu' },
          { '@type': 'AdministrativeArea', name: 'Sơn Trà' },
          { '@type': 'AdministrativeArea', name: 'Cẩm Lệ' },
        ],
        sameAs: ['https://www.facebook.com/cong.hau.916575'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Dịch Vụ Vệ Sinh CleanPro VN',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Giặt Sofa Đà Nẵng',
                description:
                  'Giặt sofa da, nỉ, vải bố tại nhà Đà Nẵng, tận nơi không cần vận chuyển',
                url: 'https://vesinhsachdanang.vn/giat-sofa-da-nang',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Giặt Nệm Đà Nẵng',
                description:
                  'Giặt nệm lò xo, nệm bông, nệm cao su tận nơi tại Đà Nẵng, khử khuẩn 99.9%',
                url: 'https://vesinhsachdanang.vn/giat-nem-da-nang',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Vệ Sinh Ghế Ô Tô Đà Nẵng',
                description:
                  'Vệ sinh nội thất ghế ô tô tận nơi tại Đà Nẵng',
                url: 'https://vesinhsachdanang.vn/ve-sinh-ghe-o-to-da-nang',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Vệ Sinh Ghế Văn Phòng Đà Nẵng',
                description:
                  'Vệ sinh ghế văn phòng, ghế xoay tại doanh nghiệp Đà Nẵng',
                url: 'https://vesinhsachdanang.vn/ve-sinh-ghe-van-phong-da-nang',
              },
            },
          ],
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127',
          bestRating: '5',
          worstRating: '1',
        },
      },

      /* ── 2. FAQPage – xuất hiện dưới dạng rich snippet ── */
      {
        '@type': 'FAQPage',
        '@id': 'https://vesinhsachdanang.vn/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Dịch vụ giặt sofa tại Đà Nẵng có đến tận nơi không?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Có. CleanPro VN cung cấp dịch vụ giặt sofa tận nơi tại Đà Nẵng, phủ sóng toàn thành phố. Kỹ thuật viên sẽ mang thiết bị đến nhà bạn, không cần tháo hoặc vận chuyển sofa ra ngoài.',
            },
          },
          {
            '@type': 'Question',
            name: 'Giặt sofa tại Đà Nẵng giá bao nhiêu?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Giá giặt sofa tại CleanPro VN dao động từ 150.000đ–600.000đ tùy loại (sofa đơn, sofa đôi, sofa góc L). Liên hệ hotline 096 9135 304 để được báo giá miễn phí.',
            },
          },
          {
            '@type': 'Question',
            name: 'Giặt nệm tại nhà bao lâu thì khô?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sau khi giặt bằng máy hút và sấy hơi nóng chuyên dụng, nệm thường khô hoàn toàn trong 4–6 tiếng nếu thời tiết tốt. CleanPro VN sử dụng công nghệ sấy nhiệt giúp rút ngắn thời gian khô đáng kể.',
            },
          },
          {
            '@type': 'Question',
            name: 'Vệ sinh ghế ô tô tại Đà Nẵng có phải mang xe đến không?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Không. CleanPro VN cung cấp dịch vụ vệ sinh ghế ô tô tận nơi tại Đà Nẵng. Bạn chỉ cần để xe tại nhà, chúng tôi sẽ mang thiết bị đến làm sạch nội thất ngay tại chỗ đậu xe của bạn.',
            },
          },
          {
            '@type': 'Question',
            name: 'CleanPro VN phục vụ những khu vực nào tại Đà Nẵng?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CleanPro VN phục vụ toàn bộ TP Đà Nẵng bao gồm: Ngũ Hành Sơn, Hải Châu, Thanh Khê, Liên Chiểu, Sơn Trà, Cẩm Lệ, Hòa Vang và khu vực lân cận. Gọi 096 9135 304 để xác nhận khu vực của bạn.',
            },
          },
        ],
      },

      /* ── 3. WebSite – Sitelinks Search Box ── */
      {
        '@type': 'WebSite',
        '@id': 'https://vesinhsachdanang.vn/#website',
        url: 'https://vesinhsachdanang.vn',
        name: 'CleanPro VN – Vệ Sinh Sạch Đà Nẵng',
        description:
          'Dịch vụ giặt sofa, giặt nệm, vệ sinh ghế ô tô tận nơi tại Đà Nẵng',
        publisher: {
          '@id': 'https://vesinhsachdanang.vn/#business',
        },
        inLanguage: 'vi-VN',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
