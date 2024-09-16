import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, BASE_URL_AUTH } from 'src/firebase/db'
import { LoginFormModel } from 'src/screens/login/components/loginForm/types'
import { SignUpFormModel } from 'src/screens/signUp/components/signUpForm/types'
import {
  GetUserDataRequest,
  LoginResponse,
  PasswordRecoveryRequest,
  PasswordRecoveryResponse,
  SignUpResponse,
  UpdateNameRequest
} from './types'

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['User'],
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
    }),
    updateName: builder.mutation<void, UpdateNameRequest>({
      query: (body) => {
        console.log('body', body)
        return {
          url: `accounts:update?key=${API_KEY}`,
          method: 'POST',
          body: body
        }
      }
    }),
    getUserData: builder.mutation<void, GetUserDataRequest>({
      query: (body) => ({
        url: `accounts:lookup?key=${API_KEY}`,
        method: 'POST',
        body: body
      })
    })
  })
})

export const {
  useLoginMutation,
  useRegisterMutation,
  usePasswordRecoveryMutation,
  useUpdateNameMutation,
  useGetUserDataMutation
} = authApi
