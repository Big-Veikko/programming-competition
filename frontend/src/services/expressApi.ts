import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const expressApi = createApi({
    reducerPath: 'expressApi',
    baseQuery: fetchBaseQuery({
      baseUrl: import.meta.env.VITE_EXPRESS_API_URL as string,
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
