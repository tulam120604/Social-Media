import { z } from "zod";

const userSchema = z.object({
  userName: z.string().min(1, { message: "Tên không được để trống" }).optional(),
  password: z.string().min(1, { message: "Mật khẩu là bắt buộc" }),
  email: z.string().email({ message: "Địa chỉ email không hợp lệ" }).optional(),
});

export { userSchema };
