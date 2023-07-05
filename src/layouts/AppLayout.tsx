import { Outlet } from 'react-router-dom'

function AppLayout() {
    return (
        <div className='tw-bg-[#000000] tw-h-[100vh] tw-w-[100vw] tw-flex tw-flex-col'>

            <div style={{ height: 'calc(100vh - 80px)' }} className=" tw-bg-[#000000] tw-h-[100vh] tw-w-[100vw] tw-flex ">

                <div className='tw-flex tw-flex-grow tw-max-w-[300px] tw-bg-red-500 tw-p-2'>
                    asd
                </div>

                <div className='tw-flex tw-flex-grow'>
                    <Outlet />
                </div>

                <div className='tw-flex tw-flex-grow tw-max-w-[280px] tw-bg-blue-500'>
                    asd
                </div>

            </div>

            <div className='tw-bg-blue-500 tw-h-[80px]'>
                asd
            </div>

        </div>
    )
}

export default AppLayout