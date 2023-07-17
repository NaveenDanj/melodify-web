import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  userData: unknown;
  additionalData : unknown;
}

const initialState: UserState = {
  userData: null,
  additionalData : null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state , action: PayloadAction<unknown>) => {
      state.userData = action.payload
    },

    setUserAdditionalData: (state , action: PayloadAction<unknown>) => {
      state.additionalData = action.payload
    }

  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer