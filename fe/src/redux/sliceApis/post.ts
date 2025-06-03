/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../config/axios";

interface iPaginate {
  page: number;
  limit: number;
}

export const slicePost = createApi({
  reducerPath: "postApi",
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ["LIST_POST", "VIEW_POST", "LIST_COMMENT"],
  endpoints: (build) => ({
    listPost: build.query<any, void>({
      query: () => ({ url: "/socialPost/list", method: "get" }),
      providesTags: ["LIST_POST"],
    }),
    listMyPost: build.query<any, void>({
      query: () => ({ url: "/socialPost/list_my_post", method: "get" }),
      providesTags: ["LIST_POST"],
    }),
    // list comment
    listComment: build.query<any, iPaginate>({
      query: ({ page, limit }) => ({
        url: `/socialPost/list_comment?_page=${page}&limit=${limit}`,
        params: { _page: page, _limit: limit },
        method: "get",
      }),
      providesTags: ["LIST_COMMENT"],
    }),
    //
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
    removeMyPost: build.mutation<any, any>({
      query: (request) => {
        return {
          url:
            request?.action === "delete"
              ? `/socialPost/remove_my_post/${request?.idPost}`
              : `/socialPost/${request}`,
          method: "delete",
        };
      },
      transformResponse: (result) => result?.data,
      invalidatesTags: ["LIST_POST"],
    }),
    addComment: build.mutation<any, any>({
      query: (request) => {
        return {
          url:
            request?.action === "add_comment"
              ? `/socialPost/add_comment`
              : `/socialPost/${request}`,
          method: request?.action === "add_comment" ? "post" : "put",
          data: request,
        };
      },
      transformResponse: (result) => result?.data,
      invalidatesTags: ["LIST_POST", "LIST_COMMENT"],
    }),
    addInteract: build.mutation<any, any>({
      query: (request) => {
        return {
          url:
            request?.action === "add_interact"
              ? `/socialPost/add_interact`
              : `/socialPost/${request}`,
          method: request?.action === "add_interact" ? "post" : "put",
          data: request,
        };
      },
    }),
  }),
});

export const {
  useListPostQuery,
  useListCommentQuery,
  useListMyPostQuery,
  useAddCommentMutation,
  useAddInteractMutation,
  useRemoveMyPostMutation,
  useCreatePostMutation,
} = slicePost;
