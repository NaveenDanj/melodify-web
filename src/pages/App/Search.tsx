import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import SearchItem from 'src/components/search/SearchItem';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import './search.css'
import { Chip } from '@mui/material';
import PopularItem from 'src/components/artist/PopularItem';
import PlaylistService from 'src/services/PlaylistService';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { SearchResults } from 'src/types/dto';
import ComponentLoading from 'src/components/global/ComponentLoading';

function Search() {

    const [searchString , setSearchString] = useState('');
    const [searchResults , setSearchResults] = useState<SearchResults[]>([]);
    const [loading , setLoading] = useState(false);
    const [topResult , setTopResult] = useState<SearchResults | null>(null);

    // const dispatch = useDispatch()

    const handleSearch = async (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value)
        setTopResult(null)
        setLoading(true)

        if(searchString == ''){
            setSearchResults([])
            setLoading(false)
            return
        }
        
        const res = await PlaylistService.mainSearch(searchString);

        if(res == null){
            setSearchResults([])
        }else{
            const seachRes:SearchResults[] = res
            
            if(seachRes.length >= 2){
                setTopResult(seachRes[0]);
                setSearchResults(seachRes.slice(1 , 5));
                setLoading(false)
                return
            }

        }
        setLoading(false)
    }
    
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
                        <input onChange={(e) => handleSearch(e)} style={{ borderColor : 'None' }} className='tw-w-full' placeholder='What do you want to listen to?' type='text' />
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

                {topResult && (
                    <div className="tw-px-2 tw-flex tw-justify-between">
                        <label className="tw-my-auto tw-text-2xl tw-font-bold">Top result</label>
                    </div>
                ) }

                {loading && <ComponentLoading /> }

                <div className="tw-gap-5 tw-p-3 tw-mt-1 tw-grid tw-grid-container tw-grid-cols-[repeat(auto-fill,minmax(400px,1fr))] tw-w-full">

                    {topResult && (

                        <div className='tw-bg-[#282828] tw-my-auto tw-cursor-pointer tw-justify-start tw-flex tw-flex-col tw-p-5 tw-rounded-lg'>
                            <img style={{ width : 100 }} className='tw-cursor-pointer tw-rounded-md' src={topResult.album.cover_big} />
                            <label className="tw-cursor-pointer tw-my-auto tw-mt-5 tw-text-2xl tw-font-bold">{topResult.title}</label>

                            <div className='tw-mt-3 tw-flex tw-justify-between'>
                                
                                <div className='tw-flex tw-gap-3'>
                                    <span className='tw-mr-1 tw-text-[9px] tw-bg-[#AAAAAA] tw-rounded-sm tw-mx-auto tw-my-auto tw-justify-start tw-p-1 tw-text-black'>{topResult.destination_path == '' ? "Not available" : "Available" }</span>
                                    <label className='hover:tw-cursor-pointer hover:tw-underline tw-text-xs tw-my-auto tw-text-slate-200'>{topResult.artist.name}</label>
                                    <Chip className='hover:tw-bg-[#2A2A2A] tw-my-auto tw-cursor-pointer' label="Song"  />
                                </div>

                                <button style={{ borderRadius : 25 , width : 50 , height : 50 }} className='tw-flex tw-justify-center tw-items-center tw-bg-[#1FDF64] tw-my-auto'>
                                    <PlayCircleFilledIcon sx={{ color : "white" }} />
                                </button>
                            
                            </div>

                        </div>
                    
                    )}
                    
                    {searchResults.length > 0 && (
                        <div className='tw-flex-1 '>
                            <label className="tw-ml-2 tw-my-auto hover:tw-cursor-pointer tw-text-2xl tw-font-bold">Songs</label>

                            {searchResults.map( (item , index) => (
                                <PopularItem index={index} key={index} photoURL={item.album.cover_medium} title={item.title} artist={item.artist.name} availability={item.destination_path == '' ? false : true } />
                            ))}

                        </div>
                    )}

                </div>

            
                <div className="tw-px-2 tw-mt-5 tw-flex tw-justify-between">
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