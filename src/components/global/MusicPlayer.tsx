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


function MusicPlayer() {
    return (
        <div className='tw-flex tw-h-full'>

            <div className="tw-my-auto tw-w-[200px]">
                
                <div className="tw-flex tw-cursor-pointer tw-w-full tw-justify-between tw-py-2 tw-rounded-md">
                    <div className="tw-ml-2 tw-flex  tw-cursor-pointer">
                        <img style={{ width : 45 }} className="tw-rounded-md  tw-cursor-pointer" src="https://i.scdn.co/image/ab67616d00004851a0e7694a73abed7372474d69" />
                    
                        <div className="tw-flex tw-flex-col tw-my-auto tw-ml-3">
                            <label className='tw-cursor-pointer'>Eminem</label>
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
                
                <div className="tw-flex tw-flex-col tw-flex-grow tw-max-w-[550px] tw-my-auto">
                    
                    <div className="tw-flex tw-gap-5 tw-justify-center">
                        <ShuffleIcon className="tw-cursor-pointer  tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 25  }} />
                        <SkipPreviousIcon className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 25  }} />
                        <PlayCircleFilledIcon className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 35  }} />
                        <SkipNextIcon className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 25  }} />
                        <RepeatIcon className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 25  }} />
                    </div>

                    <Stack className="tw-mt-2" spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <label className='tw-cursor-pointer tw-text-xs'>2:48</label>
                        <Slider size="small" style={{ color : '#1DB954' }} value={50} aria-label="Volume" />
                        <label className='tw-cursor-pointer tw-text-xs'>6:00</label>
                    </Stack>

                </div>



            </div>

            <div className="tw-w-[180px]  tw-my-auto">
                <div className="tw-flex tw-gap-3">
                    <SlideshowIcon className="tw-cursor-pointer  tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 20  }} />
                    <QueueMusicIcon className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 20  }} />
                    <VolumeDownIcon className="tw-cursor-pointer tw-my-auto tw0-text-slate-200 hover:tw-text-[#ECECEC]" sx={{ fontSize : 20  }} />
                    <Slider size="small" style={{ color : '#1DB954' }} className="tw-mr-2" value={50} aria-label="Volume" />                    
                </div>
            </div>
        
        </div>
    )
}

export default MusicPlayer