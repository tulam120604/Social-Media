import { z } from "zod";

const schemaFormAuth = z.object({
  userName: z
    .string({
      required_error : 'Tên tài khoản là bắt buộc!'
    })
    .max(255, {
      message: "Tên tài khoản tối đa 255 kí tự!",
    })
    .optional(),
  password: z.string({
    required_error : 'Mật khẩu là bắt buộc!'
  }).max(25, {
    message: "Mật khẩu tối đa 25 kí tự!",
  }),
  email: z
    .string({
      required_error : 'Email là bắt buộc!'
    })
    .max(50, {
      message: "Email tối đa 50 kí tự!",
    })
    .email({
      message: "Email không hợp lệ",
    })
});

export { schemaFormAuth };
