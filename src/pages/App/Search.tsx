import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import SearchItem from 'src/components/search/SearchItem';
import './search.css'

function Search() {
  return (
    <div className="tw-overflow-y-auto tw-h-full tw-bg-gradient-to-b tw-p-2 tw-from-[#212121] tw-to-[#121212] tw-w-full tw-rounded-md">
        
        <div className="tw-p-2 tw-w-full tw-flex tw-justify-between">
            
            <div className='tw-flex tw-gap-2'>

                <div style={{ background : 'rgba(0,0,0,0.4)' , borderRadius : 50 }} className='tw-p-2 tw-my-auto tw-flex tw-items-center tw-justify-center tw-cursor-pointer'>
                    <ArrowBackIosIcon  sx={{ fontSize: 14, color: 'white' }} />
                </div>

                <div style={{ background : 'rgba(0,0,0,0.4)' , borderRadius : 50 }} className='tw-p-2 tw-my-auto tw-flex tw-items-center tw-justify-center tw-cursor-pointer'>
                    <ArrowForwardIosIcon  sx={{ fontSize: 14, color: 'white' }} />
                </div>

            </div>
            
            <div className='tw-ml-4 tw-flex tw-flex-grow'>
                <div style={{ borderRadius : 30 }} className='tw-p-3 tw-gap-2 tw-bg-[#3B3B3B] tw-flex tw-min-w-[100%] lg:tw-min-w-[350px] tw-my-auto'>
                    <SearchIcon />
                    <input style={{ borderColor : 'None' }} className='tw-w-full' placeholder='What do you want to listen to?' type='text' />
                </div>
            </div>


            <div className='tw-hidden lg:tw-flex tw-gap-2 tw-my-auto'>
                <div style={{ background : 'rgba(0,0,0,0.4)' , borderRadius : 50 }} className='tw-p-2 tw-flex tw-items-center tw-justify-center tw-cursor-pointer'>
                    <PeopleOutlineIcon  sx={{ fontSize: 14, color: 'white' }} />
                </div>

                <div style={{ background : 'rgba(0,0,0,0.4)' , borderRadius : 50 }} className='tw-p-2 tw-flex tw-items-center tw-justify-center tw-cursor-pointer'>
                    <PermIdentityIcon  sx={{ fontSize: 14, color: 'white' }} />
                </div>
            </div>

        
        </div>
        
        <div className="tw-px-2 tw-h-full tw-py-2 tw-mt-10">
        
            <div className="tw-px-2 tw-flex tw-justify-between">
                <label className="tw-my-auto tw-text-2xl tw-font-bold">Browse all</label>
                <label className="tw-my-auto tw-cursor-pointer tw-text-slate-200 hover:tw-underline tw-text-sm tw-font-bold">Show all</label>
            </div>

            <div className="tw-gap-5 tw-mt-5 tw-grid tw-grid-container tw-grid-cols-[repeat(auto-fill,minmax(180px,1fr))] tw-w-full">
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
            </div>

        
        </div>

    </div>
  )
}

export default Search