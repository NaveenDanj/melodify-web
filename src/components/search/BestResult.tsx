import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Chip } from '@mui/material';
import { SearchResults } from 'src/types/dto';

interface BestResultDTO {
    topResult : SearchResults
}

function BestResult({topResult}:BestResultDTO) {

    

    return (

        <div className='tw-bg-[#282828] tw-my-auto tw-cursor-pointer tw-justify-start tw-flex tw-flex-col tw-p-5 tw-rounded-lg'>
            <img style={{ width : 100 }} className='tw-cursor-pointer tw-rounded-md' src={topResult.album.cover_big} />
            <label className="tw-cursor-pointer tw-my-auto tw-mt-5 tw-text-2xl tw-font-bold">{topResult.title}</label>

            <div className='tw-mt-3 tw-flex tw-justify-between'>
                
                <div className='tw-flex tw-gap-3'>
                    <span className='tw-text-[9px] tw-bg-[#AAAAAA] tw-rounded-sm tw-mx-auto tw-my-auto tw-p-1 tw-justify-start tw-text-black'>{topResult.destination_path == '' ? "Not available" : "Available" }</span>
                    <label className='hover:tw-cursor-pointer hover:tw-underline tw-text-xs tw-my-auto tw-text-slate-200'>{topResult.artist.name}</label>
                    <Chip className='hover:tw-bg-[#2A2A2A] tw-my-auto tw-cursor-pointer' label="Song"  />
                </div>

                <button style={{ borderRadius : 25 , width : 50 , height : 50 }} className='tw-flex tw-justify-center tw-items-center tw-bg-[#1FDF64] tw-my-auto'>
                    <PlayCircleFilledIcon sx={{ color : "white" }} />
                </button>
            
            </div>

        </div>

    )
}

export default BestResult