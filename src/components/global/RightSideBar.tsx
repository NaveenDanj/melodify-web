import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import QueueItem from './QueueItem';

function RightSideBar() {
  return (
    <div className="tw-w-[calc(100vh - 96px)] tw-overflow-y-auto tw-px-4 tw-py-5  tw-w-full tw-bg-[#121212] tw-rounded-md">
        
        <div className="tw-flex tw-justify-between">
            <h1 className="tw-text-lg tw-font-bold tw-my-auto">Ranidu</h1>
            <div className='tw-flex tw-justify-center tw-items-center tw-my-auto tw-p-1 tw-cursor-pointer tw-rounded-lg hover:tw-bg-[#292929]'>
                <CloseIcon sx={{ fontSize: 20, color: '#EDEDED' }} />
            </div>
        </div>

        <div className='tw-mt-5'>
            <img className='tw-rounded-xl tw-w-[100%] tw-shadow-md' src='https://e-cdns-images.dzcdn.net/images/cover/88dfe86a64c1f108080069e8dee91b38/1000x1000-000000-80-0-0.jpg' />
        </div>

        <div className='tw-mt-5 tw-flex tw-justify-between'>

            <div className='tw-my-auto'>
                <h1 className="hover:tw-underline hover:tw-cursor-pointer tw-text-lg tw-font-bold tw-my-auto">Amme mathakai nam</h1>
                <h1 className="tw-mt-2 tw-text-sm tw-text-slate-300 tw-font-bold tw-my-auto">Ranidu</h1>
            </div>

            <div className='tw-flex tw-gap-2 tw-my-auto'>
                
                <div className='tw-flex tw-justify-center tw-items-center tw-my-auto tw-p-1 tw-cursor-pointer tw-rounded-lg hover:tw-bg-[#292929]'>
                    <FavoriteBorderIcon sx={{ fontSize: 20, color: '#EDEDED' }} />
                </div>

                <div className='tw-flex tw-justify-center tw-items-center tw-my-auto tw-p-1 tw-cursor-pointer tw-rounded-lg hover:tw-bg-[#292929]'>
                    <MoreHorizIcon sx={{ fontSize: 20, color: '#EDEDED' }} />
                </div>

            </div>

        </div>

        <div className='tw-mt-5 tw-p-3 tw-bg-[#232323] tw-rounded-md'>
            
            <div className='tw-flex tw-justify-between'>
                <h1 className="tw-my-auto hover:tw-cursor-pointer tw-text-sm tw-font-bold ">Next in queue</h1>
                <h1 className="tw-text-xs tw-text-slate-300 tw-font-bold hover:tw-cursor-pointer hover:tw-underline tw-my-auto">Open queue</h1>
            </div>

            <div className='tw-mt-3 tw-gap-2 tw-flex tw-flex-col'>
                <QueueItem />
                <QueueItem />
                <QueueItem />
                <QueueItem />
            </div>
        
        </div>

    </div>
  )
}

export default RightSideBar