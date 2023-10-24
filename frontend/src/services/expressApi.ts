import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TodoModel } from "./todo/todo.model";
import { providesList } from "../utils";

export const expressApi = createApi({
    reducerPath: 'expressApi',
    baseQuery: fetchBaseQuery({
      baseUrl: import.meta.env.VITE_EXPRESS_API_URL as string,
    }),
    tagTypes: ['Todos'],

    endpoints: (builder) => ({
        getTodos:builder.query<TodoModel[], void>({
            query: () => '/todos',
            providesTags: (result) => providesList(result, 'Todos')
        }),
        addTodo:builder.mutation<TodoModel, {title: string}>({
            query: (body) => ({
                url: '/todos',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Todos']
        }),
      })
});

export const {
  useGetTodosQuery, 
  useAddTodoMutation
} = expressApi;
