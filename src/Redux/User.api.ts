import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../Types/Posts';

export const apiUser = createApi({
  reducerPath: "Userapi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<Post[], string>({
      query: (url) => `${url}`
    })
  })
})


export const { useGetAllUsersQuery } = apiUser