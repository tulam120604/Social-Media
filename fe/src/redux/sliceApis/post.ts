/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../config/axios";

export const slicePost = createApi({
  reducerPath: "postApi",
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ["LIST_POST", "VIEW_POST"],
  endpoints: (build) => ({
    listPost: build.query<any, void>({
      query: () => ({ url: "/socialPost/list", method: "get" }),
      providesTags: ["LIST_POST"],
    }),
    listMyPost: build.query<any, void>({
      query: () => ({ url: "/socialPost/list_my_post", method: "get" }),
      providesTags: ["LIST_POST"],
    }),
    createPost: build.mutation<any, any>({
      query: (request) => {
        return {
          url: "/socialPost/create",
          method: "post",
          data: request?.dataRequest,
          isFormData: true,
        };
      },
      transformResponse: (result) => result,
      invalidatesTags: ["LIST_POST"],
    }),
  }),
});

export const { useListPostQuery, useListMyPostQuery, useCreatePostMutation } =
  slicePost;
