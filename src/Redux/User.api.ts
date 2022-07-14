import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiUser = createApi({
  reducerPath: "Userapi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<any, string>({
      query: (url) => `${url}`
    })
  })
})


export const { useGetAllUsersQuery } = apiUser