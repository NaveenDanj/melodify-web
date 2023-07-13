import VerifiedIcon from '@mui/icons-material/Verified';
function ArtistCard() {
  return (
    <div className='tw-mt-5 tw-p-3 tw-bg-[#232323] tw-rounded-md'>
            
        <div className='tw-flex '>
            <VerifiedIcon sx={{ color : '#3D91F4' }} />
            <h1 className="tw-ml-2 tw-my-auto hover:tw-cursor-pointer tw-text-sm tw-font-bold ">Verified Artist</h1>
        </div>

        <div className='tw-mt-3 tw-gap-2 tw-flex tw-flex-col'>
            <img className='tw-w-[70px]' style={{ borderRadius : 35 }} src='https://e-cdns-images.dzcdn.net/images/artist/15858967d06752583403274a0ceb0f8a/250x250-000000-80-0-0.jpg' />
        </div>

        <div className='tw-mt-3'>
            <label className='tw-text-sm tw-font-semibold'>31,515,103 monthly listeners</label>
            <p className='tw-text-xs tw-mt-2 tw-font-medium '>Curtis James Jackson III (born July 6, 1975), known professionally as 50 Cent, is an American rapper, actor, television producer, and businessman...</p>
        </div>
    
    </div>
  )
}

export default ArtistCard