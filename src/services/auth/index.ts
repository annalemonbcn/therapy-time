import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, BASE_URL_AUTH } from 'src/firebase/db'
import { LoginFormModel } from 'src/screens/login/components/loginForm/types'
import { SignUpFormModel } from 'src/screens/signUp/components/signUpForm/types'

type SignUpResponse = {
  idToken: string
  email?: string
  refreshToken: string
  expiresIn: number
  localId: string
}
type LoginResponse = SignUpResponse & {
  registered?: boolean
}
type PasswordRecoveryRequest = {
  requestType: string
  email: string
}
type PasswordRecoveryResponse = {
  email: string
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_AUTH }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginFormModel>({
      query: (credentials) => ({
        url: `accounts:signInWithPassword?key=${API_KEY}`,
        method: 'POST',
        body: credentials
      })
    }),
    register: builder.mutation<SignUpResponse, SignUpFormModel>({
      query: (credentials) => ({
        url: `accounts:signUp?key=${API_KEY}`,
        method: 'POST',
        body: credentials
      })
    }),
    passwordRecovery: builder.mutation<PasswordRecoveryResponse, PasswordRecoveryRequest>({
      query: (request) => ({
        url: `accounts:sendOobCode?key=${API_KEY}`,
        method: 'POST',
        body: request
      })
    })
  })
})

export const { useLoginMutation, useRegisterMutation, usePasswordRecoveryMutation } = authApi
