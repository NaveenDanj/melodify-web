
function AddItem() {
  return (
    <div className='tw-flex tw-w-full tw-justify-between tw-rounded tw-p-2 hover:tw-bg-[rgba(255,255,255,0.1)]'>
                        
        <div className='tw-flex tw-gap-4'>            
            <div className='tw-flex'>
                <img className=' tw-shadow-lg' style={{ width : 35 }} src='https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc' />
                <div className='tw-flex tw-gap-1 tw-flex-col tw-ml-3'>
                    <label className='tw-my-auto tw-text-sm tw-font-bold'>Vagos song</label>
                    <label className='tw-text-xs tw-text-slate-300'>Paff</label>
                </div>
            </div>

        </div>

        <label style={{ textAlign : 'right' }} className='tw-my-auto tw-text-sm tw-text-slate-300'>Np Songs</label>
        <button style={{ border : '1px solid rgba(255,255,255,0.2)' }} className="tw-px-3 tw-py-1 tw-rounded-2xl tw-bg-[rgba(0,0,0,0)]">
            <label className="tw-text-xs tw-font-bold">Add</label>
        </button>
    </div>
  )
}

export default AddItem