import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../redux/store";

export const expressApi = createApi({
    reducerPath: 'expressApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:8000/api',
    //   prepareHeaders: (headers, {getState}) => {
    //     const token = (getState() as RootState).auth.token;
    //     if (token) {
    //         headers.set('authorization', `Bearer ${token}`);
    //     }
    //     return headers;
    //     },
    }),
    

    endpoints: (builder) => ({
        getTodos:builder.query<any, void>({
            query: () => '/todos'
        })
      })
});

export const {useGetTodosQuery} = expressApi;
