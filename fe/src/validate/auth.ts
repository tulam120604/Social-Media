import { z } from "zod";

//
const schemaFormSignin = z.object({
  password: z
    .string({
      required_error: "Password is required!",
    })
    .max(25, {
      message: "Password maximum 25 character!",
    }),
  email: z
    .string({
      required_error: "Email is required!",
    })
    .max(50, {
      message: "Email maximum is 50 character!",
    })
    .email({
      message: "Email is not valid!",
    }),
});

const schemaFormSignup = z.object({
  userName: z
    .string({
      required_error: "FullName is required!",
    })
    .max(255, {
      message: "FullName maximum 255 character!",
    }),
  password: z
    .string({
      required_error: "Password is required!",
    })
    .max(25, {
      message: "Password maximum 25 character!",
    }),
  email: z
    .string({
      required_error: "Email is required!",
    })
    .max(50, {
      message: "Email maximum is 50 character!",
    })
    .email({
      message: "Email is not valid!",
    }),
});

export { schemaFormSignin, schemaFormSignup };
