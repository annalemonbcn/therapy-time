import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_FIREBASE } from 'src/firebase/db'
import { SetProfilePictureRequest } from './types'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
  endpoints: (builder) => ({
    setProfilePicture: builder.mutation<void, SetProfilePictureRequest>({
      query: (body) => ({
        url: `/users/${body.uuid}.json`,
        method: 'PATCH',
        body
      })
    })
  })
})

export const { useSetProfilePictureMutation } = userApi
