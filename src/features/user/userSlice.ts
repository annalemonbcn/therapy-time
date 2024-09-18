import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserState, SetUserBasicInfoRequest, SetUserLocationRequest } from './types'
import { UserBooking } from 'src/data/types'

const initialState: IUserState = {
  user: {
    basicInfo: {
      uuid: '',
      email: '',
      tokenId: '',
      location: {
        latitude: '',
        longitude: '',
        address: ''
      }
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
    setUserLocation: (state, action: PayloadAction<SetUserLocationRequest>) => {
      state.user.basicInfo.location.address = action.payload.address
      state.user.basicInfo.location.latitude = action.payload.latitude
      state.user.basicInfo.location.latitude = action.payload.longitude
    }
  }
})

export const { setUserBasicInfo, resetTokenId, setUserLocation } = userSlice.actions
export default userSlice.reducer
