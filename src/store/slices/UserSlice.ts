import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  userData: UserData | null;
  additionalData : unknown;
}

export interface UserData {
  email :string;
  displayName: string;
  photoURL: string;
  uid: string;
  phoneNumber : string;
}


const initialState: UserState = {
  userData: null,
  additionalData : null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state , action: PayloadAction<UserData>) => {
      state.userData = action.payload
    },

    setUserAdditionalData: (state , action: PayloadAction<unknown>) => {
      state.additionalData = action.payload
    }

  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer