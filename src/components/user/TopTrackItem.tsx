
function TopTrackItem() {
  return (
    <div className='tw-flex tw-w-full tw-justify-between tw-rounded tw-mt-1 tw-p-1 hover:tw-bg-[rgba(255,255,255,0.1)]'>   
        <div className='tw-flex tw-gap-4'>       

            <div className='tw-flex'>
                
                <div className='tw-flex '>
                    <label className='tw-my-auto tw-mr-3'>1</label>
                    <img className=' tw-shadow-lg' style={{ width : 38 , height : 40 }} src='https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc' />
                </div>
                
                <div className='tw-flex tw-gap-1 tw-flex-col tw-ml-3'>
                    <label className='tw-my-auto tw-text-sm tw-font-thin'>Vagos song</label>
                    <div className='tw-relative tw-top-[-7px]'>
                        <label className='tw-text-[8px] tw-bg-[#AAAAAA] tw-rounded-sm tw-mx-auto tw-justify-start tw-p-1 tw-text-slate-300'>E</label>
                    </div>
                </div>
            
            </div>

        </div>

        <label  className='tw-my-auto tw-font-semibold tw-text-xs tw-text-[#A7A7A7]'>Konvicted (Complete Edition)</label>

        <label  className='tw-my-auto tw-text-sm tw-text-[#A7A7A7]'>5:12</label>
        
        {/* <div className='tw-flex tw-justify-center tw-items-center tw-my-auto tw-p-1 tw-cursor-pointer tw-rounded-lg hover:tw-bg-[#292929]'>
            <MoreHorizIcon sx={{ fontSize: 20, color: '#EDEDED' }} />
        </div> */}


    </div>
  )
}

export default TopTrackItem