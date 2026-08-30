/**
 * Generates a premium HTML email for booking notifications.
 * Sent to the business owner via Resend.
 */

const SERVICE_LABELS: Record<string, string> = {
  sofa: "🛋️ Giặt Sofa",
  mattress: "🛏️ Giặt Nệm",
  car_seat: "🚗 Vệ Sinh Ghế Ô Tô",
  office_chair: "💺 Ghế Văn Phòng",
};

interface BookingEmailData {
  name: string;
  phone: string;
  service: string;
  address: string;
  note?: string;
  submittedAt: string;
}

export function generateBookingEmailHtml(data: BookingEmailData): string {
  const serviceLabel = SERVICE_LABELS[data.service] ?? data.service;

  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Đặt Lịch Mới – CleanPro VN</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Inter',system-ui,-apple-system,sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
    style="background:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" role="presentation"
          style="max-width:620px;width:100%;">

          <!-- ── HEADER ── -->
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                style="background:linear-gradient(135deg,#0f766e 0%,#0d9488 45%,#0284c7 100%);
                       border-radius:20px 20px 0 0;padding:36px 40px 32px;">
                <tr>
                  <td>
                    <!-- Logo row -->
                    <table cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td style="vertical-align:middle;padding-right:12px;">
                          <div style="width:48px;height:48px;background:rgba(255,255,255,0.18);
                                      border-radius:14px;display:flex;align-items:center;
                                      justify-content:center;font-size:24px;line-height:48px;
                                      text-align:center;border:1px solid rgba(255,255,255,0.25);">
                            ✨
                          </div>
                        </td>
                        <td style="vertical-align:middle;">
                          <div style="font-size:22px;font-weight:800;color:#ffffff;
                                      letter-spacing:-0.5px;line-height:1;">CleanPro VN</div>
                          <div style="font-size:10px;font-weight:600;color:rgba(255,255,255,0.65);
                                      letter-spacing:3px;text-transform:uppercase;margin-top:3px;">
                            Premium Cleaning Service
                          </div>
                        </td>
                      </tr>
                    </table>

                    <!-- Divider -->
                    <div style="height:1px;background:rgba(255,255,255,0.18);margin:24px 0;"></div>

                    <!-- Title -->
                    <div style="font-size:26px;font-weight:800;color:#ffffff;
                                line-height:1.2;margin-bottom:8px;">
                      🎉 Yêu Cầu Đặt Lịch Mới!
                    </div>
                    <div style="font-size:14px;color:rgba(255,255,255,0.75);line-height:1.6;">
                      Có khách hàng vừa gửi yêu cầu đặt lịch vệ sinh.<br/>
                      Hãy liên hệ lại trong vòng <strong style="color:#ffffff;">15 phút</strong> để giữ chất lượng dịch vụ.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── BODY ── -->
          <tr>
            <td style="background:#ffffff;padding:0 40px 8px;">

              <!-- Alert banner -->
              <div style="background:#f0fdfa;border-left:4px solid #14b8a6;
                          border-radius:0 12px 12px 0;padding:14px 18px;
                          margin:28px 0 24px;">
                <div style="font-size:13px;font-weight:700;color:#0f766e;margin-bottom:2px;">
                  ⏰ Cần liên hệ lại trong vòng 15 phút
                </div>
                <div style="font-size:12px;color:#0d9488;">
                  Nhận lúc: ${data.submittedAt}
                </div>
              </div>

              <!-- Section title -->
              <div style="font-size:11px;font-weight:700;color:#94a3b8;
                          text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;">
                Thông Tin Khách Hàng
              </div>

              <!-- Info cards grid -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                style="border-collapse:separate;border-spacing:0 10px;">

                <!-- Name row -->
                <tr>
                  <td style="background:#f8fafc;border-radius:12px;
                              padding:14px 18px;border:1px solid #e9f0f5;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:36px;vertical-align:middle;">
                          <div style="width:36px;height:36px;background:linear-gradient(135deg,#14b8a6,#0d9488);
                                      border-radius:10px;text-align:center;line-height:36px;font-size:16px;">
                            👤
                          </div>
                        </td>
                        <td style="padding-left:14px;vertical-align:middle;">
                          <div style="font-size:11px;font-weight:600;color:#94a3b8;
                                      text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">
                            Họ và tên
                          </div>
                          <div style="font-size:16px;font-weight:700;color:#0f172a;">
                            ${escapeHtml(data.name)}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Phone row -->
                <tr>
                  <td style="background:#f8fafc;border-radius:12px;
                              padding:14px 18px;border:1px solid #e9f0f5;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:36px;vertical-align:middle;">
                          <div style="width:36px;height:36px;background:linear-gradient(135deg,#0ea5e9,#0284c7);
                                      border-radius:10px;text-align:center;line-height:36px;font-size:16px;">
                            📞
                          </div>
                        </td>
                        <td style="padding-left:14px;vertical-align:middle;">
                          <div style="font-size:11px;font-weight:600;color:#94a3b8;
                                      text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">
                            Số điện thoại
                          </div>
                          <div style="font-size:16px;font-weight:700;color:#0f172a;">
                            <a href="tel:${escapeHtml(data.phone)}"
                              style="color:#0f766e;text-decoration:none;">
                              ${escapeHtml(data.phone)}
                            </a>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Service row -->
                <tr>
                  <td style="background:linear-gradient(135deg,#f0fdfa,#f8fafc);
                              border-radius:12px;padding:14px 18px;
                              border:1.5px solid #14b8a640;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:36px;vertical-align:middle;">
                          <div style="width:36px;height:36px;background:linear-gradient(135deg,#0f766e,#14b8a6);
                                      border-radius:10px;text-align:center;line-height:36px;font-size:16px;">
                            🧹
                          </div>
                        </td>
                        <td style="padding-left:14px;vertical-align:middle;">
                          <div style="font-size:11px;font-weight:600;color:#94a3b8;
                                      text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">
                            Dịch vụ yêu cầu
                          </div>
                          <div style="font-size:16px;font-weight:800;color:#0f766e;">
                            ${serviceLabel}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Address row -->
                <tr>
                  <td style="background:#f8fafc;border-radius:12px;
                              padding:14px 18px;border:1px solid #e9f0f5;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:36px;vertical-align:top;padding-top:2px;">
                          <div style="width:36px;height:36px;background:linear-gradient(135deg,#f59e0b,#d97706);
                                      border-radius:10px;text-align:center;line-height:36px;font-size:16px;">
                            📍
                          </div>
                        </td>
                        <td style="padding-left:14px;vertical-align:top;">
                          <div style="font-size:11px;font-weight:600;color:#94a3b8;
                                      text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">
                            Địa chỉ vệ sinh
                          </div>
                          <div style="font-size:14px;font-weight:500;color:#334155;line-height:1.5;">
                            ${escapeHtml(data.address)}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                ${
                  data.note
                    ? `<!-- Note row -->
                <tr>
                  <td style="background:#fffbeb;border-radius:12px;
                              padding:14px 18px;border:1px solid #fde68a;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:36px;vertical-align:top;padding-top:2px;">
                          <div style="width:36px;height:36px;background:linear-gradient(135deg,#8b5cf6,#7c3aed);
                                      border-radius:10px;text-align:center;line-height:36px;font-size:16px;">
                            📝
                          </div>
                        </td>
                        <td style="padding-left:14px;vertical-align:top;">
                          <div style="font-size:11px;font-weight:600;color:#92400e;
                                      text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">
                            Ghi chú từ khách hàng
                          </div>
                          <div style="font-size:14px;color:#78350f;line-height:1.6;font-style:italic;">
                            "${escapeHtml(data.note)}"
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>`
                    : ""
                }

              </table>

              <!-- Action buttons -->
              <div style="margin:28px 0 8px;text-align:center;">
                <a href="tel:${escapeHtml(data.phone)}"
                  style="display:inline-block;background:linear-gradient(135deg,#0d9488,#14b8a6);
                         color:#ffffff;font-size:14px;font-weight:700;
                         padding:14px 32px;border-radius:50px;text-decoration:none;
                         box-shadow:0 4px 20px rgba(20,184,166,0.35);
                         margin:0 6px 12px;">
                  📞 Gọi ngay
                </a>
                <a href="https://zalo.me/${escapeHtml(data.phone)}"
                  style="display:inline-block;background:#0084ff;
                         color:#ffffff;font-size:14px;font-weight:700;
                         padding:14px 32px;border-radius:50px;text-decoration:none;
                         box-shadow:0 4px 20px rgba(0,132,255,0.30);
                         margin:0 6px 12px;">
                  💬 Nhắn Zalo
                </a>
              </div>

            </td>
          </tr>

          <!-- ── DIVIDER ── -->
          <tr>
            <td style="background:#ffffff;padding:0 40px;">
              <div style="height:1px;background:linear-gradient(90deg,transparent,#e2e8f0,transparent);"></div>
            </td>
          </tr>

          <!-- ── TIPS ── -->
          <tr>
            <td style="background:#ffffff;padding:20px 40px 32px;">
              <div style="background:#f8fafc;border-radius:14px;padding:18px 20px;">
                <div style="font-size:12px;font-weight:700;color:#64748b;
                            margin-bottom:10px;text-transform:uppercase;letter-spacing:1px;">
                  💡 Lưu ý xử lý
                </div>
                <table cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="font-size:12px;color:#64748b;line-height:1.7;vertical-align:top;
                                width:50%;padding-right:10px;">
                      ✓ Gọi xác nhận lịch hẹn<br/>
                      ✓ Tư vấn giá và thời gian<br/>
                    </td>
                    <td style="font-size:12px;color:#64748b;line-height:1.7;vertical-align:top;">
                      ✓ Chuẩn bị thiết bị phù hợp<br/>
                      ✓ Cập nhật lịch của đội ngũ<br/>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f172a,#1e293b);
                        border-radius:0 0 20px 20px;padding:24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="text-align:center;">
                    <div style="font-size:16px;font-weight:800;color:#ffffff;margin-bottom:4px;">
                      CleanPro <span style="color:#5eead4;">VN</span>
                    </div>
                    <div style="font-size:11px;color:#64748b;margin-bottom:14px;">
                      Dịch vụ vệ sinh cao cấp – Sạch sâu, tươi mới
                    </div>
                    <div style="font-size:12px;color:#475569;">
                      📞 096 9135 304 &nbsp;|&nbsp; 📍 lô 03 Võ Chí Công, Ngũ Hành Sơn, Đà Nẵng
                    </div>
                    <div style="margin-top:16px;font-size:10px;color:#334155;">
                      Email này được gửi tự động từ hệ thống CleanPro VN.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

/** Simple HTML escape helper */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
