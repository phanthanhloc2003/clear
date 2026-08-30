import { z } from "zod";

/**
 * Zod schema cho form đặt lịch vệ sinh
 */
export const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "Họ tên phải có ít nhất 2 ký tự")
    .max(100, "Họ tên quá dài"),
  phone: z
    .string()
    .regex(
      /^(\+84|84|0)(3[2-9]|5[6-9]|7[06-9]|8[0-9]|9[0-9])[0-9]{7}$/,
      "Số điện thoại không hợp lệ (VD: 0909123456)"
    ),
  service: z
    .string({ required_error: "Vui lòng chọn dịch vụ" })
    .refine(
      (val) => ["sofa", "mattress", "car_seat", "office_chair"].includes(val),
      { message: "Vui lòng chọn dịch vụ" }
    ),
  address: z
    .string()
    .min(10, "Vui lòng nhập địa chỉ đầy đủ")
    .max(500, "Địa chỉ quá dài"),
  note: z.string().max(1000, "Ghi chú tối đa 1000 ký tự").optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

export const SERVICE_OPTIONS = [
  { value: "sofa",         label: "🛋️ Giặt Sofa" },
  { value: "mattress",     label: "🛏️ Giặt Nệm" },
  { value: "car_seat",     label: "🚗 Vệ Sinh Ghế Ô Tô" },
  { value: "office_chair", label: "💺 Ghế Văn Phòng" },
] as const;
