import { createApi } from "@reduxjs/toolkit/query/react";
import { sign_in_google } from "../../services/auth/sign-in";
import instance from "../../config/axios";

const axiosBaseQuery = async ({ uri, method, data }) => {
  try {
    const result = await instance({
        uri, method, data
    })
    return result
  } catch (error) {
    return error 
  }
};

export const sliceAuth = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery,
});
