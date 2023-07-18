import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MusicMetaDataDTO } from 'src/types/dto';



export interface MusicPlayerState {
    currentlyPlayingUrl: string;
    metaData: MusicMetaDataDTO | null;
}

const initialState: MusicPlayerState = {
    currentlyPlayingUrl: '',
    metaData : null
}

export const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState,
  reducers: {

    setCurrentlyPlaying: (state , action: PayloadAction<string>) => {
      state.currentlyPlayingUrl = action.payload
    },

    setCurrenlyPlayingMetaData: (state , action: PayloadAction<MusicMetaDataDTO>) => {
        state.metaData = action.payload
    }

  },
})

export const { setCurrentlyPlaying , setCurrenlyPlayingMetaData } = musicPlayerSlice.actions
export default musicPlayerSlice.reducer