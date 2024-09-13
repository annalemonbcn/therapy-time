import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Therapist } from 'src/data/types'
import { URL_FIREBASE } from 'src/firebase/db'

export const therapistsApi = createApi({
  reducerPath: 'therapistsApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
  endpoints: (builder) => ({
    getTherapists: builder.query<Therapist[], void>({
      query: () => '/therapists.json'
    }),
    getTherapistById: builder.query<Therapist, string>({
      query: (id) => `therapists/${id}.json`
    })
  })
})

export const { useGetTherapistsQuery, useGetTherapistByIdQuery } = therapistsApi
