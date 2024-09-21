import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Therapist, TherapistBooking } from 'src/data/types'
import { URL_FIREBASE } from 'src/db/firebase'
import { CancelTherapistBookingRequest, SetTherapistBookingsRequest } from './types'

export const therapistsApi = createApi({
  reducerPath: 'therapistsApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
  tagTypes: ['bookings'],
  endpoints: (builder) => ({
    getTherapists: builder.query<Therapist[], void>({
      query: () => '/therapists.json'
    }),
    getTherapistById: builder.query<Therapist[], string>({
      query: (id) => `/therapists.json?orderBy="basicInfo/id"&equalTo="${id}"`,
      transformResponse: (res: any) => Object.values(res)
    }),
    setTherapistBooking: builder.mutation<void, SetTherapistBookingsRequest>({
      query: ({ therapistId, booking, bookingId }) => ({
        url: `/therapists/${therapistId}/bookings/${bookingId}.json`,
        method: 'PUT',
        body: JSON.stringify(booking)
      }),
      invalidatesTags: ['bookings']
    }),
    getTherapistBookings: builder.query<{ bookings: TherapistBooking[] }, { therapistId: string }>({
      query: ({ therapistId }) => `/therapists.json?orderBy="basicInfo/id"&equalTo="${therapistId}"`,
      transformResponse: (res: any) => {
        const therapists = Object.values(res) as Therapist[]
        const therapist = therapists[0]

        if (!therapist || !therapist.bookings) {
          return { bookings: [] }
        }

        return { bookings: therapist.bookings }
      },
      providesTags: ['bookings']
    }),
    cancelTherapistBooking: builder.mutation<void, CancelTherapistBookingRequest>({
      query: ({ therapistId, bookingId, status }) => ({
        url: `/therapists/${therapistId}/bookings/${bookingId}.json`,
        method: 'PATCH',
        body: { status }
      }),
      invalidatesTags: ['bookings']
    })
  })
})

export const {
  useGetTherapistsQuery,
  useGetTherapistByIdQuery,
  useSetTherapistBookingMutation,
  useGetTherapistBookingsQuery,
  useCancelTherapistBookingMutation
} = therapistsApi
