import { configureStore } from '@reduxjs/toolkit'
import therapistsReducer from '../features/therapists/therapistsSlice'

export const store = configureStore({
  reducer: {
    therapists: therapistsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
