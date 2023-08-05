import { DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import PlayerService from 'src/services/PlayerService';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store';
import { playPlaylist, setCurrentlyPlayingIndex, stopPlayPlaylist } from "src/store/slices/MusicPlayerSlice";


interface PlaylistItemDTO {
    item: DocumentData,
    index: number
}

function PlaylistSong({ item, index }: PlaylistItemDTO) {
    const [playing, setPlaying] = useState(false);
    const [mouseInside, setMouseInside] = useState(false);
    const dispatch = useDispatch();

    const currentPlayingPlaylistIndex = useSelector((state: RootState) => state.musicPlayer.currentPlayingPlaylistIndex)
    const currentPlayingPlaylistState = useSelector((state: RootState) => state.musicPlayer.currentPlayingPlaylistState)
    const metaData = useSelector((state: RootState) => state.musicPlayer.metaData)
    const [isCurrentlyPlayingSong, setIsCurrentlyPlayingSong] = useState(false)

    useEffect(() => {
        if (currentPlayingPlaylistIndex == index && metaData?.title == item.meta.title) {
            setIsCurrentlyPlayingSong(true)
            setPlaying(true)
        } else {
            setIsCurrentlyPlayingSong(false)
            setPlaying(false)
        }
    }, [currentPlayingPlaylistIndex, index, item.meta.title, metaData])

    useEffect(() => {
        if (currentPlayingPlaylistIndex == index && metaData?.title == item.meta.title) {
            setIsCurrentlyPlayingSong(true)
            if (currentPlayingPlaylistState) {
                setPlaying(true)
            } else {
                setPlaying(false)
            }

        }
    }, [currentPlayingPlaylistIndex, metaData, currentPlayingPlaylistState, index, item.meta.title])


    const handlePlay = () => {
        if (currentPlayingPlaylistIndex == index && metaData?.title == item.meta.title) {
            dispatch(playPlaylist())
            setIsCurrentlyPlayingSong(true)
            setPlaying(true)
        } else {
            setIsCurrentlyPlayingSong(false)
            dispatch(setCurrentlyPlayingIndex(index))
        }
    }

    const handleStop = () => {
        if (currentPlayingPlaylistIndex == index && metaData?.title == item.meta.title) {
            dispatch(stopPlayPlaylist())
            setPlaying(false)
        }
    }


    return (
        <div onMouseLeave={() => setMouseInside(false)} onMouseEnter={() => setMouseInside(true)}
            className={'tw-flex tw-w-full tw-justify-between tw-rounded tw-p-2 hover:tw-bg-[rgba(255,255,255,0.1)]'}
        >

            <div className='tw-flex tw-gap-4 tw-group'>

                {mouseInside == false &&
                    <label
                        className={isCurrentlyPlayingSong == true ? `tw-my-auto tw-text-sm tw-text-[#1ED760] ` : `tw-my-auto tw-text-sm tw-text-slate-300 `}
                    >
                        {index + 1}
                    </label>
                }

                {mouseInside && (
                    <div className='tw-my-auto'>
                        {playing == false ? <PlayArrowIcon onClick={() => handlePlay()} className='tw-my-auto tw-cursor-pointer' sx={{ fontSize: 16 }} /> : <PauseIcon onClick={() => handleStop()} className='tw-my-auto tw-cursor-pointer' sx={{ fontSize: 16 }} />}
                    </div>
                )}


                <div className='tw-flex'>
                    <img className=' tw-shadow-lg' style={{ width: 35 }} src={item.meta.album.cover_small} />
                    <div className='tw-flex tw-gap-1 tw-flex-col tw-ml-3'>
                        <label
                            className={isCurrentlyPlayingSong ? 'tw-my-auto tw-text-sm tw-font-bold tw-text-[#1ED760]' : 'tw-my-auto tw-text-sm tw-font-bold'}
                        >
                            {item.meta.title}
                        </label>
                        <label className='tw-text-xs tw-text-slate-300'>{item.meta.artist.name}</label>
                    </div>
                </div>

            </div>

            <label style={{ textAlign: 'right' }} className='tw-my-auto tw-text-sm tw-text-slate-300'>{item.meta.album.title}</label>
            <label className='tw-my-auto tw-text-sm tw-text-slate-300'>Today</label>

            {/* <button style={{ border : '1px solid rgba(255,255,255,0.2)' }} className="tw-px-3 tw-py-1 tw-my-auto tw-rounded-2xl tw-bg-[rgba(0,0,0,0)]">
                <DoNotDisturbOnIcon sx={{ fontSize : 16 }} />
            </button> */}

            <label className='tw-text-xs tw-my-auto tw-text-slate-300'>{PlayerService.formatTime(item.meta.duration) + ''}</label>

        </div>
    )
}

export default PlaylistSong