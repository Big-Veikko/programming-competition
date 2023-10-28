import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthModel, AuthenticatedUserModel, AuthenticationResponseModel } from "./auth/auth.model";
import { AlumniModel } from "./alumni/alumni.model";
import { EventModel } from "./event/event.model";
import { FundraiserModel } from "./fundraiser/fundraiser.model";
import { GroupModel, GroupMemberModel } from "./group/group.model";
import { NewsModel } from "./news/news.model";
import { OpportunityModel } from "./opportunity/opportunity.model";
import { UniversityModel } from "./university/university.model";


export const expressApi = createApi({
    reducerPath: 'expressApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:7000/api',
    }),
    tagTypes: ['Auth', 'Alumni', 'Blog', 'Event', 'Fundraiser', 'Group', 'Log', 'Mail', 'News', 'Opportunity', 'University', 'User'],

    endpoints: (builder) => ({
        login:builder.mutation<AuthenticationResponseModel, AuthModel>({
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
        getNews:builder.query<NewsModel[], void>({
            query: () => '/news',
            providesTags: ['News']
        }),
        getNewsA:builder.query<NewsModel, string>({
            query: (id) => `/news/${id}`,
            providesTags: ['News']
        }),
        createNewsA:builder.mutation<NewsModel, NewsModel>({
            query: (body) => ({
                url: '/news',
                method: 'POST',
                body
            }),
            invalidatesTags: ['News']
        }),
        getOpps:builder.query<OpportunityModel[], void>({
            query: () => '/opp',
            providesTags: ['Opportunity']
        }),
        getOpp:builder.query<OpportunityModel, string>({
            query: (id) => `/opp/${id}`,
            providesTags: ['Opportunity']
        }),
        createOpp:builder.mutation<OpportunityModel, OpportunityModel>({
            query: (body) => ({
                url: '/opp',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Opportunity']
        }),
        updateOpp:builder.mutation<OpportunityModel, OpportunityModel>({
            query: (body) => ({
                url: `/opp/${body.id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Opportunity']
        }),
        deleteOpp:builder.mutation<{message: string}, string>({
            query: (id) => ({
                url: `/opp/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Opportunity']
        }),
        // router.route("/university").get(getUniversities);
        // router.route("/university/:id").get(getUniversity);
        // router.route("/university").post(registerUniversity);
        // router.route("/university/:id").delete(deleteUniversity);
        // router.route("/university/:id").put(updateUniversity);

        getUniversities:builder.query<UniversityModel[], void>({
            query: () => '/university',
            providesTags: ['University']
        }),
        getUniversity:builder.query<UniversityModel, string>({
            query: (id) => `/university/${id}`,
            providesTags: ['University']
        }),
        createUniversity:builder.mutation<UniversityModel, UniversityModel>({
            query: (body) => ({
                url: '/university',
                method: 'POST',
                body
            }),
            invalidatesTags: ['University']
        }),
        updateUniversity:builder.mutation<UniversityModel, UniversityModel>({
            query: (body) => ({
                url: `/university/${body.id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['University']
        }),
        deleteUniversity:builder.mutation<{message: string}, string>({
            query: (id) => ({
                url: `/university/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['University']
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
