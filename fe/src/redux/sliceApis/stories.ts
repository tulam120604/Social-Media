import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../config/axios";

export const sliceStory = createApi({
    reducerPath : 'storyApi',
    baseQuery : axiosBaseQuery({
        baseUrl : import.meta.env.VITE_BASE_URL
    }),
    tagTypes : ['LIST_STORY', 'VIEW_STORY'],
    endpoints : (build) => ({
        listStory : build.query({
            query : () => ({
                url : '/',
                method : 'get'
            })
        })
    })
})