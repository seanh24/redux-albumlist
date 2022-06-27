import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selected: 0,
  results: [],
  resultCount: 0
}

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.results = action.payload.results
      state.resultCount = action.payload.resultCount
    },
    setSelection: (state, action) => {
      state.selected = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setData, setSelection } = albumSlice.actions

export default albumSlice.reducer