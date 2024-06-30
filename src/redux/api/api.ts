import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todos"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => ({
        url: "/todos",
        method: "GET",
        params: { priority },
      }),
      providesTags: ["todos"],
    }),
    addTodos: builder.mutation({
      query: (data) => ({
        url: "/todos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todos"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodosMutation } = baseApi;
