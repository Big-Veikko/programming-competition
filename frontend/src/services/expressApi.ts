import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthModel, AuthenticatedUserModel } from "./auth/auth.model";
import { AlumniModel } from "./alumni/alumni.model";
import { EventModel } from "./event/event.model";
import { FundraiserModel } from "./fundraiser/fundraiser.model";

export const expressApi = createApi({
    reducerPath: 'expressApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:7000/api',
    }),
    tagTypes: ['Auth', 'Alumni', 'Blog', 'Event', 'Fundraiser', 'Group', 'Log', 'Mail', 'News', 'Opportunity', 'University', 'User'],

    endpoints: (builder) => ({
        // getTodos:builder.query<TodoModel[], void>({
        //     query: () => '/todos',
        //     providesTags: (result) => providesList(result, 'Auth')
        // }),
        // addTodo:builder.mutation<TodoModel, {title: string}>({
        //     query: (body) => ({
        //         url: '/todos',
        //         method: 'POST',
        //         body
        //     }),
        //     invalidatesTags: ['Auth']
        // }),
        login:builder.mutation<AuthenticatedUserModel, AuthModel>({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Auth']
        }),
        register:builder.mutation<AuthenticatedUserModel, AuthenticatedUserModel>({
            query: (body) => ({
                url: 'auth/register',
                method: 'POST',
                body
            }),
        }),
        getUser:builder.query<AuthenticatedUserModel, string>({
            query: (id) => `/auth/user/${id}`,
            providesTags: ['Auth']

        }),
        updateUser:builder.mutation<AuthenticatedUserModel, AuthenticatedUserModel>({
            query: (payload) => ({
                url: `/auth/user/${payload.id}`,
                method: 'PUT',
                body: payload
            }),
            invalidatesTags: ['Auth']
        }),
        deleteUser:builder.mutation<{message: string}, string>({
            query: (id) => ({
                url: `/auth/user/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Auth']
        }),
        resetPassword:builder.mutation<{message: string}, AuthenticatedUserModel>({
            query: (payload) => ({
                url: `/auth/user/reset-password/${payload.id}`,
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ['Auth']
        }),
        getAlumni:builder.query<AlumniModel[], void>({
            query: (id) => `/alumni/${id}`,
            providesTags: ['Alumni']
        }),
        getAlumnus:builder.query<AlumniModel, string>({
            query: (id) => `/alumni/${id}`,
            providesTags: ['Alumni']
        }),
        createAlumni:builder.mutation<AlumniModel, AlumniModel>({
            query: (body) => ({
                url: '/alumni',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Alumni']
        }),
        updateAlumni:builder.mutation<AlumniModel, AlumniModel>({
            query: (body) => ({
                url: `/alumni/${body.id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Alumni']
        }),
        deleteAlumni:builder.mutation<{message: string}, string>({
            query: (id) => ({
                url: `/alumni/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Alumni']
        }),
        getEvents:builder.query<EventModel[], void>({
            query: () => '/event',
            providesTags: ['Event']
        }),
        getEvent:builder.query<EventModel, string>({
            query: (id) => `/event/${id}`,
            providesTags: ['Event']
        }),
        createEvent:builder.mutation<EventModel, EventModel>({
            query: (body) => ({
                url: '/event',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Event']
        }),
        updateEvent:builder.mutation<EventModel, EventModel>({
            query: (body) => ({
                url: `/event/${body.id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Event']
        }),
        deleteEvent:builder.mutation<{message: string}, string>({
            query: (id) => ({
                url: `/event/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Event']
        }),
        attendEvent:builder.mutation<EventModel, EventModel>({
            query: (body) => ({
                url: `/event/attend/${body.id}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Event']
        }),
        unattendEvent:builder.mutation<EventModel, EventModel>({
            query: (body) => ({
                url: `/event/attend/${body.id}`,
                method: 'DELETE',
                body
            }),
            invalidatesTags: ['Event']
        }),
        approveEvent:builder.mutation<EventModel, EventModel>({
            query: (body) => ({
                url: `/event/approve/${body.id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Event']
        }),
        getFundraisers:builder.query<FundraiserModel[], void>({
            query: () => '/fundraiser',
            providesTags: ['Fundraiser']
        }),
        getFundraiser:builder.query<FundraiserModel, string>({
            query: (id) => `/fundraiser/${id}`,
            providesTags: ['Fundraiser']
        }),
        createFundraiser:builder.mutation<FundraiserModel, FundraiserModel>({
            query: (body) => ({
                url: '/fundraiser',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Fundraiser']
        }),
        updateFundraiser:builder.mutation<FundraiserModel, FundraiserModel>({
            query: (body) => ({
                url: `/fundraiser/${body.id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Fundraiser']
        }),
        getOngoingFundraisers:builder.query<FundraiserModel[], void>({
            query: () => '/fundraiser/ongoing',
            providesTags: ['Fundraiser']
        }),
        deleteFundraiser:builder.mutation<{message: string}, string>({
            query: (id) => ({
                url: `/fundraiser/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Fundraiser']
        }),
        approveFundraiser:builder.mutation<FundraiserModel, FundraiserModel>({
            query: (body) => ({
                url: `/fundraiser/approve/${body.id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Fundraiser']
        }),

      })
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useResetPasswordMutation
  
} = expressApi;
