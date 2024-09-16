import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'src/data/types'

interface IUserState {
  user: User
}

const initialState: IUserState = {
  user: {
    basicInfo: {
      uuid: '',
      email: ''
    },
    bookings: []
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserBasicInfo: (state, action: PayloadAction<{ uuid: string; email: string }>) => {
      state.user.basicInfo.uuid = action.payload.uuid
      state.user.basicInfo.email = action.payload.email
    }
  }
})

export const { setUserBasicInfo } = userSlice.actions
export default userSlice.reducer
