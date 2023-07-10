import PushPinIcon from '@mui/icons-material/PushPin';


function PlaylistCard() {
  return (
    <div className="tw-flex tw-cursor-pointer tw-w-full hover:tw-bg-[#1A1A1A] tw-py-2 tw-rounded-md">
        <div className="tw-ml-2 tw-flex  tw-cursor-pointer">
            <img style={{ width : 45 }} className="tw-rounded-md  tw-cursor-pointer" src="https://i.scdn.co/image/ab67616d00004851a0e7694a73abed7372474d69" />
        
            <div className="tw-flex tw-flex-col tw-my-auto tw-ml-3">
                <label className='tw-cursor-pointer'>Eminem</label>
                <div className=' tw-cursor-pointer'>
                    <PushPinIcon  sx={{ fontSize: 14, color: '#1ED760' }} />
                    <label className="tw-ml-2  tw-cursor-pointer tw-text-xs tw-text-slate-400">Playlist NaveenDan</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaylistCard