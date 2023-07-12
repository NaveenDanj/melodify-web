import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import DownloadingIcon from '@mui/icons-material/Downloading';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaylistItem from 'src/components/playlist/PlaylistItem';
import AddItem from 'src/components/playlist/AddItem';




function Playlist() {
  return (
    <div className="tw-h-full tw-overflow-hidden tw-bg-gradient-to-b tw-from-[#212121] tw-to-[#121212] tw-w-full tw-rounded-md">
        
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

        <div style={{ height : 'calc(100vh - 56px)' }} className='tw-bg-gradient-to-b tw-from-[#212121] tw-to-[#121212] tw-overflow-y-auto '>

            <div className='tw-w-full tw-h-[400px] tw-bg-gradient-to-b tw-from-[#C9052B] tw-to-[#181818]'>
                
                <div className='tw-flex tw-p-5'>
                    <img className=' tw-shadow-lg' style={{ width : 200 }} src='https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc' />

                    <div className='tw-w-[100%] tw-h-[100%] tw-flex tw-flex-col tw-ml-5 tw-my-auto'>
                        <label className='tw-font-bold tw-text-sm'>Public Playlist</label>
                        <label className='tw-font-bold tw-text-5xl tw-mt-5'>Vibe</label>
                        <label className='tw-font-bold tw-text-sm tw-mt-10 tw-justify-end'>NaveenDan <span className='tw-font-normal '>23 songs, </span> <span className='tw-font-normal tw-text-slate-300'>1 hr 38 min</span></label>
                    </div>
                
                </div> 

            </div>


            <div className="tw-relative tw-p-5 tw-top-[-160px]" >
                
                <div className='tw-flex tw-gap-10'>

                    <button style={{ borderRadius : 25 , width : 50 , height : 50 }} className='tw-flex tw-justify-center tw-items-center tw-bg-[#1FDF64] tw-my-auto'>
                        <PlayCircleFilledIcon sx={{ color : "black" }} />
                    </button>

                    <DownloadingIcon sx={{ fontSize : 35 }} className='tw-cursor-pointer tw-my-auto' />
                    <PersonAddIcon sx={{ fontSize : 35 }} className='tw-cursor-pointer tw-my-auto' />
                    <MoreHorizIcon sx={{ fontSize : 35 }} className='tw-cursor-pointer tw-my-auto' />

                </div>

                <div className='tw-w-full tw-flex tw-flex-col tw-mt-10'>

                    <div style={{ borderBottom : "1px solid rgba(255,255,255,0.2)" }} className='tw-p-2 tw-pb-1 tw-flex tw-w-full tw-justify-between'>
                        
                        <div className='tw-flex tw-gap-3'>
                            <label className='tw-text-sm tw-text-slate-300'>#</label>
                            <label className='tw-text-sm tw-text-slate-300'>Title</label>
                        </div>

                        <label className='tw-relative tw-left-[80px] tw-text-sm tw-text-slate-300'>Album</label>
                        <label className='tw-relative tw-left-[40px] tw-text-sm tw-text-slate-300'>Date added</label>
                        <AccessTimeIcon className='tw-text-sm tw-text-slate-300' />

                    </div>

                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />
                   <PlaylistItem />

                </div>


            </div>

            <div className="tw-relative tw-p-5 tw-top-[-160px]" >
                
                <div>
                    <h2 className='tw-text-2xl tw-font-bold'>Recommended</h2>
                    <label className='tw-text-xs tw-text-slate-200'>Based on what's in this playlist</label>
                </div>

                <div className='tw-flex tw-flex-col tw-mt-5'>
                   <AddItem />
                   <AddItem />
                   <AddItem />
                   <AddItem />
                   <AddItem />
                </div>


            </div>

        
        </div>


    </div>
  )
}

export default Playlist