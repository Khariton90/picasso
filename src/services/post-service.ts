import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (build) => ({
    fetchPosts: build.query<Post[], number>({
      query: (limit: number = 10) => ({
        url: '/posts',
        params: {
          _limit: limit
        }
      })
    }),
    fetchPostItem: build.query<Post, number>({
      query: (id: number) => ({
        url: `/posts/${id}`
      })
    })
  })
})

