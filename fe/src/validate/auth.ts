import { z } from "zod";

const schemaFormAuth = z.object({
  userName: z.string().max(255, {
    message : 'Tên tài khoản tối đa 255 kí tự!'
  }),
  password: z.string().max(25, {
    message : 'Mật khẩu tối đa 25 kí tự!'
  }),
});

export { schemaFormAuth };
