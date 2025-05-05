/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../config/axios";

export const slicePost = createApi({
  reducerPath: "postApi",
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.BASE_URL,
  }),
  endpoints: (build) => ({
    listPost: build.query<any, void>({
      query: () => ({ url: "/post/list", method: "get" }),
    }),
    createPost: build.query<any, void>({
      query: (request) => {
        return {
          url: "/post/create",
          method: "post",
          data: request,
        };
      },
      transformResponse: (result) => result,
    }),
  }),
});
