import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Error() {
  return (
    <div className="tw-h-full  tw-overflow-hidden tw-bg-gradient-to-b tw-from-[#212121] tw-to-[#121212] tw-w-full tw-rounded-md">
            
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

        <div className='tw-flex tw-justify-center tw-w-full tw-h-full'>

            <div className='tw-flex tw-flex-col tw-mt-20 tw-gap-3 tw-max-w-[400px]'>
                <label className='tw-text-4xl tw-font-bold'>Error</label>
                <label className='tw-text-xs'>We apologize for the inconvenience, Please try again later or contact our support team if the problem persists.</label>
            </div>

        </div>

    </div>
  )
}

export default Error