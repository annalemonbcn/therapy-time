import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Therapist, TherapistBooking } from 'src/data/types'
import { URL_FIREBASE } from 'src/db/firebase'
import { SetTherapistBookingsRequest } from './types'

// TODO: addBooking (clase 13, minuto 10)
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
    setTherapistBookings: builder.mutation<void, SetTherapistBookingsRequest>({
      query: (body) => ({
        url: `/therapists/${body.therapistId}.json`,
        method: 'PATCH',
        body
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
    })
  })
})

export const {
  useGetTherapistsQuery,
  useGetTherapistByIdQuery,
  useSetTherapistBookingsMutation,
  useGetTherapistBookingsQuery
} = therapistsApi
