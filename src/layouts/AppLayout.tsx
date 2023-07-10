import { Outlet } from 'react-router-dom'
import MusicPlayer from 'src/components/global/MusicPlayer'
import Sidebar from 'src/components/global/Sidebar'

function AppLayout() {
    return (
        <div className='tw-bg-[#000000] tw-h-[100vh] tw-w-[100vw] tw-flex tw-flex-col'>

            <div style={{ height: 'calc(100vh - 80px)' }} className=" tw-bg-[#000000] tw-h-[100vh] tw-w-[100vw] tw-flex ">

                <div className='tw-flex tw-flex-grow tw-max-w-[400px] tw-p-2'>
                    <Sidebar />
                </div>

                <div className='tw-flex tw-flex-grow tw-p-2'>
                    <Outlet />
                </div>

                <div className='tw-hidden xl:tw-flex lg:tw-flex-grow lg:tw-max-w-[280px] lg:tw-bg-blue-500'>
                    asd
                </div>
            </div>

            <div className='tw-bg-[#000000] tw-h-[80px]'>
                <MusicPlayer />
            </div>

        </div>
    )
}

export default AppLayout