import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


//api url  https://jsonplaceholder.typicode.com/todos

export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['Todo'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => 'todos',
            providesTags: ['Todo'],
        }),
        getTodosById: builder.query({
            query: (id) => `todos/${id}`,
            providesTags: ['Todo'],
        }),
    }),
})


export const { useGetTodosQuery } = todoApi
