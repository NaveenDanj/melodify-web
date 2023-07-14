import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VerifiedIcon from '@mui/icons-material/Verified';
import PopularItem from 'src/components/artist/PopularItem';
import Discography from 'src/components/artist/Discography';


function ArtistProfile() {
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


        <div style={{ height : 'calc(100vh - 56px)' }} className=' tw-bg-[#212121]  tw-overflow-y-auto '>

            <div className='tw-w-full tw-h-[400px] tw-bg-gradient-to-b tw-from-[#C9052B] tw-to-[#212121]'>
                
                <div className='tw-flex tw-p-5'>
                    <img className=' tw-shadow-lg' style={{ width : 200 , height : 200 , borderRadius : 100 }} src='https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc' />

                    <div className='tw-w-[100%] tw-h-[100px] tw-flex tw-flex-col tw-ml-5 tw-my-auto'>
                        <div className='tw-flex '>
                            <VerifiedIcon sx={{ color : '#3D91F4' }} />
                            <h1 className="tw-ml-2 tw-my-auto hover:tw-cursor-pointer tw-text-sm tw-font-semibold">Verified Artist</h1>
                        </div>

                        <label className='tw-font-bold tw-text-5xl tw-mt-2'>2Pac</label>
                        <label className='tw-font-bold tw-text-sm tw-mt-10 tw-justify-end'>23,916,116 monthly listeners</label>
                    </div>
                
                </div> 

            </div>


            <div className="tw-relative tw-p-5 tw-top-[-160px]" >
                
                <div className='tw-flex tw-gap-10'>

                    <button style={{ borderRadius : 25 , width : 50 , height : 50 }} className='tw-flex tw-justify-center tw-items-center tw-bg-[#1FDF64] tw-my-auto'>
                        <PlayCircleFilledIcon sx={{ color : "black" }} />
                    </button>

                    <div style={{ border : '1px solid rgba(255,255,255,0.8)' }} className='tw-my-auto tw-py-1 tw-px-4 tw-rounded-md tw-bg-transparent '>
                        <label className='tw-font-bold tw-text-sm'>Following</label>
                    </div>
                    
                    <MoreHorizIcon sx={{ fontSize : 35 }} className='tw-cursor-pointer tw-my-auto' />

                </div>

                <div className='tw-w-full tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-mt-10 tw-gap-3 '>

                    <div className='tw-flex-1 '>
                        <label className="tw-ml-2 tw-my-auto hover:tw-cursor-pointer tw-text-2xl tw-font-bold">Popular</label>
                        <PopularItem />
                        <PopularItem />
                        <PopularItem />
                        <PopularItem />
                        <PopularItem />

                        <PopularItem />
                        <PopularItem />
                        <PopularItem />
                        <PopularItem />
                        <PopularItem />

                    </div>

                    <div className='tw-flex-[0.7] tw-flex tw-flex-col tw-pl-5'>
                        <label className="hover:tw-cursor-pointer tw-text-2xl tw-font-bold">Liked Songs</label>
                        <div className='tw-flex tw-mt-5 '>
                            <img  className='tw-my-auto tw-shadow-lg' style={{ width : 70 , height : 70 , borderRadius : 35 }} src='https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc' />
                            <div className='tw-ml-3 tw-my-auto tw-flex tw-flex-col tw-gap-2'>
                                <label className="tw-my-auto hover:tw-cursor-pointer tw-text-sm tw-font-bold hover:tw-underline">You've liked 42 songs</label>
                                <label className="tw-my-auto hover:tw-cursor-pointer tw-text-xs">By 2Pac</label>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='tw-mt-10'>
                    <div className='tw-flex tw-justify-between'>
                        <label className="tw-ml-2 tw-my-auto hover:tw-cursor-pointer tw-text-2xl tw-font-bold hover:tw-underline">Discography</label>
                        <label className="tw-my-auto tw-cursor-pointer tw-text-slate-200 hover:tw-underline tw-text-sm tw-font-bold">Show all</label>
                    </div>
                    <Discography />
                </div>


                <div className='tw-mt-10'>
                    <div className='tw-flex tw-justify-between'>
                        <label className="tw-ml-2 tw-my-auto hover:tw-cursor-pointer tw-text-2xl tw-font-bold hover:tw-underline">Featuring Backstreet Boys</label>
                        <label className="tw-my-auto tw-cursor-pointer tw-text-slate-200 hover:tw-underline tw-text-sm tw-font-bold">Show all</label>
                    </div>
                    <Discography />
                </div>

                <div className='tw-mt-10'>
                    <label className="tw-ml-2 tw-my-auto hover:tw-cursor-pointer tw-text-2xl tw-font-bold hover:tw-underline">About</label>
                    
                    <div className='tw-mt-5 tw-p-3 tw-bg-[#383838] tw-rounded-md'>
            
                        <div className='tw-flex '>
                            <VerifiedIcon sx={{ color : '#3D91F4' }} />
                            <h1 className="tw-ml-2 tw-my-auto hover:tw-cursor-pointer tw-text-sm tw-font-bold ">Verified Artist</h1>
                        </div>

                        <div className='tw-mt-3 tw-gap-2 tw-flex tw-flex-col'>
                            <img className='tw-w-[70px]' style={{ borderRadius : 35 }} src='https://e-cdns-images.dzcdn.net/images/artist/15858967d06752583403274a0ceb0f8a/250x250-000000-80-0-0.jpg' />
                        </div>

                        <div className='tw-mt-3'>
                            <label className='tw-text-sm tw-font-semibold'>31,515,103 monthly listeners</label>
                            <p className='tw-text-xs tw-mt-2 tw-font-medium '>Curtis James Jackson III (born July 6, 1975), known professionally as 50 Cent, is an American rapper, actor, television producer, and businessman...</p>
                        </div>
                    
                    </div>


                </div>

            </div>

        </div>

    </div>
  )
}

export default ArtistProfile