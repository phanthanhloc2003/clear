import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { bookingSchema } from "@/lib/schema";
import { generateBookingEmailHtml } from "@/lib/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

/** POST /api/booking – Nhận form đặt lịch và gửi email thông báo qua Resend */
export async function POST(req: NextRequest) {
  try {
    // Parse và validate body
    const body = await req.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Dữ liệu không hợp lệ",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Format thời gian gửi theo giờ Việt Nam
    const submittedAt = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Generate HTML email
    const html = generateBookingEmailHtml({
      name: data.name,
      phone: data.phone,
      service: data.service,
      address: data.address,
      note: data.note,
      submittedAt,
    });

    // Gửi email qua Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "CleanPro VN <onboarding@resend.dev>", // Thay bằng domain của bạn sau khi verify
      to: ["conghaupham147@gmail.com"],
      subject: `🧹 [Đặt lịch mới] ${data.name} – ${getServiceLabel(data.service)}`,
      html,
      tags: [
        { name: "category", value: "booking" },
        { name: "service", value: data.service },
      ],
    });

    if (error) {
      console.error("[Resend Error]", error);
      return NextResponse.json(
        { success: false, message: "Không thể gửi email. Vui lòng thử lại." },
        { status: 500 }
      );
    }

    console.log("[Booking] Email sent successfully:", emailData?.id);

    return NextResponse.json(
      {
        success: true,
        message: "Đặt lịch thành công! Chúng tôi sẽ liên hệ lại trong 15 phút.",
        emailId: emailData?.id,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Booking API Error]", err);
    return NextResponse.json(
      { success: false, message: "Lỗi server. Vui lòng thử lại sau." },
      { status: 500 }
    );
  }
}

function getServiceLabel(service: string): string {
  const labels: Record<string, string> = {
    sofa: "Giặt Sofa",
    mattress: "Giặt Nệm",
    car_seat: "Vệ Sinh Ghế Ô Tô",
    office_chair: "Ghế Văn Phòng",
  };
  return labels[service] ?? service;
}
