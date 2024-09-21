import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_FIREBASE } from 'src/db/firebase'
import {
  CancelBookingRequest,
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
import { sortBookings } from 'src/screens/appointmentsScreen/utils'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
  tagTypes: ['name', 'profilePicture', 'bookings'],
  endpoints: (builder) => ({
    setName: builder.mutation<void, SetNameRequest>({
      query: (body) => ({
        url: `/users/${body.uuid}.json`,
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['name']
    }),
    getName: builder.query<{ name: string }, GetNameRequest>({
      query: ({ uuid }) => `/users/${uuid}.json`,
      providesTags: ['name']
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
      }),
      invalidatesTags: ['profilePicture']
    }),
    getProfilePicture: builder.query<{ profilePicture: string }, GetProfilePictureRequest>({
      query: ({ uuid }) => `/users/${uuid}.json`,
      providesTags: ['profilePicture']
    }),
    setBooking: builder.mutation<void, SetBookingsRequest>({
      query: ({ uuid, booking, bookingId }) => ({
        url: `/users/${uuid}/bookings/${bookingId}.json`,
        method: 'PUT',
        body: JSON.stringify(booking)
      }),
      invalidatesTags: ['bookings']
    }),
    getBookings: builder.query<{ bookings: UserBooking[] }, GetBookingsRequest>({
      query: ({ uuid }) => `users/${uuid}/bookings.json`,
      transformResponse: (res: any) => {
        const bookings = Object.values(res) as UserBooking[]

        return { bookings }
      },
      providesTags: ['bookings']
    }),
    cancelBooking: builder.mutation<void, CancelBookingRequest>({
      query: (body) => ({
        url: `/users/${body.uuid}.json`,
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['bookings']
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
  useSetBookingMutation,
  useGetBookingsQuery,
  useCancelBookingMutation
} = userApi
