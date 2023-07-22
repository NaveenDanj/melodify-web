import { SearchResults } from 'src/types/dto';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';

interface PlaylistItemDTO {
  item:SearchResults,
  index:number,
  onFunctionTrigger: (data: SearchResults) => void;
}

function PlaylistItem({item , index , onFunctionTrigger }:PlaylistItemDTO) {

  const handleButtonClick = () => {
    onFunctionTrigger(item)
  }

  return (
    <div className='tw-flex tw-w-full tw-justify-between tw-rounded tw-p-2 hover:tw-bg-[rgba(255,255,255,0.1)]'>
                        
      <div className='tw-flex tw-gap-4'>
        <label className='tw-my-auto tw-text-sm tw-text-slate-300'>{index+1 }</label>
        
        <div className='tw-flex'>
          <img className=' tw-shadow-lg' style={{ width : 35 }} src={item.album.cover_small} />
          <div className='tw-flex tw-gap-1 tw-flex-col tw-ml-3'>
            <label className='tw-my-auto tw-text-sm tw-font-bold'>{item.title}</label>
            <label className='tw-text-xs tw-text-slate-300'>{item.artist.name}</label>
          </div>
        </div>

      </div>

      <label style={{ textAlign : 'right' }} className='tw-my-auto tw-text-sm tw-text-slate-300'>{item.album.title}</label>
      <label className='tw-my-auto tw-text-sm tw-text-slate-300'>Today</label>
      
      <button onClick={handleButtonClick} style={{ border : '1px solid rgba(255,255,255,0.2)' }} className="tw-px-3 tw-py-1 tw-my-auto tw-rounded-2xl tw-bg-[rgba(0,0,0,0)]">
        <DoNotDisturbOnIcon sx={{ fontSize : 16 }} />
      </button>


    </div>
  )
}

export default PlaylistItem