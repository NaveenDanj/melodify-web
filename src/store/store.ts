import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/UserSlice'
import musicPlayerReducer from './slices/MusicPlayerSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    musicPlayer: musicPlayerReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch