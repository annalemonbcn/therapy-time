import { configureStore } from '@reduxjs/toolkit'
import therapistsReducer from '../features/therapists/therapistsSlice'
import { therapistsApi } from 'src/services/therapists'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    therapists: therapistsReducer,
    [therapistsApi.reducerPath]: therapistsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(therapistsApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
