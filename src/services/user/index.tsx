import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_FIREBASE } from 'src/firebase/db'
import {
  GetBookingsRequest,
  GetEmailRequest,
  GetNameRequest,
  GetProfilePictureRequest,
  SetBookingsRequest,
  SetEmailRequest,
  SetNameRequest,
  SetProfilePictureRequest
} from './types'
import { UserBooking } from 'src/data/types'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    setName: builder.mutation<void, SetNameRequest>({
      query: (body) => ({
        url: `/users/${body.uuid}.json`,
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['User']
    }),
    getName: builder.query<{ name: string }, GetNameRequest>({
      query: ({ uuid }) => `/users/${uuid}.json`,
      providesTags: ['User']
    }),
    setEmail: builder.mutation<void, SetEmailRequest>({
      query: (body) => ({
        url: `/users/${body.uuid}.json`,
        method: 'PATCH',
        body
      })
    }),
    getEmail: builder.query<{ email: string }, GetEmailRequest>({
      query: ({ uuid }) => `/users/${uuid}.json`
    }),
    setProfilePicture: builder.mutation<void, SetProfilePictureRequest>({
      query: (body) => ({
        url: `/users/${body.uuid}.json`,
        method: 'PATCH',
        body
      })
    }),
    getProfilePicture: builder.query<{ profilePicture: string }, GetProfilePictureRequest>({
      query: ({ uuid }) => `/users/${uuid}.json`
    }),
    setBookings: builder.mutation<void, SetBookingsRequest>({
      query: (body) => ({
        url: `/users/${body.uuid}.json`,
        method: 'PATCH',
        body
      })
    }),
    getBookings: builder.query<{ bookings: UserBooking[] }, GetBookingsRequest>({
      query: ({ uuid }) => `/users/${uuid}.json`
    })
  })
})

export const {
  useSetNameMutation,
  useGetNameQuery,
  useSetEmailMutation,
  useGetEmailQuery,
  useSetProfilePictureMutation,
  useGetProfilePictureQuery,
  useSetBookingsMutation,
  useGetBookingsQuery
} = userApi
