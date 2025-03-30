/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../config/axios";

interface ApiResponse<T> {
  data: T;
}
interface authRequest {
  dataForm: {
    userName: string;
    password: string;
    email?: string;
  };
  action: string;
}

export const sliceAuth = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (build) => ({
    listUser: build.query<ApiResponse<any>, void>({
      query: () => ({ url: "/query", method: "get" }),
    }),
    signUp: build.mutation<ApiResponse<any>, authRequest>({
      query: (request) => {
        console.log(request);
        const uri =
          request?.action === "sign-up" ? "/auth/sign-up" : "/auth/sign-in";
        return {
          url: uri,
          method: "post",
          data: request?.dataForm,
        };
      },
    }),
  }),
});

export const { useListUserQuery, useSignUpMutation } = sliceAuth;
