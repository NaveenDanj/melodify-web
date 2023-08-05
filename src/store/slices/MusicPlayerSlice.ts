import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MusicMetaDataDTO, PlaylistDTO } from 'src/types/dto';


export interface MusicPlayerState {
  currentlyPlayingUrl: string;
  metaData: MusicMetaDataDTO | null;
  PlaylistData : PlaylistDTO | null
  currentPlayingPlaylistState : boolean
  currentPlayingPlaylistIndex: number
}

const initialState: MusicPlayerState = {
  currentlyPlayingUrl: '',
  metaData : null,
  PlaylistData : null,
  currentPlayingPlaylistState : false,
  currentPlayingPlaylistIndex : 0
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
    },

    setPlaylistData: (state , action:PayloadAction<PlaylistDTO | null>) => {
      state.PlaylistData = action.payload
    },

    stopPlayPlaylist : (state) => {
      state.currentPlayingPlaylistState = false
    },

    playPlaylist : (state) => {
      state.currentPlayingPlaylistState = true
    },

    setCurrentlyPlayingIndex : (state , action: PayloadAction<number>) => {
      state.currentPlayingPlaylistIndex = action.payload
    }

  },
})

export const {setCurrentlyPlayingIndex , setCurrentlyPlaying , setCurrenlyPlayingMetaData , setPlaylistData , stopPlayPlaylist , playPlaylist } = musicPlayerSlice.actions
export default musicPlayerSlice.reducer