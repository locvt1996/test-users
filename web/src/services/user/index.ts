import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { UserItem } from './types';

export const userService = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<{ users: UserItem[] }, any>({
      query: () => `users`,
    }),
  }),
});

export const { useGetUsersQuery } = userService;
