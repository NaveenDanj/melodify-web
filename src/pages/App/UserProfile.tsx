import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Discography from 'src/components/artist/Discography';
import ArtistCard from 'src/components/user/ArtistCard';
import TopTracks from 'src/components/user/TopTracks';
import PublicPlaylists from 'src/components/user/PublicPlaylists';



function UserProfile() {
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
                        <div className='tw-flex'>
                            <h1 className="tw-my-auto hover:tw-cursor-pointer tw-text-sm tw-font-semibold">Profile</h1>
                        </div>

                        <label className='tw-font-bold tw-text-5xl tw-mt-2'>NaveenDan</label>
                        <label className='tw-font-bold tw-text-sm tw-mt-10 tw-justify-end'>6 public playlists <span className='tw-ml-2 hover:tw-underline tw-cursor-pointer'>1 Follower</span> <span className='tw-ml-2 tw-cursor-pointer hover:tw-underline'>14 Following</span></label>
                    </div>
                
                </div> 

            </div>


            <div className="tw-relative tw-p-5 tw-top-[-160px]" >
                
                <div className='tw-flex tw-gap-10'>

                    <div style={{ border : '1px solid rgba(255,255,255,0.8)' }} className='tw-my-auto tw-py-1 tw-px-4 tw-rounded-md tw-bg-transparent '>
                        <label className='tw-font-bold tw-text-sm'>Following</label>
                    </div>
                    
                    <MoreHorizIcon sx={{ fontSize : 35 }} className='tw-cursor-pointer tw-my-auto' />

                </div>

                <div className='tw-mt-20'>
                    <div className='tw-flex tw-justify-between'>
                        <div className='tw-my-auto tw-flex tw-gap-2 tw-flex-col'>
                            <label className="hover:tw-cursor-pointer tw-text-2xl tw-font-bold hover:tw-underline">Top artist this month</label>
                            <label className='tw-text-xs tw-font-thin tw-text-slate-200'>Only visible to you</label>
                        </div>
                        <label className="tw-my-auto tw-cursor-pointer tw-text-slate-200 hover:tw-underline tw-text-sm tw-font-bold">Show all</label>
                    </div>
                    
                    <div className='tw-mt-5 tw-gap-3 tw-grid tw-grid-container tw-grid-cols-[repeat(auto-fill,minmax(180px,1fr))]'>
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                    </div>
                    
                </div>

                <TopTracks />

                <div className='tw-mt-10'>
                    <div className='tw-flex tw-justify-between'>
                        <label className="tw-ml-2 tw-my-auto hover:tw-cursor-pointer tw-text-2xl tw-font-bold hover:tw-underline">Public playlists</label>
                        <label className="tw-my-auto tw-cursor-pointer tw-text-slate-200 hover:tw-underline tw-text-sm tw-font-bold">Show all</label>
                    </div>
                    
                    <PublicPlaylists />

                </div>


                <div className='tw-mt-10'>
                    <div className='tw-flex tw-justify-between'>
                        <label className="tw-ml-2 tw-my-auto hover:tw-cursor-pointer tw-text-2xl tw-font-bold hover:tw-underline">Followers</label>
                        <label className="tw-my-auto tw-cursor-pointer tw-text-slate-200 hover:tw-underline tw-text-sm tw-font-bold">Show all</label>
                    </div>

                    <div className='tw-mt-5 tw-gap-3 tw-grid tw-grid-container tw-grid-cols-[repeat(auto-fill,minmax(180px,1fr))]'>
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                    </div>
                    
                </div>


                <div className='tw-mt-10'>
                    <div className='tw-flex tw-justify-between'>
                        <label className="tw-ml-2 tw-my-auto hover:tw-cursor-pointer tw-text-2xl tw-font-bold hover:tw-underline">Following</label>
                        <label className="tw-my-auto tw-cursor-pointer tw-text-slate-200 hover:tw-underline tw-text-sm tw-font-bold">Show all</label>
                    </div>

                    <div className='tw-mt-5 tw-gap-3 tw-grid tw-grid-container tw-grid-cols-[repeat(auto-fill,minmax(180px,1fr))]'>
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                        <ArtistCard />
                    </div>
                    
                </div>

            </div>

        </div>

    </div>
  )
}

export default UserProfile