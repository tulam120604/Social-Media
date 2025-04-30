import account from "../../model/account.js";
import { StatusCodes } from "http-status-codes";
import { userSchema } from "../../config/validate.js";
import { create_token } from "../../middleware/auth.js";
import brcyptjs from "bcryptjs";
import crypto from "crypto";
import fetch from "node-fetch";

const save_data_account = async (data) => {
  const check_account = await account.findOne({
    email: data.email,
  });
  if (check_account) {
    return {
      error: true,
      data: check_account,
      code: 301,
      message: "Tài khoản đã tồn tại!",
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

// authenticate with google
async function get_google_user_infor(access_token) {
  const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
    method: "get",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  if (!res.ok) {
    return {
      error: true,
      message: "Access token không hợp lệ hoặc đã hết hạn",
    };
  }
  const data = await res.json();
  return data;
}

export const authenticate_with_google = async (req, res) => {
  try {
    // get access_token
    const { access_token } = req.body;
    // verify access token
    const account = await get_google_user_infor(access_token);
    const generateRandomPassword = crypto
      .randomBytes(8)
      .toString("hex")
      .slice(0, 8); // Lấy chuỗi ngẫu nhiên
    const data_account = {
      ...account,
      userName: account.name,
      password: generateRandomPassword,
    };
    const result = await save_data_account(data_account);
    if (result.error) {
      // nếu mà đã có thì trả về để fe tự redirect
      if (result.code === 301) {
        let data;
        if (result.data) {
          const token = create_token(result.data._id);
          res.cookie("jwt", token, {
            httpOnly: false,
            secure: false,
            path: "/",
            sameSite: "Lax",
            maxAge: 604800000,
          });
          data = {
            userName: result.data.userName,
            email: result.data.email,
            picture: result.data.picture,
            role: result.data.role,
          };
        }
        result.password = undefined;
        return res.status(StatusCodes.OK).json({
          error: false,
          code: result.code, // code là 301 redirect sang uri mới
          data,
        });
      }
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: true,
        message: result.message,
      });
    }
    return res.status(StatusCodes.CREATED).json({
      error: false,
      message: "Sign up OK",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
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
      message: error || 500,
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
      data: data_account,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};

// logout
export const log_out = (req, res) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không có token!",
      });
    }
    res.clearCookie("jwt", { path: "/" });
    return res.status(StatusCodes.NO_CONTENT).json({
      error: false,
      message: "Logout OK!",
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};
