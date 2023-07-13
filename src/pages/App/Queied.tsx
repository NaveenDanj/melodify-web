import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import QueueItem from 'src/components/queue/QueueItem';


function Queied() {
  return (
    <div className="tw-h-full   tw-overflow-hidden tw-bg-gradient-to-b tw-from-[#212121] tw-to-[#121212] tw-w-full tw-rounded-md">

        <div className="tw-p-2 tw-w-full tw-flex tw-justify-between">
            
            <div className='tw-flex tw-gap-2'>

                <div style={{ background : 'rgba(0,0,0,0.4)' , borderRadius : 50 }} className='tw-p-2 tw-my-auto tw-flex tw-items-center tw-justify-center tw-cursor-pointer'>
                    <ArrowBackIosIcon  sx={{ fontSize: 14, color: 'white' }} />
                </div>

                <div style={{ background : 'rgba(0,0,0,0.4)' , borderRadius : 50 }} className='tw-p-2 tw-my-auto tw-flex tw-items-center tw-justify-center tw-cursor-pointer'>
                    <ArrowForwardIosIcon  sx={{ fontSize: 14, color: 'white' }} />
                </div>

            </div>

            <div className='tw-flex tw-gap-2'>
                <div style={{ background : 'rgba(0,0,0,0.4)' , borderRadius : 50 }} className='tw-p-2 tw-flex tw-items-center tw-justify-center tw-cursor-pointer'>
                    <PeopleOutlineIcon  sx={{ fontSize: 14, color: 'white' }} />
                </div>

                <div style={{ background : 'rgba(0,0,0,0.4)' , borderRadius : 50 }} className='tw-p-2 tw-flex tw-items-center tw-justify-center tw-cursor-pointer'>
                    <PermIdentityIcon  sx={{ fontSize: 14, color: 'white' }} />
                </div>
            </div>

        </div>

        <div style={{ height : 'calc(100vh - 56px)' }} className=' tw-p-2 tw-overflow-y-auto tw-pb-20'>

            <div className='tw-mt-5'>
                <label className='tw-text-2xl tw-font-bold'>Queue</label>
            </div>

            <div className='tw-mt-3'>
                <label className='tw-text-sm tw-font-bold tw-text-slate-200'>Now playing</label>
            </div>

            <div className='tw-mt-1 tw-flex tw-flex-col tw-gap-2 tw-pb-10'>
                <QueueItem />
                <QueueItem />
                <QueueItem />
                <QueueItem />

            </div>


            <div className='tw-mt-0'>
                <label className='tw-text-sm tw-font-bold tw-text-slate-200'>Next from: 2Pac</label>
            </div>

            <div className='tw-mt-1 tw-flex tw-flex-col tw-gap-2 tw-pb-10'>
                <QueueItem />
                <QueueItem />
                <QueueItem />
                <QueueItem />
                <QueueItem />
                <QueueItem />
                <QueueItem />
                <QueueItem />
                <QueueItem />
                <QueueItem />
                <QueueItem />
                <QueueItem />

            </div>

        </div>

    </div>
  )
}

export default Queied