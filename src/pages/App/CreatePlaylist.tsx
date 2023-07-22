import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PlaylistItem from 'src/components/playlist/PlaylistItem';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CreatePlaylistDialog from 'src/components/dialogs/CreatePlaylistDialog';
import {useState} from 'react'
import PlaylistService from 'src/services/PlaylistService';
import { SearchResults } from 'src/types/dto';
import ComponentLoading from 'src/components/global/ComponentLoading';



function CreatePlaylist() {

    const [searchString , setSearchString] = useState('');
    const [searchResults , setSearchResults] = useState<SearchResults[]>([]);
    const [selectedTracks , setSelectedTracks] = useState<SearchResults[]>([]);
    const [loading , setLoading] = useState(false);


    const handleSearch = async (e:React.ChangeEvent<HTMLInputElement>) => {

        setSearchString(e.target.value)
        
        if(searchString == ''){
            setSearchResults([])
            return
        }
        
        setLoading(true)
        
        const res = await PlaylistService.searchSong(searchString);

        if(res == null){
            setSearchResults([])
            
        }else{
            const seachRes:SearchResults[] = res

            for(let i = 0; i < seachRes.length; i++){
                
                let found = false;

                for(let j = 0; j < selectedTracks.length; j++){
                    
                    if(seachRes[i].id == selectedTracks[j].id){
                        found = true
                        break;
                    }
        
                }
                
                if(found){
                    seachRes[i].visible = false
                }else{
                    seachRes[i].visible = true
                }

            }

            setSearchResults(seachRes);
        }

        setLoading(false)

    }

    const handleAdd = async (item:SearchResults) =>{
        console.log("item is -> " , item)
        setSelectedTracks(oldArray => [...oldArray, item]);
        setSearchResults(searchResults.filter(_item => _item.id !== item.id));
    }

    const handleRemove = async (item:SearchResults) => {
        setSelectedTracks(selectedTracks.filter(_item => _item.id !== item.id));
    }

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
                    <CreatePlaylistDialog songs={selectedTracks} />
                </div>

                <div className="tw-relative tw-p-5 tw-top-[-160px]" >
                    
                    <div className='tw-flex tw-gap-10'>
                        <GroupAddIcon sx={{ fontSize : 35 }} className='tw-cursor-pointer tw-my-auto' />
                        <MoreHorizIcon sx={{ fontSize : 35 }} className='tw-cursor-pointer tw-my-auto' />
                    </div>

                    <div className='tw-w-full tw-flex tw-flex-col tw-mt-10'>

                        <div style={{ borderBottom : "1px solid rgba(255,255,255,0.2)" }} className='tw-p-2 tw-pb-1 tw-mb-3 tw-flex tw-w-full tw-justify-between'>
                            
                            <div className='tw-flex tw-gap-3'>
                                <label className='tw-text-sm tw-text-slate-300'>#</label>
                                <label className='tw-text-sm tw-text-slate-300'>Title</label>
                            </div>

                            <label className='tw-relative tw-left-[80px] tw-text-sm tw-text-slate-300'>Album</label>
                            <label className='tw-relative tw-left-[40px] tw-text-sm tw-text-slate-300'>Date added</label>
                            <AccessTimeIcon sx={{ fontSize : 18 }} className='tw-text-sm tw-text-slate-300' />

                        </div>

                        { selectedTracks.length == 0 && (
                            <div className='tw-w-full  tw-flex tw-justify-center tw-items-center tw-h-[100px]'>
                                <h3>No tracks selected yet.</h3>
                            </div>
                        )}

                        {selectedTracks.map( (item , index) => <PlaylistItem onFunctionTrigger={handleRemove} item={item} index={index} key={index} /> )}

                    </div>

                    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.3)' }} className="tw-mt-10 tw-w-full">
                    </div>


                    <div className='tw-mt-10 tw-flex tw-flex-col'>
                        <label className='tw-text-xl tw-font-bold'>Let's find something for your playlist</label>
                        <div className='tw-p-2 tw-rounded-md tw-w-[320px] tw-bg-[#2C2C2C] tw-my-5'>
                            <input onChange={(e) => handleSearch(e)} style={{ borderColor : 'None' }} className='tw-bg-[#2C2C2C] tw-w-[300px]' required placeholder='Search for songs or episodes' type='text' />
                        </div>
                    </div>

                    <div className='tw-mt-2 tw-flex tw-flex-col'>

                        {searchResults && searchResults.map((item , index ) =>  (
                            <div key={item.id} className='tw-flex tw-w-full tw-justify-between tw-rounded tw-mt-1 tw-p-1 hover:tw-bg-[rgba(255,255,255,0.1)] tw-my-auto'>
                            
                                <div className='tw-flex tw-gap-4'>       

                                    <div className='tw-flex'>
                                        
                                        <div className='tw-flex '>
                                            <label className='tw-my-auto tw-mr-3'>{index+1}</label>
                                            <a href={item.destination_path}><img className=' tw-shadow-lg' style={{ width : 38 , height : 40 }} src={item.album.cover_small} /></a>
                                        </div>
                                        
                                        <div className='tw-flex tw-gap-1 tw-flex-col tw-ml-3'>
                                            <label className='tw-my-auto tw-text-sm tw-font-thin'>{item.title_short}</label>
                                            <div className='tw-relative tw-top-[-7px]'>
                                                <label className='tw-text-xs tw-my-auto'><span className='tw-mr-1 tw-text-[8px] tw-bg-[#AAAAAA] tw-rounded-sm tw-mx-auto tw-justify-start tw-p-1 tw-text-slate-300'>E</span> {item.artist.name} </label>
                                            </div>
                                        </div>
                                    
                                    </div>

                                </div>

                                <label  className='tw-my-auto tw-font-semibold tw-text-xs tw-text-[#A7A7A7]'>{item.album.title}</label>


                                {item.visible == true && (
                                    <button onClick={() => handleAdd(item)} style={{ border : '1px solid rgba(255,255,255,0.2)' }} className="tw-px-3 tw-py-1 tw-my-auto tw-rounded-2xl tw-bg-[rgba(0,0,0,0)]">
                                        <label className="tw-text-xs tw-font-bold">Add</label>
                                    </button>
                                )}


                            </div>
                        ) )}

                        {loading && <ComponentLoading />}

                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default CreatePlaylist