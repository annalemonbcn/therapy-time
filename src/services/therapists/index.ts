import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Therapist, TherapistBooking } from 'src/data/types'
import { URL_FIREBASE } from 'src/db/firebase'
import { SetTherapistbookingRequest } from './types'

// TODO: addBooking (clase 13, minuto 10)
export const therapistsApi = createApi({
  reducerPath: 'therapistsApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
  endpoints: (builder) => ({
    getTherapists: builder.query<Therapist[], void>({
      query: () => '/therapists.json'
    }),
    getTherapistById: builder.query<Therapist[], string>({
      query: (id) => `/therapists.json?orderBy="basicInfo/id"&equalTo="${id}"`,
      transformResponse: (res: any) => Object.values(res)
    }),
    setTherapistBooking: builder.mutation<void, SetTherapistbookingRequest>({
      query: (body) => ({
        url: `/therapists/${body.therapistId}.json`,
        method: 'PATCH',
        body
      })
    })
  })
})

export const { useGetTherapistsQuery, useGetTherapistByIdQuery, useSetTherapistBookingMutation } = therapistsApi
