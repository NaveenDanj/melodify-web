
function QueueItem() {
  return (
    <div className='tw-flex tw-w-full tw-justify-between tw-rounded tw-p-2 hover:tw-bg-[rgba(255,255,255,0.1)]'>   
        <div className='tw-flex tw-gap-4'>            
            <div className='tw-flex'>
                <img className=' tw-shadow-lg' style={{ width : 35 }} src='https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc' />
                <div className='tw-flex tw-gap-1 tw-flex-col tw-ml-3'>
                    <label className='tw-my-auto tw-text-sm tw-font-bold'>Vagos song</label>
                    <label className='tw-text-xs tw-text-slate-300'>Iraj , Infas , Devashri</label>
                </div>
            </div>

        </div>
    </div>
  )
}

export default QueueItem