import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthModel, AuthenticatedUserModel } from "./auth/auth.model";
import { AlumniModel } from "./alumni/alumni.model";
import { EventModel } from "./event/event.model";
import { FundraiserModel } from "./fundraiser/fundraiser.model";
import { GroupModel, GroupMemberModel } from "./group/group.model";

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
        // router.route("/group").get(getGroups);
        // router.route("/group/:id").get(getGroup);
        // router.route("/group").post(createGroup);
        // router.route("/group/:id").put(updateGroup);
        // router.route("/group/:id").delete(deleteGroup);
        // router.route("/group/members").get(getGroupMembers);
        // router.route("/group/members/:id").put(addGroupMember);
        // router.route("/group/members/:id").put(deleteGroupMember);
        // router.route("/group/members/:id").put(updateGroupMember);
        // router.route("/group/members/:id").get(getGroupMember);
        getGroups:builder.query<GroupModel[], void>({
            query: () => '/group',
            providesTags: ['Group']
        }),
        getGroup:builder.query<GroupModel, string>({
            query: (id) => `/group/${id}`,
            providesTags: ['Group']
        }),
        createGroup:builder.mutation<GroupModel, GroupModel>({
            query: (body) => ({
                url: '/group',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Group']
        }),
        updateGroup:builder.mutation<GroupModel, GroupModel>({
            query: (body) => ({
                url: `/group/${body.id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Group']
        }),
        deleteGroup:builder.mutation<{message: string}, string>({
            query: (id) => ({
                url: `/group/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Group']
        }),
        getGroupMembers:builder.query<GroupMemberModel[], void>({
            query: () => '/group/members',
            providesTags: ['Group']
        }),
        getGroupMember:builder.query<GroupMemberModel, string>({
            query: (id) => `/group/members/${id}`,
            providesTags: ['Group']
        }),
        addGroupMember:builder.mutation<GroupMemberModel, GroupMemberModel>({
            query: (body) => ({
                url: `/group/members/${body.id}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Group']
        }),
        updateGroupMember:builder.mutation<GroupMemberModel, GroupMemberModel>({
            query: (body) => ({
                url: `/group/members/${body.id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Group']
        }),
        deleteGroupMember:builder.mutation<{message: string}, string>({
            query: (id) => ({
                url: `/group/members/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Group']
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
