import { z } from "zod";

const userSchema = z.object({
  userName: z.string().min(1, { message: "Tên không được để trống" }),
  password: z
    .string()
    .min(1, { message: "Mật khẩu là bắt buộc" })
    .max(25, { message: "Mật khẩu không được vượt quá 25 kí tự" }),
  email: z.string().email({ message: "Địa chỉ email không hợp lệ" }).optional(),
});


export {userSchema}