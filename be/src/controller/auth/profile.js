import account from "../../model/account.js";
import { StatusCodes } from "http-status-codes";
import { OAuth2Client } from "google-auth-library";
import { userSchema } from "../../config/validate.js";
import { create_token } from "../../middleware/auth.js";
import brcyptjs from "bcryptjs";

const id_client = process.env.GG_client_id;
const client_gg = new OAuth2Client({ id_client });

const save_data_account = async (data) => {
  const check_account = await account.findOne({
    email: data.email,
  });
  if (check_account) {
    return {
      error: true,
      message: "Tên đăng nhập đã tồn tại!",
    };
  }
  const hassPassword = await brcyptjs.hash(data.password, 10);
  const request = {
    ...data,
    password: hassPassword,
  };
  const result = await account.create(request);
  return result;
};

// sign up with google
export const sign_up_with_google = async (req, res) => {
  try {
    // get token
    const { token } = req.body;
    // verify mã thông báo với google
    const verify_token = await client_gg.verifyIdToken({
      idToken: token,
      audience: id_client,
    });
    // Lấy thông tin người dùng từ mã thông báo
    const payload = ticket.getPayload();
    console.log(payload);
    const userId = payload["sub"];
    const email = payload["email"];

    return res.status(StatusCodes.OK).json({
      error: false,
      message: "User authenticated successfully",
      user: {
        id: userId,
        email: email,
      },
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || "500",
    });
  }
};

// sign up
export const sign_up = async (req, res) => {
  try {
    const resultUserSchema = userSchema.safeParse(req.body);
    if (!resultUserSchema.success) {
      // Nếu kết quả trả về không thành công, trả về lỗi với các thông báo chi tiết
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: true,
        message: "Dữ liệu không hợp lệ",
        errors: resultUserSchema.error.errors, // Trả về lỗi chi tiết
      });
    }
    const result = await save_data_account(req.body);
    if (result.error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: true,
        message: result.error,
      });
    }
    result.password = undefined;
    return res.status(StatusCodes.CREATED).json({
      error: false,
      message: "Sign up OK",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || "500",
    });
  }
};

// sign in
export const sign_in = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data_account = await account.findOne({
      email,
    });
    if (!data_account) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Account not found",
      });
    }
    const check_password = await brcyptjs.compare(
      password,
      data_account.password
    );
    if (!check_password) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: true,
        message: "Wrong password",
      });
    }
    const token = create_token(data_account._id);
    data_account.password = undefined;
    res.cookie("jwt", token, {
      httpOnly: false,
      secure: false,
      path: "/",
      sameSite: "Lax",
      maxAge: 604800000,
    });
    return res.status(StatusCodes.OK).json({
      error: false,
      data : data_account,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || "500",
    });
  }
};
