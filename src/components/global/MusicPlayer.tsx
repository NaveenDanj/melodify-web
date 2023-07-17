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


import { useRef , useState , useEffect } from 'react';



function MusicPlayer() {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [volume, setVolume] = useState(100);


    const handlePlay = () => {
      audioRef.current.play();
      setIsPlaying(true);
    };
  
    const handlePause = () => {
      audioRef.current.pause();
      setIsPlaying(false);
    };
  
    const handleSkipForward = () => {
        audioRef.current.currentTime += 30;
    };

    const handleSkipBackward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime -= 30;
        }

    };


    useEffect(() => {
        const interval = setInterval(() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }, 100);
    
        return () => {
          clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
          audioRef.current.addEventListener('loadedmetadata', () => {
            setTotalTime(audioRef.current.duration);
          });
        }
    
        return () => {
          if (audioRef.current) {
            audioRef.current.removeEventListener('loadedmetadata', () => {
              setTotalTime(audioRef.current.duration);
            });
          }
        };
    }, []);


    const formatTime = (time : number) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        audioRef.current.currentTime = newValue;
        setCurrentTime( audioRef.current.currentTime);
    }


    const handleVoluemChange = (event: Event, newValue: number | number[]) => {
        audioRef.current.volume = newValue;
        setVolume(newValue as number);
    }


    return (
        <div className='tw-flex tw-h-full'>

            <div className="tw-my-auto tw-w-[200px]">
                
                <div className="tw-flex tw-cursor-pointer tw-w-full tw-justify-between tw-py-2 tw-rounded-md">
                    <div className="tw-ml-2 tw-flex  tw-cursor-pointer">
                        <img style={{ width : 45 }} className="tw-rounded-md tw-my-auto  tw-cursor-pointer" src="https://i.scdn.co/image/ab67616d00004851a0e7694a73abed7372474d69" />
                    
                        <div className="tw-flex tw-flex-col tw-my-auto tw-ml-3">
                            <label className='tw-cursor-pointer tw-text-sm tw-font-thin'>Eminem</label>
                            <div className=' tw-cursor-pointer'>
                                <label className="tw-cursor-pointer tw-text-xs tw-text-slate-400">Eminem</label>
                            </div>
                        </div>
                    </div>

                    <div className="tw-my-auto">
                        <FavoriteBorderIcon />
                    </div>

                </div>


            </div>

            
            <div className="tw-flex tw-justify-center tw-flex-grow tw-mx-2">

                <audio ref={audioRef} src="/music/sample.m4a" />
                
                <div className="tw-flex tw-flex-col tw-flex-grow tw-max-w-[550px] tw-my-auto">
                    
                    <div className="tw-flex tw-gap-5 tw-justify-center">
                        <ShuffleIcon className="tw-cursor-pointer  tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 25  }} />
                        <SkipPreviousIcon onClick={handleSkipBackward} className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 25  }} />
                        

                        {isPlaying ? (
                            <PauseIcon onClick={handlePause} className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 30  }} />
                        ) : (
                            <PlayCircleFilledIcon onClick={handlePlay} className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 30  }} />
                        )}


                        <SkipNextIcon onClick={handleSkipForward} className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 25  }} />
                        <RepeatIcon className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 25  }} />
                    </div>

                    <Stack className="tw-mt-2" spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <label className='tw-cursor-pointer tw-text-xs'>{formatTime(currentTime)}</label>
                        <Slider onChange={handleSliderChange}  size="small" style={{ color : '#1DB954' }} max={totalTime} value={currentTime} aria-label="Volume" />
                        <label className='tw-cursor-pointer tw-text-xs'>{formatTime(totalTime)}</label>
                    </Stack>

                </div>



            </div>

            <div className="tw-w-[180px]  tw-my-auto">
                <div className="tw-flex tw-gap-3 tw-mr-5">
                    <SlideshowIcon className="tw-cursor-pointer  tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 20  }} />
                    <QueueMusicIcon className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 20  }} />
                    <VolumeDownIcon className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 20  }} />
                    <Slider min={0} max={1} step={0.01} defaultValue={1} value={volume} onChange={handleVoluemChange} size="small" style={{ color : '#1DB954' }} className="tw-mr-2" aria-label="Volume" />                    
                </div>
            </div>
        
        </div>
    )
}

export default MusicPlayer