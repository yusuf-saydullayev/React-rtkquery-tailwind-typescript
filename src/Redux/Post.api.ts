import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post, addPost } from '../Types/Posts';


export const apiPost = createApi({
  tagTypes: ['Posts'],
  reducerPath: "Postapi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<Post[], string>({
      query: (url) => `${url}`,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
            { type: 'Posts', id: 'LIST' },
          ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),
    addPost: builder.mutation<addPost, Partial<addPost>>({
      query: (body) => ({
        url: 'posts',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify({
          title: body.title,
          body: body.body,
          userId: 22,
        })
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    })
  })
})


export const { useGetAllUsersQuery, useAddPostMutation } = apiPost