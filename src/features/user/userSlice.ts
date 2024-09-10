import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserBooking } from 'src/data/types'

export interface IUserState {
  user: User | undefined
}

const initialState: IUserState = {
  user: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBooking: (state, action: PayloadAction<UserBooking>) => {
      const booking = action.payload

      if (!state.user) {
        throw new Error('Cannot add booking: User is undefined') // TODO: move this check in the action creator
      }

      state.user.bookings = [...state.user.bookings, booking]
    }
  }
})
