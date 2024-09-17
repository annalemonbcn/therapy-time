import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserState, SetUserBasicInfoRequest } from './types'
import { UserBooking } from 'src/data/types'

const initialState: IUserState = {
  user: {
    basicInfo: {
      uuid: '',
      email: '',
      tokenId: '',
      location: ''
    },
    bookings: []
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserBasicInfo: (state, action: PayloadAction<SetUserBasicInfoRequest>) => {
      state.user.basicInfo.uuid = action.payload.uuid
      state.user.basicInfo.email = action.payload.email
      state.user.basicInfo.tokenId = action.payload.tokenId
    },
    resetTokenId: (state) => {
      state.user.basicInfo.tokenId = ''
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.user.basicInfo.name = action.payload
    },
    setUserProfilePicture: (state, action: PayloadAction<string>) => {
      state.user.basicInfo.profilePicture = action.payload
    },
    setUserLocation: (state, action: PayloadAction<string>) => {
      state.user.basicInfo.location = action.payload
    },
    setUserBookings: (state, action: PayloadAction<UserBooking[]>) => {
      state.user.bookings = state.user.bookings
    }
  }
})

export const { setUserBasicInfo, resetTokenId, setUserName, setUserProfilePicture, setUserLocation, setUserBookings } =
  userSlice.actions
export default userSlice.reducer
