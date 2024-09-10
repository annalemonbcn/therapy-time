import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { mockTherapists } from 'src/data/mock.data'
import { TagsEnum, Therapist } from 'src/data/types'

interface ITherapistsState {
  therapists: Therapist[]
  filteredTherapists: Therapist[]
}

const initialState: ITherapistsState = {
  therapists: mockTherapists,
  filteredTherapists: mockTherapists
}

export const therapistsSlice = createSlice({
  name: 'therapists',
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      const category = action.payload as TagsEnum

      if (category === TagsEnum.All) {
        state.filteredTherapists = state.therapists
      } else {
        state.filteredTherapists = state.therapists.filter((therapist) => therapist.sessionInfo.tags.includes(category))
      }
    }
  }
})

export const { filterByCategory } = therapistsSlice.actions
export default therapistsSlice.reducer
