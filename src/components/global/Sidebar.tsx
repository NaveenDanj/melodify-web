import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ClassIcon from '@mui/icons-material/Class';
import AddIcon from '@mui/icons-material/Add';

function Sidebar() {
    return (
        <div className="tw-flex tw-flex-col tw-w-[100%]">

            <div className="tw-flex tw-px-5 tw-flex-col tw-bg-[#121212] tw-w-[100%] tw-rounded-md tw-p-2">

                <div className='tw-flex tw-cursor-pointer'>
                    <HomeOutlinedIcon className='tw-my-auto' sx={{ fontSize: 30, color: '#626262' }} />
                    <label className='tw-cursor-pointer tw-my-auto tw-text-md tw-font-bold tw-ml-4 tw-text-gray-300'>Home</label>
                </div>

                <div className='tw-flex tw-mt-5 tw-cursor-pointer'>
                    <SearchOutlinedIcon className='tw-text-gray-400 tw-my-auto tw-cursor-pointer' sx={{ fontSize: 30, color: '#626262' }} />
                    <label className='tw-my-auto tw-cursor-pointer tw-text-md tw-font-bold tw-ml-4 tw-text-gray-300'>Search</label>
                </div>

            </div>

            <div className='tw-mt-3 tw-flex tw-px-5 tw-flex-col tw-bg-[#121212] tw-w-[100%] tw-rounded-md tw-p-2'>

                <div className='tw-flex tw-justify-between'>

                    <div className='tw-flex'>
                        <ClassIcon sx={{ fontSize: 30, color: '#626262' }} />
                        <label className='tw-my-auto tw-cursor-pointer tw-text-md tw-font-bold tw-ml-4 tw-text-gray-300'>Your Library</label>
                    </div>

                    <div className='tw-cursor-pointer tw-rounded-lg tw-p-1 hover:tw-bg-[#191919]'>
                        <AddIcon className='tw-relative tw-top-[-1px]' sx={{ fontSize: 20, color: '#626262' }} />
                    </div>

                </div>

                <div style={{ height: 'calc(100vh - 250px)' }} className='tw-flex'>
                    asd
                </div>

            </div>

        </div>
    )
}

export default Sidebar