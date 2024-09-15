import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'src/data/types'

interface IUserState {
  tokenId: string | undefined
  user: User | undefined
}

const initialState: IUserState = {
  tokenId: undefined,
  user: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTokenId: (state, action: PayloadAction<string>) => {
      state.tokenId = action.payload
    }
  }
})

export const { setTokenId } = userSlice.actions
export default userSlice.reducer
