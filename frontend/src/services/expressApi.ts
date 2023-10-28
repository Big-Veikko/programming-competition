import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TodoModel } from "./todo/todo.model";
import { providesList } from "../utils";

export const expressApi = createApi({
    reducerPath: 'expressApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:7000/api',
    }),
    tagTypes: ['Auth', 'Alumni', 'Blog', 'Event', 'Fundraiser', 'Group', 'Log', 'Mail', 'News', 'Opportunity', 'University', 'User'],

    endpoints: (builder) => ({
        getTodos:builder.query<TodoModel[], void>({
            query: () => '/todos',
            providesTags: (result) => providesList(result, 'Auth')
        }),
        addTodo:builder.mutation<TodoModel, {title: string}>({
            query: (body) => ({
                url: '/todos',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Auth']
        }),
      })
});

export const {
  useGetTodosQuery, 
  useAddTodoMutation
} = expressApi;
