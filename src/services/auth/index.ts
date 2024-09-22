import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginFormModel } from 'src/screens/login/components/loginForm/types'
import { SignUpFormModel } from 'src/screens/signUp/components/signUpForm/types'
import { LoginResponse, PasswordRecoveryRequest, PasswordRecoveryResponse, SignUpResponse } from './types'

export const BASE_URL_AUTH = 'https://identitytoolkit.googleapis.com/v1'

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_AUTH }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginFormModel>({
      query: (credentials) => ({
        url: `accounts:signInWithPassword?key=${process.env.EXPO_PUBLIC_FIREBASE_API_KEY}`,
        method: 'POST',
        body: credentials
      })
    }),
    register: builder.mutation<SignUpResponse, SignUpFormModel>({
      query: (credentials) => ({
        url: `accounts:signUp?key=${process.env.EXPO_PUBLIC_FIREBASE_API_KEY}`,
        method: 'POST',
        body: credentials
      })
    }),
    passwordRecovery: builder.mutation<PasswordRecoveryResponse, PasswordRecoveryRequest>({
      query: (request) => ({
        url: `accounts:sendOobCode?key=${process.env.EXPO_PUBLIC_FIREBASE_API_KEY}`,
        method: 'POST',
        body: request
      })
    })
  })
})

export const { useLoginMutation, useRegisterMutation, usePasswordRecoveryMutation } = authApi
