import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (data) => ({
    getPosts: data.query({
      query: ({ url }) => ({
        url,
      }),
    }),
    addPost: data.mutation({
      query: ({ url, data }) => ({
        url: url,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = apiSlice;
