import { DocumentData } from 'firebase/firestore';
import { useState } from 'react';
import PlayerService from 'src/services/PlayerService';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

interface PlaylistItemDTO {
  item:DocumentData,
  index:number
}

function PlaylistSong({item , index }:PlaylistItemDTO) {

    const [playing , setPlaying] = useState(false);

    return (
        <div onClick={() => setPlaying(!playing)} className='tw-flex tw-w-full tw-justify-between tw-rounded tw-p-2 hover:tw-bg-[rgba(255,255,255,0.1)]'>
                            
            <div className='tw-flex tw-gap-4 tw-group'>
                <label className='group-hover:tw-hidden tw-my-auto tw-text-sm tw-text-slate-300'>{index+1 }</label>
                
                <div className='tw-hidden group-hover:tw-block tw-my-auto'>
                    {playing == false ? <PlayArrowIcon className='tw-my-auto' sx={{ fontSize : 16 }} /> : <PauseIcon className='tw-my-auto' sx={{ fontSize : 16 }} />}
                </div>

                <div className='tw-flex'>
                <img className=' tw-shadow-lg' style={{ width : 35 }} src={item.meta.album.cover_small} />
                <div className='tw-flex tw-gap-1 tw-flex-col tw-ml-3'>
                    <label className='tw-my-auto tw-text-sm tw-font-bold'>{item.meta.title}</label>
                    <label className='tw-text-xs tw-text-slate-300'>{item.meta.artist.name}</label>
                </div>
                </div>

            </div>

            <label style={{ textAlign : 'right' }} className='tw-my-auto tw-text-sm tw-text-slate-300'>{item.meta.album.title}</label>
            <label className='tw-my-auto tw-text-sm tw-text-slate-300'>Today</label>
            
            {/* <button style={{ border : '1px solid rgba(255,255,255,0.2)' }} className="tw-px-3 tw-py-1 tw-my-auto tw-rounded-2xl tw-bg-[rgba(0,0,0,0)]">
                <DoNotDisturbOnIcon sx={{ fontSize : 16 }} />
            </button> */}

            <label className='tw-text-xs tw-my-auto tw-text-slate-300'>{ PlayerService.formatTime(item.meta.duration)+''}</label>

        </div>
    )
}

export default PlaylistSong