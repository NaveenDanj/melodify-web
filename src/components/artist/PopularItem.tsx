

interface PopularItemDTO {
    photoURL: string;
    title: string;
    artist: string;
    availability: boolean;
    index : number;
}


function PopularItem({ index , photoURL , title , artist , availability } : PopularItemDTO) {
  return (
    <div className='tw-flex tw-w-full tw-justify-between tw-rounded tw-mt-1 tw-p-1 hover:tw-bg-[rgba(255,255,255,0.1)]'>   
        
        <div className='tw-flex tw-gap-4'>            
            
            <div className='tw-flex'>
                
                <div className='tw-flex '>
                    <label className='tw-my-auto tw-mr-3'>{index+1}</label>
                    <img className=' tw-shadow-lg' style={{ width : 38 , height : 40 }} src={photoURL} />
                </div>

                <div className='tw-flex tw-gap-1 tw-flex-col tw-ml-3'>
                    
                    <label className='tw-my-auto tw-text-sm tw-font-thin'>{title}</label>
                    
                    <div className='tw-relative tw-top-[-7px]'>
                        <label className='tw-text-xs tw-my-auto'><span className='tw-mr-1 tw-text-[9px] tw-bg-[#AAAAAA] tw-rounded-sm tw-mx-auto tw-justify-start tw-p-1 tw-text-black'>{availability == true ? 'Available' : 'Not available'}</span> {artist} </label>
                    </div>

                </div>

            </div>

        </div>

        <label style={{ textAlign : 'right' }} className='tw-my-auto tw-text-sm tw-text-slate-300'>5:12</label>
        
    </div>
  )
}

export default PopularItem