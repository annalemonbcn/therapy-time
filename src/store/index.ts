import { configureStore } from '@reduxjs/toolkit'
import { therapistsApi } from 'src/services/therapists'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from 'src/services/auth'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [therapistsApi.reducerPath]: therapistsApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(therapistsApi.middleware, authApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
