/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../config/axios";

export const slicePost = createApi({
  reducerPath: "postApi",
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (build) => ({
    listPost: build.query<any, void>({
      query: () => ({ url: "/post/list", method: "get" }),
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
    }),
  }),
});

export const { useListPostQuery, useCreatePostMutation } = slicePost;
