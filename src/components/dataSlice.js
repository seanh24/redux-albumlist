import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: 0,
  results: [],
  resultCount: 0,
  isLoading: false,
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.results = action.payload.results;
      state.resultCount = action.payload.resultCount;
    },
    setSelection: (state, action) => {
      state.selected = action.payload;
    },
    mountLoading: (state) => {
      state.isLoading = true
    },
    unmountLoading: (state) => {
        state.isLoading = false
    }
  },
});

// Action creators are generated for each case reducer function
export const { setData, setSelection, mountLoading, unmountLoading } = albumSlice.actions;
export const selectedAlbum = (state) => state.album.results[state.album.selected]

export default albumSlice.reducer;
