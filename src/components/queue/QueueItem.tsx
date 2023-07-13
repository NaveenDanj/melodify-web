import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

function QueueItem() {
  return (
    <div className='tw-flex tw-w-full tw-justify-between tw-rounded tw-p-2 hover:tw-bg-[rgba(255,255,255,0.1)]'>   
        <div className='tw-flex tw-gap-4'>            
            <div className='tw-flex'>
                <div className='tw-flex '>
                    <PlayCircleFilledIcon className='tw-my-auto tw-mr-3' sx={{ fontSize: 20, color: '#EDEDED' }} />
                    <img className=' tw-shadow-lg' style={{ width : 35 }} src='https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc' />
                </div>
                <div className='tw-flex tw-gap-1 tw-flex-col tw-ml-3'>
                    <label className='tw-my-auto tw-text-sm tw-font-bold'>Vagos song</label>
                    <label className='tw-text-xs tw-text-slate-300'>Iraj , Infas , Devashri</label>
                </div>
            </div>

        </div>

        <label style={{ textAlign : 'right' }} className='tw-my-auto tw-text-sm tw-text-slate-300'>Np Songs</label>
        
        <div className='tw-flex tw-justify-center tw-items-center tw-my-auto tw-p-1 tw-cursor-pointer tw-rounded-lg hover:tw-bg-[#292929]'>
            <MoreHorizIcon sx={{ fontSize: 20, color: '#EDEDED' }} />
        </div>


    </div>
  )
}

export default QueueItem