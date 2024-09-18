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
    setUserLocation: (state, action: PayloadAction<string>) => {
      state.user.basicInfo.location = action.payload
    }
  }
})

export const { setUserBasicInfo, resetTokenId, setUserLocation } = userSlice.actions
export default userSlice.reducer
