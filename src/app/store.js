import albumReducer  from '../components/dataSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {album: albumReducer},
})