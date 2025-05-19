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
  tagTypes: ["Auth", "View"],
  endpoints: (build) => ({
    listUser: build.query<any, void>({
      query: () => ({ url: "/auth/list_all", method: "get" }),
      providesTags: ["View"],
    }),
    listFriend: build.query<any, void>({
      query: () => ({ url: "/auth/view_list_friend", method: "get" }),
      providesTags: ["View"],
    }),
    listFriendRequest: build.query<any, void>({
      query: () => ({ url: "/auth/view_friend_request", method: "get" }),
      providesTags: ["View"],
    }),
    viewProfile: build.query<any, void>({
      query: () => ({ url: "/auth/profile/view", method: "get" }),
      providesTags: ["Auth"],
    }),
    viewFriendSuggest: build.query<any, void>({
      query: () => ({ url: "/auth/view_friend_suggest", method: "get" }),
      providesTags: ["Auth"],
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
      invalidatesTags: ["Auth"],
    }),
    // log out
    handleLogOut: build.mutation<any, void>({
      query: () => {
        return {
          url: "/auth/log-out",
          method: "post",
        };
      },
      invalidatesTags: ["Auth"],
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
      invalidatesTags: ["Auth"],
    }),

    // add friend
    addFriend: build.mutation<any, any>({
      query: (request) => {
        const uri = "/auth/add_friend";
        return {
          url: uri,
          method: "post",
          data: request,
        };
      },
      invalidatesTags: ["View"],
    }),
    // handle friend requests
    handleFriendRequest: build.mutation<any, any>({
      query: (request) => {
        const uri = "/auth/handle_friend_request";
        return {
          url: uri,
          method: "post",
          data: request,
        };
      },
      invalidatesTags: ["View"],
    }),
  }),
});

export const {
  useListUserQuery,
  useViewFriendSuggestQuery,
  useListFriendRequestQuery,
  useListFriendQuery,
  useViewProfileQuery,
  useHandleAuthMutation,
  useAddFriendMutation,
  useHandleLogOutMutation,
  useHandleAuthWithGoogleMutation,
  useHandleFriendRequestMutation,
} = sliceAuth;
