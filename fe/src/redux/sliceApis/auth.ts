/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../config/axios";

interface authRequest {
  dataForm: {
    userName: string;
    password: string;
    email?: string;
  };
  action: string;
}
interface authRequestWithGoogle {
  access_token: any;
}

export const sliceAuth = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (build) => ({
    listUser: build.query<any, void>({
      query: () => ({ url: "/auth/list", method: "get" }),
    }),
    viewProfile: build.query<any, void>({
      query: () => ({ url: "/auth/profile/view", method: "get" }),
    }),
    // sign in, sign up
    handleAuth: build.mutation<any, authRequest>({
      query: (request) => {
        const uri =
          request?.action === "signup" ? "/auth/sign-up" : "/auth/sign-in";
        return {
          url: uri,
          method: "post",
          data: request?.dataForm,
        };
      },
      transformResponse: (result) => result,
    }),
    // log out
    handleLogOut: build.mutation<any, void>({
      query: () => {
        return {
          url: "/auth/log-out",
          method: "post",
        };
      },
    }),
    // sign in, sign up with google
    handleAuthWithGoogle: build.mutation<any, authRequestWithGoogle>({
      query: (request) => {
        const uri = "/auth/authenticate-with-google";
        return {
          url: uri,
          method: "post",
          data: request.access_token,
          meta: request,
        };
      },
    }),
  }),
});

export const {
  useListUserQuery,
  useViewProfileQuery,
  useHandleAuthMutation,
  useHandleLogOutMutation,
  useHandleAuthWithGoogleMutation,
} = sliceAuth;
