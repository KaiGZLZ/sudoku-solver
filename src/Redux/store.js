import { configureStore } from '@reduxjs/toolkit'
import matrixSlice from './matrixSlice'

export const store = configureStore({
  reducer: {
    matrix: matrixSlice.reducer
  },
})