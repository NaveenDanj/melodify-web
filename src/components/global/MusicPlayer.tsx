/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Slider, Stack } from "@mui/material"
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PauseIcon from '@mui/icons-material/Pause';

import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "src/store/store";
import { MusicMetaDataDTO } from "src/types/dto";
import { playPlaylist, setCurrenlyPlayingMetaData, setCurrentlyPlaying, setCurrentlyPlayingIndex, stopPlayPlaylist } from "src/store/slices/MusicPlayerSlice";




function MusicPlayer() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [volume, setVolume] = useState(100);
    const [playlistIndex, setPlaylistIndex] = useState(0);

    // @ts-ignore
    const currentlyPlaying: string = useSelector((state: RootState) => state.musicPlayer.currentlyPlayingUrl)
    const currentlyPlayingMetaData: MusicMetaDataDTO | null = useSelector((state: RootState) => state.musicPlayer.metaData)
    const playlist = useSelector((state: RootState) => state.musicPlayer.PlaylistData)
    const isPlaylistPlayed: boolean = useSelector((state: RootState) => state.musicPlayer.currentPlayingPlaylistState)
    const currentPlayingPlaylistState = useSelector((state: RootState) => state.musicPlayer.currentPlayingPlaylistState)
    const currentPlayingPlaylistIndex = useSelector((state: RootState) => state.musicPlayer.currentPlayingPlaylistIndex)
    const dispath = useDispatch()


    useEffect(() => {
        dispath(setCurrentlyPlaying(playlist?.songs[playlistIndex].url))
        dispath(setCurrentlyPlayingIndex(playlistIndex))
        dispath(setCurrenlyPlayingMetaData({
            photoURL: playlist?.songs[playlistIndex].meta.album.cover_medium,
            title: playlist?.songs[playlistIndex].meta.title,
            artist: playlist?.songs[playlistIndex].meta.artist.name
        } as MusicMetaDataDTO))
    }, [dispath, playlist, playlistIndex])

    useEffect(() => {
        setPlaylistIndex(currentPlayingPlaylistIndex)
    }, [currentPlayingPlaylistIndex])

    const handlePlay = () => {
        // @ts-ignore
        audioRef.current.play();
        dispath(playPlaylist())
        setIsPlaying(currentPlayingPlaylistState);
    };

    useEffect(() => {
        if (currentPlayingPlaylistState) {
            handlePlay()
        } else {
            handlePause()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPlayingPlaylistState])

    

    const handlePause = () => {
        // @ts-ignore
        audioRef.current.pause();
        dispath(stopPlayPlaylist())
        setIsPlaying(currentPlayingPlaylistState);
    };

    const handleSkipForward = () => {
        // @ts-ignore
        audioRef.current.currentTime += 30;
    };

    const handleSkipBackward = () => {
        // @ts-ignore
        if (audioRef.current) {
            // @ts-ignore
            audioRef.current.currentTime -= 30;
        }

    };


    useEffect(() => {
        const interval = setInterval(() => {
            if (audioRef.current) {
                // @ts-ignore
                setCurrentTime(audioRef.current.currentTime);
            }
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        console.log(isPlaylistPlayed)
        if (isPlaylistPlayed) {
            handlePlay()
        } else {
            handlePause()
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaylistPlayed]);

    useEffect(() => {

        if (audioRef.current) {

            // @ts-ignore
            audioRef.current.addEventListener('loadedmetadata', () => {
                // @ts-ignore
                setTotalTime(audioRef.current.duration);
            });

            // @ts-ignore
            audioRef.current.addEventListener('ended', () => {
                // @ts-ignore
                if (playlist?.songs.length - 1 == playlistIndex) {
                    return
                }
                setPlaylistIndex(playlistIndex + 1)
                console.log('ended -> ', playlistIndex)
            });

            // @ts-ignore
            audioRef.current.addEventListener('loadeddata', () => {
                handlePlay();
            });

        }

        return () => {
            if (audioRef.current) {
                // @ts-ignore
                audioRef.current.removeEventListener('loadedmetadata', () => {
                    // @ts-ignore
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    setTotalTime(audioRef.current.duration);
                });
            }
        };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playlist?.songs.length, playlistIndex]);


    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        console.log(event)
        // @ts-ignore
        audioRef.current.currentTime = newValue;
        // @ts-ignore
        setCurrentTime(audioRef.current.currentTime);
    }


    const handleVoluemChange = (event: Event, newValue: number | number[]) => {
        console.log(event)
        // @ts-ignore
        audioRef.current.volume = newValue;
        setVolume(newValue as number);
    }


    return (
        <div className='tw-flex tw-h-full'>

            <div className="tw-my-auto tw-w-[200px]">

                <div className="tw-flex tw-cursor-pointer tw-w-full tw-justify-between tw-py-2 tw-rounded-md">
                    <div className="tw-ml-2 tw-flex  tw-cursor-pointer">
                        <img style={{ width: 45 }} className="tw-rounded-md tw-my-auto  tw-cursor-pointer" src={currentlyPlayingMetaData?.photoURL} />

                        <div className="tw-flex tw-flex-col tw-my-auto tw-ml-3">
                            <label className='tw-cursor-pointer tw-text-sm tw-font-thin'>{currentlyPlayingMetaData?.title}</label>
                            <div className=' tw-cursor-pointer'>
                                <label className="tw-cursor-pointer tw-text-xs tw-text-slate-400">{currentlyPlayingMetaData?.artist}</label>
                            </div>
                        </div>
                    </div>

                    {currentlyPlaying != '' && currentlyPlaying != undefined && (
                        <div className="tw-my-auto">
                            <FavoriteBorderIcon sx={{ fontSize: 16 }} />
                        </div>
                    )}


                </div>

            </div>


            <div className="tw-flex tw-justify-center tw-flex-grow tw-mx-2">

                <audio ref={audioRef} src={currentlyPlaying} />

                <div className="tw-flex tw-flex-col tw-flex-grow tw-max-w-[550px] tw-my-auto">

                    <div className="tw-flex tw-gap-5 tw-justify-center">
                        <ShuffleIcon className="tw-cursor-pointer  tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize: 25 }} />
                        <SkipPreviousIcon onClick={handleSkipBackward} className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize: 25 }} />


                        {isPlaying ? (
                            <PauseIcon onClick={handlePause} className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize: 30 }} />
                        ) : (
                            <PlayCircleFilledIcon onClick={handlePlay} className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize: 30 }} />
                        )}


                        <SkipNextIcon onClick={handleSkipForward} className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize: 25 }} />
                        <RepeatIcon className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize: 25 }} />
                    </div>

                    <Stack className="tw-mt-2" spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <label className='tw-cursor-pointer tw-text-xs'>{formatTime(currentTime)}</label>
                        <Slider onChange={handleSliderChange} size="small" style={{ color: '#1DB954' }} max={totalTime} value={currentTime} aria-label="Volume" />
                        <label className='tw-cursor-pointer tw-text-xs'>{formatTime(totalTime)}</label>
                    </Stack>

                </div>



            </div>

            <div className="tw-w-[180px]  tw-my-auto">
                <div className="tw-flex tw-gap-3 tw-mr-5">
                    <SlideshowIcon className="tw-cursor-pointer  tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize: 20 }} />
                    <QueueMusicIcon className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize: 20 }} />
                    <VolumeDownIcon className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize: 20 }} />
                    <Slider min={0} max={1} step={0.01} defaultValue={1} value={volume} onChange={handleVoluemChange} size="small" style={{ color: '#1DB954' }} className="tw-mr-2" aria-label="Volume" />
                </div>
            </div>

        </div>
    )
}

export default MusicPlayer