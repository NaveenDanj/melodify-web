import PushPinIcon from '@mui/icons-material/PushPin';
import { useNavigate } from 'react-router-dom';
import { PlaylistDTO } from 'src/types/dto';

interface PlaylistCardDTO {
  item: PlaylistDTO
}

function PlaylistCard({ item }: PlaylistCardDTO) {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/playlist?id=' + item.playlistData.id)
  }

  return (
    <div onClick={handleNavigate} className="tw-flex tw-cursor-pointer tw-w-full hover:tw-bg-[#1A1A1A] tw-py-2 tw-rounded-md">
      <div className="tw-ml-2 tw-flex  tw-cursor-pointer">
        <img style={{ width: 45 }} className="tw-rounded-md  tw-cursor-pointer" src={item.playlistCover} />

        <div className="tw-flex tw-flex-col tw-my-auto tw-ml-3">
          <label className='tw-cursor-pointer'>{item.playlistData?.name}</label>
          <div className=' tw-cursor-pointer'>
            <PushPinIcon sx={{ fontSize: 14, color: '#1ED760' }} />
            <label className="tw-ml-2  tw-cursor-pointer tw-text-xs tw-text-slate-400">Playlist NaveenDan</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistCard