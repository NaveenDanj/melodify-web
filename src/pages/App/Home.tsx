import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HomeBanner from 'src/components/home/HomeBanner';


function Home() {
    return (
        <div className="tw-bg-gradient-to-b tw-from-[#212121] tw-to-[#121212] tw-w-full tw-rounded-md">
            
            <div className="tw-p-2 tw-w-full tw-flex tw-justify-between">
                
                <div style={{ background : 'rgba(0,0,0,0.4)' , borderRadius : 50 }} className='tw-p-2 tw-flex tw-items-center tw-justify-center tw-cursor-pointer'>
                    <ArrowBackIosIcon  sx={{ fontSize: 14, color: 'white' }} />
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

            <div className=''>
                <HomeBanner />
            </div>

        </div>
    )
}

export default Home